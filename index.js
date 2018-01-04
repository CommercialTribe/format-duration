'use strict';

var parseMs = require('parse-ms');
var addZero = require('add-zero');

module.exports = function (ms) {
  var _parseMs = parseMs(ms),
      days = _parseMs.days,
      hours = _parseMs.hours,
      minutes = _parseMs.minutes,
      seconds = _parseMs.seconds;

  seconds = addZero(seconds);
  if (days) return days + ':' + addZero(hours) + ':' + addZero(minutes) + ':' + seconds;
  if (hours) return hours + ':' + addZero(minutes) + ':' + seconds;
  return minutes + ':' + seconds;
};
