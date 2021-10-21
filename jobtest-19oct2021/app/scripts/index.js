// # First code
// const timelineButtons = document.querySelectorAll(".timeline__icon");
// const timelineItems = document.querySelectorAll(".timeline__item");

// for (let i = 0; i < timelineButtons.length; i++) {
//     timelineButtons[i].addEventListener("click", function () {
//         for (let y = 0; y < timelineItems.length; y++) {
//             timelineItems[y].classList.remove("open");
//         }
//         timelineButtons[i].parentElement.parentElement.classList.toggle("open");
//     });
// }

// # Second code: closes the current item when clicked again (like toggle)
// const timelineButtons = document.querySelectorAll(".timeline__icon");
// const timelineItems = document.querySelectorAll(".timeline__item");

// for (let i = 0; i < timelineButtons.length; i++) {
//     timelineButtons[i].addEventListener("click", function () {
//         let parentClass =
//             timelineButtons[i].parentElement.parentElement.classList;
//         if (parentClass.contains("open")) {
//             parentClass.remove("open");
//             return;
//         }
//         for (let y = 0; y < timelineItems.length; y++) {
//             timelineItems[y].classList.remove("open");
//         }
//         parentClass.add("open");
//     });
// }

// # Third code: does the same as the second, but with slightly less code
const timelineButtons = document.querySelectorAll(".timeline__icon");
const timelineItems = document.querySelectorAll(".timeline__item");
var oldParentClass = timelineButtons[1].parentElement.parentElement.classList;
for (let i = 0; i < timelineButtons.length; i++) {
    timelineButtons[i].addEventListener("focus", function () {
        window.onkeyup = function (event) {
            if (event.keyCode === 32) {
                event.preventDefault();
                timelineButtons[i].click();
            }
        };
    });
    timelineButtons[i].addEventListener("click", function () {
        let pClass = timelineButtons[i].parentElement.parentElement.classList;
        if (pClass != oldParentClass) oldParentClass.remove("open");
        pClass.toggle("open");
        window.oldParentClass = pClass;
    });
}
