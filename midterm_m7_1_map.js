  function mapIt() {

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: { lat: 3.038461, lng: 12.486519 }
        });

        map.addListener('click', function(event) {
          placeMarkerAndPanTo(event.latLng, map);
        });
      }

  function placeMarkerAndPanTo(latLng, map) {
        var marker = new google.maps.Marker({
          position: latLng,
          map: map
        });
        map.panTo(latLng);
      }

