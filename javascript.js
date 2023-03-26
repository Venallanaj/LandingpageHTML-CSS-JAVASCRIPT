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

let slideIndex = [1, 1];
let slideId = ["mySlides1", "mySlides2"];
showSlides(1, 0);
showSlides(1, 1);
debugger;
function plusSlides(n, no) {
  showSlides((slideIndex[no] += n), no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
}
