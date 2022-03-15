// Code your solution in this file!
let headQ = 42;
let start;
let destination;

function distanceFromHqInBlocks(destination) {
  let blocks = destination - headQ;
  if (blocks < 0) {
    blocks *= -1;
  }
  return blocks;
}

function distanceFromHqInFeet(destination) {
  let blocks = destination - headQ;
  if (blocks < 0) {
    blocks *= -1;
  }
  let feet = blocks * 264;
  return feet;
}

function distanceTravelledInFeet(start, destination) {
  let distanceInBlocks = start - destination;
  if (distanceInBlocks < 0) {
    distanceInBlocks *= -1;
  }
  let distanceInFeet = distanceInBlocks * 264;
  return distanceInFeet;
}

function calculatesFarePrice(start, destination) {
  let distanceInBlocks = start - destination;
  if (distanceInBlocks < 0) {
    distanceInBlocks *= -1;
  }
  let distanceInFeet = distanceInBlocks * 264;
  let freeSample = distanceInFeet - 400;
  if (freeSample < 0) {
    freeSample *= 0;
  }
  let farePrice;
  if (freeSample + 400 < 2000) {
    farePrice = freeSample * 0.02;
    return farePrice;
  } else if (freeSample + 400 > 2000 && freeSample + 400 <= 2500) {
    farePrice = 25;
    return farePrice;
  } else if (freeSample + 400 > 2500) {
    return "cannot travel that far";
  }
}
