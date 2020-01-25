import React, { Component, useContext } from "react";
import { SmurfContext } from '../contexts/SmurfContext';

import axios from 'axios';

const Smurf = () => {

    const {smurf} = useContext(SmurfContext);
//{data.name}
    return (
        <div>
            {console.log(smurf)}
        <h2>{smurf.name}</h2>
        </div>
      );

}

export default Smurf;
