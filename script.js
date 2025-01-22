const complimentsButton = document.getElementById('compliments__button')
let complimentText = document.getElementById('compliments__text');

const compliments = [
   "а твои родители случайно не фермеры? тогда как у них вырос такой красивый персик",
   "я бы назвал тебя джилет, потому что лучше для мужчины нет",
   "однажды у древних греков спросили, каково это — развязать войну из-за самой красивой девушки в мире. на что греки пожали плечами и ответили: мы не знаем, потому что соня еще не родилась",
   "твои родители случайно не клининговая компания? тогда откуда у них такой порядок",
   "я бы мог завоевать весь мир одной рукой, если бы ты держала меня за другую",
   "мне нужен компас потому что я потерялся в твоих глазах",
   "твои родители случайно не строители? тогда откуда у них такой уровень",
   "с детства говорят следовать за своей мечтой, по этому я подписался на тебя во всех социальных сетях",
   "не думала уже начать платить аренду? потому что уже который день ты не выходишь у меня из головы",
   "знаешь чем ты отличаешься от крови? кровь проходит через сердце, а ты остаешься в нем",
   "когда я смотрел в твои глаза я понимал, как хорошо что я умею плавать, а то я бы в них реально утонул",
   "ты конечно не ебало но я бы тебя завалил",
   "ты случайно не дальтонизм? потому что с тобой мой мир меняет цвет",
   "можешь прислать мне свою фотку? потому мне никто не верит в существование такого ангела как ты"
];
// -------------------------------------------------------------
// a function to pick a random compliment, but they can be repeated

// let lastCompliment = null
// function generateCompliment() {
//    let complimentNumber = Math.floor(Math.random() * compliments.length)

//    while (compliments[complimentNumber] === lastCompliment) {
//       complimentNumber = Math.floor(Math.random() * compliments.length)
//    } 
//    lastCompliment = compliments[complimentNumber]
//    complimentText.innerHTML = compliments[complimentNumber];
// }  
// -------------------------------------------------------------

window.addEventListener('load', () => {
   gsap.to(complimentsButton, {
      left: '0',  // Slide it into place
      duration: 1, // Duration of the animation
   });
});


const animateButtonClick = () => {
   complimentsButton.style.transition = 'transform .5s ease-out';
   complimentsButton.style.transform = 'scale(1.2)';

   setTimeout(() => {
      complimentsButton.style.transform = ''
   }, 100);
}

complimentsButton.addEventListener('mousedown', animateButtonClick)

complimentsButton.addEventListener('click', generateCompliment);

let complimentsHistory = [];

function generateCompliment() {
   if (complimentsHistory.length === compliments.length) {
      complimentText.innerHTML = 'с днем рождения соня 🥳🎂🎉🎈🥳🎁';
      return;
   }
   let complimentNumber;

   do {
      complimentNumber = Math.floor(Math.random() * compliments.length);
   } while (complimentsHistory.includes(complimentNumber));

   complimentsHistory.push(complimentNumber);

   complimentText.innerHTML = compliments[complimentNumber];


   // --------- Animations ------------------------
   gsap.to(complimentText, {
      opacity: 1,
      duration: .4,
      ease: "power2.out"
   });

   gsap.from(complimentText, {
      y: -60,
      duration: .2,
      ease: "bounce.out"
   });
}

function resetCompliments() {
   complimentsHistory = [];
}
resetCompliments();
