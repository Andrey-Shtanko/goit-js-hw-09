!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var r,c,u,a,l=i("iU1Pc"),d={firstDelay:document.querySelector('input[name="delay"]'),delayStep:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]'),btn:document.querySelector("button")};function f(e,n){var t=Math.random()>.3;return new Promise((function(o,i){setTimeout((function(){t?o("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):i("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))}d.btn.addEventListener("click",(function(n){n.preventDefault();for(var t=0;t<r;t+=1)a=t+1,0===t?f(a=t+1,c).then((function(n){var t=n.position,o=n.delay;e(l).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(l).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))})):f(a,c+u*t).then((function(n){var t=n.position,o=n.delay;e(l).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(l).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))}))})),d.amount.addEventListener("input",(function(e){return r=Number(e.target.value)})),d.firstDelay.addEventListener("input",(function(e){return c=Number(e.target.value)})),d.delayStep.addEventListener("input",(function(e){return u=Number(e.target.value)}))}();
//# sourceMappingURL=03-promises.13d4b8b0.js.map
