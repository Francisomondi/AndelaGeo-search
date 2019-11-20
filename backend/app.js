const submitBtn = document.getElementById('search-button');


submitBtn.addEventListener('click',() =>{
    const input = document.getElementById('search-location').value;
    const locationTimezone = document.getElementById('location-timezone');

   
    
    const api = `89d564e82d7aa6564b53f032a5e48d42`;
   
   if(input != ''){
       $.ajax(
           {
               url: 'https://api.openweathermap.org/data/2.5/weather?q=' + input  + "&units=metric" + "&appid="+api,
               dataType: 'json',
               type: 'GET',
               success: function (data) {
                    show(data);
                   console.log(data);
                   $(input).html(data);

                   $(locationTimezone).val('');
               }  
           }
            
       );
   }
   
   else {
       $("#error").html('**Search Field cannot be empty**');
   }
});


function show(data) {
    const locationTimezone = document.getElementById('location-timezone');
    const wind = document.getElementById('wind');
    const temp = document.getElementById('temp-degree');
    const humidity = document.getElementById('humidity');
    const description = document.getElementById('description');

    locationTimezone.innerHTML = data.name;
    temp.innerHTML = data.main.temp;
    wind.innerHTML = data.wind.speed;
    humidity.innerHTML = data.main.humidity;
    description.innerHTML = data.description;
}







