$(document).ready(function(){
  $('#submitWeather').click(function(){

    var city = $("#city").val();
    if(city != ''){
      $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" +"&APPID=9ed022d76b768861c9f5b145e8bbd5c8",
        type: "GET",
        dataType: "jsonp",
        success: function(data){
           var widget = show(data);
           $("#show").html(widget);
           $("#city").val('');
        }

      });

    }else {
      $("#error").html('Field cannot be empty');
    }
  });
});
function show(data){
  return "<h2> Weather for "+ data.name +"," +data.sys.country + "</h2>"+
         "<h3><strong>Weather</strong>: " + data.weather[0].main + "</h3>" +
        "<h3><strong>Description</strong>: <img src='https://openweathermap.org/img/w/"+data.weather[0].icon+".png'> " + data.weather[0].description + "</h3>" +
        "<h3><strong>Temperature</strong>: " + data.main.temp + " &deg;C</h3>";
}
