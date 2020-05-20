// Reference: https://www.w3schools.com/howto/howto_js_active_element.asp
function toggleActiveState() {
    var linkContainer = document.getElementById("links");
    var links = linkContainer.childNodes;

    for(var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function() {
            var curr = document.getElementsByClassName("active"); // This'll only work if one link is assigned the active state at the start
            curr[0].classList.remove("active");
            this.classList.add("active");
        });
    }
}

function resetActiveState() {
    var linkStruct = document.getElementById("link-structure");
    var linkCss = document.getElementById("link-css");
    var linkJs = document.getElementById("link-javascript");
    var linkCust = document.getElementById("link-customization");

    if(!linkStruct.classList.contains("active")) {
        linkStruct.classList.add("active");
    }
    if(linkCss.classList.contains("active")) {
        linkCss.classList.remove("active");
    }
    if(linkJs.classList.contains("active")) {
        linkJs.classList.remove("active");
    }
    if(linkCust.classList.contains("active")) {
        linkCust.classList.remove("active");
    }
}
