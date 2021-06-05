// snowpack.config.mjs
module.exports = {
  mount: {
    public: { url: "/", static: true },
    src: { url: "/dist" },
  },
  routes: [
    /* Enable an SPA Fallback in development: */
    {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  plugins: [
    "@snowpack/plugin-vue",
    "@snowpack/plugin-vue/plugin-tsx-jsx.js",
    "@snowpack/plugin-dotenv",
    "@snowpack/plugin-sass",
  ],
};
