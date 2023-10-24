const butInstall = document.getElementById('buttonInstall');

let deferredPrompt; // Define a variable to store the deferred prompt

// Logic for installing the PWA

// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default behavior to stop the automatic prompt
  event.preventDefault();
  // Store the event for later use
  deferredPrompt = event;
  // Show the installation button
  butInstall.style.display = 'block';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  if (deferredPrompt) {
    // Show the installation prompt
    deferredPrompt.prompt();
    // Wait for the user's choice
    const choiceResult = await deferredPrompt.userChoice;
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the PWA installation');
    } else {
      console.log('User declined the PWA installation');
    }
    // Reset the deferred prompt
    deferredPrompt = null;
    // Hide the installation button
    butInstall.style.display = 'none';
  }
});

// TODO: Add a handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('App was successfully installed');
  // You can add additional logic here if needed
});
