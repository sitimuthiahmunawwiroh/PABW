import { daftarProyek } from "./app.js";
const wadah = document.querySelector("#daftar");
const barisFilter = document.querySelector("#filter");
const kosong = document.querySelector("#pesan-kosong");
const form = document.querySelector("#kontak form");
const kolomNama = document.querySelector("#nama");
const kolomEmail = document.querySelector("#email");
const kolomNim = document.querySelector("#nim");
const kolomPesan = document.querySelector("#pesan");

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";

  const judul = document.createElement("strong");
  judul.textContent = proyek.judul; 

  const info = document.createElement("span");
  info.textContent = `${proyek.tahun} · ${proyek.kategori}`;

  li.append(judul, info);
  return li;
}

function render(daftar) {
  wadah.textContent = ""; 

  if (daftar.length === 0) { 
    kosong.hidden = false;
    return;
  }
  kosong.hidden = true;

  const bungkus = document.createDocumentFragment(); 
  daftar.forEach((proyek) => bungkus.append(buatKartu(proyek)));
  wadah.append(bungkus); 
}

function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return; 

  const kategori = tombol.dataset.kategori;
  const terpilih = daftarProyek.filter(
    (proyek) => kategori === "semua" || proyek.kategori === kategori
  );

  tandaiTombolAktif(tombol);
  render(terpilih);
});

render(daftarProyek);