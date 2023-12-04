
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


// Collapsible Logik Neuste Version
// collaps
var collaps = document.getElementsByClassName("content");
var collaps_button = document.getElementsByClassName("collapsible-button");

for (i = 0; i < collaps_button.length; i++) {
    collaps_button[i].addEventListener("click", (function(index) {
        return function() {
            this.classList.toggle("active-button");
            collaps[index].classList.toggle("active-content");
        };
    })(i));
}

console.log(collaps);


