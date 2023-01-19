const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];
//user
const userImgEl = document.querySelector(".user-img");
userImgEl.src = "images/user-avatar.png";
//feed info
const friendImgEl = document.querySelector(".friend-user-img");
const displayNameEl = document.querySelector(".display-name");
const locationEl = document.querySelector(".location");
const postImgEl = document.querySelector(".post-img");
const likesEl = document.querySelector(".likes");
const usernameEl = document.querySelector(".caption");
const commentEl = document.querySelector(".comment");

userImgEl.src = "images/user-avatar.png";
friendImgEl.src = `${posts[0].avatar}`;
displayNameEl.innerHTML = `${posts[0].name}`;
locationEl.innerHTML = `${posts[0].location}`;
postImgEl.src = `${posts[0].post}`;
likesEl.innerHTML = `${posts[0].likes} likes`;
usernameEl.innerHTML = `<span class="username">${posts[0].username}</span>
<span class="comment">${posts[0].comment}</span>`;
