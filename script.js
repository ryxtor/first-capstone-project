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

const speakers = [ {
  image: 'src/speakers/speaker_01.png',
  name: 'Yochai Benkler',
  descrip: 'Berkman Professor of entrepreneurial Legal Studies at Harvard Law School',
  descrip2: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2005',
},

{
  image: 'src/speakers/speaker_02.png',
  name: 'Yochai Benkler',
  descrip: 'Berkman Professor of entrepreneurial Legal Studies at Harvard Law School',
  descrip2: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2005',
},

{
  image: 'src/speakers/speaker_03.png',
  name: 'Yochai Benkler',
  descrip: 'Berkman Professor of entrepreneurial Legal Studies at Harvard Law School',
  descrip2: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2005',
},

{
  image: 'src/speakers/speaker_04.png',
  name: 'Yochai Benkler',
  descrip: 'Berkman Professor of entrepreneurial Legal Studies at Harvard Law School',
  descrip2: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2005',
},

{
  image: 'src/speakers/speaker_05.png',
  name: 'Yochai Benkler',
  descrip: 'Berkman Professor of entrepreneurial Legal Studies at Harvard Law School',
  descrip2: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2005',
},

{
  image: 'src/speakers/speaker_06.png',
  name: 'Yochai Benkler',
  descrip: 'Berkman Professor of entrepreneurial Legal Studies at Harvard Law School',
  descrip2: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2005',
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
</div>`

return card;
}

speakers.forEach((speaker) => {
  const elements = document.createElement('div');
  elements.innerHTML = writeSpeakers(speaker);
  document.getElementById('speaker-section').appendChild(elements);
})