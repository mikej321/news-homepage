import './styles/style.sass';

// variables
const container = document.querySelector('.container');
const closedButton = document.querySelector('.closed');
const openButton = document.querySelector('.open');
const linkContainer = document.querySelector('.link_container');

closedButton.addEventListener('click', () => {
    if (container.hasAttribute('menu_open')) {
        return;
    } else if (!container.hasAttribute('menu_open')) {
        container.setAttribute('menu_open', '');
        linkContainer.removeAttribute('closed');
    }
})

openButton.addEventListener('click', () => {
    if (!container.hasAttribute('menu_open')) {
        return;
    } else if (container.hasAttribute('menu_open')) {
        container.removeAttribute('menu_open');
        linkContainer.setAttribute('closed', '');
    }
})