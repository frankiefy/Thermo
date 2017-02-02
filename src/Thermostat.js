'use strict';

function Thermostat(){
  this.DEFAULT_TEMP = 20;
  this._currentTemp = this.DEFAULT_TEMP;
  this.MIN_TEMP = 10;
};

Thermostat.prototype.getTemp = function(){
  return this._currentTemp;
};

Thermostat.prototype.up = function(){
  this._currentTemp++;
};

Thermostat.prototype.down = function(){
  if (this._currentTemp > this.MIN_TEMP) {
    this._currentTemp--;
  };
};
