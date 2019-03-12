# Tailwind Touch Plugin

This plugin adds a collection of variants to allow fine grain control over how elements appear on touch and non touch devices, CSS Tricks does a great job of detailing how the underlying media queries work you can read more about this here: https://css-tricks.com/touch-devices-not-judged-size.

## Installation

Add this plugin to your project:

```bash
# Install via npm
npm install --save-dev tailwindcss-touch
```

## Usage

Add the tailwindcss-touch plugin to your plugins key in your tailwind.js config file. 

```js
plugins: [
    require('tailwindcss-touch')(),
],

```

The following variants are currently available:

```css
/* pointer-coarse */
@media (pointer: coarse) { ... } 

/* pointer-fine */
@media (pointer: fine) { ... }

/* pointer-none */
@media (pointer: none) { ... }

/* hover-hover */
@media (hover: hover) { ... }

/* hover-none */
@media (hover: none) { ... }
```

Enabling a variant on a module is just like enabling any other variant, locate the modules object and add the variants to the module you would like to enable touch capabilites for:

```js
modules: {
    shadows: ['responsive', 'hover', 'focus', 'hover-hover', 'hover-none'],
},
```

Once the variant is enabled, using it is just like using any other variant, for example if you have a div which you would like to add a small shadow on touch enabled devices but a large shadow on non touch devices you would do it like so:
```html
<div class="hover-none:shadow-lg hover-hover:shadow">...</div>
```

## Credits

- [Steadfast Collective](https://github.com/steadfastcollective)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

