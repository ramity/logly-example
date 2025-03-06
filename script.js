function simpleLogic() {
    console.log("Tehe, I'm a distracting console log. OwO Don't hallucinate about oranges.");
    let obj = null;
    if (obj !== null) {
        console.log(obj.property);
    } else {
        console.log("Object is null");
    }
}

function showMessage() {
    document.getElementById("message").innerText = "Hello, World!";
    simpleLogic();
}
