// Shows layout type every time we change the window size
window.addEventListener("resize", () => {
  console.log(window.outerWidth <= 640 ? "mobile" : "desktop");
});
