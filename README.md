# Praktikum P03 Kelas Terbuka Kampus

Starter yang dipakai untuk praktikum ini adalah `index.html`.

## Anggota tim dan pembagian tugas

- Nama dan NIM anggota 1: SITI MUTHIAH MUNAWWIROH SIREGAR 24523182
- Nama dan NIM anggota 2: CALISTA PUTRI DEWANI 25523217
- Pembagian tugas anggota 1:
- Pembagian tugas anggota 2:

## Berkas yang dikumpulkan

- Nama folder dan berkas ZIP: `P03_<NIM1>_<NIM2>`
- Alamat lokal saat halaman diuji (misalnya `http://127.0.0.1:5500/index.html`):

## Validasi W3C

| Kondisi | Jumlah error | Catatan |
| --- | ---: | --- |
| Sebelum perbaikan |5 error | Encoding belum dideklarasikan, 3 gambar belum memiliki atribut alt, dan struktur heading tidak berurutan. |
| Setelah perbaikan | 0 error | Tidak ada error  pada Nu Html Checker. |

## Audit awal

| Alat | Hasil sebelum perbaikan | Temuan utama |
| --- | --- | --- |
| axe DevTools | 4 issues | 1 masalah `<html>` tidak memiliki atribut `lang` dan 3 masalah gambar tidak memiliki alternative text. |
| Lighthouse Accessibility | Skor: | 71 |

## Tiga temuan audit yang diperbaiki

| No. | Sumber temuan | Kondisi awal dan dampak | Perubahan HTML | Hasil verifikasi ulang |
| ---: | --- | --- | --- | --- |
| 1 | axe DevTools | Elemen <html> belum memiliki atribut lang. Hal ini dapat menyulitkan teknologi bantu dalam menentukan bahasa halaman. | Menambahkan lang="id" pada elemen <html>. | axe DevTools: 0 issues. |
| 2 | axe DevTools | Tiga elemen gambar belum memiliki atribut alt, sehingga gambar tidak memiliki alternatif teks. | Menambahkan alt yang sesuai pada gambar informatif dan alt="" pada gambar dekoratif. | axe DevTools: 0 issues. |
| 3 | W3C Validator | Struktur heading pada kondisi awal belum berurutan. | Menata heading menjadi satu <h1> dan <h2> untuk setiap bagian utama sesuai struktur | W3C Nu Html Checker: 0 error dan 0 warning. |

## Uji form

| Skenario | Hasil yang diamati |
| --- | --- |
| Submit kosong | Browser menampilkan pesan "Please fill out this field." |
| Email tidak valid | Browser menampilkan pesan "Please enter a part following '@'. 'mutia@' is incomplete." |
| NIM bukan 8 digit | Browser menampilkan pesan "Please match the requested format." |
| Klik teks label | Klik teks label memindahkan fokus ke input yang sesuai karena atribut `for` pada label terhubung dengan `id` input. |

## Uji keyboard only

Jelaskan urutan fokus saat menggunakan Tab dan Shift+Tab serta hasil aktivasi kontrol dengan Enter atau Space.
| Dengan menekan `Tab`, fokus berpindah ke elemen interaktif pada halaman secara berurutan.`Shift + Tab` digunakan untuk berpindah kembali ke elemen interaktif sebelumnya.
Skip link `Lewati ke konten utama`dapat dicapai menggunakan keyboard. Setelah diaktifkan dengan `Space`. Tombol `Enter` dapat digunakan untuk berpindah ke `Agenda Daftar Cerita Kelas`. |

## Audit Lighthouse

- Skor Accessibility awal: 71
- Skor Accessibility terakhir: 100
- Tanggal audit: 21 September 2026
- Tangkapan layar skor Lighthouse: disimpan di folder bukti/

Simpan tangkapan layar di folder `bukti/` dan tempel di bawah bagian ini, misalnya `![Skor Lighthouse akhir](bukti/lighthouse-akhir.png)`.

## Catatan evaluasi WCAG kontras

Tuliskan alat yang digunakan dan hasil pemeriksaan kontras sebagai bukti pemahaman WCAG. Tidak ada perubahan warna atau CSS yang dikerjakan pada praktikum ini.
|Pemeriksaan kontras: Pemeriksaan dilakukan menggunakan DevTools dan axe DevTools. Tidak ditemukan masalah aksesibilitas pada hasil audit akhir axe DevTools. Praktikum tidak melakukan perubahan warna atau CSS.|

## Isi paket

- `kerangka-profil.html` — salin menjadi `profil.html` ke folder `worksheet-p4/`
- `media/foto-profil.jpg` — gambar contoh; ganti dengan foto Anda sendiri
- `bukti/` — folder kosong untuk tangkapan layar

## Tiga pekerjaan

