class menuItem {
    constructor(title, desc){
        this.title = title
        this.desc = desc
    }
}

const headerClass = () =>{
   const header = document.getElementById('header');
   header.style.position = "relative";

}
const createMainImg = () => {

    const mainImg = document.createElement('div');
    mainImg.id = 'main-img';
    mainImg.classList.add('rmDiv');

    return mainImg;
}

const createMenu = (items) =>{

    //headerClass();

    const wrapper = document.createElement('div');
    wrapper.id ='menu-wrapper';
    wrapper.classList.add('rmDiv');

    const menuTitle = document.createElement('div');
    menuTitle.id='menu-title';
    menuTitle.classList.add('menu-item');
    menuTitle.innerHTML = "Menu";

    let menuItems = [] 

    for (let i = 0; i < items; i++) {
        const item = new menuItem;
        menuItems.push(item); 
    }
    
    menuItems[0].title = '1. All In A Glaze Work Burger';
    menuItems[0].desc = '(Served with Balsamic Glaze)';

    menuItems[1].title = '2. Chutney the Front Door Burger';
    menuItems[1].desc = '(Comes with Mango Chutney)';

    menuItems[2].title = '3. It Takes Bun to Know Bun Burger';
    menuItems[2].desc = '(Comes on a Fancy Bun)';

    menuItems[3].title = '4. Aw Nuts Burger';
    menuItems[3].desc = '(Comes with Peanut Butter)';

    menuItems[4].title = '5. The Hand That Rocks the Bagel Burger';
    menuItems[4].desc = '(Comes with an Everything Bagel)';

    menuItems[5].title = '6. Put Me in Poached Burger';
    menuItems[5].desc = '(Comes with a Poached Egg)';

    menuItems[6].title = '7. Corned Identity Burger';
    menuItems[6].desc = '(Comes with Corned Beef)';

    menuItems[7].title = '8. Glory Glory Jalapeno Burger';
    menuItems[7].desc = '(Comes with Jalapenos)';


    menuItems.forEach(item => { 
        const menuItem = document.createElement('div');
        const title = document.createElement('div');
        const desc = document.createElement('div');

        menuItem.classList.add("menu-item");
        title.classList.add('item-title');
        desc.classList.add('item-desc');

        title.innerHTML = item.title;
        desc.innerHTML = item.desc;

        wrapper.appendChild(menuTitle);
        wrapper.appendChild(menuItem);
        menuItem.appendChild(title);
        menuItem.appendChild(desc);

        

   })




   return wrapper;

}

const createOrderButton = () =>{
    const button = document.createElement('button');
    button.id = 'orderBtnMenu';
    button.classList.add('rmDiv');
    button.innerHTML = "Order Online";

    return button;
}

const menuPage = () => {
    const content = document.getElementById('content');
    content.appendChild(createMainImg());
    content.appendChild(createMenu(8));
    content.appendChild(createOrderButton());
}

export default menuPage;
