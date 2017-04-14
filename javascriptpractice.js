// in html do <script src= "NAME"   //

var newLink = document.createElement ("a");

var allParagraphs= document.getElementsByTagName ("p");

var firstParagraph=allParagraphs[0];
function revealCopy(e) {
  for (var i = 0; i <allParagraphs.length; i++) {
    if (i === 0) {
      continue;
    }
    allPragraphs[i].style.display = "none"
  }
  e.preventDefault();
}

newLink.setAttribute("href","#");

newLink.setAttribute("class", "more-link");

newLink.innerHTML="Read More";

firstParagraph.appendChild(newLink);

newLink.addEventListener("click", revealCopy);

for (var i = 0; i <allParagraphs.length; i++) {
  if (i === 0) {
    continue;
  }
  allPragraphs[i].style.display = "none"
}
