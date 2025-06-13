/*document.addEventListener("DOMContentLoaded", () => {
    const goldPriceElement = document.getElementById("gold-price");
    const silverPriceElement = document.getElementById("silver-price");
    const apiKey = "goldapi-7m8smbluu5ve-io";  // API key

    fetch("https://www.goldapi.io/api/XAU/USD", {
        headers: {
            "x-access-token": apiKey,
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(goldData => {
            const goldPrice = goldData.price;
            if (typeof goldPrice === "number") {
                goldPriceElement.textContent = `$${goldPrice.toFixed(2)} USD`;
            } else {
                goldPriceElement.textContent = "Unavailable";
            }

            return fetch("https://www.goldapi.io/api/XAG/USD", {
                headers: {
                    "x-access-token": apiKey,
                    "Content-Type": "application/json"
                }
            });
        })
        .then(response => response.json())
        .then(silverData => {
            const silverPrice = silverData.price;
            if (typeof silverPrice === "number") {
                silverPriceElement.textContent = `$${silverPrice.toFixed(2)} USD`;
            } else {
                silverPriceElement.textContent = "Unavailable";
            }
        })
        .catch(error => {
            console.error("API error:", error);
            goldPriceElement.textContent = "Error fetching prices";
            silverPriceElement.textContent = "Error fetching prices";
        });
    
});
*/
/* 
document.addEventListener("DOMContentLoaded", () => {
    const goldPriceElement = document.getElementById("gold-price");
    const silverPriceElement = document.getElementById("silver-price");
    const apiKey = "goldapi-7m8smbluu5ve-io";  // here is the apiKey  - take away the // before the key to activate key

    const storageKey = "metalPrices";
    const maxAge = 30 * 60 * 1000;  //this makes it refresh every 30 minutes

}    const saved = localStorage.getItem(storageKey);

    if (saved) {
        const cachedData = JSON.parse(saved);        const age = Date.now() - cachedData.timestamp;

        if (age < maxAge) {
            updateDisplay(cachedData);
            return;  // this will use the cached data
        }
    }

    fetchGoldPrice();  // if it is too old or missing
      
    function updateDisplay(data) {
        if (typeof data.gold === "number") {
            goldPriceElement.textContent = `$${data.gold.toFixed(2)} USD`;
        } else {
            goldPriceElement.textContent = "Unavailable";
        }
        
        if (typeof data.silver === "number") {
            silverPriceElement.textContent = `$${data.silver.toFixed(2)} USD`;
        } else {
            silverPriceElement.textContent = "Unavailable";
        }
        }
    
    function fetchGoldPrice() {       // GOLD
        fetch("https://www.goldapi.io/api/XAU/USD", {
            headers: {
                "x-access-token": apiKey,
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(goldData => {
            const goldPrice = goldData.price;
            fetchSilverPrice(goldPrice);
        })
        .catch(error => {
            console.error("Error fetching gold price:", error);
            goldPriceElement.textContent = "Error too many API calls today";
            silverPriceElement.textContent = "Error loading";
        });
    }

    function fetchSilverPrice(goldPrice) {       // Silver
        fetch("https://www.goldapi.io/api/XAG/USD", {
            headers: {
                "x-access-token": apiKey,
                "Content-Type": "application/json"
            },
        })
        .then(response => response.json())
        .then(silverData => {
            const silverPrice = silverData.price;
            const newData = {
                gold: goldPrice,
                silver: silverPrice,
                timestamp: Date.now(),
            };
            localStorage.setItem(storageKey, JSON.stringify(newData));
            updateDisplay(newData);
        })
        
        .catch((error) => {
            console.error("error fetching silver:", error);
            silverPriceElement.textContent = "Unavailable";
        });
    }
});
                
*/
//use this one for metalpriceapi.com
document.addEventListener("DOMContentLoaded", () => {
  const goldPriceElement = document.getElementById("gold-price");
  const silverPriceElement = document.getElementById("silver-price");

  const apiKey = "b545fbbd3bf34b167c67b05f64e4a92a";
  const storageKey = "metalPrices";
  const maxAge = 120 * 60 * 1000; // 120 minutes cache duration

  // Check localStorage cache
  const saved = localStorage.getItem(storageKey);
  if (saved) {
    try {
      const cachedData = JSON.parse(saved);
      const age = Date.now() - cachedData.timestamp;
      if (age < maxAge) {
        updateDisplay(cachedData);
        return; // Use cached data if not expired
      }
    } catch {
      // If JSON parse fails, ignore and fetch new data
    }
  }

  // Fetch fresh data
  fetchPrices();

  function fetchPrices() {
    const url = `https://api.metalpriceapi.com/v1/latest?api_key=${apiKey}&base=USD&currencies=XAU,XAG`;

    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      })
      .then(data => {
        if (data.success === false) throw new Error(data.error.message);

        const gold = data.rates?.USDXAU;
        const silver = data.rates?.USDXAG;

        const newData = {
          gold,
          silver,
          timestamp: Date.now(),
        };

        localStorage.setItem(storageKey, JSON.stringify(newData));
        updateDisplay(newData);
      })
      .catch(error => {
        console.error("API error:", error);
        goldPriceElement.textContent = "Error fetching prices";
        silverPriceElement.textContent = "Error fetching prices";
      });
  }

  function updateDisplay(data) {
    goldPriceElement.textContent =
      typeof data.gold === "number" ? `$${data.gold.toFixed(2)} USD` : "Unavailable";

    silverPriceElement.textContent =
      typeof data.silver === "number" ? `$${data.silver.toFixed(2)} USD` : "Unavailable";
  }
});