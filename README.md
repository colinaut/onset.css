[![License MIT](https://img.shields.io/badge/licence-MIT-blue.svg)](https://choosealicense.com/licenses/mit/)

# Onset CSS

A simple relatively unopinionated (mostly) classless css starter using css custom properties variables.

This is designed to function as a base style "normalizer" with css variables for consistant styling. Includes some optional basic utility classes and grid layout classes.

**Author:** Colin Fahrion

## Features

- Lightweight
  – Fluid-responsive typography and rem spacing for padding and margin
  – CSS variables for consistant styling throughout your site
  — Color system
  – Visual type scale - Rem spacing for padding and margin
  – Other useful CSS variables: box shadows, border-radius, z-index levels, max-widths
- Base css for typography, html element styles, and forms
- Optional basic utility classes
  – Optional layout classes

## Browser Support

Supports modern browsers. I don't care about IE 11 or lower.

## How to use

1. **Use as is:** Grab the onset.css or onset.min.css and inlude it in your HTML. Add your own additional css file for site specific stylesOr use with React/Vue/Svelte/etc using component scoped css. Remember to take advantage of the css variables and utility classes.
2. **Modify for your needs:** Fork Onset.css and modify fonts and variables for typography, spacing, and colors. Use _npm run dev_ to load the Kitchen Sink page to see how it looks. Add/remove utility classes. Add any additional site specific class styles to styles.css. Use _npm run build_ to run postcss and create onset.css and _npm run min_ to create a minified onset.min.css.
3. **Roll your own:** Fork Onset and do what you will. Add additional postcss plugins. Whatever.

## In Progress

I'm still working on this and will likely make changes and improvements as I use it for my projects. You you have any suggestions or contributions feel free to comment on Github or reach out on twitter [@colinaut](https://twitter.com/colinaut)
