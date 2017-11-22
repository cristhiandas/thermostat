function Thermostat(){
  this._temperature = 20;
  this._minTemperature = 10;
  this._maxTemperature = 25;
  this._isOn = true;
}

Thermostat.prototype = {
  temperature: function(){
    return this._temperature;
  },

  up: function(){
    if(this._temperature < this._maxTemperature){
      this._temperature++
    }
  },

  down: function(){
    if(this._temperature > this._minTemperature){
      this._temperature--;
    }
  }

}
