document.addEventListener('DOMContentLoaded', function() {
  const hobbyContent = document.body;
    
  if (hobbyContent && window.location.pathname.includes('hobbies.html')) {
      const slider = document.createElement('div');
      slider.id = 'hobby-slider';
      slider.style.cssText = `
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: 600px;
          margin: 20px auto;
          background: #f4f4f4;
          padding: 15px;
          border-radius: 8px;
       `;

      const images = [
          'images/cookinginkitchen.jpg', 
          'images/butterchicken.jpg'
      ];

      let currentIndex = 0;

      const sliderImage = document.createElement('img');
      sliderImage.src = images[currentIndex];
      sliderImage.style.cssText = `
          max-width: 100%;
          height: auto;
          display: block;
          border-radius: 5px;
      `;

      const prevButton = document.createElement('button');
      prevButton.textContent = '←';
      prevButton.style.cssText = `
          margin: 0 10px;
          padding: 5px 10px;
          background: #3498db;
          color: white;
          border: none;
          border-radius: 3px;
          cursor: pointer;
      `;

      const nextButton = document.createElement('button');
      nextButton.textContent = '→';
      nextButton.style.cssText = `
          margin: 0 10px;
          padding: 5px 10px;
          background: #3498db;
          color: white;
          border: none;
          border-radius: 3px;
          cursor: pointer;
      `;

      prevButton.addEventListener('click', () => {
          currentIndex = (currentIndex - 1 + images.length) % images.length;
          sliderImage.src = images[currentIndex];
      });

      nextButton.addEventListener('click', () => {
          currentIndex = (currentIndex + 1) % images.length;
          sliderImage.src = images[currentIndex];
      });

      slider.appendChild(prevButton);
      slider.appendChild(sliderImage);
      slider.appendChild(nextButton);

      const existingImages = document.querySelectorAll('img');
      if (existingImages.length > 0) {
          existingImages[existingImages.length - 1].insertAdjacentElement('afterend', slider);
      } else {
          hobbyContent.appendChild(slider);
      }

      console.log('Slider added to hobbies page');
  } else {
      console.log('Not on hobbies page');
  }
});


function initMap() {
  const mapOptions = {
      center: { lat: 25.5686, lng: -103.4692 },
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.TERRAIN
};

  const map = new google.maps.Map(document.getElementById('map'), mapOptions);

  const marker = new google.maps.Marker({
      position: { lat: 25.5686, lng: -103.4692 },
      map: map,
      title: 'Durango, Mexico'
  });

  const infoWindow = new google.maps.InfoWindow({
      content: '<h3>Durango, Mexico</h3><p>My Favorite Place!</p>'
  });

  marker.addListener('click', () => {
      infoWindow.open(map, marker);
  });

  const terrainToggle = document.createElement('button');
  terrainToggle.textContent = 'Toggle Terrain';
  terrainToggle.style.position = 'absolute';
  terrainToggle.style.top = '10px';
  terrainToggle.style.right = '10px';
  terrainToggle.style.zIndex = '1000';

  let terrainLayer = new google.maps.TerrainLayer();
  terrainToggle.addEventListener('click', () => {
      terrainLayer.setMap(terrainLayer.getMap() ? null : map);
  });

  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(terrainToggle);
}

window.onerror = function(message, source, lineno, colno, error) {
  console.error('Global error handler caught:', message);
  return false;
};