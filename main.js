// Structure
//----------------------------
const form = document.querySelector("form");
const locationInput = document.querySelector(".location");
const nameInput = document.querySelector(".name");
const ratingInput = document.getElementsByName('rate');
const descriptionInput = document.querySelector(".description");
const handicapInput = document.querySelector(".handicap");
const genderNeutralInput = document.querySelector(".genderNeutral");
const singleStallInput = document.querySelector(".singleStall");
const filterHandicap = document.getElementsByClassName("filterHandicap")
const filterGender = document.getElementsByClassName("filterGender")
const filterSingle = document.getElementsByClassName("filterSingle")
const filterNone = document.getElementsByClassName("filterNone")

var button = document.querySelector("button");
var lngLat = Number;

//OBJECT SETUP
//----------------------------
let places = {
	"placeList": []
}

let suggestions = {
	"suggestionList": []
}

let users = {
	"userList": []
}

// placeObject = {
//   location: newLocation,
//   thisLngLat: newLngLat,
//   name: newName,
//   name: newID,
//   suggestions: newSuggestionList,
//   description: newDescription,
//   renewDate: newDate,
//   rating: newRating
// }

// suggestionObject = {
//   place: place,
//   name: newName,
//   score: newScore,
//   description: newDescription
// }

// userObject = {
//   location: newLocation,
//   thisLngLat: newLngLat,
//   name: newName,
//   suggestions: suggestionList
// }

let user1 = {
  location: 'APT 16, 141 Mott, NY, NY, 10013',
  thisLngLat: [-73.99679929999999, 40.7186996],
  name: 'Zoe Lin',
  suggestions: null
}

let place1 = {
  location: "139 Eldridge",
  thisLngLat: [-73.9917492, 40.7192191],
  name: "Dance With Me",
  id: "dance_with_me",
  description: 'Staffed by the dancers of our community, Dance With Me hosts social dance parties and dance lesson. Join us, experts and beginners, to Cha Cha, Bolero, Swing, Mambo, Paso Doble, Waltz, Tango, Foxtrot, QuickStep, Viennese Waltz, Merengue, Salsa, Rumba, Samba, Hip Hop & Contemporary dance your worries away!',
  renewDate: new Date(2042, 6, 01) ,
  suggestions: null,
  rating: '4'
}

let place2 = {
  location: "141 Mott",
  thisLngLat: [-73.99679929999999, 40.7186996],
  name: "Laundromat Bar",
  id: "laundromat_bar",
  description: 'First Laundromat Bar in NYC, thanks to the inginuity of our community! Waiting for your sheets to dry no longer needs to be boring an tedious; Come do your late night laundry and share a night cap with your wonderful neighbors as you watch them tumble!',
  renewDate: new Date(2042, 11, 15) ,
  suggestions: null,
  rating: '5'
}

let suggestion1 = {
  place: place2,
  name: 'newName',
  score: 'newScore',
  description: 'suggestion1'
}

let suggestion2 = {
place: place2,
name: 'newName',
score: 'newScore',
description: 'suggestion2'
}
let suggestion3 = {
  place: place1,
  name: 'newName',
  score: 'newScore',
  description: 'suggestion3'
  }

place1.suggestions = [suggestion1, suggestion2];
places.placeList.push(place1);
places.placeList.push(place2);
user1.suggestions = [suggestion2, suggestion3];
users.userList.push(user1);
console.log(places)
console.log(users)


// Event Handlers
//----------------------------
// const addNewBathroom = (e) => {
//   e.preventDefault();
  
//   // variable for values entered in the form
//   const newLocation = locationInput.value;
//   const newName = nameInput.value;
//   var selectedRating = Array.from(ratingInput).find(radio => radio.checked);
//   const newRating = selectedRating.value;
//   const newDescription = descriptionInput.value;
//   const newLngLat = lngLat;
//   const newHandicapBool = handicapInput.checked;
//   const newGenderBool = genderNeutralInput.checked;
//   const newSingleBool = singleStallInput.checked;

  
//   // store in a JSON object
//   bathroomObject = {
// 		location: newLocation,
//     thisLngLat: newLngLat,
// 		name: newName,
//     cleanliness: newRating,
//     description: newDescription,
//     completed: false,
//     handicap: newHandicapBool,
//     genderNeutral: newGenderBool,
//     singleStall: newSingleBool
// 	}
  
