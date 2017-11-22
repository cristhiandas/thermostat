function Thermostat(){
  this._temperature = 20;
  this._minTemperature = 10;
  this._isOn = true;
  this._maxTemperature = 25;
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
  },
  switch: function(){
    this._isOn = !this._isOn;
    this.savingMode();
  },

  savingMode: function(){
    if (this._isOn === true ){
      this.maxTemperature =  25;
    }
    else{ this._maxTemperature = 32; }
  }
}
