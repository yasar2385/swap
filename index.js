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
    var el = this.closest('.form-group');
    var arr = Array.from(el.parentElement.children);
    var a = Array.prototype.indexOf.call(arr, el);
    //console.log([el, arr, a]);
    var [txt1, txt2] = ['', ''];
    arr.forEach((e, id, a) => {
      txt1 += e.querySelector('input').value;
    });
    console.log(txt1);
    if (this.id.match(/up|down/)) {
      let b = this.id.match(/up/) ? a - 1 : a + 1;
      console.log([a, b]);
      arr[a] = arr.splice(b, 1, arr[a])[0];
    }
    arr.forEach((e, id, a) => {
      txt2 += e.querySelector('input').value;
    });
    console.log(txt2);
  };
});

function dedmo(a, b) {
  let collectionName = Array.from(preview.querySelectorAll('.string-name'));
  console.log(collectionName);
  let before = collectionName[a].querySelector('.surname').textContent;
  let CloneArray = Array.from(collectionName).map((el) => el.cloneNode(true));
  collectionName[a].replaceWith(CloneArray[b]);
  collectionName[b].replaceWith(CloneArray[a]);
  let after = collectionName[a].querySelector('.surname').textContent;
  console.log([after, before]);
}

dedmo(4, 1);
