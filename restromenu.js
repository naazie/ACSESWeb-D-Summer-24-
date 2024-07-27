document.addEventListener("DOMContentLoaded", function() {
    filterObjects('all');
});

function filterObjects(category) {
    var elements = document.getElementsByClassName("restro");
    if (category === "all") category = "";
    for (var i = 0; i < elements.length; i++) {
        removeClass(elements[i], "show");
        if (elements[i].className.indexOf(category) > -1) addClass(elements[i], "show");
    }
}

function addClass(element, className) {
    if (element.classList) {
        element.classList.add(className);
    } else {
        var currentClass = element.className.split(" ");
        if (currentClass.indexOf(className) === -1) {
            element.className += " " + className;
        }
    }
}

function removeClass(element, className) {
    if (element.classList) {
        element.classList.remove(className);
    } else {
        var currentClass = element.className.split(" ");
        var newClass = currentClass.filter(c => c !== className);
        element.className = newClass.join(" ");
    }
}