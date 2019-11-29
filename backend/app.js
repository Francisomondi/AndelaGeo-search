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
                   initMap()
                   
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



function initMap() {
    let input = document.getElementById('search-location');
    let autocomplete = new google.maps.places.Autocomplete(input);
}


function show(data) {
    const locationTimezone = document.getElementById('location-timezone');
    const wind = document.getElementById('wind');
    const temp = document.getElementById('temp-degree');
    const humidity = document.getElementById('humidity');
    const description = document.getElementById('description');
    const temperature = document.getElementById('temp');
    const span = document.getElementById('span');

    //convert c to f
   ; 
   

    locationTimezone.innerHTML = data.name;
    let finaltemp = temp.innerHTML = data.main.temp;
    wind.innerHTML = data.wind.speed;
    humidity.innerHTML = data.main.humidity;
    description.innerHTML = data.weather[0].description;

    let fer = (finaltemp + 32) * (5 / 9)


    //convert temperature to degree/fehrenheit
   temperature.addEventListener('click', ()=>{
       if (span.textContent === "C"){
           temp.textContent = Math.floor(fer) ;
            span.textContent = "F";
  }
  else{
           span.textContent = "C";
             temp.textContent = finaltemp;
  }
});
   
    
}
