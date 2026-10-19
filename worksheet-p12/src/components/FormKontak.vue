<script setup>
import { ref } from 'vue'
import { aturan } from '../data.js'

const kolom = ['nama', 'email', 'nim', 'pesan']

const isi = ref({ nama: '', email: '', nim: '', pesan: '' })
const galat = ref({ nama: '', email: '', nim: '', pesan: '' })
const status = ref('')
const kirimNonaktif = ref(false)
const formEl = ref(null)

const pesanGalat = (id) => aturan[id](isi.value[id].trim())
const semuaSah = () => kolom.every((id) => pesanGalat(id) === '')

function saatInput(event) {
  const id = event.target.id
  if (!kolom.includes(id)) return
  galat.value[id] = pesanGalat(id)
  kirimNonaktif.value = !semuaSah()
}

function kirim() {
  let pertamaBermasalah = null
  kolom.forEach((id) => {
    galat.value[id] = pesanGalat(id)
    if (galat.value[id] && !pertamaBermasalah) pertamaBermasalah = id
  })

  if (pertamaBermasalah) {
    status.value = ''
    formEl.value.elements[pertamaBermasalah].focus()
    return
  }

  status.value = 'Formulir sudah benar. Pengiriman ke server belum dibuat.'
  kolom.forEach((id) => {
    galat.value[id] = ''
    isi.value[id] = ''
  })
  kirimNonaktif.value = false
}
</script>

<template>
  <section id="kontak">
    <h2>Hubungi saya</h2>
    <p>Isi formulir berikut. Semua kolom bertanda wajib harus diisi.</p>

    <form ref="formEl" action="#" method="post" novalidate @submit.prevent="kirim" @input="saatInput">
      <fieldset>
        <legend>Data pengirim</legend>

        <p>
          <label for="nama">Nama lengkap</label>
          <input id="nama" v-model="isi.nama" name="nama" type="text"
                 autocomplete="name" aria-describedby="nama-galat"
                 :aria-invalid="galat.nama ? 'true' : null" required>
          <span id="nama-galat" class="galat" :hidden="galat.nama === ''">{{ galat.nama }}</span>
        </p>

        <p>
          <label for="email">Email</label>
          <input id="email" v-model="isi.email" name="email" type="email"
                 autocomplete="email" aria-describedby="email-galat"
                 :aria-invalid="galat.email ? 'true' : null" required>
          <span id="email-galat" class="galat" :hidden="galat.email === ''">{{ galat.email }}</span>
        </p>

        <p>
          <label for="nim">NIM</label>
          <input id="nim" v-model="isi.nim" name="nim" type="text" inputmode="numeric"
                 pattern="[0-9]{8}" aria-describedby="nim-bantuan nim-galat"
                 :aria-invalid="galat.nim ? 'true' : null" required>
          <span id="nim-bantuan">Delapan digit angka, contoh 24523182.</span>
          <span id="nim-galat" class="galat" :hidden="galat.nim === ''">{{ galat.nim }}</span>
        </p>

        <p>
          <label for="pesan">Pesan</label>
          <textarea id="pesan" v-model="isi.pesan" name="pesan" rows="4"
                    aria-describedby="pesan-galat"
                    :aria-invalid="galat.pesan ? 'true' : null" required></textarea>
          <span id="pesan-galat" class="galat" :hidden="galat.pesan === ''">{{ galat.pesan }}</span>
        </p>

        <button type="submit" :disabled="kirimNonaktif">Kirim</button>
      </fieldset>
      <p id="status-form" role="status">{{ status }}</p>
    </form>
  </section>
</template>