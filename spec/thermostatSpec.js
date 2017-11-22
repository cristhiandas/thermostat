describe("thermostat", function(){
var thermostat;

beforeEach(function(){
  thermostat = new Thermostat();
})

  it('have a default value of 20',function(){
    expect(thermostat.temperature()).toEqual(20);
  })

  describe('When changing temperature', function(){
    it('increase temperature when asked', function(){
      thermostat.up();
      expect(thermostat.temperature()).toEqual(21);
    })
  })
})
