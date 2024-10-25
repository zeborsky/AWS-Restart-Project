// JavaScript to toggle between images and videos
document.getElementById('showImagesBtn').addEventListener('click', function() {
    document.getElementById('imageGallery').classList.remove('hidden');
    document.getElementById('videoGallery').classList.add('hidden');
});

document.getElementById('showVideosBtn').addEventListener('click', function() {
    document.getElementById('videoGallery').classList.remove('hidden');
    document.getElementById('imageGallery').classList.add('hidden');
});

// Select gallery items and lightbox elements
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightbox-content');
const closeLightbox = document.getElementById('close-lightbox');

// Function to open the lightbox
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxContent.innerHTML = '';

        if (item.dataset.type === 'image') {
            // For images
            const img = document.createElement('img');
            img.src = item.src;
            img.alt = item.alt;
            lightboxContent.appendChild(img);
        } else if (item.dataset.type === 'video') {
            // For videos
            const video = document.createElement('video');
            video.src = item.querySelector('source').src;
            video.controls = true;
            video.autoplay = true;
            lightboxContent.appendChild(video);
        }
    });
});

// Close the lightbox
closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
    lightboxContent.innerHTML = '';
});

// Close the lightbox when clicking outside the content
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
        lightboxContent.innerHTML = '';
    }
});

// Select the form and message container
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

// Form submission event
contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent actual form submission

    // Check if all fields are filled
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        // Display success message
        formMessage.textContent = 'Thank you for reaching out! We will get back to you shortly.';
        formMessage.style.color = 'green';
        contactForm.reset(); // Clear the form
    } else {
        // Display error message if fields are missing
        formMessage.textContent = 'Please fill out all fields.';
        formMessage.style.color = 'red';
    }
});
