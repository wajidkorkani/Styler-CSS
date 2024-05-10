let css = '';
for (let i = 1; i <= 4000; i++) {
  // Size section 
  css += `.w-${i} { width: ${i}px; }\n`;
  css += `.h-${i} { height: ${i}px; }\n`;
  css += `.max-w-${i} { max-width: ${i}px; }\n`;
  css += `.max-h-${i} { max-height: ${i}px; }\n`;

  // Margin section
  css += `.m-t-${i} { margin-top: ${i}px; }\n`;
  css += `.m-b-${i} { margin-bottom: ${i}px; }\n`;
  css += `.m-r-${i} { margin-right: ${i}px; }\n`;
  css += `.m-l-${i} { margin-left: ${i}px; }\n`;

  // Padding section 
  css += `.p-${i} { padding: ${i}px; }\n`;

  // Grid section 
  css += `.col-span-${i} { grid-column-start: span ${i}; }\n`;
  css += `.row-span-${i} { grid-row-start: span ${i}; }\n`;

  // Media query section for small size
  css += `@media (max-width: 767px) { .sm\\:w-${i} { width: ${i}px; } }\n`;
  css += `@media (max-width: 767px) { .sm\\:h-${i} { height: ${i}px; } }\n`;
  css += `@media (max-width: 767px) { .sm\\:m-r-${i} { margin-right: ${i}px; } }\n`;
  css += `@media (max-width: 767px) { .sm\\:m-l-${i} { margin-left: ${i}px; } }\n`;
  css += `@media (max-width: 767px) { .sm\\:m-t-${i} { margin-top: ${i}px; } }\n`;
  css += `@media (max-width: 767px) { .sm\\:m-b-${i} { margin-bottom: ${i}px; } }\n`;
  css += `@media (max-width: 767px) { .sm\\:p-${i} { padding: ${i}px; } }\n`;

  // Media query section for medium size
  css += `@media (min-width: 768px) { .md\\:w-${i} { width: ${i}px; } }\n`;
  css += `@media (min-width: 768px) { .md\\:h-${i} { height: ${i}px; } }\n`;
  css += `@media (min-width: 768px) { .md\\:m-r-${i} { margin-right: ${i}px; } }\n`;
  css += `@media (min-width: 768px) { .md\\:m-l-${i} { margin-left: ${i}px; } }\n`;
  css += `@media (min-width: 768px) { .md\\:m-t-${i} { margin-top: ${i}px; } }\n`;
  css += `@media (min-width: 768px) { .md\\:m-b-${i} { margin-bottom: ${i}px; } }\n`;
  css += `@media (min-width: 768px) { .md\\:p-${i} { padding: ${i}px; } }\n`;

  // Media query section for large size
  css += `@media (min-width: 992px) { .lg\\:w-${i} { width: ${i}px; } }\n`;
  css += `@media (min-width: 992px) { .lg\\:h-${i} { height: ${i}px; } }\n`;
  css += `@media (min-width: 992px) { .lg\\:m-r-${i} { margin-right: ${i}px; } }\n`;
  css += `@media (min-width: 992px) { .lg\\:m-l-${i} { margin-left: ${i}px; } }\n`;
  css += `@media (min-width: 992px) { .lg\\:m-t-${i} { margin-top: ${i}px; } }\n`;
  css += `@media (min-width: 992px) { .lg\\:m-b-${i} { margin-bottom: ${i}px; } }\n`;
  css += `@media (min-width: 992px) { .lg\\:p-${i} { padding: ${i}px; } }\n`;

  // Media query section for extra large size
  css += `@media (min-width: 1200px) { .xl\\:w-${i} { width: ${i}px; } }\n`;
  css += `@media (min-width: 1200px) { .xl\\:h-${i} { height: ${i}px; } }\n`;
  css += `@media (min-width: 1200px) { .xl\\:m-r-${i} { margin-right: ${i}px; } }\n`;
  css += `@media (min-width: 1200px) { .xl\\:m-l-${i} { margin-left: ${i}px; } }\n`;
  css += `@media (min-width: 1200px) { .xl\\:m-t-${i} { margin-top: ${i}px; } }\n`;
  css += `@media (min-width: 1200px) { .xl\\:m-b-${i} { margin-bottom: ${i}px; } }\n`;
  css += `@media (min-width: 1200px) { .xl\\:p-${i} { padding: ${i}px; } }\n`;
}

// Dynamic CSS generation based on the color class in HTML markup
let scss = '';
let bgElements = document.querySelectorAll('[class*=sm\\:bg-]');
bgElements.forEach(element => {
  let colorClass = element.className.match(/sm\:bg\-(\S+)/);
  if (colorClass && colorClass.length > 1) {
    let colorName = colorClass[1];
    scss += `@media (max-width: 767px) { .sm\\:bg-${colorName} { background-color: ${colorName}; } }\n`;
    scss += `@media (min-width: 768px) { .md\\:bg-${colorName} { background-color: ${colorName}; } }\n`;
    scss += `@media (min-width: 992px) { .lg\\:bg-${colorName} { background-color: ${colorName}; } }\n`;
    scss += `@media (min-width: 1200px) { .xl\\:bg-${colorName} { background-color: ${colorName}; } }\n`;
  }
});


// Dynamic CSS generation based on the color class in HTML markup
let mdcss = '';
let mdbgElements = document.querySelectorAll('[class*=md\\:bg-]');
mdbgElements.forEach(element => {
  let mdcolorClass = element.className.match(/md\:bg\-(\S+)/);
  if (mdcolorClass && mdcolorClass.length > 1) {
    let colorName = mdcolorClass[1];
    scss += `@media (min-width: 768px) { .md\\:bg-${colorName} { background-color: ${colorName}; } }\n`;
  }
});


// Dynamic CSS generation based on the color class in HTML markup
let lgscss = '';
let lgbgElements = document.querySelectorAll('[class*=lg\\:bg-]');
lgbgElements.forEach(element => {
  let lgcolorClass = element.className.match(/lg\:bg\-(\S+)/);
  if (lgcolorClass && lgcolorClass.length > 1) {
    let colorName = lgcolorClass[1];
    scss += `@media (min-width: 992px) { .lg\\:bg-${colorName} { background-color: ${colorName}; } }\n`;
  }
});


// Dynamic CSS generation based on the color class in HTML markup
let xlscss = '';
let xlbgElements = document.querySelectorAll('[class*=xl\\:bg-]');
xlbgElements.forEach(element => {
  let xlcolorClass = element.className.match(/sm\:bg\-(\S+)/);
  if (xlcolorClass && xlcolorClass.length > 1) {
    let colorName = xlcolorClass[1];
    scss += `@media (min-width: 1200px) { .xl\\:bg-${colorName} { background-color: ${colorName}; } }\n`;
  }
});

let styler = document.createElement('style');
styler.textContent = scss;
document.head.appendChild(styler);

let style = document.createElement('style');
style.textContent = css;
document.head.appendChild(style);
