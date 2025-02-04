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
      "button#encode-button"
    ) as HTMLButtonElement;
    this.DecodeButton = document.querySelector(
      "button#decode-button"
    ) as HTMLButtonElement;
    this.CopyButton = document.querySelector(
      "button#copy-button"
    ) as HTMLButtonElement;
    this.ClearButton = document.querySelector(
      "button#clear-button"
    ) as HTMLButtonElement;

    // Handle input change
    this.handleInputChange();

    // clear output
    this.clearOutput();
  }

  handleInputChange() {
    this.inputElement.addEventListener("input", () => {
      // Text value of textarea input element.
      const inputValue = this.inputElement.value;

      // Reflecting the encoded url in output
      this.outputElement.value = this.encodeURL(inputValue);
    });
  }

  encodeURL(url: string) {
    return encodeURIComponent(url);
  }

  decodeURL(url: string) {
    return decodeURIComponent(url);
  }

  clearOutput() {
    this.ClearButton.addEventListener("click", () => {
      this.outputElement.value = "";
      this.inputElement.value = "";
    });
  }
}

// Initializing encoder-decoder manager
const encoderDecoderManager = new EncoderDecoderManager();
