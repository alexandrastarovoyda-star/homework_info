const nav = document.createElement('nav');
nav.className= 'navbar';

const links = [
    {text: 'Головна', href: 'pr1.html'},
    {text: 'Про мене', href: 'aboutMe.html'},
    {text: 'Мої мрії', href: 'myDream.html'},
    {text: 'Контакти', href: 'contacts.html'}
];


const ul = document.createElement('ul');

links.forEach(link => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = link.text;
    a.href = link.href;
    li.appendChild(a);
    ul.appendChild(li);
});
nav.appendChild(ul);
document.getElementById('navbar').appendChild(nav);