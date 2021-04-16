

const headerClass = () =>{
    const header = document.getElementById('header');
    header.style.position = "fixed";
 
 }

   
const createMainImg = () => {

    const mainImg = document.createElement('div');
    mainImg.id = 'main-img';
    mainImg.classList.add('rmDiv');

    return mainImg;
}

const createTextWrapper = () => {

    const mainText = document.createElement('div');
    mainText.id = 'text-wrapper';
    mainText.classList.add('rmDiv');

    const button = document.createElement('button');
    button.id = 'order';
    button.innerHTML = "Order Online";
    mainText.appendChild(button);

    const bodyText = document.createElement('div');
    bodyText.id = 'body-text';
    bodyText.innerHTML = "Lorem ipsum dolor sit amet, \
            consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, \
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim \id est laborum."

    mainText.appendChild(button);
    mainText.appendChild(bodyText);

    return mainText;
}


const titlePage = () => {
    const content = document.getElementById('content');

    headerClass();
    content.appendChild(createMainImg());
    content.appendChild(createTextWrapper());
}

    



    


export default titlePage;