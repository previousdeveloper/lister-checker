# Lister-checker



> Lister-checker is a image checker for given text file.


## Install

```
npm install --save lister-checker
```


## Usage

```js
var test = require('lister-checker');

test.check("./file.txt", function (data) {

    console.log(data);
    //Valid 200 image
});

