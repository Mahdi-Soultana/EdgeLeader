// function initMap() {
//     const loc = { lat: 34.267470, lng: -6.562630 };
//     ///Centered map on  Location

//     const map = new google.maps.Map(document.querySelector(".map"), {
//         center: loc,
//         zoom: 14
//     });

//     const marker = new google.maps.Marker({ position: loc, map: map });

// }





// position we will use later
var lat = 33.994930;
var lon = -6.851360;
// initialize map
map = L.map('mapDiv').setView([lat, lon], 14);
// set map tiles source
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 18,
}).addTo(map);

// add marker to the map
marker = L.marker([lat, lon]).addTo(map);
// marker2 = L.marker([lat+0.01, lon+0.01]).addTo(map);
// add popup to the marker
marker.bindPopup(`<b> Lycée Technique Ibn Sina </b><br/>This st. 48<br />Morroco Kenitra `).openPopup();
// marker2.bindPopup("FooBar INC., That st. 32, New York");


//sticky  Opacity Menu //
window.addEventListener("scroll", () => {
  if (window.scrollY>150) {
    document.getElementById("navbar").style.opacity = 0.9;
    
  } else {
    document.getElementById("navbar").style.opacity = 1;
  }
}) 


////SMOOTH SCROLLING/////////
$("#navbar a, .btn").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();
    const hash = this.hash;
    $("html, body").animate(
      {
      scrollTop: $(hash).offset().top-100
    }, 800);
  }
}) 