class Reviewer {
    constructor(properties) {
        this.id     = properties.id
        this.name   = properties.name
        this.job    = properties.job
        this.photo  = properties.img
        this.review = properties.text
    }
}

class ReviewerDB {
    static current = 0

    constructor() {
        this.reviewers = []
        this.reviewer_count = 0
    }

    add(reviewer) {
        this.reviewers.push(reviewer)
        this.reviewer_count++
    }

    get current_reviewer() {
        console.log(ReviewerDB.current)
        return this.reviewers[ReviewerDB.current]
    }

    get next_reviewer() {
        ReviewerDB.current = (ReviewerDB.current + 1) % this.reviewer_count
        return this.current_reviewer
    }

    get random_reviewer() {
        let old = ReviewerDB.current
        while (old === ReviewerDB.current)
            ReviewerDB.current = Math.round(Math.random() * (this.reviewer_count - 1))
        return this.current_reviewer
    }

    get prev_reviewer() {
        ReviewerDB.current = (ReviewerDB.current - 1) % this.reviewer_count
        if (ReviewerDB.current < 0) {
            ReviewerDB.current = this.reviewer_count - 1
        }
        return this.current_reviewer
    }
}

class ReviewCard {
    constructor(name_selector, job_selector, photo_selector, review_selector) {
        this.nameField = document.querySelector(name_selector)
        this.jobField  = document.querySelector(job_selector)
        this.photoField  = document.querySelector(photo_selector)
        this.reviewField  = document.querySelector(review_selector)
    }

    populate(reviewer) {
        this.nameField.innerText = reviewer.name
        this.jobField.innerText = reviewer.job
        this.photoField.src  = reviewer.photo
        this.reviewField.innerText  = reviewer.review
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const reviewerDB = new ReviewerDB()
    reviews.forEach((reviewer) => {
        reviewerDB.add(new Reviewer(reviewer))
    })

    const reviewerCard = new ReviewCard(".author", ".job", ".customer-photo", ".comment")
    reviewerCard.populate(reviewerDB.current_reviewer)

    const nextBtn = document.querySelector(".next-btn")
    const prevBtn = document.querySelector(".prev-btn")
    const randomBtn = document.querySelector(".random-btn")

    nextBtn.addEventListener("click", () => {
        reviewerCard.populate(reviewerDB.next_reviewer)
    })

    prevBtn.addEventListener("click", () => {
        reviewerCard.populate(reviewerDB.prev_reviewer)
    })

    randomBtn.addEventListener("click", () => {
        reviewerCard.populate(reviewerDB.random_reviewer)
    })

})
