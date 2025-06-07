document.addEventListener("DOMContentLoaded", () => {
  const goldPriceElement = document.getElementById("gold-price");
  const silverPriceElement = document.getElementById("silver-price");
  const apiKey = "goldapi-7m8smbluu5ve-io";  // here is the apiKey 

  function fetchPrices() {       // GOLD
    fetch("https://www.goldapi.io/api/XAU/USD", {
      method: "GET",
      headers: {
        "x-access-token": apiKey,
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(data => {
      goldPriceElement.textContent = `$${data.price.toFixed(2)} USD`;
    })
    .catch(error => {
      console.error("Error fetching gold price:", error);
      goldPriceElement.textContent = "Error loading";
    });

    
    fetch("https://www.goldapi.io/api/XAG/USD", {    // SILVER
      method: "GET",
      headers: {
        "x-access-token": apiKey,
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(data => {
      silverPriceElement.textContent = `$${data.price.toFixed(2)} USD`;
    })
    .catch(error => {
      console.error("Error fetching silver price:", error);
      silverPriceElement.textContent = "Error loading";
    });
  }

 
  fetchPrices();    // Initial fetch on page load


  setInterval(fetchPrices, 1800000);    // Update every half hour  
});