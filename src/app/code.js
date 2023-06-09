const mvcModel = `
const model = {
    darkMode= false
};
`;

const mvcController = `
const controller = {
    getDarkMode: ()=> model.darkMode,
    toggleDarkMode: () => model.darkMode = !model.darkMode,
};
`;

const mvcView = `
const body = document.body;
const darkButton = document.createElement('button');
darkButton.textContent = 'darkMode';
darkButton.addEventListener("click", ()=> {
    controler.toggleDarkMode();
    refresh();
});

body.appendChild();

const refresh = ()=> {
    if(controler.getDarkMode()) {
        darkButton.classList.add('day');
    } else {
        darkButton.classList.add('night');
    }
}
refresh();
`;

const codes = {
    mvcModel,
    mvcController,
    mvcView,
}

export default codes;
