import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { MotionPlugin } from "@vueuse/motion";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faHand,
  faBookOpenReader,
  faBriefcase,
  faListCheck,
  faComputer,
  faEnvelope,
  faCommentNodes,
  faVolumeHigh,
  faHexagonNodes,
  faArrowTrendUp,
  faRobot,
  faSchool,
  faScrewdriverWrench,
  faClipboardList,
  faCloud,
  faCode,
  faSchoolCircleExclamation,
  faTemperatureHalf,
  faGamepad,
  faPersonRunning,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faChrome,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faHand,
  faBookOpenReader,
  faBriefcase,
  faListCheck,
  faComputer,
  faEnvelope,
  faGithub,
  faLinkedin,
  faCommentNodes,
  faVolumeHigh,
  faHexagonNodes,
  faArrowTrendUp,
  faRobot,
  faSchool,
  faChrome,
  faScrewdriverWrench,
  faClipboardList,
  faCloud,
  faCode,
  faSchoolCircleExclamation,
  faTemperatureHalf,
  faGamepad,
  faPersonRunning
);

createApp(App)
  .use(MotionPlugin)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
