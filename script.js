// JavaScript to toggle between images and videos
document.getElementById('showImagesBtn').addEventListener('click', function() {
    document.getElementById('imageGallery').classList.remove('hidden');
    document.getElementById('videoGallery').classList.add('hidden');
});

document.getElementById('showVideosBtn').addEventListener('click', function() {
    document.getElementById('videoGallery').classList.remove('hidden');
    document.getElementById('imageGallery').classList.add('hidden');
});

// Open modal function
function openModal(imageSrc) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    modalImage.src = imageSrc;
    modal.style.display = "block";
}

// Close modal function
function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

// Close modal if clicked outside the image
window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// JavaScript for Video Modal
document.querySelectorAll('.video-container video').forEach(video => {
    video.addEventListener('click', function () {
        const modal = document.getElementById('videoModal');
        const modalVideo = document.getElementById('modalVideo');
        modal.style.display = 'block';
        modalVideo.src = this.querySelector('source').src;
    });
});

// Open the video modal
function openVideoModal(videoSrc) {
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    modal.style.display = 'flex';
    modalVideo.src = videoSrc;
    modalVideo.play();
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    modal.style.display = 'none';
    modalVideo.pause();
    modalVideo.src = ''; // Clear the source
}

// Close the modal when clicking outside the video
document.getElementById('videoModal').addEventListener('click', function (e) {
    if (e.target === this) {
        closeVideoModal();
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