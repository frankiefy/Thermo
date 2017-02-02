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

  it('min 10C', function(){
    for (var i = 0; i < 15; i++) {
      thermostat.down();
    }
    expect(thermostat.getTemp()).toEqual(10);
  });

});
