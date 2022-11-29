const photo = document.querySelector(".photo");
const post = document.querySelector(".post");
const likeCount = document.querySelector(".like");
const likeIcon = document.querySelector(".hearth2");
const commentInput = document.querySelector(".commentInput");
const comments = document.querySelector(".comments");
const addComment = document.querySelector(".addComment");
const underphotoIconsLeft = document.querySelector(".underphotoIconsLeft");
// like photo effect1

let likeCount1 = 0;
photo.addEventListener("dblclick", (e) => {
  likeCount1++;
  like(e);
  likeControl();
});

const like = (e) => {
  const hearth = document.createElement("i");

  hearth.classList.add("fa-solid");
  hearth.classList.add("fa-heart");

  hearth.style.left = `${e.offsetX}px`;
  hearth.style.top = `${e.offsetY}px`;

  post.appendChild(hearth);

  setTimeout(() => {
    hearth.remove();
  }, 1200);
};

const likeControl = () => {
  if (likeCount1 === 0) {
    likeCount.innerHTML = `${likeCount1} like`;
  } else {
    likeCount.innerHTML = `${likeCount1} likes`;
  }
};

// like photo effect1

// like icon effect 2
// let likeCount2 = 0;
// likeIcon.addEventListener("click", () => {
//   likeIcon.classList.toggle("active");

//   likeControl();
// });

// const likeEffect = () => {
//   const hrt1 = document.createElement("i");
//   const hrt2 = document.createElement("i");
//   const hrt3 = document.createElement("i");
//   const hrt4 = document.createElement("i");
//   const hrt5 = document.createElement("i");

//   hrt1.classList.add("fa-solid");
//   hrt1.classList.add("fa-heart");
//   hrt1.classList.add("like-effect");

//   hrt2.classList.add("fa-solid");
//   hrt2.classList.add("fa-heart");
//   hrt2.classList.add("like-effect");

//   hrt3.classList.add("fa-solid");
//   hrt3.classList.add("fa-heart");
//   hrt3.classList.add("like-effect");

//   hrt4.classList.add("fa-solid");
//   hrt4.classList.add("fa-heart");
//   hrt4.classList.add("like-effect");

//   hrt5.classList.add("fa-solid");
//   hrt5.classList.add("fa-heart");
//   hrt5.classList.add("like-effect");

//   underphotoIconsLeft.appendChild(hrt1);
//   underphotoIconsLeft.appendChild(hrt2);
//   underphotoIconsLeft.appendChild(hrt3);
//   underphotoIconsLeft.appendChild(hrt4);
//   underphotoIconsLeft.appendChild(hrt5);

//   setTimeout(() => {
//     hrt1.remove();
//     hrt2.remove();
//     hrt3.remove();
//     hrt4.remove();
//     hrt5.remove();
//   }, 1500);
// };

// const likeControl = () => {
//   if (likeCount2 === 0) {
//     likeCount2++;
//     likeCount.innerHTML = `${likeCount2} likes`;
//     likeEffect();
//   } else if (likeCount2 === 1) {
//     likeCount2 = 0;
//     likeCount.innerHTML = `${likeCount2} like`;
//   }
// };

// like icon effect 2

// add comment

post.addEventListener("submit", (e) => {
  e.preventDefault();
  addComments();
  clearInputVal();
});

let userId = 0;
const addComments = () => {
  userId++;
  const cmnt = document.createElement("li");
  cmnt.classList.add("comment");
  cmnt.innerHTML = textLim(commentInput.value);
  comments.appendChild(cmnt);
};

const clearInputVal = () => {
  commentInput.value = "";
};

const textLim = (len) => {
  if (len.length > 50) {
    const val1 = `<h5>user${userId}</h5><span class="commentText"> ${commentInput.value.substring(
      0,
      50
    )}...</span><i class="fa-solid fa-heart hearthComment"></i>`;
    return val1;
  } else {
    const val2 = `<h5>user${userId}</h5><span class="commentText"> ${commentInput.value}</span><i class="fa-solid fa-heart hearthComment"></i>`;
    return val2;
  }
};

// add comment
