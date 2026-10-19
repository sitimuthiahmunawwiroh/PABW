<script setup>
import { state, pilihKategori } from '../state.js'
</script>

<template>
  <div id="filter">
    <button :class="{ aktif: state.kategoriAktif === 'semua' }" @click="pilihKategori('semua')">Semua</button>
    <button :class="{ aktif: state.kategoriAktif === 'web' }" @click="pilihKategori('web')">Web</button>
    <button :class="{ aktif: state.kategoriAktif === 'aplikasi' }" @click="pilihKategori('aplikasi')">Aplikasi</button>
  </div>
</template>