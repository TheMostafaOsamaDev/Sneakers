// Show/Hide Menu
let menuShow = document.querySelector(".menu");
let menuClose = document.querySelector("ul.links .close");
let links = document.querySelector("ul.links");
menuShow.addEventListener("click", (_) => {
  links.style.left = "0px";
  document.querySelector("span.overlay").classList.add("show-overlay");
});
menuClose.addEventListener("click", (_) => {
  links.style = "";
  document.querySelector("span.overlay").classList.remove("show-overlay");
});
document.querySelector("span.overlay").addEventListener("click", (_) => {
  links.style = "";
  document.querySelector("span.overlay").classList.remove("show-overlay");
});

// Increment/Decrement

let plus = document.querySelector("#inc");
let minus = document.querySelector("#dec");
let counter = document.querySelector(".amount .num");

plus.addEventListener("click", (_) => {
  counter.innerHTML++;
});
minus.addEventListener("click", (_) => {
  if (counter.innerHTML !== "0") {
    counter.innerHTML--;
  }
});

// Add to Cart

let addToCart = document.querySelector("#finish");
let cartConatiner = document.querySelector(".cart .conatiner ");
let itemsCounter = document.querySelector(".items-count");
let topCont = document.createElement("div");
topCont.classList.add("top");
let deleteItem = document.createElement("img");

addToCart.addEventListener("click", (_) => {
  if (counter.innerHTML !== "0") {
    added = document.createElement("div");
    checkout = document.createElement("div");
    //
    checkout.innerHTML = `<img src="images/icon-cart.svg" alt="" />Checkout`;
    added.classList.add("cart-item");
    deleteItem.classList.add("delete");
    checkout.classList.add("done");
    added.innerHTML = `
    <img src="images/image-product-1-thumbnail.jpg" alt="">
    <div class="text">
    <p>fall limited edition sneakers</p>
    <span class="calc">$125.00 x ${counter.innerHTML} <span class="fin">$${
      125 * parseInt(counter.innerHTML)
    }</span></span>
    </div>
    <img class="delete" src="images/icon-delete.svg">
		`;
    //
    counter.innerHTML = "0";

    deleteItem.src = "images/icon-delete.svg";
    cartConatiner.innerHTML = "";
    cartConatiner.appendChild(topCont);
    topCont.appendChild(added);
    cartConatiner.appendChild(checkout);
    added.appendChild(deleteItem);
    if (document.querySelectorAll(".top .cart-item").length !== 0) {
      itemsCounter.style.display = "block";
      itemsCounter.innerHTML =
        document.querySelectorAll(".top .cart-item").length;
    }
  }
  checkout.addEventListener("click", (_) => {
    console.log("Ok");
    itemsCounter.style = "";
    cartConatiner.innerHTML =
      "<p class='empty-par'>Thank you!<br>Order checkedout.</p>";
    itemsCounter.innerHTML = "0";
  });
  var deleters = document.querySelectorAll(".cart-item .delete");
  deleters.forEach((del) => {
    del.addEventListener("click", (_) => {
      del.parentElement.remove();
      itemsCounter.innerHTML =
        document.querySelectorAll(".top .cart-item").length;
      if (document.querySelectorAll(".top .cart-item").length === 0) {
        cartConatiner.innerHTML =
          "<p class='empty-par'>Your cart is empty.</p>";
        itemsCounter.style = "";
      }
    });
  });
});

// Full screen gallery
let fullScrSpn = document.querySelector("#full-src-spn");
let fullGall = document.querySelector(".full-gall");
let closeFull = document.querySelector(".close-full-gall");

fullGall.appendChild(document.querySelector(".review").cloneNode(true));
document
  .querySelector(".full-gall .prev")
  .setAttribute("onclick", "prev_full()");
document
  .querySelector(".full-gall .next")
  .setAttribute("onclick", "next_full()");
fullScrSpn.addEventListener("click", (_) => {
  fullGall.style.top = "0";
});

closeFull.addEventListener("click", (_) => {
  fullGall.style = "";
});

// Phone gallery [navigate]
let shopBoxes = document.querySelectorAll(".shopping .switcher .box");
let shopScrImgs = document.querySelectorAll(".shopping  .images img");

shopBoxes.forEach((box, index) => {
  box.addEventListener("click", (_) => {
    shopBoxes.forEach((box) => box.classList.remove("active"));
    box.classList.add("active");
    shopScrImgs.forEach((img) => img.classList.remove("full-img"));
    shopScrImgs[index].classList.add("full-img");
  });
});

let i = 0;
function next() {
  if (i < shopBoxes.length - 1) {
    shopScrImgs[i].classList.remove("full-img");
    shopScrImgs[i + 1].classList.add("full-img");
    i++;
  } else {
    shopScrImgs.forEach((box) => box.classList.remove("full-img"));
    shopScrImgs[0].classList.add("full-img");
    i = 0;
  }
}

function prev() {
  if (i !== 0) {
    shopScrImgs[i].classList.remove("full-img");
    shopScrImgs[i - 1].classList.add("full-img");
    i--;
  }
}

// Full Screen gallery [navigate]
let fullScrBoxes = document.querySelectorAll(".full-gall .switcher .box");
let fullScrImgs = document.querySelectorAll(".full-gall  .images img");

fullScrBoxes.forEach((box) => {
  box.addEventListener("click", (_) => {
    fullScrBoxes.forEach((box) => box.classList.remove("active"));
    box.classList.add("active");
    console.log(box);
  });
});

let j = 0;
function next_full() {
  if (j < fullScrBoxes.length - 1) {
    fullScrImgs[j].classList.remove("full-img");
    fullScrImgs[j + 1].classList.add("full-img");
    fullScrBoxes.forEach((box) => box.classList.remove("active"));
    fullScrBoxes[j+1].classList.add("active");
    j++;
  } else {
    fullScrImgs.forEach((box) => box.classList.remove("full-img"));
    fullScrImgs[0].classList.add("full-img");
    fullScrBoxes.forEach((box) => box.classList.remove("active"));
    fullScrBoxes[0].classList.add("active");
    j = 0;
  }
}

function prev_full() {
  if (j !== 0) {
    fullScrImgs[j].classList.remove("full-img");
    fullScrImgs[j - 1].classList.add("full-img");
    fullScrBoxes.forEach((box) => box.classList.remove("active"));
    fullScrBoxes[j - 1].classList.add("active");
    j--;
  }
}
