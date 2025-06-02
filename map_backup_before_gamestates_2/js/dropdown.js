const picker = document.getElementById("scrollPicker");
const items = picker.querySelectorAll(".picker-item");

function highlightCenterItem() {
  const pickerRect = picker.getBoundingClientRect();
  const centerY = pickerRect.top + pickerRect.height / 2;

  let closestItem = null;
  let closestDistance = Infinity;

  items.forEach((item) => {
    const itemRect = item.getBoundingClientRect();
    const itemCenter = itemRect.top + itemRect.height / 2;
    const distance = Math.abs(centerY - itemCenter);

    item.classList.remove("active");
    if (distance < closestDistance) {
      closestDistance = distance;
      closestItem = item;
    }
  });

  if (closestItem) {
    closestItem.classList.add("active");
  }
}

picker.addEventListener("scroll", () => {
  window.requestAnimationFrame(highlightCenterItem);
});

highlightCenterItem(); // first call

let isDragging = false;
let startY;
let scrollTop;

picker.addEventListener("mousedown", (e) => {
  isDragging = true;
  picker.classList.add("dragging");
  startY = e.pageY - picker.offsetTop;
  scrollTop = picker.scrollTop;
  e.preventDefault();
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  picker.classList.remove("dragging");
});

/* document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const y = e.pageY - picker.offsetTop;
  const walk = (y - startY) * 1.5; // Adjust scroll speed
  picker.scrollTop = scrollTop - walk;
}); */

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  const y = e.pageY - picker.offsetTop;
  const walk = (y - startY) * 1.5;
  picker.scrollTop = scrollTop - walk;

  // for no horizontal y scroll plsss
  picker.scrollLeft = 0;
});
