if (localStorage.getItem("theme") == "dark-theme") {
  $("body").addClass("dark-theme");
  $("#dark-theme-toggle-switch input").prop("checked", true);
}

$("#dark-theme-toggle-switch input").change(function() {
  if (this.checked) {
    localStorage.setItem("theme", "dark-theme");
    $("body").hide();
    $("*").addClass("no-transition");
    $("body").addClass("dark-theme");
    $("body").fadeIn(300);
    $("*").removeClass("no-transition");
  } else {
    localStorage.setItem("theme", "light-theme");
    $("body").hide();
    $("*").addClass("no-transition");
    $("body").removeClass("dark-theme");
    $("body").fadeIn(300);
    $("*").removeClass("no-transition");
  }
});
