// function MediaQueryHandler(){
    let smt = '';
    let bgElements = document.querySelectorAll('[class*=sm\\:t-]');
    bgElements.forEach(element => {
    let smcolorClass = element.className.match(/sm\:t\-(\S+)/);
    if (smcolorClass && smcolorClass.length > 1) {
        let colorName = smcolorClass[1];
        smt += `@media (max-width: 767px) { .sm\\:t-${colorName} { color: ${colorName}; } }\n`;
    }
    });


    // Dynamic CSS generation based on the color class in HTML markup
    let mdt = '';
    let mdbgElements = document.querySelectorAll('[class*=md\\:t-]');
    mdbgElements.forEach(element => {
    let mdcolorClass = element.className.match(/md\:t\-(\S+)/);
    if (mdcolorClass && mdcolorClass.length > 1) {
        let colorName = mdcolorClass[1];
        mdt += `@media (min-width: 768px) { .md\\:t-${colorName} { color: ${colorName}; } }\n`;
    }
    });


    // Dynamic CSS generation based on the color class in HTML markup
    let lgt = '';
    let lgbgElements = document.querySelectorAll('[class*=lg\\:t-]');
    lgbgElements.forEach(element => {
    let lgcolorClass = element.className.match(/lg\:t\-(\S+)/);
    if (lgcolorClass && lgcolorClass.length > 1) {
        let colorName = lgcolorClass[1];
        lgt += `@media (min-width: 992px) { .lg\\:t-${colorName} { color: ${colorName}; } }\n`;
    }
    });


    // Dynamic CSS generation based on the color class in HTML markup
    let xlt = '';
    let xlbgElements = document.querySelectorAll('[class*=xl\\:t-]');
    xlbgElements.forEach(element => {
    let xlcolorClass = element.className.match(/sm\:t\-(\S+)/);
    if (xlcolorClass && xlcolorClass.length > 1) {
        let colorName = xlcolorClass[1];
        xlt += `@media (min-width: 1200px) { .xl\\:t-${colorName} { color: ${colorName}; } }\n`;
    }
    });

    let styler = document.createElement('style');
    styler.textContent += smt;
    styler.textContent += mdt;
    styler.textContent += xlt;
    styler.textContent += lgt;
    document.head.appendChild(styler);

    let style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

// }
// MediaQueryHandler()

// export {MediaQueryHandler}