//navigation

const button = document.querySelector('.navigation-button');

button.addEventListener('click', function() {
  window.location.href = 'navigation.html'; 
});

const webName = document.querySelector('.Web-Name');

webName.addEventListener('click', function() {
  window.location.href = 'index.html'; 
});




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



//basket window
function showWindow() {
  document.getElementById("myWindow").style.display = "block";
}

function hideWindow() {
  document.getElementById("myWindow").style.display = "none";
}

document.querySelector(".Shop").addEventListener("click", function() {
  window.location.href = 'basket.html';
});

document.querySelector(".Shop").addEventListener("mouseenter", showWindow);
document.querySelector(".Shop").addEventListener("mouseleave", hideWindow);

document.getElementById("myWindow").addEventListener("mouseenter", showWindow);
document.getElementById("myWindow").addEventListener("mouseleave", hideWindow);


document.querySelector(".basket-Batton").addEventListener("click", function() {
  window.location.href = 'basket.html';
});




//login window
function toggleWindow() {
  var loginWindow = document.getElementById("loginWindow");
  if (loginWindow.style.display === "none" || loginWindow.style.display === "") {
    loginWindow.style.display = "block";
  } else {
    loginWindow.style.display = "none";
  }
}







//phone number input
const phoneInput = document.getElementById("phoneNum");

phoneInput.addEventListener("input", function(event) {
  const cleanedValue = event.target.value.replace(/\D/g, '');
  event.target.value = cleanedValue;
});


  
