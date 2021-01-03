// OJO!!!, los imports tienen que llevar el .js al final, si no no funcionan
import { helper as h } from "../../helper/helper.js";

import { bar as bar2 } from "./es6_pattern_export.js";
import * as completo from "./es6_pattern_export.js";

import def from "./es6_pattern_export.js";

h.logBlue('OJO!!!, los imports tienen que llevar el .js al final, si no no funcionan');
h.log(def());
h.log(bar2());
h.log(completo.baz());
