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
  
  const daftarProyek = [
    { judul: "Halaman Kelas Terbuka Kampus", tahun: 2026, selesai: true },
    { judul: "Aplikasi Sortify", tahun: 2024, selesai: true },
    { judul: "Posture Care", tahun: 2025, selesai: true },
  ];
  
  console.table(profil.keahlian);
  console.table(daftarProyek);
  
  const proyekTerbaru = daftarProyek.filter((proyek) => proyek.tahun >= 2025);
  console.table(proyekTerbaru);
  
  const sortify = daftarProyek.find((proyek) => proyek.judul === "Aplikasi Sortify");
  console.log(sortify);
  
  const daftarJudul = daftarProyek.map((proyek) => proyek.judul);
  console.log(daftarJudul);

  const urutTahun = [...daftarProyek].sort((a, b) => a.tahun - b.tahun);
  console.table(urutTahun);
  console.table(daftarProyek); 

