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

const tombolKirim = form.querySelector("button[type='submit']");
const status = document.querySelector("#status-form");
const kolomForm = [kolomNama, kolomEmail, kolomNim, kolomPesan];

const aturan = {
  nama: (isi) =>
    isi === "" ? "Nama belum diisi. Ketik nama lengkap Anda." : "",
  email: (isi) => {
    if (isi === "") return "Email belum diisi. Ketik alamat email Anda.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(isi))
      return "Format email belum benar. Pakai bentuk nama@contoh.com.";
    return "";
  },
  nim: (isi) =>
    /^[0-9]{8}$/.test(isi) ? "" : "NIM harus delapan digit angka, contoh 24523182.",
  pesan: (isi) =>
    isi === "" ? "Pesan belum diisi. Tulis pesan Anda." : "",
};

function pesanGalat(kolom) {
  return aturan[kolom.id](kolom.value.trim());
}

function tampilkanGalat(kolom, pesan) {
  const elGalat = document.querySelector(`#${kolom.id}-galat`);
  elGalat.textContent = pesan;
  elGalat.hidden = pesan === "";
  if (pesan) {
    kolom.setAttribute("aria-invalid", "true");
  } else {
    kolom.removeAttribute("aria-invalid");
  }
}

const semuaSah = () => kolomForm.every((kolom) => pesanGalat(kolom) === "");

form.addEventListener("submit", (event) => {
  event.preventDefault(); 

  let pertamaBermasalah = null;
  kolomForm.forEach((kolom) => {
    const pesan = pesanGalat(kolom);
    tampilkanGalat(kolom, pesan);
    if (pesan && !pertamaBermasalah) pertamaBermasalah = kolom;
  });

  if (pertamaBermasalah) {
    status.textContent = "";
    pertamaBermasalah.focus(); 
    return; 
  }

  status.textContent = "Formulir sudah benar. Pengiriman ke server belum dibuat.";
  kolomForm.forEach((kolom) => tampilkanGalat(kolom, ""));
  form.reset();
  tombolKirim.disabled = false;
});

form.addEventListener("input", (event) => {
  const kolom = event.target;
  if (!kolomForm.includes(kolom)) return; 
  tampilkanGalat(kolom, pesanGalat(kolom));
  tombolKirim.disabled = !semuaSah();
});