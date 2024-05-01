const pressed = [];
const secretCode = "godlike";
window.addEventListener("keyup", (e) => {
    console.log(e.key);
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    if(pressed.join("").includes(secretCode)){
        console.log("You Did Tt!!!");
        cornify_add();    // Add a Unicorn Sticker to the Web Page
    }
    console.log(pressed);
});