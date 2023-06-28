const _ = require('lodash') //libraries

const items = [1,[2,[3,4]]]

const newItems = _.flattenDeep(items)
console.log(newItems);
console.log('Hello Nodemon');