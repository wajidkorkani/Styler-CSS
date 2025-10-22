// This script generates CSS rules for hover effects based on class names in the HTML document.
// Select the <head> element
const head = document.querySelector('head');

// Define an empty string to store CSS rules
let css = '';

// Background color section 
let bgColor = document.querySelectorAll('[class*=hover\\:bg-]');
bgColor.forEach(element => {
  let colorClass = element.className.match(/hover\:bg\-(\S+)/);
  if (colorClass && colorClass.length > 1) {
    let colorName = colorClass[1];
    css += `:hover.hover\\:bg-${colorName} { background-color: ${colorName}; }\n`;
  }
});

// Text/Font color section
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

  css += `:hover.hover\\:min-width-${i} { min-width: ${i}px; }\n`;
  css += `:hover.hover\\:min-height-${i} { min-height: ${i}px; }\n`;
  css += `:hover.hover\\:max-width-${i} { max-width: ${i}px; }\n`;
  css += `:hover.hover\\:max-height-${i} { max-height: ${i}px; }\n`;
  css += `:hover.hover\\:width-${i} { width: ${i}px; }\n`;
  css += `:hover.hover\\:height-${i} { height: ${i}px; }\n`;

  // Font size 
  css += `:hover.hover\\:text-${i} { font-size: ${i}px; }\n`;

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

  // Shadow section 
  css += `:hover.hover\\:shadow-green-${i}-all { box-shadow: ${i}px ${i}px ${i*i}px green; }\n`;
  css += `:hover.hover\\:shadow-green-${i} { box-shadow: ${i}px ${i}px ${i}px green; }\n`;
  css += `:hover.hover\\:shadow-red-${i}-all { box-shadow: ${i}px ${i}px ${i*i}px red; }\n`;
  css += `:hover.hover\\:shadow-red-${i} { box-shadow: ${i}px ${i}px ${i}px red; }\n`;
  css += `:hover.hover\\:shadow-black-${i}-all { box-shadow: ${i}px ${i}px ${i*i}px black; }\n`;
  css += `:hover.hover\\:shadow-black-${i} { box-shadow: ${i}px ${i}px ${i}px black; }\n`;
  css += `.hover:shadow-yellow-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px yellow; }\n`;
  css += `.hover:shadow-yellow-${i}:hover { box-shadow: ${i}px ${i}px ${i}px yellow; }\n`;
  css += `.hover:shadow-orange-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px orange; }\n`;
  css += `.hover:shadow-orange-${i}:hover { box-shadow: ${i}px ${i}px ${i}px orange; }\n`;
  css += `.hover:shadow-purple-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px purple; }\n`;
  css += `.hover:shadow-purple-${i}:hover { box-shadow: ${i}px ${i}px ${i}px purple; }\n`;
  css += `.hover:shadow-pink-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px pink; }\n`;
  css += `.hover:shadow-pink-${i}:hover { box-shadow: ${i}px ${i}px ${i}px pink; }\n`;
  css += `.hover:shadow-brown-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px brown; }\n`;
  css += `.hover:shadow-brown-${i}:hover { box-shadow: ${i}px ${i}px ${i}px brown; }\n`;
  css += `.hover:shadow-grey-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px grey; }\n`;
  css += `.hover:shadow-grey-${i}:hover { box-shadow: ${i}px ${i}px ${i}px grey; }\n`;
  css += `.hover:shadow-black-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px black; }\n`;
  css += `.hover:shadow-black-${i}:hover { box-shadow: ${i}px ${i}px ${i}px black; }\n`;
  css += `.hover:shadow-white-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px white; }\n`;
  css += `.hover:shadow-white-${i}:hover { box-shadow: ${i}px ${i}px ${i}px white; }\n`;
  css += `.hover:shadow-cyan-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px cyan; }\n`;
  css += `.hover:shadow-cyan-${i}:hover { box-shadow: ${i}px ${i}px ${i}px cyan; }\n`;
  css += `.hover:shadow-teal-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px teal; }\n`;
  css += `.hover:shadow-teal-${i}:hover { box-shadow: ${i}px ${i}px ${i}px teal; }\n`;
  css += `.hover:shadow-lime-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px lime; }\n`;
  css += `.hover:shadow-lime-${i}:hover { box-shadow: ${i}px ${i}px ${i}px lime; }\n`;
  css += `.hover:shadow-magenta-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px magenta; }\n`;
  css += `.hover:shadow-coral-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px coral; }\n`;
  css += `.hover:shadow-coral-${i}:hover { box-shadow: ${i}px ${i}px ${i}px coral; }\n`;
  css += `.hover:shadow-silver-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px silver; }\n`;
  css += `.hover:shadow-silver-${i}:hover { box-shadow: ${i}px ${i}px ${i}px silver; }\n`;
  css += `.hover:shadow-gold-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px gold; }\n`;
  css += `.hover:shadow-gold-${i}:hover { box-shadow: ${i}px ${i}px ${i}px gold; }\n`;
  css += `.hover:shadow-crimson-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px crimson; }\n`;
  css += `.hover:shadow-crimson-${i}:hover { box-shadow: ${i}px ${i}px ${i}px crimson; }\n`;
  css += `.hover:shadow-maroon-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px maroon; }\n`;
  css += `.hover:shadow-maroon-${i}:hover { box-shadow: ${i}px ${i}px ${i}px maroon; }\n`;
  css += `.hover:shadow-navy-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px navy; }\n`;
  css += `.hover:shadow-navy-${i}:hover { box-shadow: ${i}px ${i}px ${i}px navy; }\n`;
  css += `.hover:shadow-turquoise-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px turquoise; }\n`;
  css += `.hover:shadow-turquoise-${i}:hover { box-shadow: ${i}px ${i}px ${i}px turquoise; }\n`;
  css += `.hover:shadow-olive-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px olive; }\n`;
  css += `.hover:shadow-olive-${i}:hover { box-shadow: ${i}px ${i}px ${i}px olive; }\n`;
  css += `.hover:shadow-plum-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px plum; }\n`;
  css += `.hover:shadow-plum-${i}:hover { box-shadow: ${i}px ${i}px ${i}px plum; }\n`;
  css += `.hover:shadow-violet-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px violet; }\n`;
  css += `.hover:shadow-violet-${i}:hover { box-shadow: ${i}px ${i}px ${i}px violet; }\n`;
  css += `.hover:shadow-indigo-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px indigo; }\n`;
  css += `.hover:shadow-indigo-${i}:hover { box-shadow: ${i}px ${i}px ${i}px indigo; }\n`;
  css += `.hover:shadow-orchid-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px orchid; }\n`;
  css += `.hover:shadow-orchid-${i}:hover { box-shadow: ${i}px ${i}px ${i}px orchid; }\n`;
  css += `.hover:shadow-aliceblue-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px aliceblue; }\n`;
  css += `.hover:shadow-aliceblue-${i}:hover { box-shadow: ${i}px ${i}px ${i}px aliceblue; }\n`;
  css += `.hover:shadow-antiquewhite-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px antiquewhite; }\n`;
  css += `.hover:shadow-antiquewhite-${i}:hover { box-shadow: ${i}px ${i}px ${i}px antiquewhite; }\n`;
  css += `.hover:shadow-aquamarine-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px aquamarine; }\n`;
  css += `.hover:shadow-azure-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px azure; }\n`;
  css += `.hover:shadow-azure-${i}:hover { box-shadow: ${i}px ${i}px ${i}px azure; }\n`;
  css += `.hover:shadow-beige-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px beige; }\n`;
  css += `.hover:shadow-beige-${i}:hover { box-shadow: ${i}px ${i}px ${i}px beige; }\n`;
  css += `.hover:shadow-bisque-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px bisque; }\n`;
  css += `.hover:shadow-bisque-${i}:hover { box-shadow: ${i}px ${i}px ${i}px bisque; }\n`;
  css += `.hover:shadow-blank-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px blank; }\n`;
  css += `.hover:shadow-blank-${i}:hover { box-shadow: ${i}px ${i}px ${i}px blank; }\n`;
  css += `.hover:shadow-burlywood-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px burlywood; }\n`;
  css += `.hover:shadow-burlywood-${i}:hover { box-shadow: ${i}px ${i}px ${i}px burlywood; }\n`;
  css += `.hover:shadow-cadetblue-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px cadetblue; }\n`;
  css += `.hover:shadow-cadetblue-${i}:hover { box-shadow: ${i}px ${i}px ${i}px cadetblue; }\n`;
  css += `.hover:shadow-chartreuse-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px chartreuse; }\n`;
  css += `.hover:shadow-chartreuse-${i}:hover { box-shadow: ${i}px ${i}px ${i}px chartreuse; }\n`;
  css += `.hover:shadow-chocolate-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px chocolate; }\n`;
  css += `.hover:shadow-chocolate-${i}:hover { box-shadow: ${i}px ${i}px ${i}px chocolate; }\n`;
  css += `.hover:shadow-cornflowerblue-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px cornflowerblue; }\n`;
  css += `.hover:shadow-cornflowerblue-${i}:hover { box-shadow: ${i}px ${i}px ${i}px cornflowerblue; }\n`;
  css += `.hover:shadow-cornsilk-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px cornsilk; }\n`;
  css += `.hover:shadow-cornsilk-${i}:hover { box-shadow: ${i}px ${i}px ${i}px cornsilk; }\n`;
  css += `.hover:shadow-darkgoldenrod-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px darkgoldenrod; }\n`;
  css += `.hover:shadow-darkgoldenrod-${i}:hover { box-shadow: ${i}px ${i}px ${i}px darkgoldenrod; }\n`;
  css += `.hover:shadow-darkgray-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px darkgray; }\n`;
  css += `.hover:shadow-darkgray-${i}:hover { box-shadow: ${i}px ${i}px ${i}px darkgray; }\n`;
  css += `.hover:shadow-darkgreen-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px darkgreen; }\n`;
  css += `.hover:shadow-darkgreen-${i}:hover { box-shadow: ${i}px ${i}px ${i}px darkgreen; }\n`;
  css += `.hover:shadow-darkkhaki-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px darkkhaki; }\n`;
  css += `.hover:shadow-darkkhaki-${i}:hover { box-shadow: ${i}px ${i}px ${i}px darkkhaki; }\n`;
  css += `.hover:shadow-darkorange-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px darkorange; }\n`;
  css += `.hover:shadow-darkorange-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px darkorange; }\n`;
  css += `.hover:shadow-darkorange-${i}:hover { box-shadow: ${i}px ${i}px ${i}px darkorange; }\n`;
  css += `.hover:shadow-darkorchid-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px darkorchid; }\n`;
  css += `.hover:shadow-darkorchid-${i}:hover { box-shadow: ${i}px ${i}px ${i}px darkorchid; }\n`;
  css += `.hover:shadow-darkred-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px darkred; }\n`;
  css += `.hover:shadow-darkred-${i}:hover { box-shadow: ${i}px ${i}px ${i}px darkred; }\n`;
  css += `.hover:shadow-darksalmon-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px darksalmon; }\n`;
  css += `.hover:shadow-darksalmon-${i}:hover { box-shadow: ${i}px ${i}px ${i}px darksalmon; }\n`;
  css += `.hover:shadow-darkseagreen-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px darkseagreen; }\n`;
  css += `.hover:shadow-darkseagreen-${i}:hover { box-shadow: ${i}px ${i}px ${i}px darkseagreen; }\n`;
  css += `.hover:shadow-darkslateblue-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px darkslateblue; }\n`;
  css += `.hover:shadow-darkslateblue-${i}:hover { box-shadow: ${i}px ${i}px ${i}px darkslateblue; }\n`;
  css += `.hover:shadow-darkslategray-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px darkslategray; }\n`;
  css += `.hover:shadow-darkslategray-${i}:hover { box-shadow: ${i}px ${i}px ${i}px darkslategray; }\n`;
  css += `.hover:shadow-darkturquoise-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px darkturquoise; }\n`;
  css += `.hover:shadow-darkturquoise-${i}:hover { box-shadow: ${i}px ${i}px ${i}px darkturquoise; }\n`;
  css += `.hover:shadow-darkviolet-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px darkviolet; }\n`;
  css += `.hover:shadow-darkviolet-${i}:hover { box-shadow: ${i}px ${i}px ${i}px darkviolet; }\n`;
  css += `.hover:shadow-deeppink-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px deeppink; }\n`;
  css += `.hover:shadow-deeppink-${i}:hover { box-shadow: ${i}px ${i}px ${i}px deeppink; }\n`;
  css += `.hover:shadow-deepskyblue-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px deepskyblue; }\n`;
  css += `.hover:shadow-deepskyblue-${i}:hover { box-shadow: ${i}px ${i}px ${i}px deepskyblue; }\n`;
  css += `.hover:shadow-dimgray-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px dimgray; }\n`;
  css += `.hover:shadow-dimgray-${i}:hover { box-shadow: ${i}px ${i}px ${i}px dimgray; }\n`;
  css += `.hover:shadow-dodgerblue-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px dodgerblue; }\n`;
  css += `.hover:shadow-dodgerblue-${i}:hover { box-shadow: ${i}px ${i}px ${i}px dodgerblue; }\n`;
  css += `.hover:shadow-firebrick-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px firebrick; }\n`;
  css += `.hover:shadow-firebrick-${i}:hover { box-shadow: ${i}px ${i}px ${i}px firebrick; }\n`;
  css += `.hover:shadow-floralwhite-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px floralwhite; }\n`;
  css += `.hover:shadow-floralwhite-${i}:hover { box-shadow: ${i}px ${i}px ${i}px floralwhite; }\n`;
  css += `.hover:shadow-forestgreen-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px forestgreen; }\n`;
  css += `.hover:shadow-forestgreen-${i}:hover { box-shadow: ${i}px ${i}px ${i}px forestgreen; }\n`;
  css += `.hover:shadow-fuchsia-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px fuchsia; }\n`;
  css += `.hover:shadow-fuchsia-${i}:hover { box-shadow: ${i}px ${i}px ${i}px fuchsia; }\n`;
  css += `.hover:shadow-gainsboro-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px gainsboro; }\n`;
  css += `.hover:shadow-gainsboro-${i}:hover { box-shadow: ${i}px ${i}px ${i}px gainsboro; }\n`;
  css += `.hover:shadow-ghostwhite-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px ghostwhite; }\n`;
  css += `.hover:shadow-ghostwhite-${i}:hover { box-shadow: ${i}px ${i}px ${i}px ghostwhite; }\n`;
  css += `.hover:shadow-goldenrod-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px goldenrod; }\n`;
  css += `.hover:shadow-goldenrod-${i}:hover { box-shadow: ${i}px ${i}px ${i}px goldenrod; }\n`;
  css += `.hover:shadow-greenyellow-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px greenyellow; }\n`;
  css += `.hover:shadow-greenyellow-${i}:hover { box-shadow: ${i}px ${i}px ${i}px greenyellow; }\n`;
  css += `.hover:shadow-honeydew-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px honeydew; }\n`;
  css += `.hover:shadow-honeydew-${i}:hover { box-shadow: ${i}px ${i}px ${i}px honeydew; }\n`;
  css += `.hover:shadow-hotpink-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px hotpink; }\n`;
  css += `.hover:shadow-hotpink-${i}:hover { box-shadow: ${i}px ${i}px ${i}px hotpink; }\n`;
  css += `.hover:shadow-indianred-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px indianred; }\n`;
  css += `.hover:shadow-indianred-${i}:hover { box-shadow: ${i}px ${i}px ${i}px indianred; }\n`;
  css += `.hover:shadow-ivory-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px ivory; }\n`;
  css += `.hover:shadow-ivory-${i}:hover { box-shadow: ${i}px ${i}px ${i}px ivory; }\n`;
  css += `.hover:shadow-khaki-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px khaki; }\n`;
  css += `.hover:shadow-khaki-${i}:hover { box-shadow: ${i}px ${i}px ${i}px khaki; }\n`;
  css += `.hover:shadow-lavender-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px lavender; }\n`;
  css += `.hover:shadow-lavender-${i}:hover { box-shadow: ${i}px ${i}px ${i}px lavender; }\n`;
  css += `.hover:shadow-lavenderblush-${i}-all:hover { box-shadow: ${i}px ${i}px ${i*i}px lavenderblush; }\n`;
}

// Create a <style> element 
const styleEl = document.createElement('style');

// Set the text content using template literal for cleaner string construction
styleEl.textContent = css;

// Append the <style> element to the <head> element
head.appendChild(styleEl);
