import { pilihKategori, aturUlangPilihan } from "./state.js";
import {
  barisFilter,
  form,
  kolomForm,
  tombolKirim,
  tombolAturUlang,
  status,
  pesanGalat,
  tampilkanGalat,
  semuaSah,
} from "./dom.js";

export function pasangPendengar() {
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;

    pilihKategori(tombol.dataset.kategori);
  });

  tombolAturUlang.addEventListener("click", aturUlangPilihan);

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