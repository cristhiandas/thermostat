describe("thermostat", function(){

  it('have a default value of 20',function(){
    var thermostat = new Thermostat
    expect(thermostat.temperature).toEqual(20)
  })

})
