import { state, pulihkan } from "./state.js";
import { render } from "./dom.js";
import { pasangPendengar } from "./events.js";

pulihkan();         
render(state);
pasangPendengar();