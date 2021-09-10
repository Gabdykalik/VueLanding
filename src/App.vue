<template>
  <div class="app">
    <Header/>
    <Statistics/>
    <Demo/>
    <OpenType/>
    <Fonts/>
    <Progress/>
    <Testimonials/>
    <Pricing/>
    <Meeting/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Statistics from '@/components/Statistics'
import Demo from '@/components/Demo'
import OpenType from '@/components/OpenType'
import Fonts from '@/components/Fonts.vue'
import Progress from '@/components/Progress.vue'
import Testimonials from '@/components/Testimonials.vue'
import Pricing from '@/components/Pricing.vue'
import Meeting from '@/components/Meeting.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Statistics,
    Demo,
    OpenType,
    Fonts,
    Progress,
    Testimonials,
    Pricing,
    Meeting,
    Footer
  }
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
  }
</style>
