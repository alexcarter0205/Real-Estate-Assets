const { defineConfig } = require("vite");
const react = require("@vitejs/plugin-react");

module.exports = defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 8080,
    open: true,
  },
  hmr: {
    overlay: true,
  },
});
