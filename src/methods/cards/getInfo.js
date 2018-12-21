'use strict';

import { info } from 'winston';

var request = require('request');

export default function getInfo({ guru = Guru, cardId = `` } = {}) {
  return new Promise(resolve => {
    request.get('https://api.getguru.com/api/v1/cards/' + cardId + '/extended/', function (guruError, guruResponse, guruBody) {
      info(guruBody)
      const response = {
        card: {
          statusCode: guruResponse && guruResponse.statusCode,
          error: guruError,
          body: JSON.parse(guruBody).content
        }
      };
      resolve(response);
    }).auth(guru.apiUser, guru.apiKey, false)
  });
}