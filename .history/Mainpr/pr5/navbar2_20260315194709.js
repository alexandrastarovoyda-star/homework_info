const nav = document.createElement('nav');
nav.className = 'navbar';

const links = [
    { text: 'Main', href: '../index.html' },
    { text: 'Winter season', href: 'winter_season.html' },
    { text: 'Recommendation', href: 'recomendation.html' },
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
