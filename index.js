// Import stylesheets
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function swapDiv(event, elem) {
  elem.parentNode.insertBefore(elem, elem.parentNode.firstChild);
}
function findPrevious(elm) {
  do {
    elm = elm.previousSibling;
  } while (elm && elm.nodeType != 1);
  return elm;
}
container.querySelectorAll('div').forEach((elm, idx, arr) => {
  elm.onclick = function (e) {
    var previous = findPrevious(elm);
    if (previous) {
      elm.parentNode.insertBefore(elm, previous);
    }
  };
});
Array.prototype.swapItems = function (a, b) {
  this[a] = this.splice(b, 1, this[a])[0];
  return this;
};
Array.prototype.swapItems = function (a, b) {
  this[a] = this.splice(b, 1, this[a])[0];
  return this;
};

var arr = [
  'Zero',
  'One',
  'Two',
  'three',
  'four',
  'five',
  'siz',
  'seven',
  'eight',
  'nine',
];
console.log(arr.swapItems(3, 7));

document.querySelectorAll('.btnAuGroup').forEach((elm, idx, arr) => {
  elm.onclick = function (e) {
    console.log(this.id);
    if (this.id.match(/up|down/) && idx == 0) {
      console.log(idx);
      let siblil = arr[this.id.match(/up/) ? idx - 1 : idx + 1];
      arr[idx] = arr.splice(siblil, 1, this[idx])[0];
    }
  };
});
