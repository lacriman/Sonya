const generateButton = document.getElementById('compliments__button');
let complimentText = document. getElementById('compliments__text')
generateButton.addEventListener('click', generateCompliment);

function generateCompliment() {
   complimentText.innerHTML = 'It works';
}