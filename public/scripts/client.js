$(document).ready(function () {
  const renderTweets = function (tweets) {
    const $tweetContainer = $("#tweet-container");
    tweets.forEach((tweetData) => {
      const $tweet = createTweetElement(tweetData);
      $tweetContainer.prepend($tweet);
    });
  };

  const createTweetElement = function (tweet) {
    const $tweet = $("<article>").addClass("tweet-components");

    $tweet.html(`
  <div class="img-username-refkey">
    <div class="img-username">
      <img
        src="${tweet.user.avatars}"
        alt="${tweet.user.name}'s avatar"
      />
      <span>${tweet.user.name}</span>
    </div>
    <div>${tweet.user.handle}</div>
  </div>
  <div class="tweet-content">
    <p>${tweet.content.text}</p>
  </div>
  <div class="time-icons">
  <p class="timeago">${timeago.format(tweet.created_at)}</p>
      <div class="icons">
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i>
    </div>
  </div>`);
    return $tweet;
  };

  // call the function "renderTweets"

  //submit the tweet using jquery
  //add an event listener that listens for submit
  $("#create-tweet").submit(function (event) {
    //prevent the default behaviour (refresh)

    event.preventDefault();

    //serialize form data
    const tweetText = $("#tweet-text").val();
    const sanitizedText = $("<p>").text(tweetText).html();

    if (sanitizedText === null) {
      displayMessage(
        `We're going to need a bigger boat! Or at least a caption... `,
        "error"
      );
      return;
    }
    if (sanitizedText.length > 140) {
      displayMessage(
        `We're not writing the entire LOTR, Bilbo! Let's just start with "The Hobbit", if it were 140 characters`,
        "error"
      );
      return;
    }
    console.log(sanitizedText);

    //AJAX post req in client.js that send form to server
    $.post("/tweets", { text: sanitizedText }, function (response) {
      console.log(response);
      const $tweetContainer = $("#tweet-container");
      $tweetContainer.empty();
      $("#tweet-text").val("");
      loadTweets();
    });
  });

  const displayMessage = function (message, messageType) {
    const $messageContainer = $(".message-container");
    const $message = $messageContainer.find("p");
  
    $message.text(message).addClass(messageType);
    console.log($message);

    if ($messageContainer.is(":hidden")) {
      $messageContainer.slideDown();
    }

    setTimeout(function () {
      $messageContainer.slideUp(function() {
        $message.text('').removeClass(messageType);
      });
    }, 5000);
  };

  const loadTweets = function () {
    $.ajax({
      method: "GET",
      url: "/tweets",
    }).then(function (response) {
      console.log(response);
      renderTweets(response);
    });
  };
  loadTweets();
});
