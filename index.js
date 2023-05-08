let recordedEvents = [];

document.addEventListener("click", (event) => {
  const target = event.target;
  const timestamp = Date.now();
  const eventType = "click";

  recordedEvents.push({ target, eventType, timestamp });
});

document.addEventListener("keyup", (event) => {
  const target = event.target;
  const timestamp = Date.now();
  const eventType = "keyup";

  recordedEvents.push({ target, eventType, timestamp });
});

// Save recordedEvents to server
function saveRecordedEvents() {
  // Use XMLHttpRequest or Fetch API to send the recordedEvents to the server
}

// Periodically save the recorded events to the server
setInterval(() => {
  saveRecordedEvents();
  recordedEvents = [];
}, 30000); // Save every 30 seconds
