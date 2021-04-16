const buttons = document.querySelectorAll(".open-modal-button");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".exit-span");

const carImg = document.querySelector(".car-img");
const carPrice = document.querySelector(".car-price");
const carName = document.querySelector(".car-name");

const checkboxes = document.querySelectorAll(".checkbox");

const leftChevron = document.querySelector(".chevron-box-left");
const rightChevron = document.querySelector(".chevron-box-right");

class Car {
  constructor(
    name,
    startPrice,
    electricalSystem,
    airSuspension,
    sideWindows,
    insulatingGlass,
    ambientLed,
    totalPrice
  ) {
    this.name = name;
    this.startPrice = startPrice;
    this.electricalSystem = electricalSystem;
    this.airSuspension = airSuspension;
    this.sideWindows = sideWindows;
    this.insulatingGlass = insulatingGlass;
    this.ambientLed = ambientLed;
    this.totalPrice = totalPrice;
  }
}

const Q3 = new Car("Q3", 29999, false, false, false, false, false, 29999);
const A4 = new Car("A4", 24999, false, false, false, false, false, 24999);
const A3 = new Car("A3", 19999, false, false, false, false, false, 19999);
const Q7 = new Car("Q7", 39999, false, false, false, false, false, 39999);

buttons.forEach((button) =>
  button.addEventListener("click", function () {
    modal.classList.add("modal-active");
    document.body.classList.add("stop-scrolling");

    if (button.classList.contains("q3-button")) {
      carImg.src = "./assets/ProductImages/product-card-audi-q3.png";
      carName.innerHTML = "Audi Q3 2020";
      calculate(Q3);
      carPrice.innerHTML = (Q3.totalPrice / 1000).toFixed(3) + " €";
      document.querySelector(".q3-price").innerHTML =
        (Q3.totalPrice / 1000).toFixed(3) + " €";
    } else if (button.classList.contains("a4-button")) {
      carImg.src = "./assets/ProductImages/product-card-audi-a4.png";
      carName.innerHTML = "Audi A4 2020";
      calculate(A4);
      carPrice.innerHTML = (A4.totalPrice / 1000).toFixed(3) + " €";
      document.querySelector(".a4-price").innerHTML =
        (A4.totalPrice / 1000).toFixed(3) + " €";
    } else if (button.classList.contains("a3-button")) {
      carImg.src = "./assets/ProductImages/product-card-audi-a3.png";
      carName.innerHTML = "Audi A3 2020";
      calculate(A3);
      carPrice.innerHTML = (A3.totalPrice / 1000).toFixed(3) + " €";
      document.querySelector(".a3-price").innerHTML =
        (A3.totalPrice / 1000).toFixed(3) + " €";
    } else {
      carImg.src = "./assets/ProductImages/product-card-audi-q7.png";
      carName.innerHTML = "Audi Q7 2020";
      calculate(Q7);
      carPrice.innerHTML = (Q7.totalPrice / 1000).toFixed(3) + " €";
      document.querySelector(".q7-price").innerHTML =
        (Q7.totalPrice / 1000).toFixed(3) + " €";
    }
  })
);

closeModal.addEventListener("click", function () {
  modal.classList.remove("modal-active");
  document.body.classList.remove("stop-scrolling");
});

function isChecked(checkbox, param) {
  if (param) {
    checkbox.checked = true;
  } else {
    checkbox.checked = false;
  }
}

function calculate(car) {
  checkboxes.forEach((checkbox) => {
    if (checkbox.classList.contains("electrical-system")) {
      isChecked(checkbox, car.electricalSystem);
    } else if (checkbox.classList.contains("air-suspension")) {
      isChecked(checkbox, car.airSuspension);
      checkbox.addEventListener("click", function addValue() {
        if (checkbox.checked) {
          car.totalPrice += 278.6;
          car.airSuspension = true;
          carPrice.innerHTML = (car.totalPrice / 1000).toFixed(3) + " €";
        } else {
          car.totalPrice -= 278.6;
          car.airSuspension = false;
          carPrice.innerHTML = (car.totalPrice / 1000).toFixed(3) + " €";
        }
      });
    } else if (checkbox.classList.contains("side-windows")) {
      isChecked(checkbox, car.sideWindows);
      checkbox.addEventListener("click", function addValue() {
        if (checkbox.checked) {
          car.totalPrice += 558.78;
          car.sideWindows = true;
          carPrice.innerHTML = (car.totalPrice / 1000).toFixed(3) + " €";
        } else {
          car.totalPrice -= 558.78;
          car.sideWindows = false;
          carPrice.innerHTML = (car.totalPrice / 1000).toFixed(3) + " €";
        }
      });
    } else if (checkbox.classList.contains("insulating-glass")) {
      isChecked(checkbox, car.insulatingGlass);
      checkbox.addEventListener("click", function addValue() {
        if (checkbox.checked) {
          car.totalPrice += 357.29;
          car.insulatingGlass = true;
          carPrice.innerHTML = (car.totalPrice / 1000).toFixed(3) + " €";
        } else {
          car.totalPrice -= 357.29;
          car.insulatingGlass = false;
          carPrice.innerHTML = (car.totalPrice / 1000).toFixed(3) + " €";
        }
      });
    } else if (checkbox.classList.contains("ambient-led")) {
      isChecked(checkbox, car.ambientLed);
      checkbox.addEventListener("click", function addValue() {
        if (checkbox.checked) {
          car.totalPrice += 637.49;
          car.ambientLed = true;
          carPrice.innerHTML = (car.totalPrice / 1000).toFixed(3) + " €";
          console.log(car);
        } else {
          car.totalPrice -= 637.49;
          car.ambientLed = false;
          carPrice.innerHTML = (car.totalPrice / 1000).toFixed(3) + " €";
          console.log(car);
        }
      });
    }
  });
}

const slide = document.querySelector(".slides");
const images = document.querySelectorAll(".slide");

let counter = 1;
const size = images[0].clientWidth;

slide.style.transform = "translateX(" + -size * counter + "px)";

rightChevron.addEventListener("click", function () {
  slide.style.transition = "1s all";
  if (counter >= images.length - 1) return;
  counter++;
  slide.style.transform = "translateX(" + -size * counter + "px)";
});

leftChevron.addEventListener("click", function () {
  slide.style.transition = "1s all";
  if (counter <= 0) return;
  counter--;
  slide.style.transform = "translateX(" + -size * counter + "px)";
});

slide.addEventListener("transitionend", function () {
  if (images[counter].id === "lastClone") {
    console.log("last");
    slide.style.transition = "none";
    counter = images.length - 2;
    slide.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (images[counter].id === "firstClone") {
    slide.style.transition = "none";
    counter = images.length - counter;
    slide.style.transform = "translateX(" + -size * counter + "px)";
  }
});

const mobileBar = document.querySelector(".hamburger-bar");
mobileBar.addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("active");
});
