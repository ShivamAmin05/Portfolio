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
  faRotate,
  faUpDownLeftRight,
  faCogs,
  faBlender,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faChrome,
  faJava,
  faPython,
  faJs,
  faHtml5,
  faVuejs,
  faCss3Alt,
  faUnity,
  faMicrosoft,
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
  faPersonRunning,
  faRotate,
  faUpDownLeftRight,
  faJava,
  faPython,
  faCogs,
  faJs,
  faHtml5,
  faBlender,
  faVuejs,
  faCss3Alt,
  faUnity,
  faMicrosoft
);

createApp(App)
  .use(MotionPlugin)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
