
// Cursor Tracker
// jQuery($ => {
//     let $shadow = $('#shadow-test');
//     let shadowMax = $shadow.height();
//     let shadowMin = shadowMax * -1;
//     let shadowMidPoints = 
//         [
//             $shadow.offset().left + $shadow.width() / 2 ,
//             $shadow.offset().top + $shadow.height() / 2
//         ];
  
//     $(document).on('mousemove', e => {
//       let shadowX = Math.min(shadowMax, Math.max(shadowMin+500, shadowMidPoints[0] - e.pageX));
//       let shadowY = Math.min(shadowMax, Math.max(shadowMin, shadowMidPoints[1] - e.pageY));
//       $shadow.css('box-shadow', `${shadowX}px ${shadowY}px blue`);
//     });
// });



// V1
// Collapsible Logik Neuste Version
// var collaps = document.getElementsByClassName("content-div");
// var collaps_button = document.getElementsByClassName("collapsible-button");
// var cont_ID = document.getElementById('content_div_ID');
// var cont_height = document.getElementsByClassName("content");

// // Loop durch alle Buttons im HTML mit der Klasse "collapsible-button"
// for (i = 0; i < collaps_button.length; i++) {
//     // Jeder dieser Button (jedes i) erhält einen EventListener. Wenn der button gedrückt wird dann wird die function ausgelöst
//     collaps_button[i].addEventListener("click", (function(index) {
//         return function() {
//             // Die Klasse active-button wird hinzugefügt oder weggenommen
//             this.classList.toggle("active-button");
//             // index stelt sicher, dass der gedrückte Button auch wirklich angesprochen wird und nicht ausversehen ein anderer
//             collaps[index].classList.toggle("active-content-div");
//             collaps[index].style.height = cont_height[index].style.height;
//             // cont_ID.style.height = cont_height;
//         };
//     })(i));
// }


// V2
// var collaps = document.getElementsByClassName("content-div");
// var collaps_button = document.getElementsByClassName("collapsible-button");
// var cont_height = document.getElementsByClassName("content");

// // Loop through all buttons with the class "collapsible-button" in the HTML
// for (i = 0; i < collaps_button.length; i++) {
//     // Each of these buttons (each i) receives an event listener. When the button is clicked, the function is triggered
//     collaps_button[i].addEventListener("click", (function(index) {
//         return function() {
//             // The class "active-button" is added or removed
//             this.classList.toggle("active-button");
            
//             // The index ensures that the clicked button is targeted
//             collaps[index].classList.toggle("active-content-div");

//             // Get the computed height of the content element (considering padding, margin, etc.)
//             var computedHeight = window.getComputedStyle(cont_height[index]).height;

//             // Set the height of the corresponding content-div element
//             collaps[index].style.height = computedHeight;
//         };
//     })(i));
// }


// V3
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





// Step 1: Get the element 
// var myElement = document.getElementById('myElement');
          
// // Step 2: Get the computed height
// var computedHeight = window.getComputedStyle(myElement).height;
  
// // Step 3: Assign the height with CSS
// myElement.style.height = computedHeight;

