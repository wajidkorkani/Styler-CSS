// Flexbox Utility Generator
function generateFlexClasses() {
	const style = document.createElement('style');
	let css = '';

	// Flex container
	css += `
	.flex { display: flex; }
	.inline-flex { display: inline-flex; }
	`;

	// Direction
	const dirs = ['row', 'row-reverse', 'col', 'col-reverse'];
	const dirMap = { 'col': 'column', 'col-reverse': 'column-reverse' };
	dirs.forEach(d => {
		const val = dirMap[d] || d;
		const cls = `flex-${d.replace(/ /g, '-')}`;
		css += `.${cls} { flex-direction: ${val}; }\n`;
	});

	// Wrap
	const wraps = { 'nowrap': 'nowrap', 'wrap': 'wrap', 'wrap-reverse': 'wrap-reverse' };
	Object.entries(wraps).forEach(([k, v]) => {
		css += `.${'flex-' + k} { flex-wrap: ${v}; }\n`;
	});

	// Justify content
	const justs = ['start', 'end', 'center', 'between', 'around', 'evenly'];
	const justMap = { start: 'flex-start', end: 'flex-end', between: 'space-between', around: 'space-around', evenly: 'space-evenly' };
	justs.forEach(j => {
		const val = justMap[j] || j;
		css += `.justify-${j} { justify-content: ${val}; }\n`;
	});

	// Align items
	const aligns = ['start', 'end', 'center', 'baseline', 'stretch'];
	const alignMap = { start: 'flex-start', end: 'flex-end' };
	aligns.forEach(a => {
		const val = alignMap[a] || a;
		css += `.items-${a} { align-items: ${val}; }\n`;
	});

	// Align content
	aligns.forEach(a => {
		const val = alignMap[a] || a;
		css += `.content-${a} { align-content: ${val}; }\n`;
	});

	// Align self
	aligns.forEach(a => {
		const val = alignMap[a] || a;
		css += `.self-${a} { align-self: ${val}; }\n`;
	});

	// Gap (space between flex items) - create small set
	const gaps = { '0': '0px', '1': '0.25rem', '2': '0.5rem', '3': '0.75rem', '4': '1rem', '6': '1.5rem', '8': '2rem' };
	Object.entries(gaps).forEach(([k, v]) => {
		css += `.gap-${k} { gap: ${v}; }\n`;
		css += `.gap-x-${k} { column-gap: ${v}; }\n`;
		css += `.gap-y-${k} { row-gap: ${v}; }\n`;
	});

	// Flex grow / shrink / basis utilities
	// grow-0, grow, shrink-0, shrink, basis-{px/%/rem}
	css += `.grow-0 { flex-grow: 0; }\n`;
	css += `.grow { flex-grow: 1; }\n`;
	css += `.shrink-0 { flex-shrink: 0; }\n`;
	css += `.shrink { flex-shrink: 1; }\n`;

	const bases = ['0', 'auto', '1/2', '1/3', '2/3', '1/4', '3/4', 'full'];
	const baseMap = {
		'0': '0%',
		'auto': 'auto',
		'1/2': '50%',
		'1/3': '33.333333%',
		'2/3': '66.666667%',
		'1/4': '25%',
		'3/4': '75%',
		'full': '100%'
	};
	bases.forEach(b => {
		const v = baseMap[b];
		const cls = `basis-${b.replace('/', '-')}`;
		css += `.${cls} { flex-basis: ${v}; }\n`;
	});

	// Order utilities 0..12 and negative
	for (let i = -1; i <= 12; i++) {
		const name = i < 0 ? `-1` : `${i}`;
		css += `.order-${name} { order: ${i}; }\n`;
	}

	style.textContent = css;
	document.head.appendChild(style);
}



// Auto-initialize
if (typeof document !== 'undefined') {
	document.addEventListener('DOMContentLoaded', generateFlexClasses);
}

// Export for CommonJS/ESM
if (typeof module !== 'undefined' && module.exports) {
	module.exports = { generateFlexClasses };
}

