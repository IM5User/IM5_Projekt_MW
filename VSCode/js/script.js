

// Collapsible Logik Neuste Version
var collaps = document.getElementsByClassName("content-div");
var collaps_button = document.getElementsByClassName("collapsible-button");
var cont_height = document.getElementsByClassName("content");

// Loop durch alle Buttons im HTML mit der Klasse "collapsible-button"
for (i = 0; i < collaps_button.length; i++) {
    // Jeder dieser Button (jedes i) erhält einen EventListener. Wenn der button gedrückt wird dann wird die function ausgelöst
    collaps_button[i].addEventListener("click", (function(index) {
        return function() {
            // Die Klasse active-button wird hinzugefügt oder weggenommen
            this.classList.toggle("active-button");
            
            // index stelt sicher, dass der korrekte Button angesprochen wird
            collaps[index].classList.toggle("active-content-div");

            // Höhe von der Klasse content des entsprechenden indexes wird ausgelesen
            var computedHeight = window.getComputedStyle(cont_height[index]).height;

            // Toggle zwischen 0px oder keinem string und der errechneten Höhe
            collaps[index].style.height = (collaps[index].style.height === "0px" || collaps[index].style.height === "") ? computedHeight : "0px";
        };
    })(i));
}
