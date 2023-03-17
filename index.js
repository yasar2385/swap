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
    var arr = Array.from(this.parentElement.children);
    var a = Array.prototype.indexOf.call(arr, this);
    if (this.id.match(/up|down/) && a == 0) {
      console.log(a);
      let b = arr[this.id.match(/up/) ? idx - 1 : idx + 1];
      arr[a] = arr.splice(b, 1, this[a])[0];
    }
  };
});
