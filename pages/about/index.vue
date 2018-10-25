<template>
  <div>
    <section class="section card-blog">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-two-thirds">
            <div class="testimonials-carousel">
              <div class="testimonial-block">
                <h1 class="title author">Константин Патласов</h1>
                <h2 class="subtitle is-size-6">
                  <div class="bio" v-html="bio" />
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container">
      <div class="columns is-centered who-i-do">
        <h1 class="title is-3">Что я делаю</h1>
      </div>
    </div>

    <div class="container iconki">
      <div class="columns is-multiline">

        <div class="column is-one-third ">
          <div class="is-bloki-icones">
            <img src="/img/code.png" alt="Not dowload" width='70px'>
            <br>
            <h1 class="title is-6"> Адаптивная верстка <br> HTML/CSS/Bulma</h1>
          </div>
        </div>

        <div class="column is-one-third ">
          <div class="is-bloki-icones">
            <img src="https://cdn-images-1.medium.com/max/800/1*Z3QcBB__mvWCqood2fbiBQ.png" alt="Made with VUE" width="192" height="21">
            <br>
            <h1 class="title is-6">Код на Nuxt.js</h1>
          </div>
        </div>

        <div class="column is-one-third ">
          <div class="is-bloki-icones">
            <img src="https://cdn-images-1.medium.com/max/800/1*wqYF-8Dmh7LhtLkKfERc3Q.png" alt="Made with VUE" width="80" height="21">
            <!-- НУЖНО ДРУГОЕ ФОТО!!! -->
            <h1 class="title is-6">Код на Vue.js</h1>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  async asyncData({ app, params }) {
    const post = await app.$axios.$get(
      "https://api.buttercms.com/v2/authors/?auth_token=5fcf0e8815081db61a975b99bc4d113dbb1e3d9a"
    );

    const getARRdata = post.data;
    const bio = getARRdata[0].bio; // поскольку в массиве объект, то обратится к нулевому объекту, а потом к свойству объекта;
    const FOTO = getARRdata[0].profile_image; 

    return { post, bio, FOTO };
  },

  head(params) {
    return {
      title: "Об авторе"
    };
  }
};
</script>
<style>
.card-blog {
  background-color: #eff2f7;
  padding-top: 70px;
}
.pagination {
  padding-top: 25px;
  padding-bottom: 25px;
}
.footer {
  background-color: #eff2f7;
}
.author {
  padding-bottom: 25px;
}

/*foto author*/
.card img:hover {
  opacity: 0.8;
  animation: bounce 1s;
}
img:hover {
  opacity: 0.8;
}

.is-bloki-icones {
  text-align: center !important;
  padding-top: 35px;
}
.who-i-do {
  padding-top: 40px;
  padding-bottom: 20px;
}
.iconki {
  padding-top: 50px;
  padding-bottom: 40px;
}
</style>
