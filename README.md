# TnkCommon

This library is to provide a few commonly used functionality for handling common items.


## Installation

`$ npm install @tnk-modules/common`

## Usage

### API
**export function isInvalid(property? : any) : boolean**

Checks whethere the given entity is undefined or empty string.

* @param property Property to check
* @returns boolean

```
console.log(isInvalid(""), isInvalid([]), isInvalid(3), isInvalid(undefined));
//true false false true
```

**export function isEmpty(property?: any[] | string) : boolean**

Checks whethere the given entity is undefined, empty list or empty string.

* @param property Property to check
* @returns boolean

```
console.log(isEmpty([]), isEmpty(), isEmpty([3]))
//true true false
```

**export function removeFromList(list : any[], condition : (any) => boolean) : void**

Finds and removes one entity matching the condition from list.

* @param list Property to alter
* @param condition condition used to find the element to remove

```
let array = [1,10,2,35,3,4,5,6];
console.log(array)
//(8) [1, 10, 2, 35, 3, 4, 5, 6]
removeFromList(array, (v)=>v>=4)
console.log(array)
(7) [1, 2, 35, 3, 4, 5, 6]
```

**export function removeAllFromList(list : any[], condition : (any) => boolean) : void**

Finds and removes all entities matching the condition from list.

* @param list Property to alter.
* @param condition condition used to find the element to remove

```
...
removeAllFromList(array, (v)=>v>=4)
console.log(array)
(3) [1, 2, 3]
```

**export function capitalize(string :string) : string**

Takes string and capitalizes it.

* @param string String to capitalize
* @returns Capitalized string

```
console.log(capitalize(" sad WEdsf  lk£dd asd "))
//' Sad Wedsf  Lk£dd Asd '
```

**export function trimTrails(string : string) : string

Takes string, trims it and then removes all trailling spaces.

* @param string String to clean
* @returns Cleaned string
 
```
console.log(trimTrails(" sad WEdsf  lk£dd \tasd "))
//'sad WEdsf lk£dd asd'
```
