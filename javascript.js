function myFunction() {
  var filter, buttons, div, b, a, i, txtValue;
  filter = this.textInput.toUpperCase();
  buttons = document.getElementById("buttonsSearch");
  div = buttons.getElementsByTagName("div");

  for (i = 0; i < div.length; i++) {
    b = div[i].getElementsByTagName("a")[0];
    txtValue = b.textContent || b.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      div[i].style.display = "";
    } else {
      div[i].style.display = "none";
    }
  }
}

const cardSliders = document.querySelectorAll(".card-slider");

cardSliders.forEach((slider) => {
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("mouseleave", () => {
    isDown = false;
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
  });
});
