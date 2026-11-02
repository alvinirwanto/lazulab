import type { TeamMember, Value } from "./types";

// TODO: pastikan cerita nama ini sesuai dengan maksud pendiri.
export const nameStory = {
  parts: [
    { word: "Lazu", meaning: "dari lazuardi, biru langit yang jernih dan luas" },
    { word: "lab", meaning: "tempat merancang, menguji, dan terus memperbaiki" },
  ],
  summary:
    "Kami ingin setiap website terasa jernih bagi pengunjungnya, dan dibangun dengan ketelitian seperti di laboratorium.",
};

export const story = [
  "Lazulab adalah studio desain dan pengembangan website untuk bisnis di Indonesia. Kami membantu pemilik usaha, dari UMKM sampai perusahaan yang sedang berkembang, mengubah ide menjadi website yang benar-benar bekerja.",
  "Banyak bisnis punya website yang terlihat bagus tetapi lambat, sulit diperbarui, atau tidak muncul di Google. Kami percaya website seharusnya menjadi alat bisnis: mudah ditemukan, mudah dipahami, dan mudah dikelola.",
  "Karena itu kami menangani semuanya dalam satu tim, dari perencanaan dan desain sampai development, peluncuran, dan perawatan. Anda cukup bicara dengan satu pihak, dengan bahasa yang mudah dipahami.",
];

export const values: Value[] = [
  {
    title: "Jujur soal biaya dan waktu",
    body: "Penawaran tertulis sejak awal, tanpa biaya tersembunyi. Jika ada perubahan, kami sampaikan sebelum dikerjakan.",
    icon: "clipboard",
  },
  {
    title: "Teliti sampai ke detail",
    body: "Kecepatan halaman, aksesibilitas, dan tampilan di ponsel kami uji sebelum website diluncurkan.",
    icon: "search",
  },
  {
    title: "Bicara dengan bahasa bisnis",
    body: "Kami menjelaskan setiap keputusan teknis dari sisi manfaatnya bagi bisnis Anda, bukan istilah yang membingungkan.",
    icon: "spark",
  },
  {
    title: "Anda yang memegang kendali",
    body: "Kode, domain, dan konten sepenuhnya milik Anda. Kami ajarkan cara mengelolanya sendiri.",
    icon: "key",
  },
];

// TODO: ganti dengan anggota tim asli dan tambahkan foto di /public.
export const team: TeamMember[] = [
  { name: "Nama anggota tim", role: "Founder & project lead", isPlaceholder: true },
  { name: "Nama anggota tim", role: "UI/UX designer", isPlaceholder: true },
  { name: "Nama anggota tim", role: "Web developer", isPlaceholder: true },
  { name: "Nama anggota tim", role: "SEO & content", isPlaceholder: true },
];
