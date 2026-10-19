<script setup>
import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import { profil } from './data.js'

const identitas = profil
</script>

<template>
  <KepalaProfil :profil="identitas" />

  <main id="utama">
    <section id="karya">
      <h2>Karya saya</h2>
      <TombolFilter />
    </section>
  </main>
</template>

<style>
#app { display: contents; }
</style>