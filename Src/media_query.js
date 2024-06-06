
    let smt = '';
    let bgElementsC = document.querySelectorAll('[class*=small\\:text-]');
    bgElementsC.forEach(element => {
        let smcolorClass = element.className.match(/small\:text\-(\S+)/);
        if (smcolorClass && smcolorClass.length > 1) {
            let colorName = smcolorClass[1];
            smt += `@media (max-width: 767px) { .small\\:text-${colorName} { color: ${colorName}; } }\n`;
        }
    });


    // Dynamic CSS generation based on the color class in HTML markup
    let mdt = '';
    let mdbgElementsC = document.querySelectorAll('[class*=medium\\:text-]');
    mdbgElementsC.forEach(element => {
        let mdcolorClass = element.className.match(/medium\:text\-(\S+)/);
        if (mdcolorClass && mdcolorClass.length > 1) {
            let colorName = mdcolorClass[1];
            mdt += `@media (min-width: 768px) { .medium\\:text-${colorName} { color: ${colorName}; } }\n`;
        }
    });


    // Dynamic CSS generation based on the color class in HTML markup
    let lgt = '';
    let lgbgElementsC = document.querySelectorAll('[class*=large\\:text-]');
    lgbgElementsC.forEach(element => {
        let lgcolorClass = element.className.match(/large\:text\-(\S+)/);
        if (lgcolorClass && lgcolorClass.length > 1) {
            let colorName = lgcolorClass[1];
            lgt += `@media (min-width: 992px) { .large\\:text-${colorName} { color: ${colorName}; } }\n`;
        }
    });


    // Dynamic CSS generation based on the color class in HTML markup
    let xlt = '';
    let xlbgElementsC = document.querySelectorAll('[class*=xl\\:text-]');
    xlbgElementsC.forEach(element => {
        let xlcolorClass = element.className.match(/xl\:text\-(\S+)/); // Corrected from sm to xl
        if (xlcolorClass && xlcolorClass.length > 1) {
            let colorName = xlcolorClass[1];
            xlt += `@media (min-width: 1200px) { .xl\\:text-${colorName} { color: ${colorName}; } }\n`; // Corrected from sm to xl
        }
    });

    let Text_style = document.createElement('style');
    Text_style.textContent += smt;
    Text_style.textContent += mdt;
    Text_style.textContent += xlt;
    Text_style.textContent += lgt;
    document.head.appendChild(Text_style);

