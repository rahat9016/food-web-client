let colors = ["#E2ECF3", "#FDF6E6", "#FDF1E7", "#FEE8F5", "#E8FEFD", "#FFE9A1"];
let darkColors = [
  "#5F57CF",
  "#FF4E6E",
  "#CD77FF",
  "#3FC276",
  "#FE934D",
  "#918DFC",
];
export const colorPicker = () => {
  const color = colors[Math.floor(Math.random() * colors.length)];
  return color;
};
export const darkColorPicker = () => {
  const color = darkColors[Math.floor(Math.random() * darkColors.length)];
  return color;
};
