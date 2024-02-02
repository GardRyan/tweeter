// Fake data taken from initial-tweets.json

const tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];

const renderTweets = function(tweets) {
  console.log(tweetData);
  const $tweetContainer = $('#tweet-container');
  tweets.forEach(tweetData => {
    const $tweet = createTweetElement(tweetData);
    $tweetContainer.append($tweet);
  });
};


const createTweetElement = function(tweet) {
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
    <p>${new Date(tweet.created_at).toLocaleString()}</p>
    <div class="icons">
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i>
    </div>
  </div>`
);
console.log($tweet);
return $tweet;
};


// call the function "renderTweets"
$(document).ready(function() {
  renderTweets(tweetData);
});

.on("submit)"[,eventData], handler)

//submit the tweet using jquery
//add an event listener that listens for submit
//prevent the default behaviour (refresh)
//AJAX post req in client.js that send form to server
//serialize form data
