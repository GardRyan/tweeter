$(document).ready(function() {
  // --- our code goes here ---
let characterLimit = 140;

  $('#tweet-text').on('input', function () {

    let characterCount = $(this).val().length;
    let remainingCharacters = characterLimit - characterCount;

    const counterElement = $(this).closest('.new-tweet').find('.counter');counterElement.text(remainingCharacters);
    
    if (remainingCharacters < 0) {
      counterElement.addClass('exceeded');
    } else {
      counterElement.removeClass('exceeded');
    }
  
  });


});