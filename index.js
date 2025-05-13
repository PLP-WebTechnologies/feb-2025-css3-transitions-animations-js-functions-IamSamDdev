

const image = document.getElementById("myImage");
const favBtn = document.getElementById("favBtn");

// Check localStorage for favorite status
const isFavorite = localStorage.getItem("favoriteImage") === "true";
if (isFavorite) {
  image.classList.add("favorite");
  favBtn.textContent = "Unmark Favorite";
}

// Toggle favorite state on button click
favBtn.addEventListener("click", () => {
  const currentlyFavorite = image.classList.contains("favorite");

  if (currentlyFavorite) {
    image.classList.remove("favorite");
    localStorage.setItem("favoriteImage", "false");
    favBtn.textContent = "Mark as Favorite";
  } else {
    image.classList.add("favorite");
    localStorage.setItem("favoriteImage", "true");
    favBtn.textContent = "Unmark Favorite";
    
    // Trigger animation
    image.classList.add("animate");
    setTimeout(() => image.classList.remove("animate"), 500);
  }
});
