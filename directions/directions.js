direction = document.querySelectorAll(".directions_form");
let arrayDirections = [
  direction[0],
  direction[1],
  direction[2],
  direction[3],
  direction[4],
  direction[5],
  direction[6],
  direction[7],
];
directionInfo = document.querySelectorAll(".directions_form_information");
let arrayDirectionsInfo = [
  directionInfo[0],
  directionInfo[1],
  directionInfo[2],
  directionInfo[3],
  directionInfo[4],
  directionInfo[5],
  directionInfo[6],
  directionInfo[7],
];
directionName = document.querySelectorAll(".directions_form--name");
let arrayDirectionsName = [
  directionName[0],
  directionName[1],
  directionName[2],
  directionName[3],
  directionName[4],
  directionName[5],
  directionName[6],
  directionName[7],
];
directionNumber = document.querySelectorAll(".directions_form--number");
let arrayDirectionsNumber = [
  directionNumber[0],
  directionNumber[1],
  directionNumber[2],
  directionNumber[3],
  directionNumber[4],
  directionNumber[5],
  directionNumber[6],
  directionNumber[7],
];
directionArrow = document.querySelectorAll(".directions_form_arrow");
let arrayDirectionsArrow = [
  directionArrow[0],
  directionArrow[1],
  directionArrow[2],
  directionArrow[3],
  directionArrow[4],
  directionArrow[5],
  directionArrow[6],
  directionArrow[7],
];



const displayInfo = (evt) => {
  
    if (evt.target == directionName[0] || evt.target == direction[0] || evt.target == directionArrow[0] || evt.target == directionNumber[0])
      if (directionInfo[0].style.display == "flex") {
        directionInfo[0].style.display = "none";
        directionArrow[0].style.transform = "none"
      } else {
        directionInfo[0].style.display = "flex";
        directionArrow[0].style.transform = "rotate(180deg)"
      }
      if (evt.target == directionName[1] || evt.target == direction[1] || evt.target == directionArrow[1] || evt.target == directionNumber[1])
      if (directionInfo[1].style.display == "flex") {
        directionInfo[1].style.display = "none";
        directionArrow[1].style.transform = "none"
      } else {
        directionInfo[1].style.display = "flex";
        directionArrow[1].style.transform = "rotate(180deg)"
      }
      if (evt.target == directionName[2] || evt.target == direction[2] || evt.target == directionArrow[2] || evt.target == directionNumber[2])
      if (directionInfo[2].style.display == "flex") {
        directionInfo[2].style.display = "none";
        directionArrow[2].style.transform = "none"
      } else {
        directionInfo[2].style.display = "flex";
        directionArrow[2].style.transform = "rotate(180deg)"
      }
      if (evt.target == directionName[3] || evt.target == direction[3] || evt.target == directionArrow[3] || evt.target == directionNumber[3])
      if (directionInfo[3].style.display == "flex") {
        directionInfo[3].style.display = "none";
        directionArrow[3].style.transform = "none"
      } else {
        directionInfo[3].style.display = "flex";
        directionArrow[3].style.transform = "rotate(180deg)"
      }
      if (evt.target == directionName[4] || evt.target == direction[4] || evt.target == directionArrow[4] || evt.target == directionNumber[4])
      if (directionInfo[4].style.display == "flex") {
        directionInfo[4].style.display = "none";
        directionArrow[4].style.transform = "none"
      } else {
        directionInfo[4].style.display = "flex";
        directionArrow[4].style.transform = "rotate(180deg)"
      }
      if (evt.target == directionName[5] || evt.target == direction[5] || evt.target == directionArrow[5] || evt.target == directionNumber[5])
      if (directionInfo[5].style.display == "flex") {
        directionInfo[5].style.display = "none";
        directionArrow[5].style.transform = "none"
      } else {
        directionInfo[5].style.display = "flex";
        directionArrow[5].style.transform = "rotate(180deg)"
      }
      if (evt.target == directionName[6] || evt.target == direction[6] || evt.target == directionArrow[6] || evt.target == directionNumber[6])
      if (directionInfo[6].style.display == "flex") {
        directionInfo[6].style.display = "none";
        directionArrow[6].style.transform = "none"
      } else {
        directionInfo[6].style.display = "flex";
        directionArrow[6].style.transform = "rotate(180deg)"
      }
      if (evt.target == directionName[7] || evt.target == direction[7] || evt.target == directionArrow[7] || evt.target == directionNumber[7])
      if (directionInfo[7].style.display == "flex") {
        directionInfo[7].style.display = "none";
        directionArrow[7].style.transform = "none"
      } else {
        directionInfo[7].style.display = "flex";
        directionArrow[7].style.transform = "rotate(180deg)"
      }
}
   
arrayDirections.map((direction) => {
  direction.addEventListener("click", displayInfo);
});
