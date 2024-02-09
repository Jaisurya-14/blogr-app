<template>
  <div class="content">
    <header>
      <MainHeader></MainHeader>
    </header>
    <main>
      <BlogrHero></BlogrHero>
      <div>
        <AppIllustration1></AppIllustration1>
        <AppIllustration3></AppIllustration3>
        <AppIllustration2></AppIllustration2>
      </div>
    </main>
    <footer>
      <MainFooter></MainFooter>
    </footer>
  </div>
</template>

<script>
import MainHeader from "./MainHeader.vue";
import BlogrHero from "./BlogrHero.vue";
import AppIllustration1 from "./AppIllustration1.vue";
import AppIllustration2 from "./AppIllustration2.vue";
import AppIllustration3 from "./AppIllustration3.vue";
import MainFooter from "./MainFooter.vue";

export default {
  name: "AppLayout",
  components: {
    MainHeader,
    BlogrHero,
    AppIllustration1,
    AppIllustration2,
    AppIllustration3,
    MainFooter,
  },
};
</script>
