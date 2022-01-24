import React from 'react';
import PropTypes from 'prop-types';
import styles from './map.module.scss';
import globalStyles from '../app/app.module.scss';
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import mapPin from '../../assets/img/map-pin.svg';
import {
  DEFAULT_MAP_LAT,
  DEFAULT_MAP_LNG,
  DEFAULT_MAP_ZOOM,
  MAP_WIDTH,
  MAP_HEIGHT,
  API_KEY
} from '../../const';

function Map (props) {
  const {mapPins} = props;
  const mapContainerStyle = {
    width: MAP_WIDTH,
    height: MAP_HEIGHT,
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
          <GoogleMap mapContainerStyle={mapContainerStyle} center={defaultCenter} zoom={DEFAULT_MAP_ZOOM}>
            {
              mapPins.map((item) => (
                <Marker key={item.city} position={item.coords} icon={mapPin} />
              ))
            }
          </GoogleMap>
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
