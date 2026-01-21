const nav = document.createElement('nav');
nav.className= 'navbar';

const links = [
    {text: 'Головна', href: 'pr1.html'},
    {text: 'Про мене', href: 'aboutMe.html'},
    {text: 'Мої мрії', href: 'myDream.html'},
    {text: 'Контакти', href: 'contacts.html'}
];

links.forEach(link => {
    const li = document.createElement('li'):
    const a = document.createElement('a');
    a.textContent = link.text;
    a.href = link.href;
    li.appendChild(a)
    nav.appendChild(li);
});

document.getElementById('navbar').appendChild(nav);