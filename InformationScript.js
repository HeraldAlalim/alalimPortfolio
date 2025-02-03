document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section")
  
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    }
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = `${entry.target.dataset.delay || 0}s`
          entry.target.style.animationPlayState = "running"
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)
  
    sections.forEach((section, index) => {
      section.dataset.delay = index * 0.2
      section.style.animationPlayState = "paused"
      observer.observe(section)
    })
  })
  
  
  