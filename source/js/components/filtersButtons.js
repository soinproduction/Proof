import vars from "../_vars";
import {
  removeClassInArray,
  addCustomClass,
} from "../functions/customFunctions";

const {filtersButtons, activeClass} = vars;

filtersButtons.map((btn)=>{
  btn.addEventListener('click', function() {
    if (!btn.classList.contains(activeClass)) {
      removeClassInArray(filtersButtons, activeClass);
      addCustomClass(this, activeClass);
    }
  })
})
