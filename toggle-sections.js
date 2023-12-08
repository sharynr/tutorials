function ToggleSections() {
    var element = document.getElementById("li-tutorial_tips");
    var button_text = document.getElementById("expand-button");
  
    console.log("does it contain: ", button_text.innerHTML);
  
    var sections = Array.from(document.getElementsByTagName("li")).filter(li => li.id.startsWith("li-step"));
    console.log("Initial sections: ", sections);
    sections.push(element);
    console.log("New sections: ", sections);
  
    for (i = 0; i < sections.length; ++i) {
       each = sections[i];
       if (each.classList.contains("bx--accordion__item--active")) {
         each.classList.remove("bx--accordion__item--active");
         button_text.innerHTML = "Expand all sections";
         } else {
         each.classList.add("bx--accordion__item--active");
         button_text.innerHTML = "Collapse all sections";
       }
    }
    console.log("Updated sections: ", sections);
}
