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