const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const cat = document.querySelector(".cat");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "Bestieieieieiie kominggggg wennn🥰🥰🥰🥰🥰🥰🥰🥰😘😘😘😘";
    cat.src=URL("https://media.tenor.com/arqlNu8gyJYAAAAC/cat-cat-jumping.gif");
  
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});