
    let smt = '';
    let bgElementsC = document.querySelectorAll('[class*=sm\\:t-]');
    bgElementsC.forEach(element => {
        let smcolorClass = element.className.match(/sm\:t\-(\S+)/);
        if (smcolorClass && smcolorClass.length > 1) {
            let colorName = smcolorClass[1];
            smt += `@media (max-width: 767px) { .sm\\:t-${colorName} { color: ${colorName}; } }\n`;
        }
    });


    // Dynamic CSS generation based on the color class in HTML markup
    let mdt = '';
    let mdbgElementsC = document.querySelectorAll('[class*=md\\:t-]');
    mdbgElementsC.forEach(element => {
        let mdcolorClass = element.className.match(/md\:t\-(\S+)/);
        if (mdcolorClass && mdcolorClass.length > 1) {
            let colorName = mdcolorClass[1];
            mdt += `@media (min-width: 768px) { .md\\:t-${colorName} { color: ${colorName}; } }\n`;
        }
    });


    // Dynamic CSS generation based on the color class in HTML markup
    let lgt = '';
    let lgbgElementsC = document.querySelectorAll('[class*=lg\\:t-]');
    lgbgElementsC.forEach(element => {
        let lgcolorClass = element.className.match(/lg\:t\-(\S+)/);
        if (lgcolorClass && lgcolorClass.length > 1) {
            let colorName = lgcolorClass[1];
            lgt += `@media (min-width: 992px) { .lg\\:t-${colorName} { color: ${colorName}; } }\n`;
        }
    });


    // Dynamic CSS generation based on the color class in HTML markup
    let xlt = '';
    let xlbgElementsC = document.querySelectorAll('[class*=xl\\:t-]');
    xlbgElementsC.forEach(element => {
        let xlcolorClass = element.className.match(/xl\:t\-(\S+)/); // Corrected from sm to xl
        if (xlcolorClass && xlcolorClass.length > 1) {
            let colorName = xlcolorClass[1];
            xlt += `@media (min-width: 1200px) { .xl\\:t-${colorName} { color: ${colorName}; } }\n`; // Corrected from sm to xl
        }
    });

    let Text_style = document.createElement('style');
    Text_style.textContent += smt;
    Text_style.textContent += mdt;
    Text_style.textContent += xlt;
    Text_style.textContent += lgt;
    document.head.appendChild(Text_style);

