const t={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]"),body:document.querySelector("body")};let e;function n(){let e=o();t.body.style.backgroundColor=`${e}`}function o(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}t.btnStart.addEventListener("click",(function(){let r=o();t.body.style.backgroundColor=`${r}`,t.btnStart.setAttribute("disabled",!0),e=setInterval(n,1e3)})),t.btnStop.addEventListener("click",(function(){clearInterval(e),t.btnStart.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.4c44ab85.js.map