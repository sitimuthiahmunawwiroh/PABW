const profil = {
    nama: "Siti Muthiah Munawwiroh Siregar",
    peran: "Mahasiswa Informatika yang sedang belajar membangun web",
    keahlian: ["HTML semantik", "CSS", "Pengembangan aplikasi"],
  };

  const jumlahProyek = 3;
  
  const kalimat = `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`;
  console.log(kalimat);
  
  console.log(typeof profil.nama);   
  console.log(typeof jumlahProyek);  
  
  console.log(profil.alamat?.kota ?? "belum diisi");
  
function buatPerkenalan({ nama, peran }) {
    return `${nama} — ${peran}`;
  }
  
  const formatKeahlian = (daftar) => daftar.join(" · ");
  
  console.log(buatPerkenalan(profil));
  console.log(formatKeahlian(profil.keahlian));