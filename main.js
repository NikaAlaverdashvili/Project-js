//navigation

const button = document.querySelector('.navigation-button');

button.addEventListener('click', function() {
  window.location.href = 'navigation.html'; 
});

const webName = document.querySelector('.Web-Name');

webName.addEventListener('click', function() {
  window.location.href = 'index.html'; 
});





function shrinkAndRestore(selector) {
    const button = document.querySelector(selector);
    button.classList.add('shrink');
    
    setTimeout(function() {
      button.classList.remove('shrink');
    }, 300); 
  }






  

//autoChangeImage

  const imageFiles = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'];
  
  let currentIndex = 0;
  

  function loadImages() {
    const container = document.getElementById('imageContainer');
    container.innerHTML = '';
    
   
    const img = document.createElement('img');
    img.src = 'img/' + imageFiles[currentIndex];
    

    img.addEventListener('click', function() {
      nextImage();
    });
    

    container.appendChild(img);
  }
  

  function nextImage() {
    currentIndex = (currentIndex + 1) % imageFiles.length;
    loadImages();
  }

  function autoChangeImage() {
    setInterval(function() {
      nextImage();
    }, 5000);
  }
  
  loadImages();
  autoChangeImage();



//bottom-border
  const divItemWidth = document.querySelector('.div-item').offsetWidth;
  const bottomBorderWidth = divItemWidth * 0.8;
  document.querySelector('.bottom-border').style.width = bottomBorderWidth + 'px';




  const divItems = document.querySelectorAll('.div-item');

  divItems.forEach(function(divItem) {
      const bottomBorder = divItem.querySelector('.bottom-border');

      function removeBottomBorder() {
          bottomBorder.style.display = 'none';
      }

      function showBottomBorder() {
          bottomBorder.style.display = 'block';
      }

      divItem.addEventListener('mouseenter', removeBottomBorder);
      divItem.addEventListener('mouseleave', showBottomBorder);
  });