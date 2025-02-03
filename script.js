document.addEventListener("DOMContentLoaded", () => {
  const navigateButton = document.getElementById("navigateButton")

  navigateButton.addEventListener("click", (e) => {
    e.preventDefault()
    const href = navigateButton.getAttribute("href")

    // Add a fade-out effect before navigating
    document.body.style.opacity = 0

    setTimeout(() => {
      window.location.href = href
    }, 500)
  })
})

  