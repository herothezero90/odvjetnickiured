function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      console.log ("scrollToSection");
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const flexItems = document.querySelectorAll('#flex1 .flex');
  flexItems.forEach((item, index) => {
      item.style.setProperty('--animation-delay', `${index * 0.2}s`); 
  });
});
