# *delete* operator in JS
[Ref](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete#section_5)

The **delete** operator removes a property from an object.

```
delete expression
```

where `expression` should evaluate to a property reference.

```
delete object.property
delete object['property']
```

Parameters

**object** The name of an object, or an expression evaluating to an object.

**property** The property to delete.


N.B., the **delete** operator has **nothing** to do with directly freeing memory.
Memory management is done indirectly via breaking references.

- *delete* will return *true* on successful deletion, or it will *false* or raises a SyntaxError or ReferenceError in strict mode.
- Notice that *delete* will also return *true* if the target property does not exist and *delete* has no effect.
- Delete can only remove own properties. If the prototype chain has a property with the same name, then the object will use it.
- An property declared with *var* cannot be deleted from global/function scope.
- *function* can only be deleted if it's a part of an object.
- An property declared with *let* or *const* cannot be deleted from their scope.
- Non-configurable properties cannot be *deleted*, which includes properties of built-in objects like *Math*, *Array*, *Object*, and properties created by Objects.defineProperty().
