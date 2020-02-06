# JavaScript-snippets

<img src="Logo.png" alt="JS snippets logo">

# JSsnippets on Facebook

Find us on [Facebook](https://www.facebook.com/snippetsJS).

# How to generate a random number in a given range

```js
// Returns a random number(float) between min (inclusive) and max (exclusive)
const getRandomNumber = (min, max) => Math.random() * (max - min) + min;

getRandomNumber(2, 10);

// Returns a random number(int) between min (inclusive) and max (inclusive)
const getRandomNumberInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomNumberInclusive(2, 10);
```

# How to find the difference between two arrays.

```js
const firstArr = [5, 2, 1];
const secondArr = [1, 2, 3, 4, 5];

const diff = [
  ...secondArr.filter(x => !firstArr.includes(x)),
  ...firstArr.filter(x => !secondArr.includes(x))
];
console.log('diff', diff); // [3,4]

function arrayDiff(a, b) {
  return [
    ...a.filter(x => b.indexOf(x) === -1),
    ...b.filter(x => a.indexOf(x) === -1)
  ];
}
console.log('arrayDiff', arrayDiff(firstArr, secondArr)); // [3,4]

const difference = (a, b) => {
  const setA = new Set(a);
  const setB = new Set(b);

  return [...a.filter(x => !setB.has(x)), ...b.filter(x => !setA.has(x))];
};

difference(firstArr, secondArr); // [3,4]
console.log('difference', difference(firstArr, secondArr));
```

# Convert/Coerce truthy/falsy values to boolean

```js
const myVar = null;
const mySecondVar = 1;

console.log(Boolean(myVar)); // false
console.log(!!myVar); // false

console.log(Boolean(mySecondVar)); // true
console.log(!!mySecondVar); // true
```

# Repeat a string

```js
// first option
let aliens = '';
for (let i = 0; i < 6; i++) {
  aliens += '👽';
}
// 👽👽👽👽👽👽

// second option
Array(6).join('👽'); // 👽👽👽👽👽👽

// third option
'👽'.repeat(6); // 👽👽👽👽👽👽
```

# Check how long an operation takes

```js
// The performance.now() method returns a DOMHighResTimeStamp, measured in milliseconds.
// performance.now() is relative to page load and more precise in orders of magnitude.
// Use cases include benchmarking and other cases where a high-resolution time is required
// such as media (gaming, audio, video, etc.).

var startTime = performance.now();
doSomething();
const endTime = performance.now();
console.log(`operation took ${endTime - startTime} milliseconds.`);
```

# Remove item in array

```js
// Mutating way
const mutatedArray = ['a', 'b', 'c', 'd', 'e'];
mutatedArray.splice(2, 1);
console.log(mutatedArray); // ['a','b','d','e']

// Non-mutating way
const nonMutatedArray = ['a', 'b', 'c', 'd', 'e'];
const newArray = nonMutatedArray.filter((item, index) => !(index === 2));
console.log(newArray); // ['a','b','d','e']
```

# Flat an array

```js
const myArray = [2, 3, [4, 5], [7, 7, [8, 9, [1, 1]]]];

myArray.flat(); // [2, 3, 4, 5 ,7, 7, [8, 9, [1, 1]]]

myArray.flat(1); // [2, 3, 4, 5 ,7, 7, [8, 9, [1, 1]]]

myArray.flat(2); // [2, 3, 4, 5 ,7, 7, 8, 9, [1, 1]]

// if you don't know the depth of the array you can use infinity
myArray.flat(Infinity); // [2, 3, 4, 5 ,7, 7, 8, 9, 1, 1];
```

# Get array unique values

```js
const numbers = [1, 1, 3, 2, 5, 3, 4, 7, 7, 7, 8];

// first option
const uniqNumbers = numbers.filter(
  (value, index, array) => array.indexOf(value) === i
);
console.log(uniqNumbers); // [1,3,2,5,4,7,8]

// second option
const uniqNumbers2 = Array.from(new Set(numbers));
console.log(uniqNumbers2); // [1,3,2,5,4,7,8]

// third option
const uniqNumbers3 = [...new Set(numbers)];
console.log(uniqNumbers3); // [1,3,2,5,4,7,8]

// forth option (using lodash)
const uniqNumbers4 = _.uniq(numbers);
console.log(uniqNumbers4); // [1,3,2,5,4,7,8]
```

# Copy text to clipboard

```js
// old API
function copyToClipboard() {
  const copyText = document.getElementById('myInput');
  copyText.select();
  document.execCommand('copy');
}

// new API
function copyToClipboard() {
  navigator.clipboard.writeText(document.getElementById('myInput'));
}
```

# Nested Destructuring

```js
const user = {
  id: 459,
  name: 'JS snippets',
  age: 29,
  education: {
    degree: 'Masters'
  }
};

const {
  education: { degree }
} = user;

console.log(degree); // Masters
```

# Handle URL query string

```js
const urlParams = new URLSearchParams('?post=1234&action=edit');

console.log(urlParams.has('post')); // true
console.log(urlParams.get('action')); // "edit"
console.log(urlParams.getAll('action')); // ["edit"]
console.log(urlParams.toString()); // "?post=1234&action=edit"
console.log(urlParams.append('active', '1')); // "?post=1234&action=edit&active=1"
```

# Shuffle an array

```js
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const shuffle = list.sort(predicate);

function predicate(a, b) {
  return 0.5 - Math.random();
}

console.log(shuffle);
```

# Count elements in array

```js
const myFruits = [
  'Apple',
  'Orange',
  'Mango',
  'Banana',
  'Apple',
  'Apple',
  'Mango'
];

// first option
const countMyFruits = myFruits.reduce((countFruits, fruit) => {
  countFruits[fruit] = (countFruits[fruit] || 0) + 1;
  return countFruits;
}, {});

console.log(countMyFruits); // { Apple:3, Banana:1, Mango:2, Orange:1 }

// second option
const fruitsCounter = {};

for (const fruit of myFruits) {
  fruitsCounter[fruit] = fruitsCounter[fruit] ? fruitsCounter[fruit] + 1 : 1;
}

console.log(fruitsCounter); // { Apple:3, Banana:1, Mango:2, Orange:1 }
```

# Aliases with destructuring

```js
// There are cases where you want the destructured variable to have a different name than the property name

const obj = {
  name: 'JSsnippets'
};

// Grabs obj.name as { pageName }
const { name: pageName } = obj;

// log our alias
console.log(pageName); // JSsnippets
```

# Determine whether two values are the same

```js
Object.is('foo', 'foo'); // true

Object.is(null, null); // true

Object.is(NaN, NaN); // true 😱

const foo = { a: 1 };
const bar = { a: 1 };
Object.is(foo, foo); // true
Object.is(foo, bar); // false
```

# Freeze an object

```js
const obj = {
  name: 'JSsnippets',
  age: 29,
  address: {
    street: 'JS'
  }
};

const frozenObject = Object.freeze(obj);

frozenObject.name = 'weLoveJS'; // Uncaught TypeError

// Although, we still can change a property’s value if it’s an object:

frozenObject.address.street = 'React'; // no error, new value is set

delete frozenObject.name; // Cannot delete property 'name' of #<Object>

// We can check if an object is frozen by using
Object.isFrozen(obj); // true
```

# Print object keys and values

```js
const obj = {
  name: 'JSsnippets',
  age: 29
};

// Object.entries() method is used to return an array consisting of enumerable properties
// [key, value] pairs of the object which are passed as the parameter.

for (let [key, value] of Object.entries(obj)) {
  console.log(`${key}: ${value}`);
}

// expected output:
// "name: JSsnippets"
// "age: 29"
// order is not guaranteed
```

# Capture right click event

```js
window.oncontextmenu = () => {
  console.log('right click');
  return false; // cancel default menu
};

// or

window.addEventListener(
  'contextmenu',
  () => {
    console.log('right click');
    return false; // cancel default menu
  },
  false
);
```

# In HTML5, you can tell the browser when to run your JavaScript code

```js

// Without async or defer, browser will run your script immediately,
// before rendering the elements that's below your script tag.
<script src="script.js"></script>

// With async (asynchronous), browser will continue to load the
// HTML page and render it while the browser load and execute
// the script at the same time. Async is more useful when you
// really don't care when the script loads and nothing else that
// is user dependent depends upon that script loading (for scripts likes Google analytics).
<script async src="script.js"></script>

// With defer, browser will run your script when the page
// finished parsing. (not necessary finishing downloading all image files.
<script defer src="script.js"></script>
```

# Nullish coalescing operator

```js
// an equality check against nil values (e.g. null or undefined). Whenever the expression to the left of the ?? operator evaluates to either // undefined or null, the value defined to the right will be returned.

const foo = undefined ?? 'default string';
console.log(foo);
// expected output: "default string"

const age = 0 ?? 30;
console.log(age);
// expected output: "0"
```

# Optional chaining

```js
const car = {};
const carColor = car.name.color;
console.log(carColor);
// error- "Uncaught TypeError: Cannot read property 'carColor' of undefined

// In JavaScript, you can first check if an object exists, and then try to get one of its properties, like this:
const carColor = car && car.name && car.name.color;
console.log(carColor);
// undefined- no error

// Now this new optional chaining operator will let us be even more fancy:
const newCarColor = car?.name?.color;
console.log(newCarColor);
// undefined- no error

// You can use this syntax today using @babel/plugin-proposal-optional-chaining
```
