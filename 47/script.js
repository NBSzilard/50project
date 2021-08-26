const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Miyah Myles',
    position: 'Marketing',
    photo:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
    text:
      "Szó szerint több száz HTML/CSS fejlesztővel dolgoztam, és azt kell mondanom, hogy az első hely ennek a fickónak jár. Ez a fickó csodálatos fejlesztő. Hangsúlyozza a jó, tiszta kódot, és figyel a részletekre. Szeretem a fejlesztőket, akik tiszteletben tartják az átgondolt tervezés minden egyes aspektusát, és mindent megtesznek, hogy kódba foglalják. Túlmutat rajta, és az MŰVÉSZETET PIXELEKKÉ alakítja át - minden hiba nélkül, minden alkalommal.",
  },
  {
    name: 'June Cha',
    position: 'Szoftver fejlsztő',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    text:
      'Ez a fickó fiatal és tehetséges informatikus, proaktív és felelősségteljes, erős munkabírással. Nagyon erős a PSD2HTML konverziókban és a HTML/CSS technológiában. Gyorsan tanul, szívesen tanul új technológiákat. Koncentrált és jó dinamikával rendelkezik a határidők és a kiemelkedő eredmények eléréséhez.',
  },
  {
    name: 'Iida Niskanen',
    position: 'Adatbevitel',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    text:
      "Ez a fickó fiatal és tehetséges informatikus, proaktív és felelősségteljes, erős munkabírással. Nagyon erős a PSD2HTML konverziókban és a HTML/CSS technológiában. Gyorsan tanul, szívesen tanul új technológiákat. Koncentrált és jó dinamikával rendelkezik a határidők és a kiemelkedő eredmények eléréséhez.",
  },
  {
    name: 'Renee Sims',
    position: 'Recepciós',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    text:
      "Ez a sráca kiváló tervező és front end fejlesztő. Jól kommunikál, gyorsan dolgozik és minőségi munkát végez. Szerencsénk volt vele dolgozni!",
  },
  {
    name: 'Jonathan Nunfiez',
    position: 'Dizájner',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    text:
      "Aggódtam, hogy a szűk határidő miatt ez a projekt nem valósítható meg. De ez a fickó bebizonyította, hogy tévedtem, nemcsak kiváló munkát végzett, hanem 1 nappal a határidő előtt is sikerült. És amikor kértem némi felülvizsgálatot, akkor PERC alatt elkészítette. Alig várom, hogy újra együtt dolgozhassak vele, és teljesen ajánlom őt. Köszönöm mégegyszer!",
  },
  {
    name: 'Sasha Ho',
    position: 'Könyvelő',
    photo:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
    text:
      'Ez a sráca kiváló tervező és front end fejlesztő. Jól kommunikál, gyorsan dolgozik és minőségi munkát végez. Szerencsénk volt vele dolgozni!',
  },
  {
    name: 'Veeti Seppanen',
    position: 'Rendező',
    photo: 'https://randomuser.me/api/portraits/men/97.jpg',
    text:
      'Ez a fickó fiatal és tehetséges informatikus, proaktív és felelősségteljes, erős munkabírással. Nagyon erős a PSD2HTML konverziókban és a HTML/CSS technológiában. Gyorsan tanul, szívesen tanul új technológiákat. Koncentrált és jó dinamikával rendelkezik a határidők és a kiemelkedő eredmények eléréséhez.',
  },
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)