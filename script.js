const generateButton = document.getElementById('compliments__button').addEventListener('click', generateCompliment);
let complimentText = document.getElementById('compliments__text');

const compliments = [
   "Ты так красива, что я просто не могу отвести взгляд.",
   "Твои большие глаза делают тебя такой милой.",
   "Ты всегда выглядишь так свежо!",
   "Ты — воплощение изящества и очарования.",
   "У тебя такая мягкая и сияющая кожа!",
   "У тебя превосходная фигура.",
   "У тебя удивительно гармоничные черты лица.",
   "Твоя кожа выглядит такой нежной и безупречной.",
   "Ты просто ослепительна!",
   "Смотреть на тебя — одно удовольствие.",
   "Твоя улыбка светит, как солнце.",
   "Твои губы просто завораживают.",
   "Когда ты улыбаешься, внутри меня всё замирает.",
   "Твоя улыбка украсила бы обложки лучших журналов.",
   "Твои волосы такие густые и блестящие, словно шёлк.",
   "У тебя потрясающая причёска, которая подчёркивает твою индивидуальность.",
   "Твой стиль и чувство вкуса в одежде всегда безупречны.",
   "Ты излучаешь не только внешнюю красоту, но и внутреннюю, которая делает тебя ещё прекраснее.",
   "Ты просто блистаешь своим обаянием!",
   "Ты так хорошо ухаживаешь за своими волосами!"
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


let complimentsHistory = [];

function generateCompliment() {
   if (complimentsHistory.length === compliments.length) {
      complimentText.innerHTML = 'я устал придумывать комплименты';
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
      duration: .3,
      ease: "power2.out"
   });

   gsap.from(complimentText, {
      y: -80,
      duration: .1,
      ease: "bounce.out"
   });
}

function resetCompliments() {
   complimentsHistory = [];
}
resetCompliments();


