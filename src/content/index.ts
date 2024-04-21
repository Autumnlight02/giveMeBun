import handleNPM from "./handlers/npm";
import "./styles.css";

const loc = new URL(document.location.href);
const locString = loc.host.replace("www.", "").split(".")[0];

switch (locString) {
  case "npmjs": {
    handleNPM();
  }
}
