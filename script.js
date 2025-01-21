const generateButton = document.getElementById('compliments__button').addEventListener('click', generateCompliment);
let complimentText = document.getElementById('compliments__text')

const compliments = [
   'ты красивая',
   'ты интересная',
   'ты крутая',
   'ты красивая',
   'ты интересная',
   'ты крутая',
   'ты красивая',
   'ты интересная',
   'ты крутая',
   'ты красивая',
   'ты интересная',
   'ты крутая',
   'ты умная'
]

let lastCompliment = null
function generateCompliment() {
   let complimentNumber = Math.floor(Math.random() * compliments.length)

   while (compliments[complimentNumber] === lastCompliment) {
      complimentNumber = Math.floor(Math.random() * compliments.length)
   } 
   lastCompliment = compliments[complimentNumber]
   complimentText.innerHTML = compliments[complimentNumber];
}