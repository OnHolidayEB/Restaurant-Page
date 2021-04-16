const createHeader = () => {
        
    const header = document.createElement('header');
    header.id = ('header');
    

    const menu = document.createElement('div');
    menu.classList.add('headerBtn');
    menu.id = 'menu';
    menu.innerHTML = 'Menu';


    const title = document.createElement('div');
    title.id = 'titleBtn';
    title.innerHTML = 'Bob\'s Burgers'

    const about = document.createElement('div');
    about.classList.add('headerBtn');
    about.id = 'about';
    about.innerHTML = 'About Us'

    header.appendChild(menu);
    header.appendChild(title);
    header.appendChild(about);

    return header;
}

const headerLoader = () => {
    const content = document.getElementById('content');

   content.appendChild(createHeader());
    
}

export default headerLoader;
