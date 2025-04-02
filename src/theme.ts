import { createTheme } from "@mantine/core";

export const theme = createTheme({
  fontFamily: "Habibi, serif",
  colors: {
    customColor: [
      "#fff8e1", // Lightest shade - almost white with a hint of gold
      "#ffedb8", // Very light golden tone
      "#ffe08a", // Light gold
      "#ffd457", // Pale gold
      "#ffc720", // Bright gold
      "#b99213", // Medium gold
      "#7f6001", // Your base color - rich golden brown
      "#665001", // Darker golden brown
      "#4e3d01", // Very dark golden brown
      "#352a00", // Almost black with golden undertone
    ],

    // We'll keep the blue as is
    blue: [
      "#3B82F6",
      "#3B82F6",
      "#3B82F6",
      "#3B82F6",
      "#3B82F6",
      "#3B82F6",
      "#3B82F6",
      "#3B82F6",
      "#3B82F6",
      "#3B82F6",
    ],
  },
});
