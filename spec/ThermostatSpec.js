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

});
