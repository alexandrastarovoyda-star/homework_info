const nav = document.createElement('nav');
nav.className = 'navbar';

const links = [
    { text: 'Головна', href: '../index.html' },
    { text: 'Міста, які мрію відвідати', href: 'city.html' },
    { text: 'Улюблене аніме', href: 'anime.html' }
];

links.forEach(link => {
    const a = document.createElement('a');
    a.textContent = link.text;
    a.href = link.href;
    nav.appendChild(a);
});

document.getElementById('navbar').appendChild(nav);
