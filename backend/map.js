function initMap(){
    let input = document.getElementById('search-location');
    let searchmap = document.getElementById('search-map');
    let autocomplete = new google.maps.places.Autocomplete(input);

          let maps = new google.maps.Map(searchmap,{
              center:{
                  lat: 30.72,
                  long: 88.35
              },
              zoom:5
          });
}   