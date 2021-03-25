// OJO!!!, los imports tienen que llevar el .js al final, si no no funcionan
import { helper as h } from "../../../helper/helper.js";

import { bar as bar2 } from "./es6_pattern_export.js";
import * as completo from "./es6_pattern_export.js";

import def from "./es6_pattern_export.js";

hlp.logBlue('OJO!!!, los imports tienen que llevar el .js al final, si no no funcionan');
hlp.log(def());
hlp.log(bar2());
hlp.log(completo.baz());
