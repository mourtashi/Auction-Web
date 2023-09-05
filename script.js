// Variables
let currentBid = 0;
let remainingMinutes = 9;
let remainingSeconds = 59;
let timer;

function showProduct(name, initialBid) {
  // Display selected product information
  document.getElementById('item-name').innerText = name;
  document.getElementById('current-bid').innerText = initialBid;
  document.getElementById('new-bid').min = initialBid + 1;
  currentBid = initialBid;

  // Hide product list and show auction details
  document.getElementById('product-list').classList.add('hidden');
  document.getElementById('auction-item').classList.remove('hidden');
  document.getElementById('timer').classList.remove('hidden');
  
  // Start the timer
  if (timer) {
    clearInterval(timer);
  }
  timer = setInterval(updateTimer, 1000);
}

function hideProduct() {
  // Hide auction details and show product list
  document.getElementById('auction-item').classList.add('hidden');
  document.getElementById('timer').classList.add('hidden');
  document.getElementById('product-list').classList.remove('hidden');
  
  // Stop the timer
  clearInterval(timer);
}

function placeBid() {
  const newBid = parseInt(document.getElementById('new-bid').value);
  if (newBid > currentBid) {
    currentBid = newBid;
    document.getElementById('current-bid').innerText = currentBid;
    document.getElementById('new-bid').min = currentBid + 1;
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
      hideProduct();
      return;
    } else {
      remainingMinutes--;
      remainingSeconds = 59;
    }
  } else {
    remainingSeconds--;
  }
}