//   // pass object into display function
// 	// displayContact(bathroomObject);
  
//   //add object to array
// 	bathrooms.bathroomList.push(bathroomObject);
//     console.log(bathrooms)
//   //store in local storage

//   localStorage.setItem("bathrooms", JSON.stringify(bathrooms));
//   /* firebase stuff

//   var shareddatabase = firebase.database(); // put this up at top of htis file

//    shareddatabase.ref("bathroomshahaha").push(bathroomObject);



//   shareddatabase.ref("bathroomshahaha").on("value", function(snapshot) {
//     var data = snapshot.val();
    
    
    
//     // clear pins on map
    
//     // add pins onto map
//     for(var ms in data) {
//       console.log(m, data[m]);
//       //data[m].cleanliness
//     }

//   });

//   */

// 	//clear form
// 	form.reset();

//     //Print result
//     let display = document.querySelector('.display')
//     let bathroomCollection = document.createElement('table')
//     display.append(bathroomCollection)
//     console.log(bathrooms.bathroomList.length)
//     // printTable(bathroomObject);
//     var validation = document.createElement("h2")
//     let valDisplay = document.querySelector('.validation-space')
//     validation.textContent="✓ Thank you for submiting!"
//     validation.classList.add("validation");
//     while (valDisplay.firstChild){
//         valDisplay.removeChild(valDisplay.firstChild)
//       }
//     valDisplay.appendChild(validation)
//     printBathroom(bathroomObject)
//     console.log(bathroomObject.thisLngLat);
//     renderLocations(bathrooms);

// }

function printSpace(space){
    let display = document.querySelector('.display')
    var row = document.createElement("tr");
    row.setAttribute("data-lnglat", space.thisLngLat)
    
    // if (bathroom.handicap) {
    //   row.classList.add("handicapTrue")
    // }

    // if (bathroom.singleStall) {
    //   row.classList.add("singleStallTrue")
    // }

    // if (bathroom.genderNeutral) {
    //   row.classList.add("genderNeutralTrue")
    // }
    
    for (var i = 0; i < 4; i++) {
      // create element <td> and text node 
      //Make text node the contents of <td> element
      // put <td> at end of the table row
      var cell = document.createElement("td");
      if (i==0) {
        var cellText = document.createTextNode(
          space.name);
          cell.appendChild(cellText);
          row.appendChild(cell);
          cell.classList.add("name");
      } else if (i==1){
        var cellText = document.createTextNode(
          drawStar(space.rating)
        );
        cell.appendChild(cellText);
        row.appendChild(cell);
        cell.classList.add("rating");
      } else if (i==2){        
        var cellText = document.createTextNode(
          space.location);
          cell.appendChild(cellText);
          row.appendChild(cell);
          cell.classList.add("location");
      } else if (i==3){
        var cellText = document.createTextNode(
        space.description);
        var cellDiv = document.createElement('div')
        cellDiv.classList = "cellDiv";
        cellDiv.appendChild(cellText);
        cell.appendChild(cellDiv);
        row.appendChild(cell);
        cell.classList.add("description");
    }
    } 
    display.querySelector('tbody').appendChild(row);
}


function drawStar(int){
    var stars = " "
    if (int == 1){
        stars =  "★"
    } else if (int == 2){
        stars =  "★★"
    } else if (int == 3){
        stars =  "★★★"
    } else if (int == 4){
        stars =  "★★★★"
    } else if (int == 5){
        stars =  "★★★★★"
    } 
    return stars
}


function pageLoadFn(){
    // if (localStorage.getItem('places')==null){
    //     return
    // } else {
    //         places = JSON.parse(localStorage.getItem('places'))
    //         places.placeList.forEach(printSpace)
    //         renderLocations(places);
    // }
    places.placeList.forEach(printSpace)
    renderLocations(places);
    // if(document.getElementById("defaultOpen") == null){
    //   console.log("what")
    // } else {
    //   document.getElementById("defaultOpen").click();
    // }
}


// MAP RELATED JS
//-----------------
// create an instance of NavigationControl
let navigation = new mapboxgl.NavigationControl({
    showCompass: false
})

