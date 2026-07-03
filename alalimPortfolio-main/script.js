document.addEventListener("DOMContentLoaded", () => {
  const scrollButton = document.getElementById("scrollButton")

  if (scrollButton) {
    scrollButton.addEventListener("click", (e) => {
      e.preventDefault()
      const targetId = scrollButton.getAttribute("href")
      const target = document.querySelector(targetId)

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    })
  }
})

  