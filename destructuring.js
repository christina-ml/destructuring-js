/* 3-17-21 creating examples of destructuring in JavaScript

brackets represent the array being destructured
x, y, z represent the variables where you want to store the values from the array
the indexes are implied.
*/
// example - legos to build a house
const legos = [4, 13, 28];
const [x, y, z] = legos;
console.log(x, y, z);


// another one - pizza
const pizza = [6, 8, 12, 24];
const [s, m, l, xl] = pizza;
console.log(s, m, l, xl);


// another one - gems
const gems = [3, 10, -4];
const [diamond, sapphire, broken] = gems;
console.log(diamond, sapphire, broken);


// trying a string
const compliments = [16, 'wonderful', 1];
const [s, t, u] = compliments;
console.log(s, t, u);


// the middle coordinate is ignored & discarded
const markers = [13, 20, 41];
const [f, , h] = markers;
console.log(f, h);


// destructuring values from an object
const magic = {
    type: 'dark',
    color: 'confetti',
    tricks: 130
};

const {type, color, tricks} = magic;

console.log(type, color, tricks);


// more destructuring from an array:
const items = ['cheese', 'shrub', 'bubblegum', 'cactus', 'computer', 'earth', 'udacity', 'tree', 'dogs'];

const [ , one, , two, , , , three, ] = items;

const plants = `List of Plants
1. ${one}
2. ${two}
3. ${three}`;

console.log(plants);
/*
Output:
List of Plants
1. shrub
2. cactus
3. tree
*/