 <h1>Color Picker</h1>

Color picker is an [Arc Browser](https://arc.net) boost to select colors from anywhere on your screen using the [EyeDropper()](https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper) Web API.

<div align="center">
  <img 
       alt="color picker demo" 
       src="https://raw.githubusercontent.com/theedigerati/color-picker/main/demo.gif" width="700" 
   />
</div>

## How to Use

* On any webpage, toggle the color picker with <kbd>CTRL</kbd> + <kbd>E</kbd> (you can change this in <code>content.js</code>).
* Click the color box on the bottom left of the page to activate the eyedropper mode.
* Select any color you want on the browser or anywhere on your computer. 
* When you choose a color, its corresponding HEX code is saved to your clipboard and shown on the color box. 
* To exit the eyedropper mode, you can press the <kbd>ESC</kbd> key.

## How to Install Boost

* Install Arc browser.
* Click the "+" button on the bottom right of your Arc sidebar
* Select "New Boost" then select "custom"
* Replace the <code>styles.css</code> and <code>content.js</code> with the ones on this repo
* That's it!
