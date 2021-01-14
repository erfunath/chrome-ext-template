
const pageBody = document.body;
const ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
};

// TODO: Add images dynamically from extension settings
const setRandomImage = () => {
  const IMG_URL = "https://thailand-exp-images.s3-us-west-2.amazonaws.com/";
  const backgroundImages = [
    "riceLady.jpg",
    "raileyBeach.jpg",
    "monksTemple.jpg",
    "monkeys.jpg",
    "manChang.jpg",
    "maeYai.jpg",
    "girlsWater.jpg",
    "girlChang.jpg",
    "floatingMarket.jpg",
    "buddha.jpg",
    "boyBudah.jpg",
    "ancient.jpg",
    "thaiBackground.jpg",
    "Yipeng.jpg",
    "islands.jpg",
    "Loy_Krathong.jpg",
    "thaiBudah.jpg",
    "komloy.jpg",
  ];

  const randomImage =
    backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
  pageBody.style.backgroundImage = `url(${IMG_URL}${randomImage})`;
};

ready(() => {
  setRandomImage();
});
