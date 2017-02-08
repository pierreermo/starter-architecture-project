# Starter architecture project

## First read about some concepts :

* [BEM naming convention](http://getbem.com/naming/)
* [SMACSS project architecture](https://smacss.com/book/categorizing)
* [OOCSS utilities](http://oocss.org/)
* [LESS](http://lesscss.org/) / [SASS](http://sass-lang.com/)
* [Gulp](http://gulpjs.com/) / [Grunt](http://gruntjs.com/), [Bower](https://bower.io/) & all Node awesomeness.


## Then get your hands dirty

`npm install`

starter project modules:
* bower
* lesshat
* gulp


`bower install`	

starter project dependencies:
* bootstrap
* reset-css
* angular
		

## Gulp basic tasks

`gulp watch`

watch every change in less & js files to trigger the apropriate task.

`gulp less`

compile less files into a main.css file.   
sourcemaps & autoprefixed.

`gulp js`

compile angular files (in logic order) into a main.js file.

`gulp prod`

minify & rename main dist files



## Design & Integration methodology :

Create every pieces of design as an independent “module” in : `root/css/module/my-module.less`   
That way you can easily maintain & reuse your code across other projects    

Define project specificities as “variables” in : `root/css/base/vars`    
Define project base design in : `root/css/base/base`    

Prepare every css animation in : `root/css/animation/keyframes`   
Create every animation in an specific reusable file : `root/css/animation/my-animation`   

![Imgur](http://i.imgur.com/4EOEA65.png)
