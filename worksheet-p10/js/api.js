const ALAMAT = "notisia.json";

export async function ambilNotisia() {
  try {
    const respons = await fetch(ALAMAT);
    if (!respons.ok) throw new Error("status " + respons.status);
    const data = await respons.json();
    console.log("bentuk data", data);
    if (!Array.isArray(data.butir)) {
      throw new Error('bentuk data tidak sesuai: "butir" bukan larik');
    }
    return data.butir;
  } catch (galat) {
    console.error("gagal memuat", galat.message);
    throw galat;
  }
}