import type { Project } from "./types";

// TODO: ganti contoh konsep ini dengan studi kasus dan screenshot asli.
export const projects: Project[] = [
  {
    slug: "website-booking-klinik",
    title: "Website booking klinik",
    category: "Kesehatan",
    summary:
      "Website yang tenang dan mudah diakses, dengan halaman layanan, profil dokter, dan permintaan janji temu online.",
    stack: ["Next.js", "Headless CMS", "Integrasi booking"],
    services: ["Strategi", "Desain UI/UX", "Website custom"],
    accent: "ink",
    challenge:
      "Pasien sering menelepon hanya untuk menanyakan jadwal dokter dan layanan. Informasi tersebar di media sosial dan sulit ditemukan di Google.",
    solution:
      "Satu website dengan halaman layanan yang jelas, profil dokter beserta jadwal praktik, dan formulir janji temu yang terhubung ke sistem booking. Konten dikelola lewat CMS sehingga staf bisa memperbarui jadwal sendiri.",
    features: [
      "Profil dokter dengan jadwal praktik",
      "Formulir janji temu online",
      "Halaman layanan yang dioptimalkan untuk pencarian lokal",
      "Tampilan ramah untuk pengguna lanjut usia",
      "CMS untuk mengelola jadwal dan artikel kesehatan",
    ],
    goals: [
      "Mengurangi pertanyaan berulang lewat telepon",
      "Memudahkan pasien menemukan klinik di Google",
      "Membuat jadwal dokter selalu terbaru",
    ],
    isPlaceholder: true,
  },
  {
    slug: "toko-online-kopi",
    title: "Toko online kopi",
    category: "E-commerce",
    summary:
      "Toko online yang menonjolkan produk, dengan langganan, panduan seduh, dan checkout yang nyaman di ponsel.",
    stack: ["WordPress", "WooCommerce", "Payment gateway"],
    services: ["Desain UI/UX", "Website WordPress", "Peluncuran"],
    accent: "lazuardi",
    challenge:
      "Penjualan bergantung pada chat dan marketplace, sehingga pesanan berulang sulit dikelola dan margin terpotong biaya platform.",
    solution:
      "Toko online WooCommerce dengan katalog yang mudah dijelajahi, opsi langganan bulanan, pembayaran lokal, dan panduan seduh yang sekaligus menjadi konten SEO.",
    features: [
      "Katalog produk dengan filter rasa dan metode seduh",
      "Langganan pembelian berulang",
      "Integrasi payment gateway lokal",
      "Checkout satu halaman yang cepat di ponsel",
      "Blog panduan seduh",
    ],
    goals: [
      "Memiliki kanal penjualan sendiri di luar marketplace",
      "Mempermudah pembelian ulang",
      "Mendatangkan pengunjung organik lewat konten",
    ],
    isPlaceholder: true,
  },
  {
    slug: "portofolio-studio-arsitek",
    title: "Portofolio studio arsitek",
    category: "Portofolio",
    summary: "Tata letak editorial yang menonjolkan foto, dengan filter proyek dan galeri yang cepat dimuat.",
    stack: ["Next.js", "Image CDN", "MDX"],
    services: ["Desain UI/UX", "Website custom"],
    accent: "coral",
    challenge:
      "Foto proyek beresolusi tinggi membuat website lama sangat lambat, dan calon klien kesulitan menemukan proyek yang relevan.",
    solution:
      "Website editorial dengan optimasi gambar otomatis, galeri yang dimuat bertahap, dan filter berdasarkan jenis bangunan sehingga calon klien cepat menemukan referensi yang sesuai.",
    features: [
      "Galeri foto dengan optimasi gambar otomatis",
      "Filter proyek berdasarkan kategori",
      "Halaman studi kasus per proyek",
      "Formulir permintaan konsultasi",
    ],
    goals: [
      "Menampilkan karya dengan kualitas terbaik tanpa mengorbankan kecepatan",
      "Membantu calon klien menemukan proyek yang relevan",
    ],
    isPlaceholder: true,
  },
  {
    slug: "website-marketing-saas",
    title: "Website marketing SaaS",
    category: "Teknologi",
    summary: "Halaman marketing, harga, dan dokumentasi yang dibangun di atas satu sistem komponen.",
    stack: ["React", "Tailwind CSS", "Analytics"],
    services: ["Strategi", "Desain UI/UX", "Website custom"],
    accent: "graphite",
    challenge:
      "Tim marketing harus menunggu developer setiap kali ingin membuat landing page baru, dan tampilan antarhalaman tidak konsisten.",
    solution:
      "Sistem komponen yang bisa disusun ulang menjadi halaman baru, halaman harga yang mudah dibandingkan, serta pelacakan analytics di setiap tombol penting.",
    features: [
      "Library komponen halaman yang bisa dipakai ulang",
      "Halaman harga dengan perbandingan paket",
      "Pelacakan konversi dengan analytics",
      "Halaman dokumentasi yang terhubung",
    ],
    goals: [
      "Mempercepat pembuatan landing page baru",
      "Menjaga tampilan tetap konsisten di semua halaman",
    ],
    isPlaceholder: true,
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
