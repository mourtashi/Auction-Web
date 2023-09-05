let currentBid = 0;
let remainingMinutes = 9;
let remainingSeconds = 59;
let timer;
let currentProduct = null;
let highestBids = {}; // To keep track of highest bids for each product

function showProduct(name, initialBid, description) {
  currentProduct = name;

  if (!highestBids[currentProduct]) {
    highestBids[currentProduct] = initialBid;
  }

  document.getElementById('item-name').innerText = name;
  document.getElementById('item-description').innerText = description;
  document.getElementById('current-bid').innerText = highestBids[currentProduct];
  document.getElementById('new-bid').min = highestBids[currentProduct] + 1;
  currentBid = highestBids[currentProduct];

  document.getElementById('product-grid').classList.add('hidden');
  document.getElementById('auction-item').classList.remove('hidden');
  document.getElementById('timer').classList.remove('hidden');

  if (timer) {
    clearInterval(timer);
  }
  timer = setInterval(updateTimer, 1000);
}

function hideProduct() {
  document.getElementById('auction-item').classList.add('hidden');
  document.getElementById('timer').classList.add('hidden');
  document.getElementById('product-grid').classList.remove('hidden');

  clearInterval(timer);
}

function placeBid() {
  const newBid = parseInt(document.getElementById('new-bid').value);
  if (newBid > currentBid) {
    currentBid = newBid;
    highestBids[currentProduct] = currentBid; // Update the highest bid for the current product
    document.getElementById('current-bid').innerText = currentBid;
    document.getElementById('new-bid').min = currentBid + 1;
  } else {
    alert('Your bid must be higher than the current bid.');
  }
}

function updateTimer() {
  document.getElementById('time-remaining').innerText = 
    `${remainingMinutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;

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
