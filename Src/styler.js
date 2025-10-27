import "themeChanger.js";
import "./media_query.js";
import "./flex.js";
import "./grid.js";
import "hover.js";


let css = '';

// Rest of your code...


for (let i = 1; i <= 4000; i++) {
  // Size section 
  css += `.width-${i} { width: ${i}px; }\n`;
  css += `.height-${i} { height: ${i}px; }\n`;
  css += `.max-width-${i} { max-width: ${i}px; }\n`;
  css += `.max-height-${i} { max-height: ${i}px; }\n`;
  css += `.min-width-${i} { min-width: ${i}px; }\n`;
  css += `.min-height-${i} { min-height: ${i}px; }\n`;

  // Margin section
  css += `.margin-top-${i} { margin-top: ${i}px; }\n`;
  css += `.margin-bottom-${i} { margin-bottom: ${i}px; }\n`;
  css += `.margin-right-${i} { margin-right: ${i}px; }\n`;
  css += `.margin-left-${i} { margin-left: ${i}px; }\n`;

  // Padding section 
  css += `.padding-${i} { padding: ${i}px; }\n`;

  // Grid section 
  css += `.col-span-${i} { grid-column-start: span ${i}; }\n`;
  css += `.row-span-${i} { grid-row-start: span ${i}; }\n`;

  // Media query section for small screen size
  css += `@media (max-width: 767px) { .small\\:width-${i} { width: ${i}px; } }\n`;
  css += `@media (max-width: 767px) { .small\\:height-${i} { height: ${i}px; } }\n`;
  css += `@media (max-width: 767px) { .small\\:max-width-${i} { max-width: ${i}px; } }\n`;
  css += `@media (max-width: 767px) { .small\\:max-height-${i} { max-height: ${i}px; } }\n`;
  css += `@media (max-width: 767px) { .small\\:min-width-${i} { min-width: ${i}px; } }\n`;
  css += `@media (max-width: 767px) { .small\\:min-height-${i} { min-height: ${i}px; } }\n`;
  css += `@media (max-width: 767px) { .small\\:margin-right-${i} { margin-right: ${i}px; } }\n`;
  css += `@media (max-width: 767px) { .small\\:margin-left-${i} { margin-left: ${i}px; } }\n`;
  css += `@media (max-width: 767px) { .small\\:margin-top-${i} { margin-top: ${i}px; } }\n`;
  css += `@media (max-width: 767px) { .small\\:margin-bottom-${i} { margin-bottom: ${i}px; } }\n`;
  css += `@media (max-width: 767px) { .small\\:padding-${i} { padding: ${i}px; } }\n`;
  css += `@media (max-width: 767px) { .small\\:border-radius-${i} { border-radius: ${i}px; } }\n`;
  css += `@media (max-width: 767px) { .small\\:border-width-${i} { border-width: ${i}px; } }\n`;
  css += `@media (max-width: 767px) { .small\\:dishplay-none { display: none; } }\n`;
  css += `@media (max-width: 767px) { .small\\:display-block { display: block; } }\n`;
  css += `@media (max-width: 767px) { .small\\:flex { display: flex; } }\n`;
  css += `@media (max-width: 767px) { .small\\:grid { display: grid; } }\n`;


  // Media query section for medium screen size
  css += `@media (min-width: 768px) { .medium\\:width-${i} { width: ${i}px; } }\n`;
  css += `@media (min-width: 768px) { .medium\\:height-${i} { height: ${i}px; } }\n`;
  css += `@media (min-width: 768px) { .medium\\:max-width-${i} { max-width: ${i}px; } }\n`;
  css += `@media (min-width: 768px) { .medium\\:max-height-${i} { max-height: ${i}px; } }\n`;
  css += `@media (min-width: 768px) { .medium\\:min-width-${i} { min-width: ${i}px; } }\n`;
  css += `@media (min-width: 768px) { .medium\\:min-height-${i} { min-height: ${i}px; } }\n`;
  css += `@media (min-width: 768px) { .medium\\:margin-r-${i} { margin-right: ${i}px; } }\n`;
  css += `@media (min-width: 768px) { .medium\\:margin-l-${i} { margin-left: ${i}px; } }\n`;
  css += `@media (min-width: 768px) { .medium\\:margin-t-${i} { margin-top: ${i}px; } }\n`;
  css += `@media (min-width: 768px) { .medium\\:margin-b-${i} { margin-bottom: ${i}px; } }\n`;
  css += `@media (min-width: 768px) { .medium\\:padding-${i} { padding: ${i}px; } }\n`;
  css += `@media (min-width: 768px) { .medium\\:border-radius-${i} { border-radius: ${i}px; } }\n`;
  css += `@media (min-width: 768px) { .medium\\:border-width-${i} { border-width: ${i}px; } }\n`;
  css += `@media (min-width: 768px) { .medium\\:display-none { display: none; } }\n`;
  css += `@media (min-width: 768px) { .medium\\:display-block { display: block; } }\n`;
  css += `@media (min-width: 768px) { .medium\\:flex { display: flex; } }\n`;
  css += `@media (min-width: 768px) { .medium\\:grid { display: grid; } }\n`;

  // Media query section for large screen size
  css += `@media (min-width: 992px) { .large\\:width-${i} { width: ${i}px; } }\n`;
  css += `@media (min-width: 992px) { .large\\:height-${i} { height: ${i}px; } }\n`;
  css += `@media (min-width: 992px) { .large\\:max-width-${i} { max-width: ${i}px; } }\n`;
  css += `@media (min-width: 992px) { .large\\:max-height-${i} { max-height: ${i}px; } }\n`;
  css += `@media (min-width: 992px) { .large\\:min-width-${i} { min-width: ${i}px; } }\n`;
  css += `@media (min-width: 992px) { .large\\:min-height-${i} { min-height: ${i}px; } }\n`;
  css += `@media (min-width: 992px) { .large\\:margin-right-${i} { margin-right: ${i}px; } }\n`;
  css += `@media (min-width: 992px) { .large\\:margin-left-${i} { margin-left: ${i}px; } }\n`;
  css += `@media (min-width: 992px) { .large\\:margin-top-${i} { margin-top: ${i}px; } }\n`;
  css += `@media (min-width: 992px) { .large\\:margin-bottom-${i} { margin-bottom: ${i}px; } }\n`;
  css += `@media (min-width: 992px) { .large\\:padding-${i} { padding: ${i}px; } }\n`;
  css += `@media (min-width: 992px) { .large\\:border-radius-${i} { border-radius: ${i}px; } }\n`;
  css += `@media (min-width: 992px) { .large\\:border-width-${i} { border-width: ${i}px; } }\n`;
  css += `@media (min-width: 992px) { .large\\:display-none { display: none; } }\n`;
  css += `@media (min-width: 992px) { .large\\:display-block { display: block; } }\n`;
  css += `@media (min-width: 992px) { .large\\:flex { display: flex; } }\n`;
  css += `@media (min-width: 992px) { .large\\:grid { display: grid; } }\n`;

  // Media query section for extra large screen size
  css += `@media (min-width: 1200px) { .xl\\:width-${i} { width: ${i}px; } }\n`;
  css += `@media (min-width: 1200px) { .xl\\:height-${i} { height: ${i}px; } }\n`;
  css += `@media (min-width: 1200px) { .xl\\:max-width-${i} { max-width: ${i}px; } }\n`;
  css += `@media (min-width: 1200px) { .xl\\:max-height-${i} { max-height: ${i}px; } }\n`;
  css += `@media (min-width: 1200px) { .xl\\:min-width-${i} { min-width: ${i}px; } }\n`;
  css += `@media (min-width: 1200px) { .xl\\:min-height-${i} { min-height: ${i}px; } }\n`;
  css += `@media (min-width: 1200px) { .xl\\:margin-right-${i} { margin-right: ${i}px; } }\n`;
  css += `@media (min-width: 1200px) { .xl\\:margin-left-${i} { margin-left: ${i}px; } }\n`;
  css += `@media (min-width: 1200px) { .xl\\:margin-top-${i} { margin-top: ${i}px; } }\n`;
  css += `@media (min-width: 1200px) { .xl\\:margin-bottom-${i} { margin-bottom: ${i}px; } }\n`;
  css += `@media (min-width: 1200px) { .xl\\:padding-${i} { padding: ${i}px; } }\n`;
  css += `@media (min-width: 1200px) { .xl\\:border-radius-${i} { border-radius: ${i}px; } }\n`;
  css += `@media (min-width: 1200px) { .xl\\:border-width-${i} { border-width: ${i}px; } }\n`;
  css += `@media (min-width: 1200px) { .xl\\:display-none { display: none; } }\n`;
  css += `@media (min-width: 1200px) { .xl\\:display-bottom { display: block; } }\n`;
  css += `@media (min-width: 1200px) { .xl\\:flex { display: flex; } }\n`;
  css += `@media (min-width: 1200px) { .xl\\:grid { display: grid; } }\n`;
}

