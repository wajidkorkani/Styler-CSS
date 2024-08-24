// UI changer from light to dark and from dark to light
// UI theme chagner section

let body = document.querySelector('body');
let UIBtn = document.querySelector('.changeUI');
let allBtns = document.querySelectorAll('button'); 
let dark = false;

// Adding dark mode classes in elements 
let darkUI = () => {
    body.classList.add('dark');
    // Light icon for light mode option 
    UIBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/></svg>';
}

// Removing dark mode classes in elements 
let lightUI = () => {
    body.classList.remove('dark');
    // Night icon for dark mode option
    UIBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M484-80q-84 0-157.5-32t-128-86.5Q144-253 112-326.5T80-484q0-146 93-257.5T410-880q-18 99 11 193.5T521-521q71 71 165.5 100T880-410q-26 144-138 237T484-80Zm0-80q88 0 163-44t118-121q-86-8-163-43.5T464-465q-61-61-97-138t-43-163q-77 43-120.5 118.5T160-484q0 135 94.5 229.5T484-160Zm-20-305Z"/></svg>';
}


let Mode = () => {
    dark = !dark;
    return UI();
}

function BtnUIChanger(){
    if(dark){
        allBtns.forEach(allBtn =>{
            allBtn.classList.add('WajidKorkanihasMadeThisThingPosibileSoYouCanUseThisInYourOwnProjectsByAddingOneClassInaButtonUsingStylerCSSMadeInPakistanAndThisClassIsForDarkModeHappyCoding');
            allBtn.classList.remove('WajidKorkanihasMadeThisThingPosibileSoYouCanUseThisInYourOwnProjectsByAddingOneClassInaButtonUsingStylerCSSMadeInPakistanAndThisClassIsForLightModeHappyCoding');
        })
        UIBtn.classList.remove('WajidKorkanihasMadeThisThingPosibileSoYouCanUseThisInYourOwnProjectsByAddingOneClassInaButtonUsingStylerCSSMadeInPakistanAndThisClassIsForDarkModeHappyCoding');
    }else{
        allBtns.forEach(allBtn => {
            allBtn.classList.add('WajidKorkanihasMadeThisThingPosibileSoYouCanUseThisInYourOwnProjectsByAddingOneClassInaButtonUsingStylerCSSMadeInPakistanAndThisClassIsForLightModeHappyCoding');
            allBtn.classList.remove('WajidKorkanihasMadeThisThingPosibileSoYouCanUseThisInYourOwnProjectsByAddingOneClassInaButtonUsingStylerCSSMadeInPakistanAndThisClassIsForDarkModeHappyCoding');
        })
        UIBtn.classList.remove('WajidKorkanihasMadeThisThingPosibileSoYouCanUseThisInYourOwnProjectsByAddingOneClassInaButtonUsingStylerCSSMadeInPakistanAndThisClassIsForLightModeHappyCoding');
    }
};


function UI(){
    if(dark){
        darkUI();
        BtnUIChanger();
        UIBtn.classList.remove('lightModeEnabled');
        UIBtn.classList.add('darkModeEnabled')
    }else{
        lightUI();
        BtnUIChanger();
        UIBtn.classList.remove('darkModeEnabled')
        UIBtn.classList.add('lightModeEnabled');
    };
    
};

Mode();

UIBtn.onclick = Mode;
