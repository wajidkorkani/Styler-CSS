// Select the <head> element
const head = document.querySelector('head');

// Define an empty string to store CSS rules
let css = '';

let bgColor = document.querySelectorAll('[class*=hover\\:bg-]');
bgColor.forEach(element => {
  let colorClass = element.className.match(/hover\:bg\-(\S+)/);
  if (colorClass && colorClass.length > 1) {
    let colorName = colorClass[1];
    css += `:hover.hover\\:bg-${colorName} { background-color: ${colorName}; }\n`;
  }
});


let TextColor = document.querySelectorAll('[class*=hover\\:text-]');
bgColor.forEach(element => {
  let colorClass = element.className.match(/hover\:text\-(\S+)/);
  if (colorClass && colorClass.length > 1) {
    let colorName = colorClass[1];
    css += `:hover.hover\\:text-${colorName} { color: ${colorName}; }\n`;
  }
});



// Generated CSS rules for classes hover or psudo classes
for (let i = 1; i <= 1000; i++) {
  css += `.hover\\:rounded-${i}:hover { border-radius: ${i}px; }\n`;

  // Size section 

  css += `:hover.hover\\:min-w-${i} { min-width: ${i}px; }\n`;
  css += `:hover.hover\\:min-h-${i} { min-height: ${i}px; }\n`;
  css += `:hover.hover\\:max-w-${i} { max-width: ${i}px; }\n`;
  css += `:hover.hover\\:max-h-${i} { max-height: ${i}px; }\n`;
  css += `:hover.hover\\:w-${i} { width: ${i}px; }\n`;
  css += `:hover.hover\\:h-${i} { height: ${i}px; }\n`;

  // Font size 
  css += `:hover.hover\\:font-${i} { font-size: ${i}px; }\n`;

  // Margin section 
  css += `:hover.hover\\:margin-top-${i} { margin-top: ${i}px; }\n`;
  css += `:hover.hover\\:margin-bottom-${i} { margin-bottom: ${i}px; }\n`;
  css += `:hover.hover\\:margin-left-${i} { margin-left: ${i}px; }\n`;
  css += `:hover.hover\\:margin-right-${i} { margin-right: ${i}px; }\n`;

  // Padding section 
  css += `:hover.hover\\:padding-${i} { padding: ${i}px; }\n`;
  css += `:hover.hover\\:padding-top-${i} { padding-top: ${i}px; }\n`;
  css += `:hover.hover\\:padding-bottom-${i} { padding-bottom: ${i}px; }\n`;
  css += `:hover.hover\\:padding-left-${i} { padding-left: ${i}px; }\n`;
  css += `:hover.hover\\:padding-right-${i} { padding-right: ${i}px; }\n`;
}

// Create a <style> element 
const styleEl = document.createElement('style');

// Set the text content using template literal for cleaner string construction
styleEl.textContent = css;

// Append the <style> element to the <head> element
head.appendChild(styleEl);
