<template>
    <div>
        <Header/>
        <Menu/>
        <section class="section card-blog">
            <nuxt/>
        </section>
        <Footer/>
    </div>
</template>
<script>
import Menu from "~/components/Menu";
import Footer from "~/components/Footer";

export default {
  components: {
    Menu,
    Footer
  }
};
</script>
