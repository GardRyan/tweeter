
$(document).ready(function () {

const renderTweets = function (tweets) {
  const $tweetContainer = $("#tweet-container");
  tweets.forEach((tweetData) => {
    const $tweet = createTweetElement(tweetData);
    $tweetContainer.append($tweet);
  });
};

const createTweetElement = function (tweet) {
  const $tweet = $("<article>").addClass("tweet-components");

  console.log("timeago is ", JSON.stringify(timeago, null, 4));

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
    const formData = $(this).serialize();
    console.log(formData);

    //AJAX post req in client.js that send form to server
    $.post("/tweets", formData, function (response) {
      console.log(response);
      const $tweetContainer = $("#tweet-container");
      $tweetContainer.empty();
      loadTweets();
    });
    
  });

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
