describe('Thermostat', function(){

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20C', function(){
    expect(thermostat.getTemp()).toEqual(20);
  });

  it('increase by 1C', function(){
    thermostat.up();
    expect(thermostat.getTemp()).toEqual(21);
  });

  it('decrease by 1C', function(){
    thermostat.down();
    expect(thermostat.getTemp()).toEqual(19);
  });

  it('resets to 20C', function(){
    thermostat.up();
    thermostat.reset();
    expect(thermostat.getTemp()).toEqual(20);
  });

  it('min 10C', function(){
    for (var i = 0; i < 15; i++) {
      thermostat.down();
    }
    expect(thermostat.getTemp()).toEqual(10);
  });

  it('default max 25C', function(){
    for (var i = 0; i < 25; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemp()).toEqual(25);
  });

  it('PSM max 32C', function(){
    thermostat.togglePowerSavingMode();
    for (var i = 0; i < 25; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemp()).toEqual(32);
  });

  it('PSM on resets temp to 25C if already above', function(){
    thermostat.togglePowerSavingMode();
    for (var i = 0; i < 25; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemp()).toEqual(32);
    thermostat.togglePowerSavingMode();
    expect(thermostat.getTemp()).toEqual(25);
  });

  it('knows current energy usage', function(){
    thermostat.togglePowerSavingMode();
    for (var i = 0; i < 25; i++) {
      thermostat.down();
    }
    expect(thermostat.reportEnergyUsage()).toEqual("low-usage");
    thermostat.reset();
    expect(thermostat.reportEnergyUsage()).toEqual("medium-usage");
    for (var i = 0; i < 25; i++) {
      thermostat.up();
    }
    expect(thermostat.reportEnergyUsage()).toEqual("high-usage");
  });

});
