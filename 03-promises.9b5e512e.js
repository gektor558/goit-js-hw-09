!function(){function e(e,t){return new Promise((function(n,o){setTimeout((function(){Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}({formEl:document.querySelector(".form")}).formEl.addEventListener("submit",(function(t){t.preventDefault();for(var n=+t.target.elements.amount.value,o=+t.target.elements.delay.value,a=+t.target.elements.step.value,i=0;i<=n;i++)e(i+1,o+i*a).then((function(e){var t=e.position,n=e.delay;console.log("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))})).catch((function(e){var t=e.position,n=e.delay;console.log("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))}))}))}();
//# sourceMappingURL=03-promises.9b5e512e.js.map
