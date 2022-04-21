/* global Vue */

Vue.component("modal", {
  template: `
    <transition name="modal">
      <div v-show="showModal">
        <div class="modal-mask">
          <div class="modal-wrapper" v-on:click.self="closeModal"> 
            <div class="modal-container">
      
              <div class="modal-body">
                <slot>
                  default body
                </slot>
              </div>

              <div class="modal-footer">
                <button v-on:click="closeModal" v-on:keyup.esc="closeModal">
                  <span class="material-icons">close</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>  
    </transition>
  `,

  props: {
    value: {
      type: Boolean,
      required: true
    }
  },

  data() {
    return {
      showModal: this.value
    };
  },

  mounted() {
    document.addEventListener('keydown', this.onEscape);
  },

  watch: {
    showModal(newValue) {
      this.$emit("input", newValue);
    },
    
    value(newValue) {
      this.showModal = this.value;
    }
  },
  
  methods: {
    closeModal() {
      this.showModal = false;
    },

    onEscape(event) {
      if (this.showModal && event.key === "Escape") {
        this.closeModal();
      }
    }
  }
});