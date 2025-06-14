export function displaySpotlight(coins, container) {
    container.innerHTML = '';

    coins.forEach((coin) => {
      let card = document.createElement('section');
      let name = document.createElement("h3");
      let type = document.createElement('p');
      let year = document.createElement('p');
      let mint_mark = document.createElement('p');
      let image = document.createElement('img');
      let price = document.createElement("p");
      let learnMoreBtn = document.createElement("button");
 
      name.textContent = coin.name;
      type.textContent = (`Type: ${coin.type}`);
      year.textContent = (`Year: ${coin.year}`);
      mint_mark.textContent = (`Mint Mark: ${coin.mint_mark}`);
      price.textContent = `Price: $${parseFloat(coin.price_usd).toFixed(2)}`;
      learnMoreBtn.textContent = "Learn More";
      learnMoreBtn.classList.add("learnMoreBtn");
      learnMoreBtn.setAttribute("data-name", coin.name);

      learnMoreBtn.addEventListener('click', () => {
            document.getElementById("dialogTitle").textContent = coin.name;
            const dialogContent = document.getElementById("dialogContent");
            dialogContent.innerHTML = `
              <p><strong>Description: </strong> ${coin.description}</p>
              <p><strong>Type: </strong> ${coin.type}</p>
              <p><strong>Year: </strong> ${coin.year}</p>
              <p><strong>Mint Mark: </strong> ${coin.mint_mark}</p>`;
              
            document.getElementById('learnMoreDialog').showModal();
        });
  
      image.setAttribute('src', `images/${coin.image_url}.webp`);
      image.setAttribute('alt', `Image for ${coin.name}`);
      //image.style.maxHeight = '100px';
      //image.style.width = 'auto';

      card.appendChild(image);
      card.appendChild(name);
      card.appendChild(type);
      card.appendChild(mint_mark);
      card.appendChild(price);
      card.appendChild(learnMoreBtn);

      container.appendChild(card);
    });
  document.getElementById("closeDialog").addEventListener("click", () => {
    document.getElementById("learnMoreDialog").close();
  });
}