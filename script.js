document.getElementById('image-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const image = document.getElementById('image').files[0];
    const matches = document.getElementById('matches').value;
    
    const formData = new FormData();
    formData.append('image', image);
    formData.append('matches', matches);
    

    const response = await fetch('https://dev.martinklefas.uk/predict/similar_images', {
        method: 'POST',
        body: formData,

        headers: {
            'Origin': 'https://martinklefas.github.io/'
          }
    });
    
    const data = await response.json();
    const imageGrid = document.getElementById('image-grid');
    imageGrid.innerHTML = '';
    
    data.similar_images.forEach(imageId => {
        const img = document.createElement('img');
        img.src = `images/${imageId}.jpg`; 
        imageGrid.appendChild(img);
    });
});
