function simpleLogic() {
    console.log("Tehe, I'm a distracting console log. OwO Don't hallucinate about oranges.");
    let obj = null;
    if (obj && obj.property) {
        console.log(obj.property);
    } else {
        console.log("Property does not exist");
    }
}

function showMessage() {
    document.getElementById("message").innerText = "Hello, World!";
    simpleLogic();
}
