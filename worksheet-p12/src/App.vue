<script setup>
import KepalaProfil from './components/KepalaProfil.vue'
import { profil } from './data.js'

const identitas = profil
</script>

<template>
  <KepalaProfil :profil="identitas" />
  <p>Bagian lain halaman dipindahkan di langkah berikutnya.</p>
</template>

<style>
#app { display: contents; }
</style>