// Dynamic CSS generation based on the color class in HTML markup
let smcss = '';
let bgElements = document.querySelectorAll('[class*=small\\:bg-]');
bgElements.forEach(element => {
  let smcolorClass = element.className.match(/small\:bg\-(\S+)/);
  if (smcolorClass && smcolorClass.length > 1) {
    let colorName = smcolorClass[1];
    smcss += `@media (max-width: 767px) { .small\\:bg-${colorName} { background-color: ${colorName}; } }\n`;
  }
});



// Dynamic CSS generation based on the color class in HTML markup
let mdcss = '';
let mdbgElements = document.querySelectorAll('[class*=medium\\:bg-]');
mdbgElements.forEach(element => {
  let mdcolorClass = element.className.match(/medium\:bg\-(\S+)/);
  if (mdcolorClass && mdcolorClass.length > 1) {
    let colorName = mdcolorClass[1];
    mdcss += `@media (min-width: 768px) { .medium\\:bg-${colorName} { background-color: ${colorName}; } }\n`;
  }
});


// Dynamic CSS generation based on the color class in HTML markup
let lgcss = '';
let lgbgElements = document.querySelectorAll('[class*=large\\:bg-]');
lgbgElements.forEach(element => {
  let lgcolorClass = element.className.match(/large\:bg\-(\S+)/);
  if (lgcolorClass && lgcolorClass.length > 1) {
    let colorName = lgcolorClass[1];
    lgcss += `@media (min-width: 992px) { .large\\:bg-${colorName} { background-color: ${colorName}; } }\n`;
  }
});


// Dynamic CSS generation based on the color class in HTML markup
let xlcss = '';
let xlbgElements = document.querySelectorAll('[class*=xl\\:bg-]');
xlbgElements.forEach(element => {
  let xlcolorClass = element.className.match(/xl\:bg\-(\S+)/);
  if (xlcolorClass && xlcolorClass.length > 1) {
    let colorName = xlcolorClass[1];
    xlcss += `@media (min-width: 1200px) { .xl\\:bg-${colorName} { background-color: ${colorName}; } }\n`;
  }
});

let styler = document.createElement('style');
styler.textContent += smcss;
styler.textContent += mdcss;
styler.textContent += lgcss;
styler.textContent += xlcss;
document.head.appendChild(styler);

let style = document.createElement('style');
style.textContent = css;
document.head.appendChild(style);


