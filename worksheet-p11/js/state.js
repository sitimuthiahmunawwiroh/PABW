import { daftarProyek } from "./data.js";

export const state = {
  daftarProyek,
  kategoriAktif: "semua",
  kataKunci: "",
};

export function pilihKategori(nilai) {
  state.kategoriAktif = nilai;
}