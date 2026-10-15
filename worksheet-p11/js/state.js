import { daftarProyek } from "./data.js";
import { render } from "./dom.js";
import { simpan, muat, aturUlang } from "./simpan.js";

export const state = {
  daftarProyek,
  kategoriAktif: "semua",
  kataKunci: "",
};

export function pilihKategori(nilai) {
  state.kategoriAktif = nilai;
  simpan(state);      
  render(state);
}

export function pulihkan() {
  const tersimpan = muat();
  state.kategoriAktif = tersimpan?.kategoriAktif ?? "semua";   
}

export function aturUlangPilihan() {
  aturUlang();                 
  state.kategoriAktif = "semua";
  render(state);              
}