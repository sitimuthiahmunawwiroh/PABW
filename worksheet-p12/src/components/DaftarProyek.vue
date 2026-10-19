<script setup>
import { computed } from 'vue'
import { state } from '../state.js'

const tampil = computed(() =>
  state.daftarProyek.filter(
    (proyek) =>
      state.kategoriAktif === 'semua' || proyek.kategori === state.kategoriAktif
  )
)
</script>

<template>
  <ul id="daftar">
    <li v-for="proyek in tampil" :key="proyek.id" class="kartu">
      <strong>{{ proyek.judul }}</strong>
      <span>{{ proyek.tahun }} · {{ proyek.kategori }}</span>
    </li>
  </ul>
  <p id="pesan-kosong" v-if="tampil.length === 0">Tidak ada proyek pada kategori itu.</p>
</template>