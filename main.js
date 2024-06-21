document.addEventListener('DOMContentLoaded', () => {
  const addImageButton = document.getElementById('add-image-btn');
  const removeImageButton = document.getElementById('remove-image-btn');
  const imageContainer = document.querySelector('.image-container');
  let imageCount = 0; 

  addImageButton.addEventListener('click', () => {
      imageCount++;
      const newImage = document.createElement('img');
      newImage.src = `https://via.placeholder.com/200x200?text=Image${imageCount}`; 
      newImage.alt = `Imagem ${imageCount}`;
      newImage.classList.add('added-image');
      imageContainer.appendChild(newImage);
  });

  removeImageButton.addEventListener('click', ()=> {
      const addedImages = document.querySelectorAll('.added-image');
      if (addedImages.length > 0) {
          const lastImage = addedImages[addedImages.length - 1];
          lastImage.remove();
      } else {
          alert('Não há imagens para remover.');
      }
  });
});
