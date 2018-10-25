module.exports = {
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto"
      },
      {
        rel: " icon ",
        type: " image / x-icon ",
        href: "/img/favicon.ico"
      }
    ],
    title: "Главная"
  },
  modules: ["@nuxtjs/axios", "nuxt-buefy"],
  css: ["assets/main.css", "assets/mystyles.scss"]
};