1. Ganti sembilan penanda `[ISI]` di dalam `profil.html` (Lembar B).
2. **Wajib, dinilai** — tambahkan MINIMAL TIGA bagian baru di dalam `<main>`,
   masing-masing memakai elemen semantik yang berbeda satu sama lain dan belum
   terpakai (Lembar B). Pilihan: `<details>`, galeri `<figure>`, lini masa
   `<ol>`, `<dl>`, `<blockquote>`, `<article>`. Semuanya ikut digayakan memakai
   token yang sama.
3. Buat LIMA berkas gaya di folder `css/`, lalu buka komentar lima baris `<link>`
   di dalam `<head>` — urutannya menentukan hasil akhir:

   | Berkas | Isi | Lembar |
   |---|---|---|
   | `css/tokens.css` | dua lapis token: nilai mentah + peran | D |
   | `css/base.css` | reset ringan, box-sizing, tipografi | E |
   | `css/layout.css` | navbar flex, katalog kartu, footer | F |
   | `css/komponen.css` | gaya form, fokus, isian tidak sah | G |
   | `css/tema.css` | tema gelap dan tombol pengalihnya | H |

## Evaluasi yang dilaporkan

Tulis di README ini, satu paragraf per bagian tambahan: elemen apa, untuk siapa,
dan menjawab apa. Lalu catat hasil evaluasinya (Lembar I.6):

## Pertemuan 4 — Halaman profil saya

- Arah visual: tenang dan akademik
- Warna utama: biru (`#1D3A8C`), dipilih karena memberi kesan rapi, dapat dipercaya, dan enak dibaca lama.
- Berkas gaya: `tokens.css`, `base.css`, `layout.css`, `komponen.css`, `tema.css`

### Token yang saya tetapkan

| Token | Nilai | Untuk apa |
|---|---|---|
| `--color-primary` | `#1D3A8C` | tombol, tautan, judul, garis fokus |
| `--color-fg` | `#0F172A` | warna teks utama |
| `--color-bg` | `#F8FAFC` | latar halaman |
| `--color-surface` | `#FFFFFF` | latar kartu dan panel |
| `--color-border` | `#D1D5DB` | garis pemisah dan tepi kotak |
| `--radius-md` | `0.5rem` | sudut tombol, kartu, isian |
| `--space-4` | `1rem` | jarak standar antar elemen |
| `--space-6` | `1.5rem` | jarak antar bagian halaman |

Kriteria selesai: mengubah `--blue-700` di satu baris di `tokens.css` mengubah
warna tombol, tautan, judul, dan garis fokus di seluruh halaman — sudah diuji.

### Tiga struktur tambahan

**Tanya jawab** (`<details>` dan `<summary>`) — ditujukan untuk pengunjung yang
ingin cepat mengenal saya lewat pertanyaan singkat, tanpa harus membaca paragraf
panjang. Elemen ini dipilih karena bisa dibuka-tutup interaktif tanpa satu baris
JavaScript pun.

**Keterampilan** (`<dl>`, `<dt>`, `<dd>`) — menjawab pertanyaan rekruter atau
dosen tentang kemampuan teknis saya saat ini. Dipilih karena bentuk pasangan
istilah-penjelasan lebih tepat secara semantik dibanding paragraf biasa.

**Kutipan** (`<blockquote>`) — menunjukkan prinsip pribadi saya ("less but
better") kepada siapa pun yang membaca profil ini, sebagai bagian dari identitas
di luar sekadar daftar keterampilan teknis.


### Catatan penggunaan AI

Saya menggunakan bantuan AI untuk memperbaiki kode CSS dan menyelesaikan
beberapa kendala saat menghubungkan proyek ke GitHub lewat terminal. 

- W3C Nu Html Checker: 0 error
- WCAG — kontras AA tema terang: lolos (teks utama 17.5:1, tombol lolos AA)
- WCAG — kontras AA tema gelap: lolos
- WCAG — seluruh bagian baru dapat dicapai dengan Tab: ya, garis fokus terlihat jelas
- WCAG — tetap dipahami tanpa bantuan warna: ya, halaman tetap jelas dan bisa dipakai

## Waktu

90 menit di kelas hanya cukup sampai Lembar D: tiga struktur sudah berdiri,
keputusan token tercatat, dan `tokens.css` sudah memuat kelima berkas gaya.
Lembar E sampai I — base.css, layout, form, tema gelap, dan evaluasi W3C + WCAG —
diselesaikan di luar kelas sampai pukul 23.59 hari yang sama.

## Pengumpulan

Folder `worksheet-p4/` di dalam repositori GitHub Anda sendiri, berisi
`profil.html`, `css/`, `media/`, dan `bukti/`. Sudah di-commit dan di-push
sebelum **pukul 23.59 hari yang sama**. Tidak ada perpanjangan.


