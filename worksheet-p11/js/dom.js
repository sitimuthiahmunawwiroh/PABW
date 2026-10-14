import { aturan } from "./data.js";

const wadah = document.querySelector("#daftar");
export const barisFilter = document.querySelector("#filter");
const kosong = document.querySelector("#pesan-kosong");
export const form = document.querySelector("#kontak form");
const kolomNama = document.querySelector("#nama");
const kolomEmail = document.querySelector("#email");
const kolomNim = document.querySelector("#nim");
const kolomPesan = document.querySelector("#pesan");

export const tombolKirim = form.querySelector("button[type='submit']");
export const status = document.querySelector("#status-form");
export const kolomForm = [kolomNama, kolomEmail, kolomNim, kolomPesan];

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

function tandaiTombolAktif(kategori) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol.dataset.kategori === kategori);
  });
}

function saring(state) {
  return state.daftarProyek.filter(
    (proyek) =>
      state.kategoriAktif === "semua" || proyek.kategori === state.kategoriAktif
  );
}

export function render(state) {
  tandaiTombolAktif(state.kategoriAktif);   // tombol digambar dari state
  wadah.textContent = "";                   // 1. kosongkan

  const tampil = saring(state);             // dari state, bukan argumen
  if (tampil.length === 0) {                // 2. keadaan kosong
    kosong.hidden = false;
    return;
  }
  kosong.hidden = true;

  const bungkus = document.createDocumentFragment();
  tampil.forEach((proyek) => bungkus.append(buatKartu(proyek)));   // 3. isi ulang
  wadah.append(bungkus);
}

export function pesanGalat(kolom) {
  return aturan[kolom.id](kolom.value.trim());
}

export function tampilkanGalat(kolom, pesan) {
  const elGalat = document.querySelector(`#${kolom.id}-galat`);
  elGalat.textContent = pesan;
  elGalat.hidden = pesan === "";
  if (pesan) {
    kolom.setAttribute("aria-invalid", "true");
  } else {
    kolom.removeAttribute("aria-invalid");
  }
}

export const semuaSah = () => kolomForm.every((kolom) => pesanGalat(kolom) === "");