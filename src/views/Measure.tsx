import React, { useEffect } from 'react';
import APIService from '../services/APIService';


function Measure() {

  useEffect(() => {
    APIService.getStationMeasurements("69029001")
      .then((data) => {
        console.log(JSON.parse(data)[0]);
      }).catch((error) => {
        console.error(error)
      });
  }, []);

  return (
    <>
      <h1>Relevés effectués à la station météo de Lyon-Bron</h1>
      <strong>ID&nbsp;</strong>69029001<br />
      <strong>OMM ID&nbsp;</strong>07480<br />
      <strong>Nom&nbsp;</strong>LYON-BRON<br />
      <strong>Latitude&nbsp;</strong>45.721333<br />
      <strong>Longitude&nbsp;</strong>4.949167<br />
    </>
  );

}

export default Measure;