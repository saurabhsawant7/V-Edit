//Videos
document.addEventListener('DOMContentLoaded', () => {
	fetch('http://localhost:3000/videos')
	  .then(response => response.json())
	  .then(videos => {
		const videosContainer = document.querySelector('.video-card');
		
		videos.forEach(video => {
			const videoElement = document.createElement('video');
			videoElement.src = video.url;
			videoElement.controls = true;
			videoElement.classList.add('video');

			const titleElement = document.createElement('div');
			titleElement.textContent = video.title;
			titleElement.classList.add('title');

			const container = document.createElement('div');
			container.classList.add('card-content');
			container.appendChild(videoElement);
			container.appendChild(titleElement);
			

			videosContainer.appendChild(container);
		});
	  })
	  .catch(error => console.error('Error fetching videos:', error));
  });
  
//Logo Animation
document.addEventListener('DOMContentLoaded', function() {
	var animatedText = document.getElementById('animatedLogo');
	animatedText.classList.add('show');
});

function changeColor(buttonIndex) {
    var buttons = document.querySelectorAll('.icon-1 a');
    buttons.forEach(function(button, index) {
      if (index === buttonIndex - 1) {
        button.classList.add('active'); // Add 'selected' class to the clicked button
      } else {
        button.classList.remove('active'); // Remove 'selected' class from other buttons
      }
    });
  }