const colors: string[] = [];

for (let i = 0; i < 10; i++) {
  const possibleColors = [
    "#87CEEB",
    "#90EE90",
    "#F4D738",
    "#FFB2EF",
    "#A7DBD8",
    "#BAFCA2",
    "#FFDB58",
    "#FFA07A",
    "#FFC0CB",
    "#C4A1FF",
    "#F8D6B3",
    "#DAf5F0",
  ];

  possibleColors.forEach((color) => {
    colors.push(color);
  });
}

export const randomColorPicker = () => {
  if (colors.length === 0) {
    return "asdsad";
  }

  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors.splice(randomIndex, 1)[0];

  return randomColor;
};
