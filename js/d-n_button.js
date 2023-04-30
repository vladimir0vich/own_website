function toggledark() {
  if (localStorage.getItem('theme') === 'dark') {
      localStorage.removeItem('theme');
      document.body.classList.remove("dark");
      } else {
      localStorage.setItem('theme', 'dark');
      document.body.classList.add("dark");
  }
}
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  document.getElementById('toggledark').checked = true;
} else {
  document.body.classList.remove('dark');
  document.getElementById('toggledark').checked = false;
}