import { state } from "./state.js";
import { render } from "./dom.js";
import { pasangPendengar } from "./events.js";

render(state.daftarProyek);
pasangPendengar();