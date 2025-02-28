function simpleLogic() {
    console.log("Tehe, I'm a distracting console log. OwO Don't hallucinate about oranges.");
    let obj = { property: "Example" }; // Ensure obj is not null and has the property
    console.log(obj.property);
}

function showMessage() {
    document.getElementById("message").innerText = "Hello, World!";
    simpleLogic();
}
