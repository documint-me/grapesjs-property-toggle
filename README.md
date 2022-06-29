# Grapesjs Property Toggle

Add Toggle/Checkbox style manager property

### HTML
```html
<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet">
<script src="https://unpkg.com/grapesjs"></script>
<script src="https://unpkg.com/grapesjs-property-toggle"></script>

<div id="gjs"></div>
```

### JS
```js
const editor = grapesjs.init({
	container: '#gjs',
  height: '100%',
  fromElement: true,
  storageManager: false,
  plugins: ['grapesjs-property-toggle'],
  styleManager: {
    sectors: [
      {
        name: 'Sample',
        properties: [
          {
            type: 'toggle',
            property: 'font-weight',
            on: 'bold',
            off: 'normal',
            default: 'normal',
            iconClass: 'fa fa-bold'
          }
        ]
      }
    ]
  }
});
```

### CSS
```css
body, html {
  margin: 0;
  height: 100%;
}
```


## Summary

* Plugin name: `grapesjs-property-toggle`

## Download

* CDN
  * `https://unpkg.com/grapesjs-property-toggle`
* NPM
  * `npm i grapesjs-property-toggle`
* GIT
  * `git clone https://github.com/{USERNAME}/grapesjs-property-toggle.git`



## Usage

Directly in the browser
```html
<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet"/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="path/to/grapesjs-property-toggle.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
      container: '#gjs',
      // ...
      plugins: ['grapesjs-property-toggle'],
      styleManager: {
      sectors: [
        {
          name: 'Sample',
          properties: [
            {
              type: 'toggle',
              property: 'font-weight',
              on: 'bold',
              off: 'normal',
              default: 'normal',
              iconClass: 'fa fa-bold'
            }
          ]
        }
      ]
    }
  });
</script>
```

Modern javascript
```js
import grapesjs from 'grapesjs';
import plugin from 'grapesjs-property-toggle';
import 'grapesjs/dist/css/grapes.min.css';

const editor = grapesjs.init({
  container : '#gjs',
  // ...
  plugins: [plugin],
  pluginsOpts: {
    [plugin]: { /* options */ }
  }
  // or
  plugins: [
    editor => plugin(editor, { /* options */ }),
  ],
  styleManager: {
    sectors: [
      {
        name: 'Sample',
        properties: [
          {
            type: 'toggle',
            property: 'font-weight',
            on: 'bold',
            off: 'normal',
            default: 'normal',
            iconClass: 'fa fa-bold'
          }
        ]
      }
    ]
  }
});
```



## Development

Clone the repository

```sh
$ git clone https://github.com/{USERNAME}/grapesjs-property-toggle.git
$ cd grapesjs-property-toggle
```

Install dependencies

```sh
$ npm i
```

Start the dev server

```sh
$ npm start
```

Build the source

```sh
$ npm run build
```



## License

MIT
