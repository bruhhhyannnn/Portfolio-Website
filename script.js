function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function downloadFile(url) {
  var link = document.createElement('a');
  link.href = url;
  link.download = 'CV-Bryan_Mangapit.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}