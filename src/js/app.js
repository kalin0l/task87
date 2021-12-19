import "../scss/app.scss";
import * as R from 'ramda'


window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  let classes = R.pluck('class');
  const getClasses = classes([
    { name: "John", class: "is-primary" },
    { age: 23, class: "is-warning" },
    { job: "programmer", class: "is-danger" },
  ]);
  console.log(getClasses[0],getClasses[1],getClasses[2]);
  const arrayToPluck = [
    { name: "John", class: "is-primary" },
    { age: 23, class: "is-warning" },
    { job: "programmer", class: "is-danger" },
  ];
  const articles = document.querySelectorAll("article");

  for(let i = 0; i<articles.length;i++){
   for(let j = 0; j < getClasses.length;j++){
     if(i === j) {
       articles[i].classList.add(getClasses[j]);
     }
   }
  }
});