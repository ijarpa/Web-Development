const buttons = document.querySelectorAll("button");

for (const button of buttons) {
    button.addEventListener("click", (e) => {
        if(e.target.style.backgroundColor === "green")
            e.target.style.backgroundColor = "red";
        else
            e.target.style.backgroundColor = "green";
    });
}

