const input = document.querySelector('#theme-switcher');

input.addEventListener('change', (e) => {
  if(e.target.checked){
    document.body.setAttribute('data-theme', 'dark-mode');
  } else {
    document.body.setAttribute('data-theme', 'light-mode');
  }
}); // chnages the color or everyhting on set attribute