import { createApp } from 'vue'
import App from './App.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faFacebook)
library.add(faTwitter)
library.add(faLinkedin)

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");



