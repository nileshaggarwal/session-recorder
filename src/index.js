import { init as initRecorder } from "rrweb";

const recordUserActivity = (endpoint, duration = 5000) => {
  // Initialize rrweb recorder
  const recorder = initRecorder({
    emit(event) {
      // Send recorded event data to server
      console.log(event);
    },
  });

  // Start recording user activity
  recorder.start();

  // Stop recording user activity after specified duration
  setTimeout(() => {
    recorder.stop();
  }, duration);
};

export default recordUserActivity;
