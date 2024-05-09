let css = '';
for (let i = 1; i <= 4000; i++) {
  css += `.w-${i} { width: ${i}px; }\n`;
  css += `.h-${i} { height: ${i}px; }\n`;
  css += `.m-t-${i} { margin-top: ${i}px; }\n`;
  css += `.m-b-${i} { margin-bottom: ${i}px; }\n`;
  css += `.m-r-${i} { margin-right: ${i}px; }\n`;
  css += `.m-l-${i} { margin-left: ${i}px; }\n`;
  css += `.p-${i} { padding: ${i}px; }\n`;
  css += `.col-span-${i} { grid-column-start: span ${i}; }\n`;
  css += `.row-span-${i} { grid-row-start: span ${i}; }\n`;
  css += `.img-${i} { background-size: cover; background-position: center; }\n`;

  // Media query section for small size
  css += `@media (max-width: 767px) { .small\\:w-${i} { width: ${i}px; } }\n`;
  css += `@media (max-width: 767px) { .small\\:h-${i} { height: ${i}px; } }\n`;
  css += `@media (max-width: 767px) { .small\\:m-r-${i} { margin-right: ${i}px; } }\n`;
  css += `@media (max-width: 767px) { .small\\:m-l-${i} { margin-left: ${i}px; } }\n`;
  css += `@media (max-width: 767px) { .small\\:m-t-${i} { margin-top: ${i}px; } }\n`;
  css += `@media (max-width: 767px) { .small\\:m-b-${i} { margin-bottom: ${i}px; } }\n`;
  css += `@media (max-width: 767px) { .small\\:p-${i} { padding: ${i}px; } }\n`;
}

// Dynamic SCSS generation based on the color class in HTML markup
let scss = '';
let bgElements = document.querySelectorAll('[class*=small\\:bg-]');
bgElements.forEach(element => {
  let colorClass = element.className.match(/small\:bg\-(\S+)/);
  if (colorClass && colorClass.length > 1) {
    let colorName = colorClass[1];
    scss += `@media (max-width: 767px) { .small\\:bg-${colorName} { background-color: ${colorName}; } }\n`;
  }
});

let styler = document.createElement('style');
styler.textContent = scss;
document.head.appendChild(styler);

let style = document.createElement('style');
style.textContent = css;
document.head.appendChild(style);
