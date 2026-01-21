const navbar = document.createElement('nav')
navbar.className= 'navbar'

const links = [
    {text: 'Головна', href: '../html/pr1.html'},
    {text: 'Про мене', href: '../html/aboutMe.html'},
    {text: 'Мої мрії', href: '../html/myDream.html'},
    {text: 'Контакти', href: '../html/contacts.html'},
]

links.forEach(link => {
    const a = document.createElement('a');
    a.textContent = link.text;
    a.herf = link.href;
    navbar.appendChild(a)
})

document.getElementById('navbar').appendChild(nav)