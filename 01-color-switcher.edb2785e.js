!function(){var t,e={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]"),body:document.querySelector("body")};function n(){var t=o();e.body.style.backgroundColor="".concat(t)}function o(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}e.btnStart.addEventListener("click",(function(){var r=o();e.body.style.backgroundColor="".concat(r),e.btnStart.setAttribute("disabled",!0),t=setInterval(n,1e3)})),e.btnStop.addEventListener("click",(function(){clearInterval(t),e.btnStart.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.edb2785e.js.map
