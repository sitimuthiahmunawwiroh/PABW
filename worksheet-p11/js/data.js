export const profil = {
    nama: "Siti Muthiah Munawwiroh Siregar",
    peran: "Mahasiswa Informatika yang sedang belajar membangun web",
    keahlian: ["HTML semantik", "CSS", "Pengembangan aplikasi"],
  };
  
  export const daftarProyek = [
    { judul: "Halaman Kelas Terbuka Kampus", tahun: 2026, selesai: true, kategori: "web" },
    { judul: "Aplikasi Sortify", tahun: 2024, selesai: true, kategori: "aplikasi" },
    { judul: "Posture Care", tahun: 2025, selesai: true, kategori: "aplikasi" },
  ];
  
  export function buatPerkenalan({ nama, peran }) {
    return `${nama} — ${peran}`;
  }
  
  export const formatKeahlian = (daftar) => daftar.join(" · ");
  
  export const aturan = {
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