// add the navigation to your map
map.addControl(navigation, 'top-right')

// create an instance of ScaleControl
let scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'imperial'
})

// add the scale to your map
map.addControl(scale, 'bottom-right')

let geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserLocation: true,
    fitBoundsOptions: {
    }
})

map.addControl(geolocate, 'top-right')

// this is an event handler
geolocate.on('geolocate', function(event) {

    // create new variables to store the attributes we're interested in from the event
    let lng = event.coords.longitude
    let lat = event.coords.latitude

    // debug
    console.log('geolocated:', lng, lat)

    // format lng lat values and display them on our 'info' element
    document.getElementById('info').innerHTML = lng.toFixed(5) + "," + lat.toFixed(5)

})


function renderLocations(locations){
    locations.placeList.forEach(function(d) {
        let marker = new mapboxgl.Marker()    
        marker.setLngLat(d.thisLngLat)
        marker.addTo(map)  
        let string = `<div style="width: 170px"> <h2 style="text-align: left; margin-top:10px; margin-bottom:8px">${d.name}</h2>
        ${drawStar(d.rating)} <br/> <p style="color:grey; padding:5px 0">${d.description}</p> <br/> 
        <button class="future" onclick="location.href='${d.id}.html';" >Future</button>`
        let popup = new mapboxgl.Popup()        
        popup.setHTML(string)
        console.log(string)
        marker.setPopup(popup)
        console.log("pop up set")
    })
}



// GOOGLE MAPS


function initAutocomplete() {
    
    // Create the search box and link it to the UI element.
    const input = document.getElementById("pac-input");
    const searchBox = new google.maps.places.SearchBox(input);
  

  
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener("places_changed", () => {
      const places = searchBox.getPlaces();
  
      if (places.length == 0) {
        return;
      }
  
  
      places.forEach((place) => {
        if (!place.geometry || !place.geometry.location) {
          console.log("Returned place contains no geometry");
          return;
        }

        const name = place.name;
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        const currentlngLat = [parseFloat(lng), parseFloat(lat)];

        map.flyTo({center: currentlngLat, zoom: 13});
        
        console.log (name + currentlngLat)

        lngLat = currentlngLat;
        return currentlngLat;

      });
    });
  }

  function openView(evt, viewCity) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(viewCity).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  function searchFilter() {
    // Declare variables
    var input, filter, table, tr, i, nameValue, locationValue;
    input = document.getElementById("pac-input");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      tdn = tr[i].getElementsByTagName("td")[0];
      tdl = tr[i].getElementsByTagName("td")[2];
      if (tdn) {
        nameValue = tdn.textContent || tdn.innerText;
        locationValue = tdl.textContent || tdl.innerText;
        if (nameValue.toUpperCase().indexOf(filter) > -1 || locationValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  function filter(f) {
    var filter, table, tr;
    filter = f;
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    if (f == "null") {
      for (i = 0; i < tr.length; i++){tr[i].style.display = "";}
    } else {
      for (i = 0; i < tr.length; i++) {
        if (tr[i].classList.contains(filter)) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
      }
    }
  }

  pageLoadFn()

  map.on('click', function(event) {

    let lng = event.lngLat.lng
    let lat = event.lngLat.lat
    
    console.log("clicked:", lng, lat)
    document.getElementById('info').innerHTML = lng.toFixed(5) + "," + lat.toFixed(5)
    // let marker = new mapboxgl.Marker()  
    // marker.setLngLat(event.lngLat).addTo(map)
    locationInput.value=`${lng}, ${lat}`
    // marker.remove();
    lngLat = [lng, lat];
})
    
// Events
//----------------------------

document.querySelectorAll('tr')
.forEach(e => e.addEventListener("click", function() {
    // Here, `this` refers to the element the event was hooked on
    let lngLat = e.dataset.lnglat.split(',')
    console.log(lngLat)
    map.flyTo({center: lngLat, zoom: 15});

}));
// form.addEventListener("submit", addNewBathroom);
// filterHandicap.addEventListener("click", filter('handicapTrue'));
// filterSingle.addEventListener("click", filter('singleStallTrue'));
// filterGender.addEventListener("click", filter('genderNeutralTrue'));

