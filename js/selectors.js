// declare your functions here...
function paragraphSelector() {
  return $('p');
}

function lastImageSelector() {
  let imgs = $('img');
  return imgs[(imgs.length - 1)];
}

function ninjaBabySelector() {
  return $("#baby-ninja");
}

function divSelector() {
  return $('div .pics');
}

function firstListItem() {
  return $('#pic-list: firstChild')
}