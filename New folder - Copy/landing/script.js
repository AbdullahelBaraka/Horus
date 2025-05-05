window.addEventListener('load', () => {
  // Set a timeout to hide the loading screen after both animations are done
  setTimeout(() => {
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
  }, 3700); // 0.8 seconds
});
