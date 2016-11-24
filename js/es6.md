# Core Features of ES6
<span style="color:#999">Note on Adrain Mejia's article</span>

## History
ES6, a.k.a. ES2015+, ECMAScript6.

Javascript is evolving since it was created, and ES6 is now well supported in all modern browsers.

![](http://www.itnose.net/img/20161122/196231.png)
![](http://www.itnose.net/img/20161122/196240.png)
([compatibility ref](https://kangax.github.io/compat-table/es6/))

## ES6 core features

### block-scoped variables
We know that *var* is not block-scoped, but function scoped.
In ES6, *let* and *const* is used instead of *var* to limit variable scoped to block.
__*let* is the better *var*__
A variable must be defined before use when it's defined by *let*, and it exists only inside its block, like a for-loop or if-block.

### Hoist
```
var x = 'outer';
function test(inner) {
  if (inner) {
    var x = 'inner';
    return x;
  }
  return x;
}
test(false);
// <- undefined
```
Using *var*, even the `if` clause was not executed, the `x` inside it was hoisted. But only the declaration was hoisted, not the initialization.

### Temporal Dead-zone
In ES6, *let* hoists a variable to the top of the block, and from the top on the block to the *let* declaration is a "temporal dead zone", where a variable is not usable (ReferenceError).

### No more IIFE
We all familiar with IIFE (Immediately-Invoked Function Expression), and write it everyday. Because without IIFE, the function names and variables will pollute everywhere.
```
(function() {
  var bar = 'ES5';
  function foo() {}
}());
```
With *let* grammar, IIFE is not essential anymore.
```
{
  let bar = 'ES6';
  let foo = () => {};
}
```

### const
When a re-assignation is necessary, ust *let*.
When the value of a variable should not be changable, use *const*.
```
const _version = '0.1';
```

### Text Template
```
// ES5
var firstName = 'Adrian';
var lastName = 'Mejia';
console.log('Your name is ' + firstName + ' ' + lastName + '.');
```
Now *\`* and *${}* is available.
```
// ES6
const firstName = 'Adrian';
const lastName = 'Mejia';
console.log(`Your name is ${firstName} ${lastName}`);
```

###
