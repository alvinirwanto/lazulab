import type { PostBlock } from "./types";

// TODO: minta konsultan hukum meninjau isi ini dan lengkapi nama badan usaha
// serta alamat sebelum website dipublikasikan.
export const privacyUpdatedAt = "2026-11-02";

export const privacyPolicy: PostBlock[] = [
  {
    type: "p",
    text: "Kebijakan privasi ini menjelaskan data apa yang kami kumpulkan saat Anda menggunakan website Lazulab, bagaimana kami menggunakannya, dan hak Anda atas data tersebut. Kebijakan ini disusun dengan mengacu pada Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi.",
  },
  { type: "h2", text: "Data yang kami kumpulkan" },
  {
    type: "p",
    text: "Kami hanya mengumpulkan data yang Anda berikan secara langsung melalui formulir kontak:",
  },
  {
    type: "ul",
    items: [
      "Nama",
      "Alamat email",
      "Nama perusahaan (opsional)",
      "Paket yang Anda minati",
      "Pesan dan informasi tentang proyek Anda",
    ],
  },
  {
    type: "p",
    text: "Server kami juga dapat mencatat data teknis standar seperti alamat IP dan jenis browser untuk keperluan keamanan dan pemeliharaan sistem.",
  },
  { type: "h2", text: "Cara kami menggunakan data" },
  {
    type: "ul",
    items: [
      "Membalas pertanyaan dan permintaan konsultasi Anda",
      "Menyiapkan penawaran dan menjalankan proyek yang disepakati",
      "Menjaga keamanan dan mencegah penyalahgunaan website",
    ],
  },
  {
    type: "p",
    text: "Kami **tidak menjual** data pribadi Anda dan tidak menggunakannya untuk iklan pihak ketiga.",
  },
  { type: "h2", text: "Pihak ketiga" },
  {
    type: "p",
    text: "Untuk menjalankan website, kami menggunakan penyedia layanan seperti hosting dan layanan pengiriman pesan. Penyedia tersebut hanya memproses data sesuai kebutuhan layanan dan tidak berhak menggunakannya untuk tujuan lain.",
  },
  { type: "h2", text: "Penyimpanan dan keamanan" },
  {
    type: "p",
    text: "Data disimpan selama diperlukan untuk tujuan di atas, atau selama diwajibkan oleh hukum. Kami menerapkan langkah keamanan yang wajar, termasuk koneksi HTTPS, untuk melindungi data Anda.",
  },
  { type: "h2", text: "Hak Anda" },
  {
    type: "p",
    text: "Anda berhak meminta akses, perbaikan, atau penghapusan data pribadi Anda, serta menarik persetujuan yang telah diberikan. Kirim permintaan melalui email yang tercantum di bawah ini.",
  },
  { type: "h2", text: "Perubahan kebijakan" },
  {
    type: "p",
    text: "Kebijakan ini dapat diperbarui sewaktu-waktu. Tanggal pembaruan terakhir selalu tercantum di halaman ini.",
  },
];
