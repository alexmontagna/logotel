const timelineButtons=document.querySelectorAll(".timeline__icon"),timelineItems=document.querySelectorAll(".timeline__item");var oldParentClass=timelineButtons[1].parentElement.parentElement.classList;for(let e=0;e<timelineButtons.length;e++)timelineButtons[e].addEventListener("focus",(function(){window.onkeyup=function(t){32===t.keyCode&&(t.preventDefault(),timelineButtons[e].click())}})),timelineButtons[e].addEventListener("click",(function(){let t=timelineButtons[e].parentElement.parentElement.classList;t!=oldParentClass&&oldParentClass.remove("open"),t.toggle("open"),window.oldParentClass=t}));
//# sourceMappingURL=index.js.map