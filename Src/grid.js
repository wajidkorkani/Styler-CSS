// Grid System Generator
function generateGridClasses() {

    const stylesheet = document.createElement('style');
    let gridCSS = '';

    // Grid Container Classes
    gridCSS += `
        .grid {
            display: grid;
        }
        .inline-grid {
            display: inline-grid;
        }
        
        /* Grid Row Classes */
        .grid-rows-1 { grid-template-rows: repeat(1, minmax(0, 1fr)); }
        .grid-rows-2 { grid-template-rows: repeat(2, minmax(0, 1fr)); }
        .grid-rows-3 { grid-template-rows: repeat(3, minmax(0, 1fr)); }
        .grid-rows-4 { grid-template-rows: repeat(4, minmax(0, 1fr)); }
        .grid-rows-5 { grid-template-rows: repeat(5, minmax(0, 1fr)); }
        .grid-rows-6 { grid-template-rows: repeat(6, minmax(0, 1fr)); }
        
        .grid-rows-none { grid-template-rows: none; }
        .grid-rows-auto { grid-template-rows: auto; }
        
        /* Grid Auto Rows */
        .auto-rows-auto { grid-auto-rows: auto; }
        .auto-rows-min { grid-auto-rows: min-content; }
        .auto-rows-max { grid-auto-rows: max-content; }
        .auto-rows-fr { grid-auto-rows: minmax(0, 1fr); }
    `;

    // Grid Template Columns
    // Generate classes for 1-12 columns

    for (let i = 1; i <= 12; i++) {
        gridCSS += `
        .grid-cols-${i} {
            grid-template-columns: repeat(${i}, minmax(0, 1fr));
        }`;
    }

    // Grid Column Span

    for (let i = 1; i <= 12; i++) {
        gridCSS += `
        .col-span-${i} {
            grid-column: span ${i} / span ${i};
        }`;
    }

    // Grid Row Span
    for (let i = 1; i <= 6; i++) {
        gridCSS += `
        .row-span-${i} {
            grid-row: span ${i} / span ${i};
        }`;
    }

    // Grid Gap
    const gaps = {
        '0': '0px',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem'
    };

    Object.entries(gaps).forEach(([key, value]) => {
        gridCSS += `
        .gap-${key} {
            gap: ${value};
        }
        .gap-x-${key} {
            column-gap: ${value};
        }
        .gap-y-${key} {
            row-gap: ${value};
        }`;
    });

    // Grid Auto Flow
    const flows = ['row', 'col', 'row-dense', 'col-dense'];
    flows.forEach(flow => {
        gridCSS += `
        .grid-flow-${flow} {
            grid-auto-flow: ${flow};
        }`;
    });

    // Grid Justification and Alignment
    const alignments = ['start', 'end', 'center', 'stretch'];
    alignments.forEach(align => {
        gridCSS += `
        .justify-items-${align} {
            justify-items: ${align};
        }
        .justify-self-${align} {
            justify-self: ${align};
        }
        .align-items-${align} {
            align-items: ${align};
        }
        .align-self-${align} {
            align-self: ${align};
        }`;
    });

    // Add the styles to the document
    stylesheet.textContent = gridCSS;
    document.head.appendChild(stylesheet);
}

// Auto-initialize grid classes when the script loads
document.addEventListener('DOMContentLoaded', generateGridClasses);

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { generateGridClasses };
}
