const ALAMAT = "https://jsonplaceholder.typicode.com/todos?_limit=5";

export async function muat() {
  const respons = await fetch(ALAMAT);
  console.log("status", respons.status, "ok", respons.ok);
  if (!respons.ok) {
    throw new Error("status " + respons.status);
  }
  return respons.json();
}

window.muat = muat; // hanya untuk uji Console, dihapus di lembar B