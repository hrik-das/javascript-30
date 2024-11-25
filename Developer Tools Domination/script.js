const dogs = [
    { name: "Snickers", age: 2 },
    { name: "hugo", age: 8 }
];

function makeGreen(){
    const p = document.querySelector("p");
    
    p.style.color = "#BADA55";
    p.style.fontSize = "50px";
}

// Regular
console.log("Hello");

// Interpolated
console.log("I'm a %s String", "💩");
console.log("console.%s ", "log");
console.log("My Age is %f", 19.23);
console.log("This is the Object %o", {1.23: 12});

// Styled
console.log("%c I'm Some Great Text", "font-size: 20px; background: yellow; text-shadow: 2px 1px 5px red");
console.log("Tell you secretly, I will transform %c ~(≧▽≦) Good Coder~", "color: #00fdff; font-size: 2em;");

// warning!
console.warn("Oh, Nooooo!");

// Error :|
console.error("Shit!");

// Info
console.info("Talk is cheap. Show me the code");
console.info("Crocodiles eat 3-4 people per year");

// Testing
const p = document.querySelector("p");

console.assert(p.classList.contains("paragraph"), "That is wrong!");
console.assert(1 === 1, "This sentence was deleted when published");
console.assert(1 === 0, "Look, you made a mistake, right?");
console.assert(p.innerHTML.match("parent"), "No ClassName as You Mentioned!");

// clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);  

// Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
});

console.table(dogs);
// console.table(dogs, ["age"]);

// counting
console.count("Wes");
console.count("Wes");
console.count("Steve");
console.count("Steve");
console.count("Wes");
console.count("Steve");
console.count("Wes");
console.count("Steve");
console.count("Steve");
console.count("Steve");
console.count("Steve");
console.count("Steve");

// timing
console.time("fetching data");

fetch("https://api.github.com/users/hrik-das")
    .then(data => data.json())
    .then(data => {
        console.timeEnd("fetching data");
        console.log(data);
    });
// console.timeEnd("fetching data");