let ShowMenu = function () {
    let home = document.getElementById("home");

    //also need to check if the thing was not open mc
    home.className === "App slideUp height100 Menu"
      ? (home.className = "App slideUp height100 Menu d-none")
      : (home.className = "App slideUp height100 Menu");
      console.log(home.className);
  }

export default ShowMenu;