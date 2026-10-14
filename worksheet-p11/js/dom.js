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

export function render(daftar) {
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

export function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
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