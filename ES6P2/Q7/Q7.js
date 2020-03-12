// 7. Write a program to flatten a nested array to single level using arrow functions.

const flattenArray = (toBeFlattened, flattened) => {
    if(Array.isArray(toBeFlattened))
        toBeFlattened.forEach( elements => flattenArray(elements, flattened));
    else flattened.push(toBeFlattened);
}

const flatten = arr => {
    let flattened = [];
    arr.forEach(elements => flattenArray(elements, flattened));
    return flattened;
}

let nestedArr = [1, 2, [3, 4, [5, 6]]];

console.log( flatten(nestedArr) );