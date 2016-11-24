A First Level Header
====================
A Second Level Header
---------------------
# Level 1 Header
## Level 2 Header
### Level 3 Header
#### Level 4 Header
##### Level 5 Header
###### Level 6 Header

```
A First Level Header
====================
A Second Level Header
---------------------
# Level 1 Header
## Level 2 Header
### Level 3 Header
#### Level 4 Header
##### Level 5 Header
###### Level 6 Header
```

### Paragraphs and quotes.

This is another paragraph. Empty line (empty or only spaces and tabs) devides paragraphs.

'>' creates quotes.

> This is a blockquote.
> 
> This is the second paragraph in the blockquote.
>
> ### This is an H3 in a blockquote

### Emphasize

Some of these words *are emphasized*.
Some of these words _are emphasized also_.
Use two asterisks for **strong emphasis**.
Or, if you prefer, __use two underscores instead__.

```
Some of these words *are emphasized*.
Some of these words _are emphasized also_.
Use two asterisks for **strong emphasis**.
Or, if you prefer, __use two underscores instead__.
```

### List

#### ul
You can use *, +, - to create *li*, and *ul* is create automatically.

* C/C++
* Python
* JavaScript
+ Bash
+ Haskell
- Go
- Java

```
* C/C++
* Python
* JavaScript
+ Bash
+ Haskell
- Go
- Java
```

Use number followed by dot '.' to create an *ol*.
Empty line and 4 spaces and tab can create *p* inside an item.

1. A list item.

    With multiple paragraphs.

2. Another item in the list

```
1. A list item.

    With multiple paragraphs.

2. Another item in the list
```

### Link

This is an [example of inline link](https://github.com/viemacs/blog "With a title").
```
This is an [example of inline link](https://github.com/viemacs/blog "With a title").
```

These are examples of referenced links:
[Github][1], [Google][2], [StackOverflow][SO].
[1]: http://github.com/ "Github"
[2]: http://google.com/ "Google"
[SO]: http://stackoverflow.com/ "stack overflow"

```
[Github][1], [Google][2], [StackOverflow][SO].
[1]: http://github.com/ "Github"
[2]: http://google.com/ "Google"
[SO]: http://stackoverflow.com/ "stack overflow"
```

### Image
The format of image is like the link, just with an extra leading '!'.
![](https://github.com/fluidicon.png "Octocat")
```
![](https://github.com/fluidicon.png "Octocat")
```

### Code
Backquote '`' is used to quote code, and more backquotes can wrap less backquotes inside it.

Code in line `function(){}`: `` `function(){}` ``.

And ``let foo = `Das ist ${value}` ``: ``` ``let foo = `Das ist ${value}` `` ```.

Code block:
```
def foo():
    pass
```
Markdown source:
>\`\`\`  
>def foo():  
>    pass  
>\`\`\`
