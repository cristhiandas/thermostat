$(document).ready(function(){
  var thermostat = new Thermostat();

  function postingTemp (temp) {
  $.post('/temperature', {temperature: temp}, function(data) {
  });
}

  function update(){
    $('#temp').html(thermostat.temperature());
    $('#usage').html(thermostat.usage());
    $('#usage').attr('class', thermostat.usage());
    postingTemp(thermostat.temperature());
    $('#mode').html(function(){
      if(thermostat._isOn === true){
        return 'On';
      }else { return 'Off'; }
    });
  }

  function postCity(city) {
    $.post('/city', {city: city}, function(data) {
    })
  }

  update();

    $('#sendcity').click(function() {
      var city = $('#city').val();
      getLocalTemp(city);
      postCity(city);
    });

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



  function getTempFromApi() {
  $.get('/temperature', function(data) {
    if (data.temperature === null) {
      $('#temp').html(thermostat.temperature());
    } else {
      thermostat._temperature = data.temperature
      $('#temp').html(thermostat.temperature());
    }
  });
}

function getCityFromApi() {
  $.get('/temperature', function(data) {
    if (data.city === null) {
      $('#currentcity').html('London');
      getLocalTemp();
    } else {
      $('#currentcity').html(data.city);
      getLocalTemp(data.city);
    }
  });
}


function getLocalTemp(city = 'London'){
    $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=029834736f10a5ed0db464e2f28cddb9", function(data){
      $('#outsideTemp').html(data.main.temp);
      $('#currentcity').html(city);
    }).fail(function() {
      $('#currentcity').html('City not found');
      $('#outsideTemp').html('N/A');
    });
}

getCityFromApi();
getTempFromApi();
});
