// Starts with Strings, Numbers and Booleans
let age = 100;
let age2 = age;
console.log(age, age2);

age = 200;
console.log(age, age2);

let name = "Godlike";
let name2 = name;
console.log(name, name2);

name = "emptynull";
console.log(name, name2);

// Let's Say We Have an Array
const players = ["Godlike", "sarah", "Ryan", "Poppy"];

// and we want to make a Copy of it.
const team = players;
console.log(players, team);

// you might thin we can just do something like this:
// team[3] = "Lex";

// however what happens  when we update that array.
// console.log(team, players);

// because that is an array reference, not an array copy. They both point the sam array.
//  So how do we fix this?
const team2 = players.slice();

// OR create a new array and concatinate the old one in
// const team3 = [].concat(players);

team2[3] = "Lex";
console.log(team2, team, players);

//  OR use the new ES6 Spread Operator
const team4 = [...players];

const team5 = Array.from(players);
// now when we update the copy the original will keep remain the same!
// The same goes for objects, let's say we have a person object
const person = {
    name: "Godlike",
    age: 20
};

// and think we make a copy
const captain = person;
// captain.number = 99;
console.log(person);

// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 99 });
console.log(cap2);

// we will hopefull soon see the object ...spread
const cap3 = {...person};
console.log(cap3);

// Things to Note - This is only 1 level deep both for Arrays and Objects. Lodash has a cloneDeep method, but you should think twice before using it.
const per = {
    name: "pearson",
    age: 100,
    social: {
        twitter: "@pear",
        facebook: "facebook.com/pea"
    }
}
console.log(per);

const dev = Object.assign({}, per);
dev.name = "Wesley";
// dev.social.twitter = "@cool";
// console.log(per);
console.log(dev);

const dev2 = JSON.parse(JSON.stringify(per));
dev2.social.twitter = "@cool";
console.log(dev2);
console.log(per);