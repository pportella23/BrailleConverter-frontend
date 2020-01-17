# Braille Printer Project 
This is a project that aims in helping people with visual deficiency by making easier and cheaper to print texts in braille.

This repository contains only the Front-end application that convert ASCII text to braille language. 


## How it works
##### Front-end Application
The app has a file called ```dictionary.js``` which contains the alphabet used to translate the texts and all the logic needed to perform the translation. In addition, the repository has a folder called ```front``` with files used to mount the application. Are they:  
```
app.js
```
This file has all the logic used to handle text that has been converted to braille ensuring it's formatted so that the printer can read it. And in the end a request is made, of a POST method, to the server.
```
index.html
```
This file is used to create the page that will be available to insert the ASCII text and convert it. It's quite simple, just a box and a button.
##### API System
* We made a simple API to set up routes to send converted text to the printer => See the [API repository](https://github.com/pportella23/nodejs-api) for detail

## Considerations
See that the conversion logic and the treatment of the text is done here. After that, the finished result is sent via request to API.

## Testing
I deployed the app in the Github pages, so it's accessible by the link: [https://pportella23.github.io/brailleprinter-frontend/front/](https://pportella23.github.io/brailleprinter-frontend/front/)

OBS: All you have to do is type the text in the box and press the button. :)

## Created by
* Pedro Portella Possamai
