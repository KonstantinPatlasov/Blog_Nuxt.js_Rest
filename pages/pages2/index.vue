<template>
    <div>
        <section class="section card-blog">
            <div class="container">
                <div class="columns is-multiline">
                    <div class="column is-one-third" v-for="post in datablog.data " :key="post.slug">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image">
                                    <nuxt-link :to=" '/'+post.slug+ '/' ">
                                        <img v-bind:src="post.featured_image " alt="FOTO NOT DOWNLOAD ">
                                    </nuxt-link>
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-content">
                                        <nuxt-link class="title is-4" :to=" '/'+post.slug+ '/' ">{{post.title}}</nuxt-link>
                                    </div>
                                </div>
                                <div class="content">
                                    {{post.summary}}
                                </div>

                                <nuxt-link class="button is-primary is-outlined is-fullwidth" :to=" '/'+post.slug+ '/' ">Читать дальше</nuxt-link>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="container ">
                <nav class="pagination" role="navigation " aria-label="pagination ">
                    <nuxt-link class="pagination-previous " to="/">Назад</nuxt-link>
                    <nuxt-link class="pagination-next " to="/pages2" disabled>Следующая</nuxt-link>
                    <ul class="pagination-list ">

                        <li>
                            <nuxt-link class="pagination-link " aria-label="Goto page 2 " to="/">1</nuxt-link>
                        </li>
                        <li>
                            <a class="pagination-link is-current " aria-label="Page 46 " aria-current="page ">2</a>
                        </li>
                    </ul>
                </nav>
            </div>

        </section>
    </div>
</template>
<script>
export default {
  async asyncData({ app }) {
    const datablog = await app.$axios.$get(
      "https://api.buttercms.com/v2/posts/?page=2&page_size=12&auth_token=5fcf0e8815081db61a975b99bc4d113dbb1e3d9a"
    );
    return { datablog };
  }
};
</script>

 
<style>
.card-blog {
  background-color: #eff2f7;
  padding-top: 70px;
}
.columns .column .card {
  border-radius: 20px;
}
.card img {
  border-radius: 20px 20px 0px 0px;
}
.pagination {
  padding-top: 25px;
  padding-bottom: 25px;
}
.footer {
  background-color: #eff2f7;
}
</style>
