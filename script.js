const pageBody = document.body;
const caption = document.getElementById("caption");
const ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
};

// TODO: Add images dynamically from extension settings
const setRandomImage = () => {
  const IMG_URL = "https://res.cloudinary.com/adotsoftwaresolution/image/upload/v1610969041/kwara-culture-art/";
  const backgroundImages = [
    { title: '1', caption: 'caption one' },
    { title: '2', caption: 'caption two' },
    { title: '3', caption: 'caption three' },
    { title: '4', caption: 'caption four' },
    { title: '5', caption: 'caption five' },
    { title: '6', caption: 'caption six' },
    { title: '7', caption: 'caption seven' },
    { title: '8', caption: 'caption eight' },
    { title: '9', caption: 'caption nine' },
    { title: '10', caption: 'caption ten' },
    { title: '11', caption: 'caption eleven' },
    { title: '12', caption: 'caption twelve' },
    { title: '13', caption: 'caption thirteen' },
    { title: '14', caption: 'caption fourteen' },
    { title: '15', caption: 'caption fifteen' },
    { title: '16', caption: 'caption sixteen' },
    { title: '17', caption: 'caption seventeen' },
  ];

  const count = Math.random() * backgroundImages.length
  const randomImage =
    backgroundImages[Math.floor(count)].title;
    const captionText = backgroundImages[Math.floor(count)].caption;
    caption.textContent = captionText;
  pageBody.style.backgroundImage = `url(${IMG_URL}${randomImage}.jpeg)`;
};

ready(() => {
  setRandomImage();
});
