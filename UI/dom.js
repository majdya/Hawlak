function createDiv(data) {

  document.getElementById('container').innerHTML = "";

  var len = 0;
  while (len < 10 && len < data.length) {

    let newElement = document.createElement('div');

    newElement.innerText = Object.keys(data[len]);
    document.getElementById('container').appendChild(newElement);
    len++;
  }
}
