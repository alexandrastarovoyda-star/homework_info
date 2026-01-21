const navbar = document.createElement('nav')
navbar.className= 'navbar'

const links = [
    {text: 'Головна', herf: '../html/pr1.html'},
    {text: 'Про мене', herf: '../html/aboutMe.html'},
    {text: 'Мої мрії', herf: '../html/myDream.html'},
    {text: 'Контакти', herf: '../html/contacts.html'},
]

links.forEach(link => {
    const a = document.createElement('a');
    a.textContent = link.text;
    a.herf = link.herf;
    navbar.appendChild(a)
})

document.getElementById('navbar').appendChild(nav)