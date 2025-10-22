// To make media queries for text color and background color based on class names
// For small screen 
let smt = '';
let smbgElementsC = document.querySelectorAll('[class*=small\\:text-], [class*=small\\:bg-]');

smbgElementsC.forEach(element => {
    let smTextColorClass = element.className.match(/small\:text\-(\S+)/);
    let smBgColorClass = element.className.match(/small\:bg\-(\S+)/);

    if (smTextColorClass && smTextColorClass.length > 1) {
        let textColorName = smTextColorClass[1];
        smt += `@media (max-width: 767px) { .small\\:text-${textColorName} { color: ${textColorName}; } }\n`;
    }

    if (smBgColorClass && smBgColorClass.length > 1) {
        let bgColorName = smBgColorClass[1];
        smt += `@media (max-width: 767px) { .small\\:bg-${bgColorName} { background-color: ${bgColorName}; } }\n`;
    }
});

// For medium screen 
let mdt = '';
let mdbgElementsC = document.querySelectorAll('[class*=medium\\:text-], [class*=medium\\:bg-]');

mdbgElementsC.forEach(element => {
    let mdTextColorClass = element.className.match(/medium\:text\-(\S+)/);
    let mdBgColorClass = element.className.match(/medium\:bg\-(\S+)/);

    if (mdTextColorClass && mdTextColorClass.length > 1) {
        let textColorName = mdTextColorClass[1];
        mdt += `@media (min-width: 768px) { .medium\\:text-${textColorName} { color: ${textColorName}; } }\n`;
    }

    if (mdBgColorClass && mdBgColorClass.length > 1) {
        let bgColorName = mdBgColorClass[1];
        mdt += `@media (min-width: 768px) { .medium\\:bg-${bgColorName} { background-color: ${bgColorName}; } }\n`;
    }
});

// For large screen 
let lgt = '';
let lgbgElementsC = document.querySelectorAll('[class*=large\\:text-], [class*=large\\:bg-]');

lgbgElementsC.forEach(element => {
    let lgTextColorClass = element.className.match(/large\:text\-(\S+)/);
    let lgBgColorClass = element.className.match(/large\:bg\-(\S+)/);

    if (lgTextColorClass && lgTextColorClass.length > 1) {
        let textColorName = lgTextColorClass[1];
        lgt += `@media (min-width: 992px) { .large\\:text-${textColorName} { color: ${textColorName}; } }\n`;
    }

    if (lgBgColorClass && lgBgColorClass.length > 1) {
        let bgColorName = lgBgColorClass[1];
        lgt += `@media (min-width: 992px) { .large\\:bg-${bgColorName} { background-color: ${bgColorName}; } }\n`;
    }
});

// For Extra Large screen 
let xlt = '';
let xlbgElementsC = document.querySelectorAll('[class*=xl\\:text-], [class*=xl\\:bg-]');

xlbgElementsC.forEach(element => {
    let xlTextColorClass = element.className.match(/xl\:text\-(\S+)/);
    let xlBgColorClass = element.className.match(/xl\:bg\-(\S+)/);

    if (xlTextColorClass && xlTextColorClass.length > 1) {
        let textColorName = xlTextColorClass[1];
        xlt += `@media (min-width: 1200px) { .xl\\:text-${textColorName} { color: ${textColorName}; } }\n`;
    }

    if (xlBgColorClass && xlBgColorClass.length > 1) {
        let bgColorName = xlBgColorClass[1];
        xlt += `@media (min-width: 1200px) { .xl\\:bg-${bgColorName} { background-color: ${bgColorName}; } }\n`;
    }
});

let Text_style = document.createElement('style');
Text_style.textContent += smt;
Text_style.textContent += mdt;
Text_style.textContent += lgt;
Text_style.textContent += xlt;
document.head.appendChild(Text_style);
