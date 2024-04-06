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










