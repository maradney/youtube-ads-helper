setInterval(() => {
  const skippableButton = document.querySelector('.ytp-ad-skip-button') || document.querySelector('.ytp-ad-skip-button-modern');
  const unskippableAdContainer = document.querySelector('.ytp-ad-preview-container');
  const videoPlayer = document.querySelector('.video-stream');
  
  if(skippableButton) {
    skippableButton.click();
  } else if (unskippableAdContainer) {
    videoPlayer.muted = true;
		videoPlayer.playbackRate = 5;
  } else if (videoPlayer && videoPlayer.muted === true) {
    videoPlayer.muted = false;
		videoPlayer.playbackRate = 1;
  }

  document.querySelector('#player-ads')?.remove();
  document.querySelector('ytd-ad-slot-renderer')?.remove();
}, 500);