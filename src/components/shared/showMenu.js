let ShowMenu = function () {
    let home = document.getElementById("home");
    home.className === "App slideUp height100 Menu"
      ? (home.className = "App slideUp height100 Menu d-none")
      : (home.className = "App slideUp height100 Menu");
      console.log(home.className);
  }

export default ShowMenu;