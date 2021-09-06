export function getRandomColor() {
  const hexLetters = "0123456789ABCDEF";
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hexLetters[Math.floor(Math.random() * 16)];
  }
  return hexColor;
}
