const bio = document.querySelector("#bio")
const interests = document.querySelector("#interests")
const goals = document.querySelector("#goals")

function showBio() {
    bio.classList.remove("hidden");
    interests.classList.add("hidden");
    goals.classList.add("hidden");
}

function showInterests() {
    bio.classList.add("hidden");
    interests.classList.remove("hidden");
    goals.classList.add("hidden");
}

function showGoals() {
    bio.classList.add("hidden");
    interests.classList.add("hidden");
    goals.classList.remove("hidden");
}