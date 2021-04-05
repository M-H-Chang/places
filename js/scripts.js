// -----Business Logic-----
function PlacesVisited() {
  this.places = {};
  this.currentID = 0;
}

PlacesVisited.prototype.addPlace = function (place) {
  place.id = this.assignId();
  this.places[place.id] = place;
}

PlacesVisited.prototype.assignId = function () {
  this.currentID += 1;
  return this.currentID;
}


function Place(location, landmark, date) {
  this.location = location;
  this.landmark = landmark;
  this.date = date;
}

Place.prototype.destination = function () {
  return this.location + " " + this.landmark;
}