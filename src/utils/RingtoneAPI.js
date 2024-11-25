export class RingtoneAPI {
  constructor() {
    this.audioContext = null;
    this.oscillator = null;
    this.gainNode = null;
  }

  initializeAudio(frequency = 440, volume = 0.5) {
    this.audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    this.oscillator = this.audioContext.createOscillator();
    this.gainNode = this.audioContext.createGain();

    this.oscillator.type = "sine";
    this.oscillator.frequency.setValueAtTime(
      frequency,
      this.audioContext.currentTime
    );
    this.gainNode.gain.setValueAtTime(volume, this.audioContext.currentTime);

    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.audioContext.destination);
  }

  playRingtone(duration = 5) {
    if (!this.audioContext || !this.oscillator) {
      console.error("Audio not initialized. Call `initializeAudio()` first.");
      return;
    }

    this.oscillator.start();
    this.gainNode.gain.exponentialRampToValueAtTime(
      0.0001,
      this.audioContext.currentTime + duration
    );
    this.oscillator.stop(this.audioContext.currentTime + duration);
  }

  stopRingtone() {
    if (this.audioContext) {
      this.audioContext.close();
      this.audioContext = null;
      this.oscillator = null;
      this.gainNode = null;
    }
  }
}
