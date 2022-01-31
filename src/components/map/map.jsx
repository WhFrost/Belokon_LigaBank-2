import React from 'react';
import PropTypes from 'prop-types';
import {useMediaQuery} from 'react-responsive';
import styles from './map.module.scss';
import globalStyles from '../app/app.module.scss';
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import mapPin from '../../assets/img/map-pin.svg';
import {
  DEFAULT_MAP_LAT,
  DEFAULT_MAP_LNG,
  DEFAULT_MAP_ZOOM,
  MIN_WIDTH_DESKTOP,
  MAX_WIDTH_TABLET,
  MIN_WIDTH_TABLET,
  MAX_WIDTH_PHONE,
  MAP_WIDTH_DESKTOP,
  MAP_HEIGHT_DESKTOP,
  MAP_WIDTH_TABLET,
  MAP_HEIGHT_TABLET,
  MAP_WIDTH_PHONE,
  MAP_HEIGHT_PHONE,
  API_KEY
} from '../../const';

function Map (props) {
  const {mapPins} = props;

  const isDesktopScreen = useMediaQuery({minWidth: `${MIN_WIDTH_DESKTOP}`});
  const isTabletScreen = useMediaQuery({minWidth: `${MIN_WIDTH_TABLET}`, maxWidth: `${MAX_WIDTH_TABLET}`});
  const isPhoneScreen = useMediaQuery({maxWidth:` ${MAX_WIDTH_PHONE}`});

  const mapContainerStyleForDesktop = {
    width: MAP_WIDTH_DESKTOP,
    height: MAP_HEIGHT_DESKTOP,
  };
  const mapContainerStyleForTablet = {
    width: MAP_WIDTH_TABLET,
    height: MAP_HEIGHT_TABLET,
  };
  const mapContainerStyleForPhone = {
    width: MAP_WIDTH_PHONE,
    height: MAP_HEIGHT_PHONE,
  };

  const defaultCenter = {
    lat: DEFAULT_MAP_LAT,
    lng: DEFAULT_MAP_LNG,
  };

  return (
    <section className={styles['map']} id='map'>
      <div className={`${globalStyles['container']} ${styles['map__wrapper']}`}>
        <h2 className={`${globalStyles['title']} ${styles['map__title']}`}>
          Отделения Лига Банка
        </h2>
        <LoadScript googleMapsApiKey={API_KEY}>
          {
            isDesktopScreen &&
              <GoogleMap
                mapContainerStyle={mapContainerStyleForDesktop}
                center={defaultCenter}
                zoom={DEFAULT_MAP_ZOOM}
              >
                {
                  mapPins.map((item) => (
                    <Marker key={item.city} position={item.coords} icon={mapPin} />
                  ))
                }
              </GoogleMap>
          }
          {
            isTabletScreen &&
              <GoogleMap
                mapContainerStyle={mapContainerStyleForTablet}
                center={defaultCenter}
                zoom={DEFAULT_MAP_ZOOM}
              >
                {
                  mapPins.map((item) => (
                    <Marker key={item.city} position={item.coords} icon={mapPin} />
                  ))
                }
              </GoogleMap>
          }
          {
            isPhoneScreen &&
              <GoogleMap
                mapContainerStyle={mapContainerStyleForPhone}
                center={defaultCenter}
                zoom={DEFAULT_MAP_ZOOM}
              >
                {
                  mapPins.map((item) => (
                    <Marker key={item.city} position={item.coords} icon={mapPin} />
                  ))
                }
              </GoogleMap>
          }
          {/* <GoogleMap
            mapContainerStyle={isDesktopScreen && mapContainerStyleForDesktop}
            center={defaultCenter}
            zoom={DEFAULT_MAP_ZOOM}
          >
            {
              mapPins.map((item) => (
                <Marker key={item.city} position={item.coords} icon={mapPin} />
              ))
            }
          </GoogleMap> */}
        </LoadScript>
      </div>
    </section>
  );
}

Map.propTypes = {
  mapPins: PropTypes.arrayOf(PropTypes.shape({
    city: PropTypes.string,
    coords: PropTypes.objectOf(PropTypes.number),
  })),
};

export default Map;
