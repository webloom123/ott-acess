     // Hamburger menu functionality
     const hamburger = document.querySelector('.hamburger');
     const navbarMenu = document.querySelector('.navbar-menu');

     hamburger.addEventListener('click', () => {
         navbarMenu.classList.toggle('active');
         hamburger.innerHTML = navbarMenu.classList.contains('active') ? '×' : '☰';
     });

     // Plan selection functionality
     document.querySelectorAll('.features li').forEach(li => {
         if (!li.classList.contains('feature-info')) {
             li.addEventListener('click', function() {
                 this.closest('.features').querySelectorAll('li').forEach(item => {
                     if (!item.classList.contains('feature-info')) {
                         item.classList.remove('selected');
                     }
                 });
                 this.classList.add('selected');
             });
         }
     });

     // WhatsApp functionality
     function sendToWhatsApp(platform) {
         const card = document.querySelector(`.subscription-card.${platform}`);
         const selectedPlan = card.querySelector('.features li.selected');
         
         if (!selectedPlan) {
             alert('Please select a plan first');
             return;
         }

         showPaymentPopup(selectedPlan.dataset.plan, selectedPlan.dataset.plan.match(/₹(\d+)/)[1]);
     }

     // Make buyGame function global
     window.buyGame = function(title, price) {
         showPaymentPopup(title, price);
     }

     // Modify the games import section to include search functionality
     import('./games.js')
         .then(module => {
             const gamesData = module.gamesData;
             const gamesGrid = document.querySelector('.games-grid');
             
             if (gamesGrid && gamesData) {
                 // Create and store all game cards
                 gamesData.forEach(game => {
                     const discount = Math.round(((game.originalPrice - game.salePrice) / game.originalPrice) * 100);
                     const card = `
                         <div class="game-card" data-title="${game.title.toLowerCase()}">
                             <div class="game-discount">-${discount}%</div>
                             <div class="game-image">
                                 <img src="${game.image}" alt="${game.title}" onerror="this.src='games/placeholder.jpg'">
                             </div>
                             <div class="game-info">
                                 <h3>${game.title}</h3>
                                 <div class="price-container">
                                     <span class="original-price">₹${game.originalPrice}</span>
                                     <span class="sale-price">₹${game.salePrice}</span>
                                 </div>
                                 <button class="game-cta" onclick="buyGame('${game.title.replace(/'/g, "\\'")}', ${game.salePrice})">
                                     Buy Now
                                 </button>
                             </div>
                         </div>
                     `;
                     gamesGrid.innerHTML += card;
                 });

                 // Update the search functionality
                 const searchInput = document.getElementById('gameSearch');
                 const clearButton = document.getElementById('clearSearch');
                 const searchResults = document.getElementById('searchResults');
                 let debounceTimer;

                 function updateClearButton() {
                     clearButton.style.display = searchInput.value ? 'flex' : 'none';
                 }

                 function clearSearch() {
                     searchInput.value = '';
                     updateClearButton();
                     searchResults.classList.remove('active');
                     document.querySelectorAll('.game-card').forEach(card => {
                         card.classList.remove('hidden');
                     });
                 }

                 function performSearch() {
                     const searchTerm = searchInput.value.toLowerCase().trim();
                     const gameCards = document.querySelectorAll('.game-card');
                     let hasResults = false;

                     if (searchTerm === '') {
                         searchResults.classList.remove('active');
                         gameCards.forEach(card => {
                             card.classList.remove('hidden');
                             card.style.order = ''; // Reset order
                         });
                         return;
                     }

                     searchResults.innerHTML = '';
                     let matchOrder = 0;
                     
                     gameCards.forEach(card => {
                         const title = card.dataset.title;
                         const matches = title.includes(searchTerm);
                         
                         if (matches) {
                             hasResults = true;
                             card.classList.remove('hidden');
                             card.style.order = matchOrder++; // Move matches to top
                             
                             // Add to dropdown results
                             const resultItem = document.createElement('div');
                             resultItem.className = 'search-result-item';
                             const image = card.querySelector('.game-image img').src;
                             
                             resultItem.innerHTML = `
                                 <img src="${image}" alt="${title}">
                                 <div class="result-info">
                                     <div class="result-title">${title}</div>
                                 </div>
                             `;

                             resultItem.addEventListener('click', () => {
                                 card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                 searchResults.classList.remove('active');
                             });

                             searchResults.appendChild(resultItem);
                         } else {
                             card.classList.add('hidden');
                             card.style.order = '999999'; // Move non-matches to bottom
                         }
                     });

                     searchResults.classList.toggle('active', hasResults && searchTerm !== '');
                 }

                 searchInput.addEventListener('input', () => {
                     updateClearButton();
                     clearTimeout(debounceTimer);
                     debounceTimer = setTimeout(performSearch, 300);
                 });

                 clearButton.addEventListener('click', clearSearch);

                 // Close search results when clicking outside
                 document.addEventListener('click', (e) => {
                     if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                         searchResults.classList.remove('active');
                     }
                 });

                 // Handle escape key
                 document.addEventListener('keydown', (e) => {
                     if (e.key === 'Escape') {
                         searchResults.classList.remove('active');
                         searchInput.blur();
                     }
                 });
             }
         })
         .catch(error => console.error('Error loading games:', error));

     // Scroll to Top functionality
     const scrollToTopBtn = document.getElementById('scrollToTop');

     window.addEventListener('scroll', () => {
         if (window.pageYOffset > 300) {
             scrollToTopBtn.classList.add('visible');
         } else {
             scrollToTopBtn.classList.remove('visible');
         }
     });

     scrollToTopBtn.addEventListener('click', () => {
         window.scrollTo({
             top: 0,
             behavior: 'smooth'
         });
     });

     // Add these new functions
     let currentProduct = '';
     let currentPrice = '';

     function showPaymentPopup(product, price) {
         currentProduct = product;
         currentPrice = price;
         const popup = document.getElementById('paymentPopup');
         popup.style.display = 'flex';
     }

     function sendPaymentScreenshot() {
         const message = `Hi, I have made the payment for ${currentProduct} (₹${currentPrice}). Here's my payment screenshot:`;
         const phoneNumber = '918102142543';
         const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
         window.open(whatsappUrl, '_blank');
     }

     // Add popup close functionality
     document.querySelector('.close-popup').addEventListener('click', () => {
         document.getElementById('paymentPopup').style.display = 'none';
     });

     // Close popup when clicking outside
     window.addEventListener('click', (e) => {
         const popup = document.getElementById('paymentPopup');
         if (e.target === popup) {
             popup.style.display = 'none';
         }
     });

     // Add search functionality for OTT services
     const ottSearchInput = document.getElementById('ottSearch');
     const clearOttSearchButton = document.getElementById('clearOttSearch');
     const ottSearchResults = document.getElementById('ottSearchResults');
     let ottDebounceTimer;

     function updateClearOttSearchButton() {
         clearOttSearchButton.style.display = ottSearchInput.value ? 'flex' : 'none';
     }

     function clearOttSearch() {
         ottSearchInput.value = '';
         updateClearOttSearchButton();
         ottSearchResults.classList.remove('active');
         document.querySelectorAll('.subscription-card').forEach(card => {
             card.classList.remove('hidden');
         });
     }

     function performOttSearch() {
         const searchTerm = ottSearchInput.value.toLowerCase().trim();
         const subscriptionCards = document.querySelectorAll('.subscription-card');
         let hasResults = false;

         if (searchTerm === '') {
             ottSearchResults.classList.remove('active');
             subscriptionCards.forEach(card => {
                 card.classList.remove('hidden');
                 card.style.order = ''; // Reset order
             });
             return;
         }

         ottSearchResults.innerHTML = '';
         let matchOrder = 0;

         subscriptionCards.forEach(card => {
             const title = card.querySelector('.platform-title').textContent.toLowerCase();
             const matches = title.includes(searchTerm);

             if (matches) {
                 hasResults = true;
                 card.classList.remove('hidden');
                 card.style.order = matchOrder++; // Move matches to top

                 // Add to dropdown results
                 const resultItem = document.createElement('div');
                 resultItem.className = 'search-result-item';
                 const image = card.querySelector('.platform-logo img').src;

                 resultItem.innerHTML = `
                     <img src="${image}" alt="${title}">
                     <div class="result-info">
                         <div class="result-title">${title}</div>
                     </div>
                 `;

                 resultItem.addEventListener('click', () => {
                     card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                     ottSearchResults.classList.remove('active');
                 });

                 ottSearchResults.appendChild(resultItem);
             } else {
                 card.classList.add('hidden');
                 card.style.order = '999999'; // Move non-matches to bottom
             }
         });

         ottSearchResults.classList.toggle('active', hasResults && searchTerm !== '');
     }

     ottSearchInput.addEventListener('input', () => {
         updateClearOttSearchButton();
         clearTimeout(ottDebounceTimer);
         ottDebounceTimer = setTimeout(performOttSearch, 300);
     });

     clearOttSearchButton.addEventListener('click', clearOttSearch);

     // Close search results when clicking outside
     document.addEventListener('click', (e) => {
         if (!ottSearchInput.contains(e.target) && !ottSearchResults.contains(e.target)) {
             ottSearchResults.classList.remove('active');
         }
     });

     // Handle escape key
     document.addEventListener('keydown', (e) => {
         if (e.key === 'Escape') {
             ottSearchResults.classList.remove('active');
             ottSearchInput.blur();
         }
     });
