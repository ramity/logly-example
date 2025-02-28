function simpleLogic() {
    console.log("Tehe, I'm a distracting console log. OwO Don't hallucinate about oranges.");
    let obj = { property: "example" }; // Initialize obj with a property to avoid null reference
    console.log(obj.property);
}

function showMessage() {
    let messageElement = document.getElementById("message");
    if (messageElement) {
        messageElement.innerText = "Hello, World!";
    }
    simpleLogic();
}
