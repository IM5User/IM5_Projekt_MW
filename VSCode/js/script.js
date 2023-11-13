
// Collapsible buttons von AI Tools
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {

    //Die Klasse collapsible des Buttons im HTML wird auf einen Klick abgehört
    coll[i].addEventListener("click", function() {

        //Klasse active hinzufügen um sie mittels CSS anzusprechen
        this.classList.toggle("active");

        //Anzeige Logik
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
        content.style.display = "none";
        } else {
        content.style.display = "block";
        }
    });
}