function Thermostat(){
  this._temperature = 20;
  this._minTemperature = 10;
}

Thermostat.prototype = {
  temperature: function(){
    return this._temperature;
  },

  up: function(){
    this._temperature++
  },

  down: function(){
    if(this._temperature > this._minTemperature){
      this._temperature--;
    }
    
  }

}
