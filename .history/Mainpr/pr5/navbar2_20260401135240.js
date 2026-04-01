const nav = document.createElement('nav');
nav.className = 'navbar';

const links = [
    { text: 'Головна', href: '../index.html' },
    { text: 'Містаб які мрію відвідати', href: 'winter_season.html' },
    { text: 'Улюблене аніме', href: 'recomendation.html' },
    { text: 'Demo', href: 'demo.html'},
    { text: 'Anime', href: 'anime.html'}
];

links.forEach(link => {
    const a = document.createElement('a');
    a.textContent = link.text;
    a.href = link.href;
    nav.appendChild(a);
});

document.getElementById('navbar').appendChild(nav);
