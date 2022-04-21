# ☉ Markdown Features Test

# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

## Horizontal Rules

___

---

***

## Typographic replacements

Enable `Smarty Pants` to see the result.

Gyphen and double gyphen: - --

"Smartypants, double quotes" and 'single quotes'


## Paragraphs

This paragraphs forms one line,
believe it or not...

This paragraph has two spaces at the end  
So this is another paragraph (Only if newlines in paragraphs are set to be rendered as `<br>`)

## Emojis

Forums mostly translate this to an emoji

> Classic markup: :wink: :roll: :cry: :shock:
>
> Shortcuts (emoticons): :) :o :D :P

## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

__*This is italic and bold text*__

_**This is italic and bold text**_

~~Strikethrough~~


## Blockquotes

> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.

## Lists

**Unordered**

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

**Ordered**

1. First item
2. Second item
3. Third item

1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`

**Checkbox**

- [x] Some checked item
  - [x] Some checked subitem
  - [ ] Some unchecked subitem
- [ ] Some unchecked item
- [x] Another checked item

**Stylized list**

1. ### This is some text  
   Bla bla bla, bla bla...
   * Now this is another item
   * Other item

## Code

Here is some `inline code`. There are some things we don't `control`.

**Indented code**

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences"

```
Sample text here...
```

Syntax highlighting

```js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)


## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"

## Videos

https://www.youtube.com/watch?v=IYnsfV5N2n8