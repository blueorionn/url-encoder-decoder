import "./styles/style.css";

class EncoderDecoderManager {
  private inputElement: HTMLTextAreaElement;
  private outputElement: HTMLTextAreaElement;
  private EncodeButton: HTMLButtonElement;
  private DecodeButton: HTMLButtonElement;
  private CopyButton: HTMLButtonElement;
  private ClearButton: HTMLButtonElement;

  constructor() {
    // TextArea Elements
    this.inputElement = document.querySelector(
      "textarea#input"
    ) as HTMLTextAreaElement;
    this.outputElement = document.querySelector(
      "textarea#output"
    ) as HTMLTextAreaElement;

    // Button Elements
    this.EncodeButton = document.querySelector(
      "textarea#encode-button"
    ) as HTMLButtonElement;
    this.DecodeButton = document.querySelector(
      "textarea#decode-button"
    ) as HTMLButtonElement;
    this.CopyButton = document.querySelector(
      "textarea#copy-button"
    ) as HTMLButtonElement;
    this.ClearButton = document.querySelector(
      "textarea#clear-button"
    ) as HTMLButtonElement;
  }

  handleInputChange() {
    this.inputElement.addEventListener("input", () => {});
  }

  encodeURL(url: string) {
    return encodeURIComponent(url);
  }

  decodeURL(url: string) {
    return decodeURIComponent(url);
  }
}

// Initializing encoder-decoder manager
const encoderDecoderManager = new EncoderDecoderManager();
