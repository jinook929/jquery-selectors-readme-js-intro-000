// declare your functions here...
function paragraphSelector() {
  return $('p');
}

function lastImageSelector() {
  let imgs = $('img');
  return imgs[(imgs.length - 1)];
}