'use strict';

function Thermostat(){
  this.DEFAULT_TEMP = 20;
  this._currentTemp = this.DEFAULT_TEMP;
};

Thermostat.prototype.getTemp = function(){
  return this._currentTemp;
};

Thermostat.prototype.up = function(){
  this._currentTemp++;
};
