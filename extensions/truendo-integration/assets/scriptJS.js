// import { handleClick } from "../../../web/frontend/components/TruendoInput";


// var script = document.createElement('script');
var script = document.getElementById('truendoAutoBlock');
// script.src = "https://cdn.priv.center/pc/truendo_cmp.pid.js";
// script.id = "truendoAutoBlock";
// script.async = " ";
// script.type = "text/javascript";
// script.setAttribute("data-siteid", () => handleClick());
var head = document.getElementsByTagName("head")[0];

head.insertBefore(script, head.firstChild);