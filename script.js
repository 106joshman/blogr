function navToggle() {
    console.log(window.innerWidth);
    let nav = document.getElementById("sidenav");
    let bars = document.getElementById("bars");
    if (nav.className !== "sidebar") {
      nav.classList.remove("hidenav");
      bars.classList.remove("fa-bars");
      bars.classList.add("fa-times");
    } else {
      nav.classList.add("hidenav");
      bars.classList.remove("fa-times");
      bars.classList.add("fa-bars");
    }
  }