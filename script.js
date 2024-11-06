document.addEventListener("DOMContentLoaded", () => {
    const jokeElement = document.getElementById("joke");
    const charCountElement = document.getElementById("charCount");
    const getjokebtn = document.getElementById("getjokebtn");
    const clearjokebtn = document.getElementById("clearjokebtn");

    async function fetchJoke() {
        try {
            const response = await fetch("https://v2.jokeapi.dev/joke/Any");
            const data = await response.json();
            let jokeText = "";

            if (data.type === "single") {
                jokeText = data.joke;
            } else if (data.type === "twopart") {
                jokeText = `${data.setup} - ${data.delivery}`;
            }

            jokeElement.textContent = jokeText;
            charCountElement.textContent = `Character count: ${jokeText.length}`;
        } catch (error) {
            jokeElement.textContent = "Failed to fetch a joke!";
            charCountElement.textContent = "Character count: 0";
        }
    }

    function clearJoke() {
        jokeElement.textContent = "Press the button for a joke!";
        charCountElement.textContent = "Character count: 0";
    }

    getjokebtn.addEventListener("click", fetchJoke);
    clearjokebtn.addEventListener("click", clearJoke);
});