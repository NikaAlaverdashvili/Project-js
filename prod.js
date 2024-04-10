//basket window
function showWindow() {
    document.getElementById("myWindow").style.display = "block";
  }
  
  function hideWindow() {
    document.getElementById("myWindow").style.display = "none";
  }
  
  document.querySelector(".Shop").addEventListener("click", function() {
    window.location.href = 'basket.html';
    window.location.href = 'product.html';
  });
  
  document.querySelector(".Shop").addEventListener("mouseenter", showWindow);
  document.querySelector(".Shop").addEventListener("mouseleave", hideWindow);
  
  document.getElementById("myWindow").addEventListener("mouseenter", showWindow);
  document.getElementById("myWindow").addEventListener("mouseleave", hideWindow);
  
  
  document.querySelector(".basket-Batton").addEventListener("click", function() {
    window.location.href = 'basket.html';
    window.location.href = 'product.html';
  });




  const button = document.querySelector('.navigation-button');

button.addEventListener('click', function() {
  window.location.href = 'navigation.html'; 
});

const webName = document.querySelector('.Web-Name');

webName.addEventListener('click', function() {
  window.location.href = 'index.html'; 
});






//login window
function openLoginWindow() {
    var loginWindow = document.getElementById("loginWindow");
    loginWindow.style.display = "block";
  }
  
  function closeLoginWindow() {
    var loginWindow = document.getElementById("loginWindow");
    loginWindow.style.display = "none";
  }
  
  
  
  
  
  
  
  //phone number input
  const phoneInput = document.getElementById("phoneNum");
  
  phoneInput.addEventListener("input", function(event) {
    const cleanedValue = event.target.value.replace(/\D/g, '');
    event.target.value = cleanedValue;
  });













  const filteredProducts = JSON.parse(localStorage.getItem('filteredProducts'));

    // Function to generate product cards
    function generateProductCards() {
        const productContainer = document.getElementById('productContainer');
        filteredProducts.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('product-card');

            const image = document.createElement('img');
            image.src = product.image;
            card.appendChild(image);

            const name = document.createElement('p');
            name.textContent = product.name;
            card.appendChild(name);

            const price = document.createElement('p');
            price.textContent = '$' + product.price;
            card.appendChild(price);

            const button = document.createElement('button');
            button.textContent = 'Buy Now';
            card.appendChild(button);

            productContainer.appendChild(card);
        });
    }

    // Call the function to generate product cards
    generateProductCards();

  
  
  

   
   








  
  
  
  //products
    
  const productsArr = [
  
  
    {
        image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F9915f45f-ed5f-4031-8f21-4ff6c3036fa8_Thumb.jpeg&w=640&q=100',
        category: 'SMARTPHONES',
        brand: 'Apple',
        name: 'Apple iPhone 15 Pro e-SIM only',
        price: 2999 
    },
  
    {
        image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2Fe7f43c2e-4cb9-43d4-8415-8fb08fccc987_Thumb.jpeg&w=640&q=100',
        category: 'lAPTOPS | IT',
        brand: 'Lenovo',
        name: 'Lenovo ThinkPad T16 G2 21HH0052RT Thunder Black',
        price: 3830
    },
  
    {
        image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0182432_apple-ipad-pro-11-2022-4th-gen-128gb-wi-fi-space-grey_550.jpeg&w=640&q=100',
        category: 'TABS',
        brand: 'Apple',
        name: 'Apple iPad Pro 11 2022 4th Gen 128GB Wi-Fi Space Grey',
        price: 2789
    },
  
    {
      image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0182383_apple-iphone-14-128gb-midnight_550.jpeg&w=640&q=100',
      category: 'SMARTPHONES',
      brand: 'Apple',
      name: 'Apple iPhone 14 | 128GB Midnight',
      price: 2234 
  },
  
  {
      image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F94d3fa0f-98df-46b7-aa2c-d500bf36eb90_Thumb.jpeg&w=640&q=100',
      category: 'lAPTOPS | IT',
      brand: 'Apple ',
      name: 'Apple MacBook Pro 14 inch 2023 MTL73LL/A M3 Chip',
      price: 3830
  },
  
  {
      image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0192777_microsoft-surface-pro-9-2022-intel-evo-i7-16gb-ssd-256gb-intel-core-i7-1255u-intel-iris-xe-graphics-_550.jpeg&w=640&q=100',
      category: 'TABS',
      brand: 'Microsoft',
      name: 'Microsoft Surface Pro 9 2022 Intel Evo i7 16GB SSD 256GB Platinum',
      price: 2789
  },
  
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0154317_apple-iphone-13-128gb-midnight_550.jpeg&w=640&q=100',
    category: 'SMARTPHONES',
    brand: 'Apple',
    name: 'Apple iPhone 13 | 128GB Midnight',
    price: 1934
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2Feb5000c1-f201-4bd5-89f3-6e594d27aeb8_Thumb.jpeg&w=640&q=100',
    category: 'lAPTOPS | IT',
    brand: 'Lenovo',
    name: 'Lenovo Thinkbook 16 21KH001ERU, Intel Core i5-1335U',
    price: 2504
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F93ab1ffb-7b64-4423-984d-5cd21a150fa8_Thumb.jpeg&w=640&q=100',
    category: 'TABS',
    brand: 'Xiaomi',
    name: 'Xiaomi Pad 6 6GB RAM 128GB Wi-Fi Grey',
    price: 966
  },
  
  {
  image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2Fd0035050-3d37-4e4d-97cc-f22e4f7d3561_Thumb.jpeg&w=640&q=100',
  category: 'SMARTPHONES',
  brand: 'Google Pixel',
  name: 'Google Pixel 8 Pro 5G 12/256GB Obsidian',
  price: 2960 
  },
  
  {
  image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0179638_microsoft-surface-laptop-5-135-inch-2022-intel-evo-i5-8gb-ssd-512gb-intel-core-i5-12th-gen-intel-uhd_550.jpeg&w=640&q=100',
  category: 'lAPTOPS | IT',
  brand: 'Microsoft',
  name: 'Microsoft Surface Laptop 5 13.5 inch 2022 Intel Evo i5 8GB SSD 512GB, ',
  price: 4999
  },
  
  {
  image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F1b030dca-a8ed-41ab-8e4a-a883a9130b61_Thumb.jpeg&w=640&q=100',
  category: 'TABS',
  brand: 'Realme',
  name: 'Realme Pad 2 LTE 8/256GB Grey',
  price: 799
  },
  
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0195558_nothing-phone-2-5g-12256gb-white_550.jpeg&w=640&q=100',
    category: 'SMARTPHONES',
    brand: 'Nothing',
    name: 'Nothing Phone (2) 5G 12/256GB White',
    price: 2008
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F9338e37c-bb04-4b85-b308-559e8db503dd_Thumb.jpeg&w=640&q=100',
    category: 'lAPTOPS | IT',
    brand: 'Dell',
    name: 'Dell Inspiron 16 5630 210-BFZR_i5_GE, Intel Core i5-1335U',
    price: 2104
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F677d176a-a901-45b8-aa18-fc60c73c3f12_Thumb.jpeg&w=640&q=100',
    category: 'TABS',
    brand: 'Samsung',
    name: 'Samsung SM-X216 Galaxy Tab A9+ Single Sim 4GB RAM 64GB 5G Graphite',
    price: 839 
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0143318_apple-iphone-12-64gb-purple_550.jpeg&w=640&q=100',
    category: 'SMARTPHONES',
    brand: 'Apple',
    name: 'Apple iPhone 12 | 64GB Purple',
    price: 1549 
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0192847_asus-rog-strix-16-g614ju-n3110-intel-core-i7-13650hx-nvidia-geforce-rtx-4050-16gb-ram-ssd-512gb-free_550.jpeg&w=640&q=100',
    category: 'lAPTOPS | IT',
    brand: 'Asus',
    name: 'Asus ROG Strix 16 G614JU-N3110, Intel core i7 13650HX',
    price: 4199
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F9308e4d9-be41-4c77-8cb2-acb318a4af07_Thumb.jpeg&w=640&q=100',
    category: 'TABS',
    brand: 'Apple ',
    name: 'Apple iPad 2021 9th Generation 10.2 inch 64GB Wi-Fi Silver',
    price: 929
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2Fa1600152-dcd7-43a5-85eb-5f814db4bf76_Thumb.jpeg&w=640&q=100',
    category: 'SMARTPHONES',
    brand: 'Samsung',
    name: 'Samsung Galaxy Fold 5 F946B/DS 5G 12/256GB Phantom Black',
    price: 4299
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0193338_hp-pavilion-15-84j91ea-amd-ryzen-7-7730-octa-20-ghz-amd-radeon-graphics-16gb-ram-ssd-512gb-free-dos-_550.jpeg&w=640&q=100',
    category: 'lAPTOPS | IT',
    brand: 'HP',
    name: 'HP Pavilion 15 84J91EA, AMD Ryzen 7 7730 Octa 2.0 Ghz,',
    price: 1999 
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0175829_samsung-sm-x906-galaxy-tab-s8-ultra-128gb-5g-graphite_550.jpeg&w=640&q=100',
    category: 'TABS',
    brand: 'Samsung',
    name: 'Samsung SM-X906 Galaxy Tab S8 Ultra 128GB 5G Graphite',
    price: 2399
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2Ffb67432e-9cb1-4caa-8608-aa2b65f6f650_Thumb.jpeg&w=640&q=100',
    category: 'SMARTPHONES',
    brand: 'Xiaomi',
    name: 'Xiaomi 14 Ultra 5G 16/512GB Black',
    price: 3599
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F299e2cc7-cf90-4351-9d6f-42792e08318d_Thumb.jpeg&w=640&q=100',
    category: 'lAPTOPS | IT',
    brand: 'Acer',
    name: 'Acer Predator Helios Neo 16 PHN16-72 NH.QRFER.003',
    price: 5999
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0164371_apple-ipad-air-5th-generation-109-64gb-wi-fi-space-grey_550.jpeg&w=640&q=100',
    category: 'TABS',
    brand: 'Apple ',
    name: 'Apple iPad Air 5th Generation 10.9 64GB Wi-Fi Space Grey',
    price: 1699 
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F4a459cca-cbb9-45e7-92dd-e637f88d336e_Thumb.jpeg&w=640&q=100',
    category: 'SMARTPHONES',
    brand: 'Samsung',
    name: 'Samsung Galaxy S24 S921B 5G 8/256GB Onyx Black',
    price: 2199 
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0195854_hp-omen-16-84k16ea-black_550.jpeg&w=640&q=100',
    category: 'lAPTOPS | IT',
    brand: 'HP',
    name: 'HP Omen 16 84K16EA, Intel core i9-13900HX, Nvidia GeForce RTX 4070',
    price: 7999
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0179609_microsoft-surface-pro-9-2022-intel-evo-i5-8gb-ssd-256gb-intel-core-i5-12th-gen-intel-iris-xe-graphic_550.jpeg&w=640&q=100',
    category: 'TABS',
    brand: 'Microsoft',
    name: 'Microsoft Surface Pro 9 2022 Intel Evo i5',
    price: 3999
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F6afb3544-064c-46aa-9fab-ed499a13de11_Thumb.jpeg&w=640&q=100',
    category: 'SMARTPHONES',
    brand: 'Xiaomi ',
    name: 'Xiaomi Poco X6 Pro 5G 12/512GB Grey',
    price: 1049
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F4e3d3f01-2f2a-4730-a30c-44cf2e590e4c_Thumb.jpeg&w=640&q=100',
    category: 'lAPTOPS | IT',
    brand: 'MSI',
    name: 'MSI Katana 15 9S7-158571-1828, Intel core i7-13700H',
    price: 4199
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0198323_samsung-sm-x816-galaxy-tab-s9-256gb-5g-graphite_550.jpeg&w=640&q=100',
    category: 'TABS',
    brand: 'Samsung',
    name: 'Samsung SM-X816 Galaxy Tab S9+ 256GB 5G Graphit',
    price: 2999
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0157506_google-pixel-6-pro-5g-12128gb-stormy-black_550.jpeg&w=640&q=100',
    category: 'SMARTPHONES',
    brand: 'Google Pixel',
    name: 'Google Pixel 6 Pro 5G 12/128GB Stormy Black',
    price: 1349
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F3448f276-8993-498f-8b36-8a6e7a1c4f0b_Thumb.jpeg&w=640&q=100',
    category: 'lAPTOPS | IT',
    brand: 'Lenovo',
    name: 'Lenovo Ideapad Slim 3 82X7009MRK',
    price: 1329
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0198930_xiaomi-redmi-pad-se-4gb-ram-128gb-wi-fi-graphite-gray_550.jpeg&w=640&q=100',
    category: 'TABS',
    brand: 'Xiaomi',
    name: 'Xiaomi Redmi Pad SE 6/128GB Wi-Fi Grey',
    price: 599
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F709e0fd9-075e-4179-b653-ce87d7fbe42d_Thumb.jpeg&w=640&q=100',
    category: 'SMARTPHONES',
    brand: 'Xiaomi',
    name: 'Xiaomi Redmi A3 4/128GB Green',
    price: 289
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F027e185e-3193-44c9-ab68-754230365ac3_Thumb.jpeg&w=640&q=100',
    category: 'lAPTOPS | IT',
    brand: 'Apple',
    name: 'Apple MacBook Pro 16 inch 2023 MRW23B/A M3 Pro Chip',
    price: 9399 
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0164380_apple-ipad-air-5th-generation-109-64gb-wi-fi-pink_550.jpeg&w=640&q=100',
    category: 'TABS',
    brand: 'Apple',
    name: 'Apple iPad Air 5th Generation 10.9 64GB Wi-Fi Pink',
    price: 1699 
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F5bd2b227-125d-49f8-beb9-def6d636b7c6_Thumb.jpeg&w=640&q=100',
    category: 'SMARTPHONES',
    brand: 'Apple',
    name: 'Apple iPhone 15 Plus | 128GB Green',
    price: 2799 
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0186147_apple-macbook-air-13-inch-2020-mgnd3lla-m1chipset8gb256gb-ssd-gold-apple-m15nm-apple-7-core-gpu-8gb-_550.jpeg&w=640&q=100',
    category: 'lAPTOPS | IT',
    brand: 'Apple',
    name: 'Apple Macbook Air 13 inch 2020 MGND3B/A M1Chipset',
    price: 2699
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0191744_realme-pad-104-inch-64gb-wi-fi-grey_550.jpeg&w=640&q=100',
    category: 'TABS',
    brand: 'Realme',
    name: 'Realme Pad 10.4 inch 32GB Wi-Fi Grey',
    price: 369
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F4d3b0ef0-b975-41e8-b819-5fe5ca5b0945_Thumb.jpeg&w=640&q=100',
    category: 'SMARTPHONES',
    brand: 'Honor',
    name: 'Honor X8b 4G 8/256GB Midnight',
    price: 599
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2Fdc399551-f93d-421c-b7ca-ead02ddf6b3b_Thumb.jpeg&w=640&q=100',
    category: 'lAPTOPS | IT',
    brand: 'Samsung',
    name: 'Samsung Galaxy Book 3 NP754XFG-KB1US, Intel Core i7-1355U',
    price: 3099
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0195929_realme-pad-104-inch-64gb-lte-grey_550.jpeg&w=640&q=100',
    category: 'TABS',
    brand: 'Realme',
    name: 'Realme Pad 10.4 inch 64GB LTE Grey',
    price: 549
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0198903_oneplus-nord-ce-3-lite-5g-8256gb-grey_550.jpeg&w=640&q=100',
    category: 'SMARTPHONES',
    brand: 'OnePlus',
    name: 'OnePlus Nord CE 3 Lite 5G 8/256GB Grey',
    price: 759
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2Fe3e08080-ffb5-4d55-bd2e-c45cfb62f9d8_Thumb.jpeg&w=640&q=100',
    category: 'lAPTOPS | IT',
    brand: 'Samsung',
    name: 'Samsung Galaxy Book 3 NP750XFG-KB2US, Intel Core i7-1355U',
    price: 2999 
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0195940_realme-pad-104-inch-128gb-lte-grey_550.jpeg&w=640&q=100',
    category: 'TABS',
    brand: 'Realme',
    name: 'Realme Pad 10.4 inch 128GB LTE Grey',
    price: 649
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2Fa22c0a41-7527-4729-a9f1-68eb9f475c08_Thumb.jpeg&w=640&q=100',
    category: 'SMARTPHONES',
    brand: 'Honor',
    name: 'Honor X8b 4G 8/256GB Green',
    price: 599
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0193115_msi-bravo-15-c7udx-9s7-158n11-076-black_550.jpeg&w=640&q=100',
    category: 'lAPTOPS | IT',
    brand: 'MSI',
    name: 'MSI Bravo 15 C7UDX 9S7-158N11-076, AMD Ryzen 7 7735HS',
    price: 2999
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2Fe226ccf9-06f8-4f9c-b41f-16e67bf4c5a6_Thumb.jpeg&w=640&q=100',
    category: 'TABS',
    brand: 'Xiaomi ',
    name: 'Xiaomi Pad SE 8/256GB Wi-Fi Purple',
    price: 649
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F0892eea6-72dd-4a21-9591-049f82de09fe_Thumb.jpeg&w=640&q=100',
    category: 'SMARTPHONES',
    brand: 'Honor ',
    name: 'Honor X7b 4G 8/128GB Silver',
    price: 449
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0198065_lenovo-thinkpad-e14-g5-21jk0006rt-black_550.jpeg&w=640&q=100',
    category: 'lAPTOPS | IT',
    brand: 'Lenovo',
    name: 'Lenovo ThinkPad E14 G5 21JK0006RT, Intel Core i7-1355U',
    price: 3099
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2Fbe98b505-1cc3-4bc0-b84f-6a679ea17095_Thumb.jpeg&w=640&q=100',
    category: 'TABS',
    brand: 'Xiaomi',
    name: 'Xiaomi Redmi Pad SE 4/128GB Wi-Fi Purple',
    price: 549
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2Fbac76846-5117-4fb1-9590-9b4397ac0a28_Thumb.jpeg&w=640&q=100',
    category: 'SMARTPHONES',
    brand: 'OnePlus',
    name: 'OnePlus 12R 5G16/256GB Cool Blue',
    price: 1899
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0197881_lenovo-legion-pro-5-82wk00bsrk-onyx-grey_550.jpeg&w=640&q=100',
    category: 'lAPTOPS | IT',
    brand: 'Lenovo',
    name: 'Lenovo Legion Pro 5 82WK00CDRK, Intel core i7-13700HX',
    price: 5899 
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0198776_xiaomi-pad-6-8gb-ram-256gb-wi-fi-gold_550.jpeg&w=640&q=100',
    category: 'TABS',
    brand: 'Xiaomi',
    name: 'Xiaomi Pad 6 8/256GB Wi-Fi Rose Gold',
    price: 999
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0190333_oneplus-nord-ce-3-lite-5g-8128gb-green_550.jpeg&w=640&q=100',
    category: 'SMARTPHONES',
    brand: 'OnePlus',
    name: 'OnePlus Nord CE 3 Lite 5G 8/128GB Green',
    price: 729
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F1e788ebc-d1ab-46f8-b833-426e997480f0_Thumb.jpeg&w=640&q=100',
    category: 'lAPTOPS | IT',
    brand: 'Acer',
    name: 'Acer Aspire 3 A315-59 NX.K6SER.00B, Intel Core i3-1215U',
    price: 1199
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0192732_microsoft-surface-pro-9-2022-intel-evo-i5-16gb-ssd-256gb-intel-core-i5-1235u-intel-iris-xe-graphics-_550.jpeg&w=640&q=100',
    category: 'TABS',
    brand: 'Microsoft',
    name: 'Microsoft Surface Pro 9 2022 Intel Evo i5 16GB SSD 256GB Graphite',
    price: 4599
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2Ff88a7cc7-669e-4847-83f5-83b83fc8998b_Thumb.jpeg&w=640&q=100',
    category: 'SMARTPHONES',
    brand: 'OnePlus',
    name: 'OnePlus 12 16/512GB Flowy Emerald',
    price: 2899
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F47b7bd72-fd54-4f00-8f8f-b770b1be7e73_Thumb.jpeg&w=640&q=100',
    category: 'lAPTOPS | IT',
    brand: 'OnePlus',
    name: 'Acer Nitro 15 ANV15-51 NH.QQEER.002, Intel core i7-13620H',
    price: 3999
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F7aa2a813-7f94-4b09-9322-afda16631b56_Thumb.jpeg&w=640&q=100',
    category: 'TABS',
    brand: 'Samsung',
    name: 'Samsung SM-X115 Galaxy Tab A9 Single Sim 4GB RAM 64GB LTE Navy',
    price: 499
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2Fda48be59-e053-4887-ad26-4c4447a4066c_Thumb.jpeg&w=640&q=100',
    category: 'SMARTPHONES',
    brand: 'Nothing ',
    name: 'Nothing Phone (2a) 12/256GB Black',
    price: 1349
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0197963_acer-aspire-5-a515-58p-nxkhjer002-grey_550.jpeg&w=640&q=100',
    category: 'lAPTOPS | IT',
    brand: 'Acer',
    name: 'Acer Aspire 5 A515-58P NX.KHJER.002, Intel Core i3-1315U 3.3Ghz',
    price: 1129
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F8221c366-24dd-40a1-b6be-767278412042_Thumb.jpeg&w=640&q=100',
    category: 'TABS',
    brand: 'Samsung',
    name: 'Samsung SM-X110 Galaxy Tab A9 4GB RAM 64GB Wi-Fi Silver',
    price: 399
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0195553_nothing-phone-2-5g-12256gb-grey_550.jpeg&w=640&q=100',
    category: 'SMARTPHONES',
    brand: 'Nothing',
    name: 'Nothing Phone (2) 5G 12/256GB Grey',
    price: 1849
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0192424_hp-victus-15-84j96ea-intel-core-i7-13700h-nvidia-geforce-rtx-4050-6gb-16gb-ram-ssd-512gb-free-dos-le_550.jpeg&w=640&q=100',
    category: 'lAPTOPS | IT',
    brand: 'HP',
    name: 'HP Victus 15 84J96EA, Intel core i7-13700H',
    price: 3799
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0177636_samsung-sm-p613-galaxy-tab-s6-lite-2022-104-wi-fi-64gb-pink_550.jpeg&w=640&q=100',
    category: 'TABS',
    brand: 'Samsung',
    name: 'Samsung SM-P613 Galaxy Tab S6 lite 2022 10.4 Wi-FI 64GB Pink',
    price: 899
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0177587_google-pixel-7-5g-8128gb-lemongrass_550.jpeg&w=640&q=100',
    category: 'SMARTPHONES',
    brand: 'Google Pixel',
    name: 'Google Pixel 7 5G 8/128GB Lemongrass',
    price: 1179
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F3ad2aeb3-b8f6-4bca-a6e9-c49c414f726d_Thumb.png&w=640&q=100',
    category: 'lAPTOPS | IT',
    brand: 'HP',
    name: 'HP Omen 17 8F5P6EA, Intel core i7-13700HX',
    price: 7299
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F068dd37a-cc35-4c5d-9a6b-b0d6d755dc42_Thumb.jpeg&w=640&q=100',
    category: 'TABS',
    brand: 'Samsung',
    name: 'Samsung SM-X616 Galaxy Tab S9 FE+ 12GB RAM 256GB 5G Lavender',
    price: 2149
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F329256cf-61ed-4466-bfb1-b260ad08c00b_Thumb.jpeg&w=640&q=100',
    category: 'SMARTPHONES',
    brand: 'Xiaomi ',
    name: 'Xiaomi Poco X6 5G 8/256GB White',
    price: 739
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0171990_apple-macbook-air-13-inch-2022-mly13lla-m2-chip-8gb256gb-ssd-starlight-apple-m25nm-apple-8-core-gpu-_550.jpeg&w=640&q=100',
    category: 'lAPTOPS | IT',
    brand: 'Apple',
    name: 'Apple MacBook Air 13 inch 2022 MLY13LL/A M2 Chip 8GB',
    price:3299 
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F5e85a4e7-34ad-436c-84d4-5b16446bfcbb_Thumb.jpeg&w=640&q=100',
    category: 'TABS',
    brand: 'Samsung ',
    name: 'Samsung SM-X216 Galaxy Tab A9+ Single Sim 8GB RAM 128GB 5G Silver',
    price: 939
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F8d3cf4ae-37ce-4065-9065-ab06874bb030_Thumb.jpeg&w=640&q=100',
    category: 'SMARTPHONES',
    brand: 'Apple',
    name: 'Apple iPhone 15 Pro Max | 1TB Natural Titanium',
    price: 5399
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0196691_apple-macbook-air-153-inch-2023-mqkq3lla-m2-chip-8gb512gb-ssd-space-grey_550.jpeg&w=640&q=100',
    category: 'lAPTOPS | IT',
    brand: 'Apple',
    name: 'Apple MacBook Air 15.3 inch 2023 MQKQ3LL/A M2 Chip 8GB',
    price: 4299
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0164371_apple-ipad-air-5th-generation-109-64gb-wi-fi-space-grey_550.jpeg&w=640&q=100',
    category: 'TABS',
    brand: 'Apple',
    name: 'Apple iPad Air 5th Generation 10.9 64GB Wi-Fi Space Grey',
    price: 1699
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0185094_xiaomi-smart-laser-measure-grey_550.jpeg&w=640&q=100',
    category: 'SMART GADJETS',
    brand: 'Xiaomi',
    name: 'Xiaomi Smart Laser Measure Grey',
    price: 129
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0147738_philips-nose-trimmer-nt365016-black_550.jpeg&w=640&q=100',
    category: 'SMART GADJETS',
    brand: 'Philips',
    name: 'Philips Nose Trimmer NT3650/16 Black',
    price: 69
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0186176_google-nest-thermostat_550.jpeg&w=640&q=100',
    category: 'SMART GADJETS',
    brand: 'Google',
    name: 'Google Nest Thermostat',
    price: 299
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0184248_google-nest-doorbell-battery-smart-wifi-doorbell-camera-ash_550.jpeg&w=640&q=100',
    category: 'SMART GADJETS',
    brand: 'Google',
    name: 'Google Nest Doorbell Battery Smart WiFi Doorbell Camera Ash',
    price: 499
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F065b68f7-1c06-4f73-a50d-aaf83c7433fe_Thumb.jpeg&w=640&q=100',
    category: 'SMART GADJETS',
    brand: 'Amazon',
    name: 'Amazon Echo 5th Gen Smart speaker White',
    price: 149 
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0192594_xiaomi-mi-electric-scooter-4-pro-black_550.jpeg&w=640&q=100',
    category: 'SMART GADJETS',
    brand: 'Xiaomi',
    name: 'Xiaomi Mi Electric Scooter 4 Pro Black',
    price: 1899 
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0192618_dyson-purifier-cool-formaldehyde-purifying-fan-tp09-whitegold_550.jpeg&w=640&q=100',
    category: 'SMART GADJETS',
    brand: 'Dyson',
    name: 'Dyson Purifier Cool Formaldehyde purifying fan TP09',
    price: 2099
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0185308_deerma-dehumidifier-cs50mw-white_550.jpeg&w=640&q=100',
    category: 'SMART GADJETS',
    brand: 'Deerma',
    name: 'Deerma Dehumidifier CS50MW White',
    price: 99
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0183343_xiaomi-smart-pet-food-feeder-bhr6143eu-white_550.jpeg&w=640&q=100',
    category: 'SMART GADJETS',
    brand: 'Xiaomi',
    name: 'Xiaomi Smart Pet Food Feeder BHR6143EU White',
    price: 349
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0198292_amazon-echo-show-5-3nd-gen-cloud-blue_550.jpeg&w=640&q=100',
    category: 'SMART GADJETS',
    brand: 'Amazon',
    name: 'Amazon Echo Show 5 3nd Gen Blue',
    price: 249
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0161465_house-of-marley-get-together-duo_550.jpeg&w=640&q=100',
    category: 'AUDIO SYSTEM',
    brand: 'Marley',
    name: 'House Of Marley Get Together Duo',
    price: 499
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0187107_beats-pill-plus-portable-wireless-speaker-black_550.jpeg&w=640&q=100',
    category: 'AUDIO SYSTEM',
    brand: 'Beats',
    name: 'Beats Pill Plus Portable Wireless Speaker Black',
    price: 299
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0188724_marshall-woburn-iii-cream_550.jpeg&w=640&q=100',
    category: 'AUDIO SYSTEM',
    brand: 'Marshall',
    name: 'Marshall Woburn III Cream',
    price: 1499
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F1d66ffd2-10aa-499b-980c-7a2fc2762e2c_Thumb.jpeg&w=640&q=100',
    category: 'AUDIO SYSTEM',
    brand: 'Marshall',
    name: 'Marshall Tufton Bluetooth Black',
    price: 1299
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0190250_audio-technica-at-lp120xusb-silver_550.jpeg&w=640&q=100',
    category: 'AUDIO SYSTEM',
    brand: 'Audio-Technica',
    name: 'Audio-Technica AT-LP120XUSB Silver',
    price: 1049 
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0198933_apple-airpods-pro-2-with-usb-c-charging-case-mtjv3-2023_550.jpeg&w=640&q=100',
    category: 'AUDIO SYSTEM',
    brand: 'Apple',
    name: 'Apple AirPods Pro 2 With USB-C Charging Case',
    price: 749
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0171037_hyperx-quadcast-s-mic_550.jpeg&w=640&q=100',
    category: 'AUDIO SYSTEM',
    brand: 'HyperX',
    name: 'HyperX QuadCast S Mic',
    price: 359
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0136363_apple-airpods-max-sky-blue_550.jpeg&w=640&q=100',
    category: 'AUDIO SYSTEM',
    brand: 'Apple',
    name: 'Apple AirPods Max Blue',
    price: 1839
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0191573_marshall-emberton-ii-cream_550.jpeg&w=640&q=100',
    category: 'AUDIO SYSTEM',
    brand: 'Marshall',
    name: 'Marshall Emberton II cream',
    price: 449
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0190244_jbl-xtreme-3-blue_550.jpeg&w=640&q=100',
    category: 'AUDIO SYSTEM',
    brand: 'JBL',
    name: 'JBL Xtreme 3 Blue',
    price: 799
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0167026_nintendo-switch-oled-2021-white_550.jpeg&w=640&q=100',
    category: 'GAMING',
    brand: 'Nintendo',
    name: 'Nintendo Switch Oled 2021 White',
    price: 879
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F7160a520-ff23-4d2b-b27d-98c18aa3c3ce_Thumb.jpeg&w=640&q=100',
    category: 'GAMING',
    brand: 'Microsoft',
    name: 'Microsoft Xbox Series S Digital Edition 1TB',
    price: 1069
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F58d2ef74-8ce1-416f-8058-ae05779ba13e_Thumb.jpeg&w=640&q=100',
    category: 'GAMING',
    brand: 'Asus',
    name: 'Asus ROG Ally RC71L Z1',
    price: 2249
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F9fd7ddf5-c35f-44a4-b8e1-776b49c2bd28_Thumb.jpeg&w=640&q=100',
    category: 'GAMING',
    brand: 'PlayStation',
    name: 'Sony PlayStation PS5 Slim 1TB Gran Turismo 7 Bundle',
    price: 1629
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0186844_oculus-meta-quest-pro-256gb-black_550.jpeg&w=640&q=100',
    category: 'GAMING',
    brand: 'Meta',
    name: 'Oculus Meta Quest Pro 256GB Black',
    price: 3299
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2Fe45fd6bc-ca61-4525-8594-14a1022f4434_Thumb.jpeg&w=640&q=100',
    category: 'GAMING',
    brand: 'Apple',
    name: 'Apple Vision Pro MQL83 256GB White',
    price: 11999
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0170979_g5-handheld-gaming-device-two-player-pink_550.jpeg&w=640&q=100',
    category: 'GAMING',
    brand: 'Handheld',
    name: 'G5 Handheld Gaming Device Two-Player Pink',
    price: 79 
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0150212_microsoft-xbox-series-xs-controller-special-edition-daystrike-camo_550.jpeg&w=640&q=100',
    category: 'GAMING',
    brand: 'Microsoft',
    name: 'Microsoft Xbox Series X/S',
    price: 199
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2Fe4b5d5db-98f4-4b5a-aad4-2d06cb18f056_Thumb.jpeg&w=640&q=100',
    category: 'GAMING',
    brand: 'Sony',
    name: 'PS5 Wireless Controller Dualsense Edge White',
    price: 619 
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0194130_f1-2023-game-for-ps5_550.jpeg&w=640&q=100',
    category: 'GAMING',
    brand: 'Sony',
    name: 'F1 2023 Game for PS5',
    price: 179
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F47db8e46-79d7-49f0-87e2-d6645894fa95_Thumb.jpeg&w=640&q=100',
    category: 'TV | MONITORS',
    brand: 'Samsung',
    name: 'Samsung TV QE55Q80CAUXZT-2021',
    price: 2899
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F72364e68-cd67-4ac4-8178-4c0e2128ad30_Thumb.jpeg&w=640&q=100',
    category: 'TV | MONITORS',
    brand: 'LG',
    name: 'LG TV 55UP78003LB',
    price: 1299 
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F86aaafdf-3215-4ff8-8aa7-640d6a72cf99_Thumb.jpeg&w=640&q=100',
    category: 'TV | MONITORS',
    brand: 'Samsung',
    name: 'Samsung TV QE75Q60CAUXXH-2023',
    price: 3999
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0197538_xiaomi-tv-q2-65-global-version-black_550.jpeg&w=640&q=100',
    category: 'TV | MONITORS',
    brand: 'Xiaomi',
    name: 'Xiaomi TV Q2 65 Global Version',
    price: 1849
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0185462_xiaomi-tv-a2-50-global-version_550.jpeg&w=640&q=100',
    category: 'TV | MONITORS',
    brand: 'Xiaomi',
    name: 'Xiaomi TV A2 50 Global Version',
    price: 979
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2Fd80a0bb2-9c93-4c22-9dcc-ed53bdeff37f_Thumb.jpeg&w=640&q=100',
    category: 'TV | MONITORS',
    brand: 'Samsung',
    name: 'Samsung TV UE50CU8072UXXH-2023',
    price: 1449
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F25f1fcb8-24a4-4513-b8bb-08baac39a7dd_Thumb.jpeg&w=640&q=100',
    category: 'TV | MONITORS',
    brand: 'Samsung',
    name: 'Samsung TV UE50AU7090UXZT-2021',
    price: 1099 
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0196289_samsung-tv-ue65cu7172uxxh-2023-televizori_550.jpeg&w=640&q=100',
    category: 'TV | MONITORS',
    brand: 'Samsung',
    name: 'Samsung TV UE65CU7172UXXH-2023',
    price: 1899
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F8e85b154-3228-4cab-a877-ecb9f4c2f68f_Thumb.jpeg&w=640&q=100',
    category: 'TV | MONITORS',
    brand: 'Samsung',
    name: 'Samsung TV UE43CU7172UXXH',
    price: 949
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0197536_xiaomi-tv-q2-55-global-version-black_550.jpeg&w=640&q=100',
    category: 'TV | MONITORS',
    brand: 'Xiaomi',
    name: 'Xiaomi TV Q2 55 Global Version',
    price: 1299 
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0190499_nikon-coolpix-p1000-black_550.jpeg&w=640&q=100',
    category: 'PHOTO | VIDEO',
    brand: 'Nikon',
    name: 'Nikon Coolpix P1000 Black',
    price: 3299
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0092054_canon-eos-4000d-ef-s-18-55-iii-kit-black_550.png&w=640&q=100',
    category: 'PHOTO | VIDEO',
    brand: 'Canon',
    name: 'Canon EOS 4000D EF-S 18-55 III KIT Black',
    price: 999
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0195269_canon-eos-r8-body-5803c019aa-black_550.jpeg&w=640&q=100',
    category: 'PHOTO | VIDEO',
    brand: 'Canon',
    name: 'Canon EOS R8 body 5803C019AA Black',
    price: 4599
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0195305_canon-eos-r8-rf-24-50mm-5803c016aa-black_550.jpeg&w=640&q=100',
    category: 'PHOTO | VIDEO',
    brand: 'Canon',
    name: 'Canon EOS R8 RF 24-50mm 5803C016AA Black',
    price: 5999 
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0185586_sony-alpha-a6400-mirrorless-digital-camera-with-16-50mm-lens_550.jpeg&w=640&q=100',
    category: 'PHOTO | VIDEO',
    brand: 'Sony',
    name: 'Sony Alpha a6400 Mirrorless Digital Camera with 16-50mm',
    price: 2999
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0184534_sony-alpha-a7r-iv-mirrorless-digital-camera-body-black_550.jpeg&w=640&q=100',
    category: 'PHOTO | VIDEO',
    brand: 'Sony',
    name: 'Sony Alpha A7R IV Mirrorless Digital Camera Body Black',
    price: 7999
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F9b4801cb-d4df-495a-9f9f-55a851b0b1ef_Thumb.jpeg&w=640&q=100',
    category: 'PHOTO | VIDEO',
    brand: 'DJI',
    name: 'DJI Osmo Action 4 Standard Combo',
    price: 1499
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0186629_xiaomi-imilab-ec5-floodlight-camera-2k-white_550.jpeg&w=640&q=100',
    category: 'PHOTO | VIDEO',
    brand: 'Xiaomi',
    name: 'Xiaomi imilab EC5 Floodlight Camera 2K White',
    price: 249 
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2Fcfd4bd0d-61bf-4209-9da7-02ae84cb5f41_Thumb.jpeg&w=640&q=100',
    category: 'PHOTO | VIDEO',
    brand: 'Canon',
    name: 'Canon EOS R7 RF-S 18-150 mm 5137C040AA',
    price: 4899
  },
  
  {
    image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0185593_sony-cyber-shot-rx10-iv-with-24-600mm-lense_550.jpeg&w=640&q=100',
    category: 'PHOTO | VIDEO',
    brand: 'Sony',
    name: 'Sony Cyber Shot RX10 IV with 24-600MM Lense',
    price: 4599
  },
  
  ];
  
  
