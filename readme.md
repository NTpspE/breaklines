# Breaklines  
> A simple utility to add <br> tags into strings containing \n.  
Created as my first NPM module, I've needed to create this when building static sites through Wintersmith, as when creating pages via .json files the newlines were not displayed.  
Calling this function allowed them to be displayed correctly.

## Install
```
$ npm install newlines --save
```

## Usage
```js
const breaklines = require('breaklines');
const string = 'Testing \n adding \n\n newlines';
console.log(breaklines(string));
//=> 'Testing <br> adding <br><br> newlines'
```