let env = process.env.NODE_ENV || 'development';
let darkSkyKey = process.env.DARKSKY_KEY || '' ;

import https from 'https';
import { Router } from 'express';

export default () => {
  const weather = Router();

  const fetchCurrent = (req, res, options) => {
    let resp = '';
    let reqOptions = {
      hostname: 'api.darksky.net',
      path: `/forecast/${darkSkyKey}/${options.latitude},${options.longitude}`,
      method: 'GET'
    };
  
    let request = https.request(reqOptions, (response) => {
      response.on('data', (data) => {
        resp += data;
      });

      response.on('end', () => {
        let parsedResponse = JSON.parse(resp);
        return res.status(200).json(parsedResponse);
      });
    })
    
    request.end();

    request.on('error', (e) => {
      console.error(e);
    });
   
  }
 
  weather.get('/current', (req, res) => {
    let options = {
      latitude: req.query.latitude,
      longitude: req.query.longitude 
    }

    fetchCurrent(req, res, options);
  })

  return weather;
}
