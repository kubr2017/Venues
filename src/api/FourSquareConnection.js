import React from 'react';
import axios from 'axios';
import { FourSquareClient_secret } from './keys';
import { FourSquareClient_id } from './keys';

export default axios.create({
  baseURL: 'https://api.foursquare.com/v2/venues'
});
