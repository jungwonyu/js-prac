document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('button');
  const colorName = document.querySelector('.colorName');
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

  button.addEventListener('click', () => {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * hex.length)];
    }

    colorName.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
  });
});
