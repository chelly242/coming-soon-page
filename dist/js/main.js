const countdown = document.querySelector('.countdown')

// Set Launch Date (ms)
const launchDate = new Date('Dec 16, 2020 09:00:00').getTime()

// Update Every Second
const intvl = setInterval(() => {
  // Get Today's Date and Time (ms)
  const now = new Date().getTime()

  // Distance from now to Launch Date
  const distance = launchDate - now

  // Time Calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)
  // Display Result
  countdown.innerHTML = `
    <div>${days}<span>Days</span></div>
    <div>${hours}<span>Hours</span></div>
    <div>${mins}<span>Minutes</span></div>
    <div>${seconds}<span>Seconds</span></div>
    `
}, 1000)
