<script setup>
import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'
import { profil } from './data.js'

const identitas = profil
</script>

<template>
  <a class="lewati" href="#utama">Lewati ke konten utama</a>

  <KepalaProfil :profil="identitas" />

  <main id="utama">

    <section id="tentang">
      <h2>Tentang saya</h2>

      <figure class="foto">
        <img src="/media/foto-profil.jpg"
             alt="Foto diri Siti Muthiah Munawwiroh Siregar."
             width="480" height="640" loading="lazy">
      </figure>

      <p>Saya mahasiswa Program Studi Informatika Universitas Islam Indonesia. Saya tertarik pada pengembangan web, khususnya bagian tampilan, karena di sana keputusan teknis langsung terlihat hasilnya.</p>

      <div class="tabel-bungkus">
        <table>
          <caption>Kegiatan yang saya ikuti semester ini</caption>
          <thead>
            <tr>
              <th scope="col">Kegiatan</th>
              <th scope="col">Peran</th>
              <th scope="col">Waktu</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Praktikum PABW</th>
              <td>Peserta</td>
              <td><time datetime="2026-09">September 2026</time></td>
            </tr>
            <tr>
              <th scope="row">Organisasi Mahasiswa Daerah</th>
              <td>Peserta</td>
              <td><time datetime="2026-10">September 2026</time></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section id="karya">
      <h2>Karya saya</h2>
      <TombolFilter />
      <DaftarProyek />
    </section>

    <button type="button" id="atur-ulang">Atur ulang pilihan</button>

    <FormKontak />

    <section id="tanya-jawab">
      <h2>Tanya jawab</h2>
      <details>
        <summary>Apa yang sedang saya pelajari?</summary>
        <p>Saat ini saya sedang mendalami CSS, khususnya cara menyusun tampilan yang konsisten lewat design token.</p>
      </details>
      <details>
        <summary>Mengapa saya memilih Informatika?</summary>
        <p>Saya tertarik memecahkan masalah sehari-hari lewat teknologi, seperti Aplikasi Sortify yang saya buat untuk mempermudah pemilahan sampah.</p>
      </details>
      <details>
        <summary>Apa prinsip yang saya pegang?</summary>
        <p>Less but better — saya lebih memilih menyelesaikan sedikit hal dengan baik daripada banyak hal setengah jadi.</p>
      </details>
    </section>

    <section id="keterampilan">
      <h2>Keterampilan</h2>
      <dl class="keterampilan">
        <dt>HTML semantik</dt>
        <dd>Landmark, heading berurutan, tabel data dengan caption dan th scope.</dd>
        <dt>CSS</dt>
        <dd>Sedang belajar: design token, flexbox, dan tema gelap.</dd>
        <dt>Pengembangan aplikasi</dt>
        <dd>Membangun Aplikasi Sortify dan Posture Care sebagai proyek pembelajaran.</dd>
      </dl>
    </section>

    <section id="kutipan">
      <h2>Yang saya pegang</h2>
      <figure class="kutipan">
        <blockquote>
          <p>Less, but better.</p>
        </blockquote>
        <figcaption>— motto saya dalam belajar dan berkarya</figcaption>
      </figure>
    </section>

  </main>

  <footer class="kaki">
    <p>Siti Muthiah Munawwiroh Siregar · 24523182 · <time datetime="2026">2026</time></p>
  </footer>
</template>

<style>
#app { display: contents; }
</style>