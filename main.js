import BookShelf from './index.js';

const dateTime = document.querySelector('.date-time');
const timeNow = new Date();
const newTitle = null();
const newAuthor  = null();

BookShelf = () => {
  const newBook = {
    id: timeNow.getTime(),
    title: newTitle,
    author: newAuthor,
  };
  this.arrBooks.push(newBook);
};
BookShelf();    

window.onload = () => {
  dateTime.innerHTML = timeNow;
};
