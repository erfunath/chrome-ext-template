const pageBody = document.body;
const ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
};

// TODO: Add images dynamically from extension settings
const setRandomImage = () => {
  const IMG_URL = "https://res.cloudinary.com/adotsoftwaresolution/image/upload/v1610969041/kwara-culture-art/";
  const backgroundImages = [
    { title: '1', caption: '' },
    { title: '2', caption: '' },
    { title: '3', caption: '' },
    { title: '4', caption: '' },
    { title: '5', caption: '' },
    { title: '6', caption: '' },
    { title: '7', caption: '' },
    { title: '8', caption: '' },
    { title: '9', caption: '' },
    { title: '10', caption: '' },
    { title: '11', caption: '' },
    { title: '12', caption: '' },
    { title: '13', caption: '' },
    { title: '14', caption: '' },
    { title: '15', caption: '' },
    { title: '16', caption: '' },
    { title: '17', caption: '' },
  ];

  const count = Math.random() * backgroundImages.length
  const randomImage =
    backgroundImages[Math.floor(count)].title;
  pageBody.style.backgroundImage = `url(${IMG_URL}${randomImage}.jpeg)`;
};

ready(() => {
  setRandomImage();
});
