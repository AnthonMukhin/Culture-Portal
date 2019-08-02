import React from "react";
import { useTranslation } from "react-i18next";
import { YMaps, Map, Placemark } from 'react-yandex-maps';

export default ({ coords }) => {
  
  const { t } = useTranslation('map');
  const mapData = {
    center: [coords.lat, coords.lon],
    zoom: 10
  };
  
  const coordinates = [coords.lat, coords.lon];

  return (
    <section>
      <h3>{t('title')}</h3>
      <YMaps>
        <Map  
          defaultState={mapData}
          width="auto"
        >
          <Placemark
            geometry={coordinates}
            modules={['geoObject.addon.balloon']}
          />
        </Map>
      </YMaps>
    </section>
  );
}