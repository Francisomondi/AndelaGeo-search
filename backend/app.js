const submitBtn = document.getElementById('search-button');


submitBtn.addEventListener('click',() =>{
    const input = document.getElementById('search-location').value;
    const locationTimezone = document.getElementById('location-timezone');
    const wind = document.getElementById ('wind');
   const humidity = document.getElementById('humidity');
   const precipitation = document.getElementById('precipitation');
    const api = `89d564e82d7aa6564b53f032a5e48d42`;

   if(input != ''){
       $.ajax(
           {
               url: 'https://api.openweathermap.org/data/2.5/weather?q=' + input     + "&units=metric" + "&appid="+api,
               dataType: 'json',
               type: 'GET',
               success: function (data) {
                   var widget = show(data);
                   console.log(widget);
                   $(input).html(widget);

                   $(locationTimezone).val('');
               }
               
           }
            
       );
   }
   else{
       $("#error").html('Field cannot be empty');
   }
 

});
function show(data) {
    return "<h3><strong>The weather today is </strong>: " + data.main.temp + " Degrees Celcius in </h3>" + "<h3><strong>" + data.name + "</strong> </h3>"
}



