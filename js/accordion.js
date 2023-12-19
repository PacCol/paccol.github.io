function refreshAccordions() {
    var accordions = document.getElementsByClassName("accordion-tab");
    for (let i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
}

refreshAccordions();