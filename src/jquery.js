$(document).ready(function(){
  var thermostat = new Thermostat();

  function update(){
    $('#temp').html(thermostat.temperature());
    $('#usage').html(thermostat.usage());
    $('#mode').html(function(){
      if(thermostat._isOn === true){
        return 'On';
      }else { return 'Off'; }
    });
  }

  update();

   $('#up').click(function(){
     thermostat.up();
     update();
   })

   $('#down').click(function(){
     thermostat.down();
     update();
   })

   $('#reset').click(function(){
     thermostat.reset();
     update();
   })

   $('#switch').click(function(){
     thermostat.switch();
     update();
   })
});
