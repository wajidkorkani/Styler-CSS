// Select the <head> element
const head = document.querySelector('head');

// Define an empty string to store CSS rules
let bgColorCSS = '';

let bgColor = document.querySelectorAll('[class*=hover\\:bg-]');
bgColor.forEach(element => {
  let smcolorClass = element.className.match(/hover\:bg\-(\S+)/);
  if (smcolorClass && smcolorClass.length > 1) {
    let colorName = smcolorClass[1];
    bgColorCSS += `:hover.hover\\:bg-${colorName} { background-color: ${colorName}; }\n`;
  }
});

// Create a <style> element 
const styleEl = document.createElement('style');

// Set the text content using template literal for cleaner string construction
styleEl.textContent = bgColorCSS;

// Append the <style> element to the <head> element
head.appendChild(styleEl);
