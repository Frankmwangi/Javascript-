// template strings
const tittle = 'Best reads of Brenda';
const author = 'Njunge';
const likes = 30;

//concatenation way
let result = 'The blog called' + tittle + 'by' + author + 'has' + likes + 'likes';
console.log (result);





//template string way
let result = `The blog called ${tittle} by ${author} has ${likes} likes`;
console.log (result);




//creating html template
let html = `
<h2> ${tittle} </h2>
<p> By ${ author} </p>/<span> has ${likes} likes</span>
~;

console.log (result);