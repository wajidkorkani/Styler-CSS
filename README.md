
# Styler CSS

Styler CSS is a lightweight CSS library designed to simplify the process of building user interfaces. It offers a concise and intuitive syntax that allows developers to write CSS code directly within HTML classes, enhancing readability and maintainability.

## Why Use Styler CSS?

* **Simplified Syntax:** Styler CSS adopts a natural language-like approach, making it easier to write and understand CSS compared to traditional stylesheets. This can significantly improve developer productivity, especially for those new to CSS.

* **Improved Readability:** Inline styles provide a clear association between the HTML element and its styling, promoting better code organization and reducing the need to jump between files. This is particularly beneficial for complex layouts or larger projects.

* **Reduced File Size (Potential):** By incorporating styles directly within HTML, the need for separate CSS files might be minimized in smaller projects. This can lead to a slight reduction in overall file size.

* **Easy Learning Curve:** Styler CSS's simplified syntax can ease the learning curve for developers unfamiliar with traditional CSS rules. The intuitive approach can make it easier to grasp concepts and write effective styles.

## Installation

Include Styler CSS in your project by adding the following link to your HTML file:

```html
<link rel="stylesheet" href="path/to/styler.css">
<script src="path/to/styler.js"></script>
```

## Features

- **Theme Changing:** Easy theme switching functionality
- **Media Queries:** Built-in responsive design support
- **Hover Effects:** Pre-built hover animations and effects
- **Custom Styles:** Write custom styles directly in HTML classes

## Usage

### Basic Styling
```html
<div class="bg-blue color-white p-20">
  This div has a blue background, white text, and 20px padding
</div>
```

### Theme Support
```html
<body class="theme-dark">
  <!-- Your content here -->
</body>
```

### Hover Effects
```html
<button class="hover-scale">
  Hover to scale
</button>
```

### Media Queries
```html
<div class="md:hidden lg:block">
  <!-- Content visible on large screens, hidden on medium screens -->
</div>
```

## Documentation

### Core Components
- `styler.css`: Main stylesheet with predefined classes
- `styler.js`: Core JavaScript functionality
- `themeChanger.js`: Theme switching implementation
- `hover.js`: Hover effect utilities
- `media_query.js`: Responsive design utilities

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
