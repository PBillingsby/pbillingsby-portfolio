document.addEventListener("DOMContentLoaded", function(){
  document.getElementById('projects').style.display = "none";
  getLinks();
})
const mainInfo = document.getElementById('main-information');

function getLinks() {
  let listItems = document.getElementById('nav');

  listItems.addEventListener('click', function(e) {
    e.preventDefault();
    let linkTo = e.target.innerText.toLowerCase();
    if (linkTo === "projects") {
      debugger
      document.getElementById('projects').style.display = "";
    }
    else {
      document.getElementById('about').style.display = "";
    }
    // document.getElementById(linkTo).style.display = "none";
    debugger
    mainInfo.innerHTML = document.getElementById('projects').innerHTML;
  })
}
document.getElementsByTagName('img');