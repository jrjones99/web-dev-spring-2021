// Couldn't Figure out how to implement logic for the next and previous buttons. Would love to know the solution if there's time.

let position = 0;


const prevImage = function() {
  // increment position by 400
  position = position + 400;
  // grab image slider from the DOM
  // adjust the styles for transform translate 400
 
    document.getElementById('clickSlider').style.transform = `translate(${position}px, 0)`;
  
};

const nextImage = function() {
  // decrement position by 400
    position = position - 400;

  // grab image slider from the DOM
  // adjust the styles for transform translate 400
  
    document.getElementById('clickSlider').style.transform = `translate(${position}px, 0)`;
  
    
};