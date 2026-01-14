/**
 * Scroll reveal utility for animating elements on scroll
 */
export function initScrollReveal() {
  if (typeof window === 'undefined') return

  const revealElements = document.querySelectorAll('.reveal')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  )

  revealElements.forEach((element) => {
    observer.observe(element)
  })
}

