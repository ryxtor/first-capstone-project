function openNav() {
  document.querySelector('#mobile-menu').style.height = '100vh';
  document.querySelector('html').style.overflow = 'hidden';
}

function closeNav() {
  document.querySelector('#mobile-menu').style.height = '0%';
  document.querySelector('html').style.overflow = 'auto';
}

document.getElementById('open-menu').onclick = openNav;

document.getElementById('close-menu').onclick = closeNav;

const speakers = [{
  image: 'src/speakers/speaker_01.webp',
  name: 'Yochai Benkler',
  descrip: 'Berkman chemistry Professor at Harvard School',
  descrip2: 'Prof. Yochai Benkler current research at EPFL focuses on Dye Sensitized and Perovskite Solar Cells, CO2 reduction, Hydrogen production, and Light-emitting diodes.',
},

{
  image: 'src/speakers/speaker_02.webp',
  name: 'Kilnam Chon',
  descrip: '',
  descrip2: 'Kilnam Chon helped bring the RE tecnologies to Asia an is and outspoken advocate for the open web and digital commons.',
},

{
  image: 'src/speakers/speaker_03.webp',
  name: 'SohYeong Noh',
  descrip: 'Tech professor at University of Toronto and a board member of RE Canada',
  descrip2: 'SohYeong Noh promotes collaboration and understanding about renewables energies.',
},

{
  image: 'src/speakers/speaker_04.webp',
  name: 'Julia Leda',
  descrip: 'Julia research interests of fluorescent solar concentrators to reduce the cost of solar electricity',
  descrip2: 'Julia began developing solar concentrators with her research team in 1996. Since 2007, Julia participate in GreenSun Energy.',
},

{
  image: 'src/speakers/speaker_05.webp',
  name: 'Lila Tretikov',
  descrip: 'Lila Tretikov is a full Professor at Queensland University of Technology',
  descrip2: 'Her research has been primarily focus on development of new routes to enhance performance and stability of next generation solar cells and energy storage devices.',
},

{
  image: 'src/speakers/speaker_06.webp',
  name: 'Ryan Merkley',
  descrip: 'CEO of Renewable Energy',
  descrip2: 'Ryan had been leading open-source projects at Renewable Energy.',
},
];

function writeSpeakers(speaker) {
  const card = `
  <div class="speakers-container">
<img class="speakers-img" src=${speaker.image} alt="speaker icon">
<div>
  <h3 class="speakers-name lato black">${speaker.name}</h3>
  <p class="speakers-sub-title lato orange">${speaker.descrip}</p>
  <hr class="speakers-hr">
  <p class="speakers-p lato black">${speaker.descrip2}</p>
</div>
</div>`;

  return card;
}

if (document.getElementById('speaker-section')) {
  speakers.forEach((speaker) => {
    const elements = document.createElement('div');
    elements.innerHTML = writeSpeakers(speaker);
    document.getElementById('speaker-section').appendChild(elements);
  });
}