// for the NYUAD Logo
const galleryA = document.querySelector("#30MFFclickable img");
const galleryAlink = document.querySelector("#galleryAlink");

galleryA.addEventListener("click", function() {
  window.location.href = galleryAlink.href;
});

const galleryB = document.querySelector("#COMICclickable img");
const galleryBlink = document.querySelector("#galleryBlink");

galleryB.addEventListener("click", function() {
  window.location.href = galleryBlink.href;
});

const galleryC = document.querySelector("#HEISTclickable img");
const galleryClink = document.querySelector("#galleryClink");

galleryC.addEventListener("click", function() {
  window.location.href = galleryClink.href;
});

const galleryD = document.querySelector("#VIDEOclickable img");
const galleryDlink = document.querySelector("#galleryDlink");

galleryD.addEventListener("click", function() {
  window.location.href = galleryDlink.href;
});
