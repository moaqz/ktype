import transformerVariantGroup from "@unocss/transformer-variant-group";
import { defineConfig, presetTypography, presetUno } from "unocss";

export default defineConfig({
  transformers: [transformerVariantGroup()],
  presets: [presetUno(), presetTypography()],
  theme: {
    colors: {
      chaos: {
        bg: "#141221",
        main: "#fd77d7",
        caret: "#dde5ed",
        text: "#dde5ed",
        error: "#fd77d7",
        sub: "#676e8a",
        "subalt": "#1e1d2f",
      },
    },
  },
});
