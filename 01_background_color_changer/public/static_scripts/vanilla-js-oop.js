document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("change-color-btn")
    btn.addEventListener("click", () => {
        const page = new Page("#f1f5f8")
        page.setBackgroundColor()

        const text = new Text("#bg-color-text", page.backgroundColor, page.backgroundColor)
        text.adjustElement()
    })
})