<template>
  <div>
    <section class="section card-blog">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-two-thirds">
            <div class="testimonials-carousel">
              <div class="testimonial-block">
                <div class="FOTO"><img class="logo" v-bind:src="post.data.featured_image" alt="FOTO NOT DOWNLOAD "></div>
                <h1 class="title titlee">{{post.data.title}}</h1>
                <h2 class="title description ">{{post.data.summary}}</h2>
                <h2 class="subtitle is-size-6">
                  <div class="text" v-html="post.data.body" />
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  async asyncData({ app, params }) {
    const post = await app.$axios.$get(
      "https://api.buttercms.com/v2/posts/" +
        params.slug +
        "/?auth_token=5fcf0e8815081db61a975b99bc4d113dbb1e3d9a"
    );
    return { post };
  },

  head(params) {
    return {
      title: this.post.data.meta_description
    };
  }
};
</script>
<style >
.card-blog {
  background-color: #eff2f7;
  padding-top: 70px;
}
.FOTO img {
  border-radius: 20px;
  opacity: 1;
}
.pagination {
  padding-top: 25px;
  padding-bottom: 25px;
}
.footer {
  background-color: #eff2f7;
}

.titlee {
  padding-top: 25px;
  padding-bottom: 25px;
}
.description {
  padding-bottom: 25px;
}

@keyframes bounce {
  0%,
  20%,
  60%,
  100% {
    transform: translateY(0);
    transform: translateY(0);
  }

  40% {
    transform: translateY(-20px);
    transform: translateY(-20px);
  }

  80% {
    transform: translateY(-10px);
    transform: translateY(-10px);
  }
}

.FOTO img:hover {
  opacity: 0.8;
  animation: bounce 1s;
}
</style>
