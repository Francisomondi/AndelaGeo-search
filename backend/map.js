function initMap(){
    let input = document.getElementById('search-location');
    let searchmap = document.getElementById('search-map');
    let autocomplete = new google.maps.places.Autocomplete(input);
   

          let map = new google.maps.Map(searchmap,{
                  center:{
                  lat: 27.72,
                  long: 85.36
              },
              zoom:15
          });
          let marker = new google.maps.Marker({
              position:{
                  lat: 27.72,
                  long: 85.36
              },
              map:map,
              draggable:true
          });
    searchresults = new google.maps.places.SearchBox(input);
    
    //place change events on the map
    

         
}   