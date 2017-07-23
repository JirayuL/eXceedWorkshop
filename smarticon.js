$(document).ready(main());

// server
// http://158.108.165.223/data/5910503855

// set value
// http://158.108.165.223/data/5910503855/set/value

// Count people
// http://158.108.165.223/data/5910503855/people

// Door
// http://158.108.165.223/data/5910503855/door

// Temperature
// http://158.108.165.223/data/5910503855/temp  

// Air condition
// http://158.108.165.223/data/5910503855/air

// light sensor
// http://158.108.165.223/data/5910503855/lightsensor

// light
// http://158.108.165.223/data/5910503855/light

function main() {
  var link = "http://158.108.165.223/data/5910503855";

  // Count people
  setInterval(() => {
    $.ajex({
      // "key" : "value"
      url: link + "/people"
    }).done(() => {

    }).fail(() => {
      console.error("Count people is wrong.");
    })
  }, 1000);

  // Door
  setInterval(() => {
    $.ajex({
      // "key" : "value"
      url: link + "/door"
    }).done(() => {

    }).fail(() => {
      console.error("The door is wrong.");
    })
  }, 1000);

  // Temperature
  setInterval(() => {
    $.ajex({
      // "key" : "value"
      url: link + "/temp"
    }).done(() => {

    }).fail(() => {
      console.error("The Temperature is wrong.");
    })
  }, 1000);

  // Air condition
  setInterval(() => {
    $.ajex({
      // "key" : "value"
      url: link + "/air"
    }).done(() => {

    }).fail(() => {
      console.error("The air condition is wrong.");
    })
  }, 1000);

  // light sensor
  setInterval(() => {
    $.ajex({
      // "key" : "value"
      url: link + "/lightsensor"
    }).done(() => {

    }).fail(() => {
      console.error("The light sensor is wrong.");
    })
  }, 1000);

  // light
  setInterval(() => {
    $.ajex({
      // "key" : "value"
      url: link + "/light"
    }).done(() => {

    }).fail(() => {
      console.error("The light is wrong.");
    })
  }, 1000);

}
