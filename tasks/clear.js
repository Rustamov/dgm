import del from "del";

//Configuration
import path from "../config/path.js";

export default () => {
  return del(path.root)
}
