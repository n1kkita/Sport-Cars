let elements = [{id:"bugatti-folder", click: false},{id:"lambo-folder", click: false},{id:"nissan-folder", click: false}]
// Toggle folder display with animation
function toggleFolder(folderId) {
    const folder = document.getElementById(folderId);
    let imageElement = folder.querySelector("img");
    folder.classList.toggle('open'); // Переключение класса open

    elements.forEach(el => {
        if (el.id === folderId) {
            if (el.click) {
                imageElement.style.top = '5px';  // Возвращаем в исходное положение
                el.click = false;
            } else {
                imageElement.style.top = '500px';  // Смещаем вниз на 500px
                el.click = true;
            }
        }
    });
}


// Fullscreen image display
function openImage(src) {
    const fullImageContainer = document.getElementById('fullImageContainer');
    const fullImage = document.getElementById('fullImage');
    fullImage.src = src; // Set image source
    fullImageContainer.style.display = 'flex'; // Show modal
}

// Close fullscreen image
function closeImage() {
    const fullImageContainer = document.getElementById('fullImageContainer');
    fullImageContainer.style.display = 'none'; // Hide modal
}