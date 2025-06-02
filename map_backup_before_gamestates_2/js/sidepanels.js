const defaultTransition = "transform 0.3s ease";
const fastTransition = "transform 0.1s ease";

function setupSidebarToggle(side) {
  const sidebar = document.getElementById(`${side}Sidebar`);
  const toggleBtn = document.getElementById(`toggle${capitalize(side)}Sidebar`);

  if (!sidebar || !toggleBtn) return;

  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    const isActive = sidebar.classList.contains("active");

    if (isActive) {
      sidebar.style.transition = fastTransition;
      sidebar.classList.remove("active");
    } else {
      sidebar.style.transition = defaultTransition;
      sidebar.classList.add("active");
    }

    if (isActive) {
      setTimeout(() => {
        sidebar.style.transition = defaultTransition;
      }, 150);
    }
  });
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// initialises handles
setupSidebarToggle("left");
setupSidebarToggle("right");
