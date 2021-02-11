document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("change-color-btn")

    button.addEventListener("click", () => {
        const body = document.querySelector("body")
        const bgColorText = document.getElementById("bg-color-text")

        let randomColor = "#"
        for (let i = 0; i < 6; i++)
            randomColor += Math.round(Math.random() * 15).toString(16);

        body.style.backgroundColor = randomColor
        bgColorText.innerText = randomColor
        bgColorText.style.color = randomColor
    })
})