let lines_menu = document.querySelector(".lines_menu");

lines_menu.addEventListener("click", () => {
  let menu_grid = document.querySelector(".menu_grid");

  menu_grid.classList.toggle("active");
});
