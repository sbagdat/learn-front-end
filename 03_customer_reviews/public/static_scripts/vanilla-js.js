document.addEventListener("DOMContentLoaded", () => {
    let currentIndex = 0
    const photo = document.querySelector(".customer-photo"),
          author = document.querySelector(".author"),
          job = document.querySelector(".job"),
          comment = document.querySelector(".comment")

    photo.src = reviews[currentIndex].img
    author.innerText = reviews[currentIndex].name
    job.innerText = reviews[currentIndex].job
    comment.innerText = reviews[currentIndex].text

    const nextBtn = document.querySelector(".next-btn"),
          prevBtn = document.querySelector(".prev-btn"),
          randomBtn = document.querySelector(".random-btn")

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % reviews.length
        photo.src = reviews[currentIndex].img
        author.innerText = reviews[currentIndex].name
        job.innerText = reviews[currentIndex].job
        comment.innerText = reviews[currentIndex].text
    })

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1)  % reviews.length
        if (currentIndex < 0)
            currentIndex = reviews.length - 1
        photo.src = reviews[currentIndex].img
        author.innerText = reviews[currentIndex].name
        job.innerText = reviews[currentIndex].job
        comment.innerText = reviews[currentIndex].text
    })

    randomBtn.addEventListener("click", () => {
        let oldIndex = currentIndex
        while (oldIndex === currentIndex)
            currentIndex = Math.round(Math.random() * 3)
        photo.src = reviews[currentIndex].img
        author.innerText = reviews[currentIndex].name
        job.innerText = reviews[currentIndex].job
        comment.innerText = reviews[currentIndex].text
    })
})
