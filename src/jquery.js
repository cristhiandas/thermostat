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
   })

   $('#down').click(function(){
     thermostat.down();
   })

   $('#reset').click(function(){
     thermostat.reset();
   })

   $('#switch').click(function(){
     thermostat.switch();
   })

  $(document).click(function() {
    update();
  });

  $('#select').submit(function(event){
    event.preventDefault();
    var currentCity = $('#city').val();
    $.get("http://api.openweathermap.org/data/2.5/weather?q=" + currentCity + "&units=metric&APPID=029834736f10a5ed0db464e2f28cddb9", function(data){

      $('#outsideTemp').html(data.main.temp);
      $('#currentcity').html(currentCity);
    }).fail(function() {
      $('#currentcity').html('City not found');
      $('#outsideTemp').html('N/A');
    });
  })


});
