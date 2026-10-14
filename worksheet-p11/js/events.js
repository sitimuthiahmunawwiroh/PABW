import { state } from "./state.js";
import {
  barisFilter,
  form,
  kolomForm,
  tombolKirim,
  status,
  render,
  tandaiTombolAktif,
  pesanGalat,
  tampilkanGalat,
  semuaSah,
} from "./dom.js";

export function pasangPendengar() {
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;

    const kategori = tombol.dataset.kategori;
    const terpilih = state.daftarProyek.filter(
      (proyek) => kategori === "semua" || proyek.kategori === kategori
    );

    tandaiTombolAktif(tombol);
    render(terpilih);
  });

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
}