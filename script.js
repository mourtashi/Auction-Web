// Initialize current bid
let currentBid = 100;

// Initialize timer
let remainingMinutes = 9;
let remainingSeconds = 59;

function placeBid() {
  const newBid = parseInt(document.getElementById('new-bid').value);
  if (newBid > currentBid) {
    currentBid = newBid;
    document.getElementById('current-bid').innerText = currentBid;
  } else {
    alert('Your bid must be higher than the current bid.');
  }
}

function updateTimer() {
  // Update the timer display
  document.getElementById('time-remaining').innerText = 
    `${remainingMinutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;

  // Decrement time
  if (remainingSeconds === 0) {
    if (remainingMinutes === 0) {
      clearInterval(timer);
      alert('Auction ended.');
      return;
    } else {
      remainingMinutes--;
      remainingSeconds = 59;
    }
  } else {
    remainingSeconds--;
  }
}

// Start the timer
const timer = setInterval(updateTimer, 1000);
