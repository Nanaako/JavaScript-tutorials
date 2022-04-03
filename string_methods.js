//common string methods

//let email = "kitty@bless.you";
//let result = email.lastIndexOf('s');
//let result = email.slice(1,10);
//let result = email.replace ('k', 'n');

// template strings
const title = "Kiities of 2022";
const author = "Kitta";
const likes = 50;

//concatenation way
//let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes +' likes';

//template string way
//let result = `The blog called ${title} by ${author} has ${likes} likes`;
//console.log(result);

//create html templates
let html = `
    <h2>${title}</h2>
    <p> By ${author}</p>
    <span> This blog has ${likes} likes</span>
`;
console.log(html);

