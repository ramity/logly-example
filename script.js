function simpleLogic() {
    try {
        console.log("Tehe, I'm a distracting console log. OwO Don't hallucinate about oranges.");
        let obj = null;
        console.log(obj.property);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

function showMessage() {
    document.getElementById("message").innerText = "Hello, World!";
    simpleLogic();
}
