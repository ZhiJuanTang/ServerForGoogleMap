import React from "react";
import { Map, Marker } from "pigeon-maps";

const ShareNowCars = ({ cars }) => {
  return (
    <div className="mapContainer">
      <Map height={500} defaultCenter={[53.5532316, 10.0087783]} defaultZoom={11}>
        {cars?.map((car) => {
          const lat = car.coordinates[1];
          const lon = car.coordinates[0];
        return <Marker width={50} anchor={[lat, lon]} key={car.id} />;
        })}
      </Map>
    </div>
  );
};

export default ShareNowCars;
