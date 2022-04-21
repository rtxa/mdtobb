/* globals marked, Vue, Converter, DefaultStyle, Styles */

function $(elementId) {
  return document.getElementById(elementId);
}

let app = new Vue({
  el: "#app",

  data: {
    input: "",
    style: Object.assign({}, DefaultStyle),
    options: {
      saveInput: true,
      saveStyle: false
    },
    showSettings: false
  },

  computed: {
    convert() {
      if (this.input === null) {
        return "";
      }

      Converter.style = this.style;

      marked.use({
        smartypants: this.style.smartypants,
        break: this.style.break,
        renderer: Converter.renderer
      });

      let output = marked(this.input);

      // After conversion: replace [youtube] tags with the supported video tag of the current forum
      output = output.replace(/\[youtube\](.*?)\[\/youtube\]/, this.style.youtubeTag);

      return output;
    }
  },

  mounted() {
    window.addEventListener("unload", this.onPageUnload, false);

    // Add the styles to the page
    for (const s of Styles) {
      this.createStyleButton(s);
    }

    // Load session from local storage (input and style options)
    this.loadSession();
  },

  methods: {
    copyToClipboard() {
      $("bbcode-output").select();
      document.execCommand("copy");
    },

    createStyleButton(style) {
      let button = document.createElement("button");

      button.textContent = style.name;

      let vm = this;
      button.onclick = function () {
        vm.style = Object.assign({}, vm.style, DefaultStyle);
        vm.style = Object.assign({}, vm.style, style);
      };

      $("styles-section").appendChild(button);
    },

    onPageUnload() {
      this.saveSession();
    },

    onConfigImport(event) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.addEventListener("load", (e) => {
        Object.assign(this.style, JSON.parse(e.target.result));
      })

      reader.readAsText(file);
    },

    exportConfig() {
      this.downloadToFile(JSON.stringify(this.style, null, 4), "config.json", "application/JSON")
    },

    downloadToFile(content, filename, contentType) {
      const a = document.createElement("a");
      const file = new Blob([content], { type: contentType });

      a.href = URL.createObjectURL(file);
      a.download = filename;
      a.click();

      URL.revokeObjectURL(a.href);
    },

    saveSession() {
      localStorage.setItem("saveInput", JSON.stringify(this.options.saveInput));
      localStorage.setItem("saveStyle", JSON.stringify(this.options.saveStyle));

      if (this.options.saveInput) {
        localStorage.setItem("sessionInput", this.input);
      }

      if (this.options.saveStyle) {
        localStorage.setItem("sessionStyle", JSON.stringify(this.style));
      }
    },

    loadSession() {
      // Load "Save input"
      let saveInput = localStorage.getItem("saveInput");

      if (saveInput !== null) {
        this.options.saveInput = JSON.parse(saveInput);
      }

      // Load "Save style"
      let saveStyle = localStorage.getItem("saveStyle");

      if (saveStyle !== null) {
        this.options.saveStyle = JSON.parse(saveStyle);
      }

      // Load input only if user wants
      if (this.options.saveInput) {
        let sessionInput = localStorage.getItem("sessionInput")

        if (sessionInput !== null) {
          this.input = sessionInput;
        }
      }

      // Load style only if user wants
      if (this.options.saveStyle) {
        let sessionStyle = localStorage.getItem("sessionStyle");

        if (sessionStyle !== null) {
          Object.assign(this.style, JSON.parse(sessionStyle));
        }
      }
    }
  }
});
