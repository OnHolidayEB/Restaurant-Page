const createMainImg = () =>{
    const mainImg = document.createElement('div');
    mainImg.classList.add('rmDiv');
    mainImg.id = 'main-imgAbout';

    return mainImg;
}

const createTextWrapper = () => {
    const textWrapper = document.createElement('div');
    textWrapper.classList.add('rmDiv');
    textWrapper.id = 'text-wrapper';
    textWrapper.style.flexDirection = 'column';

    const bodyText = document.createElement('div');
    bodyText.id = 'main-text';
    bodyText.innerHTML = "We are a burger restaraunt that serves burgers."
    bodyText.style.fontSize = '36px';

    const address = document.createElement('div');
    address.id = 'address';
    address.innerHTML = '123 Ocean Avenue <br> Burgerville, NJ 16784 <br> 123.456.7891'

    textWrapper.appendChild(bodyText);
    textWrapper.appendChild(address);

    return textWrapper;
}







const aboutPage = () => {
    const content = document.getElementById('content');
    content.appendChild(createMainImg());
    content.appendChild(createTextWrapper());
}

export default aboutPage