const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']");
let lastChecked;

function handleCheck(e){
    // Check if they had shift key down and check that they are checking it
    let inBetween = false;
    if(e.shiftKey && this.checked){
        // Go ahead and do the what we please and loop over every single checkbox
        checkboxes.forEach(checkbox => {
            // console.log(checkbox);
            if(checkbox === this || checkbox === lastChecked){
                inBetween = !inBetween;
                // console.log("Starting to Check them in between!!!");
            }
            if(inBetween){
                checkbox.checked = true;
            }
        });
    }
    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));