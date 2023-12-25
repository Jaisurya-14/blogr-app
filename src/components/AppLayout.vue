<template>
  <div>
    <header>
      <MainHeader class="ps--a"></MainHeader>
    </header>
    <main>
      <BlogrHero></BlogrHero>
    </main>
    <footer></footer>
  </div>
</template>

<script>
import MainHeader from "./MainHeader.vue";
import BlogrHero from "./BlogrHero.vue";
export default {
  name: "AppLayout",
  components: {
    MainHeader,
    BlogrHero,
  },
};
</script>
