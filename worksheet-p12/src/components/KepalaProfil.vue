<script setup>
const props = defineProps({
  profil: { type: Object, required: true },
})
</script>

<template>
  <header class="kepala">
    <div class="pengalih-tema-wadah">
      <input type="checkbox" id="tema" class="pengalih-tema">
      <label for="tema" class="tombol-tema">Tema gelap</label>
    </div>

    <div class="header-baris">
      <div class="judul-kepala">
        <h1>{{ props.profil.nama }}</h1>
        <p class="tagline">{{ props.profil.peran }}.</p>
      </div>
      <nav aria-label="Navigasi utama">
        <ul>
          <li><a href="#tentang">Tentang</a></li>
          <li><a href="#karya">Karya</a></li>
          <li><a href="#kontak">Kontak</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>