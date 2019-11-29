function initMap(){
    let input = document.getElementById('search-location');
    let searchmap = document.getElementById('search-map');
    let autocomplete = new google.maps.places.Autocomplete(input);
   

          let map = new google.maps.Map(searchmap,{
                  center:{
                  lat: 27.72,
                  lng: 85.36    
              },
              zoom:15
          });
          let marker = new google.maps.Marker({
              position:{
                  lat: 47.72,
                  lng: 85.36
              },
              map:map,
              draggable:true
          });
    searchresults = new google.maps.places.SearchBox(input);
    
    //place change events on the map
    google.maps.event.addListener(searchresults, 'places_changed', ()=>{

        console.log(searchresults.getPlaces());
        let places = searchresults.getPlaces();

        //bound
        let bounds= new google.maps.LatLngBounds();
        let i   ;
        for(i= 0;places= places[i];i++){
            console.log(places.geometry.location);
            bounds.extend(place.geometry.location);
            marker.setPosition(place.geometry.location); //set new marker position

            map.fitBounds(bounds); //fit to the bond
            map.setZoom(10); //set zoom

        }
    });


            
}   