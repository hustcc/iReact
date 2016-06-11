# iReact

> Fantastic React Components and Libraries!

[![Build Status](https://travis-ci.org/hustcc/iReact.svg?branch=gh-pages)](https://travis-ci.org/hustcc/iReact)

[iReact.cn](http://iReact.cn/) helps you discover the most fantastic, powerful React `Components` and `Libraries`,
and makes it easy for you to pick one that’ll work for you. 

![res/img/Screen-Capture.png](https://raw.githubusercontent.com/hustcc/iReact/gh-pages/res/img/Screen-Capture.png)

## Rules

  * Must do something useful, and must not be just a demo
  * Must be MIT/BSD-license or similar **permissive license**
  * Must be well-tested


## Submitting new libraries and components

Want to add your own? Fork this site on GitHub, add your framework to "data.js" and submit a pull request.

### **1. submit pull request**

  * Add your library to "`data.js`", at the end of the file (this helps with merging many contributions) and enter the required attributes: `'name'`, `'repo'`, `'author'`, `'tags'`, `'description'`, all can't be empty(null or '').
  * The a `'repo'` should point to wherever you host your README or docs and where code is downloaded code-download.
  * The `'tags'` attribute must be a `array` of the project keywords. max array length is 4. max string size is 30.
  * Running `npm run build`, and open `index.html` with your browser, should work and not return an error. To run build, you'll need node installed, and `npm install` first.
  * Then submit a `pull request`.

### **2. submit an issue**

Open an issue [here](https://github.com/hustcc/iReact/issues/new).

You should fill all the information of your project.


## All rights reserved

Please note that iReact.cn is a curated site and that we reserve the right to refuse any listing for any reason.

The [iReact.cn](http://iReact.cn) code/website is released under a MIT License.

This project is rewrited from [microjs.com](https://github.com/madrobby/microjs.com) with `react`.