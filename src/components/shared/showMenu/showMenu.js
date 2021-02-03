const ShowMenu = () => {

  
  let home = document.getElementById("home");
  let MCs = document.getElementById("MCs");

  //also need to check if the thing was not open mc
  home.className === "App slideDown height100 Menu"
    ? (home.className = "App slideDown height100 Menu d-none")
    : (home.className = "App slideDown height100 Menu");

    MCs.className === "d-none"
    ? (MCs.className = "d-flex")
    : (MCs.className = "d-none");
  console.log(home.className);
};

export default ShowMenu;
