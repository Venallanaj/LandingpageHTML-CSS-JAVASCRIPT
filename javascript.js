// FUNCTION Search

function searchData() {
  let filter, buttons, a, b, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  buttons = document.getElementById("buttonsSearch");
  a = buttons.getElementsByTagName("a");

  for (let i = 0; i < a.length; i++) {
    b = a[i];
    txtValue = b.textContent || b.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

/* Sliders */

let tagCards, arrElements;
hiddenInit();
function hiddenInit() {
  tagCards = document.getElementsByClassName("card");
  arrElements = Array.from(tagCards);

  arrElements.forEach((tagCard, index) => {
    if (index > 1) {
      tagCard.hidden = true;
    }
  });
}

function previous() {
  let index = indexHiddenPrevious();
  if (index > 0) {
    tagCards[index - 1].hidden = false;
    tagCards[index + 1].hidden = true;
  }
}

function next() {
  let index = indexHiddenNext();
  if (index > 1) {
    tagCards[index - 2].hidden = true; //hidden
    tagCards[index].hidden = false; // show
  }
}

function indexHiddenNext() {
  var indexEl = 0;
  var stIndex;

  arrElements.forEach((tagCard, index) => {
    if (!tagCard.hidden) {
      stIndex = index;
    }
  });

  arrElements.forEach((tagCard, index) => {
    if (tagCard.hidden && indexEl == 0 && index >= stIndex) {
      indexEl = index;
    }
  });

  return indexEl;
}

function indexHiddenPrevious() {
  var indexEl = 0;
  var stIndex;
  debugger;
  for (var i = arrElements.length - 1; i >= 0; i--) {
    if (!arrElements[i].hidden) {
      indexEl = i;
    }
  }

  arrElements.forEach((tagCard, index) => {
    if (tagCard.hidden && indexEl == 0 && index <= stIndex) {
      indexEl = index;
    }
  });

  return indexEl;
}
