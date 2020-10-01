// I don't use modern syntax here because it is for old browsers
window.onload = function () {
  var M = Modernizr;
  var msg =
    "You are using an outdated browser. The website could not work properly. You have been warned! (:";
  if (!M.cssgradients || !M.mediaqueries || !M.flexbox) {
    alert(msg);
  }
};
