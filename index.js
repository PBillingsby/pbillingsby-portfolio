document.addEventListener("DOMContentLoaded", function(){
  document.getElementById('projects').style.display = "none";
  getLinks();
})
function getLinks() {
  document.getElementById('nav').addEventListener('click', function(e) {
    let linkTo = e.target.innerText.toLowerCase();
    if (linkTo === "projects") {
      document.getElementById('about').style.display = "none";
      document.getElementById('projects').style.display = "";
    }
    else {
      document.getElementById('about').style.display = "";
      document.getElementById('projects').style.display = "none";
    }
  })
}

document.getElementsByTagName('img');
