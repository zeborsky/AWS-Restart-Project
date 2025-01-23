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
    closeVideoModal(); // Close video modal if open
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
document.querySelector('.video-container').addEventListener('click', function (e) {
    if (e.target.tagName === 'VIDEO') {
        const videoSrc = e.target.querySelector('source').src;
        openVideoModal(videoSrc);
    }
});

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
