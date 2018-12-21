'use strict';

import { info } from 'winston';

const request = require('request');
const tabletojson = require('tabletojson');

export default function getInfo({ guru = Guru, cardId = `` } = {}) {
  return new Promise(resolve => {
    request.get('https://api.getguru.com/api/v1/cards/' + cardId + '/extended/', function (guruError, guruResponse, guruBody) {
      guruBody = JSON.parse(guruBody);
      const converted = tabletojson.convert(guruBody.content)[0];
      let rows = []
      for (var key in converted) {
        if (converted[key][0] !== "Best Practice")
          rows.push({'id':key,'raw':converted[key][0]});
      }
      const response = {
        card: {
          statusCode: guruResponse && guruResponse.statusCode,
          error: guruError,
          title: guruBody.preferredPhrase,
          rows: rows
        }
      };
      resolve(response);
    }).auth(guru.apiUser, guru.apiKey, false)
  });
}