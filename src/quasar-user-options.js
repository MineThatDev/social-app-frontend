import "quasar/dist/quasar.sass";
import "./styles/quasar/quasar.scss";
import "@quasar/extras/material-icons/material-icons.css";
import { Dialog, Notify, Loading } from "quasar";

// To be used on app.use(Quasar, { ... })
export default {
  config: {},
  plugins: {
    Loading,
    Dialog,
    Notify,
  },
};
