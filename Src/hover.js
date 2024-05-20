// Select the <head> element
const head = document.querySelector('head');

// Define an empty string to store CSS rules
let css = '';

let bgColor = document.querySelectorAll('[class*=hover\\:bg-]');
bgColor.forEach(element => {
  let smcolorClass = element.className.match(/hover\:bg\-(\S+)/);
  if (smcolorClass && smcolorClass.length > 1) {
    let colorName = smcolorClass[1];
    css += `:hover.hover\\:bg-${colorName} { background-color: ${colorName}; }\n`;
  }
});


let TextColor = document.querySelectorAll('[class*=hover\\:text-]');
bgColor.forEach(element => {
  let smcolorClass = element.className.match(/hover\:text\-(\S+)/);
  if (smcolorClass && smcolorClass.length > 1) {
    let colorName = smcolorClass[1];
    css += `:hover.hover\\:text-${colorName} { color: ${colorName}; }\n`;
  }
});



// Generated CSS rules for classes hover:rounded-1 to hover:rounded-1000
for (let i = 1; i <= 1000; i++) {
  css += `.hover\\:rounded-${i}:hover { border-radius: ${i}px; }\n`;
}

// Create a <style> element 
const styleEl = document.createElement('style');

// Set the text content using template literal for cleaner string construction
styleEl.textContent = bgColorCSS;

// Append the <style> element to the <head> element
head.appendChild(styleEl);
