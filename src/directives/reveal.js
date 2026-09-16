// v-reveal：进入视口时淡入上移动效；prefers-reduced-motion 时禁用
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

let observer
function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('revealed')
            observer.unobserve(e.target)
          }
        }
      },
      { threshold: 0.12 },
    )
  }
  return observer
}

export default {
  mounted(el) {
    if (reduced) return
    el.classList.add('reveal')
    getObserver().observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}
