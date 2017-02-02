'use strict';

function Thermostat(){
  this.DEFAULT_TEMP = 20;
  this.MIN_TEMP = 10;
  this.PSM_ON_MAX = 25;
  this.PSM_OFF_MAX = 32;

  this._currentTemp = this.DEFAULT_TEMP;
  this._powerSavingMode = true;
};

Thermostat.prototype.getTemp = function(){
  return this._currentTemp;
};

Thermostat.prototype.togglePowerSavingMode = function(){
  if (this._powerSavingMode == true) {
    this._powerSavingMode = false;
  } else {
    this._powerSavingMode = true;
  };
};

Thermostat.prototype.up = function(){
  if (this._powerSavingMode == true) {
    if (this._currentTemp < this.PSM_ON_MAX) {
      this._currentTemp++;
    }
  } else if (this._currentTemp < this.PSM_OFF_MAX) {
    this._currentTemp++;
  };
};

Thermostat.prototype.down = function(){
  if (this._currentTemp > this.MIN_TEMP) {
    this._currentTemp--;
  };
};
