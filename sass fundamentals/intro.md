## Introduction
- Sass is based on Ruby programming language.
- Sass has two syntaxes! 
    - The SCSS syntax (.scss) is used most commonly. It’s a superset of CSS, which means all valid CSS is also valid SCSS. 
    - The indented syntax (.sass) is more unusual: it **uses indentation** rather than curly braces to nest statements, and newlines instead of semicolons to separate them.


## What is Sass (Syntactically Awesome Stylesheet)?
- extension of css 
- css pre-processor
- reduces repetition of css 


## Why Use Sass?
- Stylesheets are getting larger, more complex, and harder to maintain. This is where a CSS pre-processor can help.

- Sass lets you use features that do not exist in CSS, like variables, nested rules, mixins, imports, inheritance, built-in functions, and other stuff.


## How Does Sass Work (transpile)?
- A browser does not understand Sass code. Therefore, you will need a Sass pre-processor to convert Sass code into standard CSS.  
This process is called **TRANSPILING**. 

- So, you need to give a transpiler (some kind of program) some Sass code and then get some CSS code back.

- Transpiling is a term for taking a source code written in one language and transform/translate it into another language.

### Sass Comments
Sass supports standard CSS comments /* ...text here... */ and in addition it supports inline comments using // (double forward slash).


## NOTE (Before using Sass)

1. Install sass compiler extension in vscode
2. Check extension's setting and make changes in vs code's *setting.json*
3. Change liveSassCompile.settings.autoprefix setting to 

    ```javascript
    liveSassCompile.settings.formats[
        {
            "format": "expanded", // or compressed
            "savePath": "/css",  // save generated css file inside css folder
        }
    ]

    liveSassCompile.settings.generateMap: flase // if you don't want .map extension file (default true)

    ```
4. Use *watch sass icon* in below status bar to generated css file, before that create a scss file.


## Important Points To Know:
- [Variables](#Variables)
- [Nesting](#Nesting)
- [Imports (@import) and partials](#import-and-partials)
- [Mixins (@mixin) and include(@include)](#mixin-and-include)
- [Extend (@extend) and inheritance](#extend-and-inheritance)


### Variables
- variables are a way to store information that you can re-use later. 
- can store- string, number, boolean, color, list, null
- ```$variablename: value;```
- if you are loading Stylesheet (using @use) then you can access variables from another module by writing `<namespace>.<variable>`
- e.g. if variable is in `_config.scss file` => `config.$variablename` to access variable or `@use "config" as *` =>  means importing everything from 'file' without a namespace and can use variables directly, without prefixing.
- note: `@import` is deprecated, use `@use`.


### Nesting
- Sass lets you nest CSS selectors in the same way as HTML. 
- The parent selector, `&`, is a special selector invented by Sass that’s used in nested selectors to refer to the outer selector.


### Import and partials
- One way to write DRY code is to keep related code in separate files.
- `@use` directive allows you to include the content of one file in another.
- `@use <filename without extension>;` (do not need to specify a file extension)

- By default, Sass transpiles (create css file) all the .scss files directly. However, when you want to import a file, you do not need the file to be transpiled directly.

- If you **start the filename with an underscore, Sass will not transpile it**. The underscore lets Sass know that the file is only a partial file and that it should not be generated into a CSS file. 
- Files named this way are called **partials in Sass**.

- example: `_colors.scss file` => `@use colors;`
- Stylesheets loaded by @use are called **modules**

#### Note: 
- All @use (and @forward) rules *must appear at the top of your file* before any styles, variables, or mixins.
- `@use 'file' as *;` means importing everything from 'file' without a namespace and can use variables directly, without prefixing.
    - otherwise `(partial filename).$variablename` to access variable.


### Mixin and Include
- The `@mixin` directive lets you create CSS code that is to be reused throughout the website.
- The `@include` directive is created to let you use (include) the mixin.
    - define mixin `@mixin name { property1: value1; property2: value2; }`
    - use mixin `selector { @include mixin-name; other-property: vlaue; }`

    ```css
    @mixin important-text {
        padding: 5px;
        color: red;
    }
    .danger {
        @include important-text;
        background-color: greenyellow;
    }
    ```

### Extend and Inheritance: 
- It (@extand) lets you share a set of CSS properties from one selector to another.

    ```css
    .button-basic {
        font-size: 20px;
        padding: 10px;
    }
    .button-report {
        @extend .button-basic;
        background-color: red;
    }
    ```


                                                        