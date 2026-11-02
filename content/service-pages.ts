import type { ServicePage } from "./types";

export const servicePages: ServicePage[] = [
  {
    slug: "website-company-profile",
    name: "Website company profile",
    title: "Jasa pembuatan website company profile",
    metaTitle: "Jasa Pembuatan Website Company Profile",
    description:
      "Website company profile profesional untuk memperkenalkan bisnis Anda, membangun kepercayaan, dan mendatangkan calon klien dari Google.",
    accent: "lazuardi",
    intro:
      "Website company profile adalah kartu nama digital bisnis Anda. Calon klien biasanya mengecek website sebelum menghubungi, jadi tampilannya harus meyakinkan, informasinya jelas, dan mudah ditemukan di Google.",
    audience: [
      "Perusahaan jasa, konsultan, dan agensi",
      "Pabrik, distributor, dan supplier B2B",
      "Klinik, sekolah, dan lembaga",
      "UMKM yang ingin terlihat lebih profesional",
    ],
    includes: [
      { title: "Halaman utama yang meyakinkan", body: "Beranda, tentang kami, layanan, dan kontak dengan pesan yang jelas." },
      { title: "Desain sesuai identitas merek", body: "Warna, tipografi, dan gaya visual yang konsisten dengan bisnis Anda." },
      { title: "Formulir kontak dan WhatsApp", body: "Memudahkan calon klien menghubungi Anda langsung dari website." },
      { title: "SEO dasar", body: "Struktur halaman, judul, dan deskripsi yang siap ditemukan di Google." },
      { title: "Konten mudah diperbarui", body: "Anda bisa mengubah teks dan gambar sendiri tanpa developer." },
      { title: "Responsif di semua perangkat", body: "Tampil rapi di ponsel, tablet, dan desktop." },
    ],
    tierId: "starter",
    relatedProjects: ["website-booking-klinik", "portofolio-studio-arsitek"],
    relatedPosts: ["biaya-pembuatan-website", "checklist-sebelum-website-online"],
    faqs: [
      {
        question: "Halaman apa saja yang biasanya ada di website company profile?",
        answer:
          "Umumnya beranda, tentang kami, layanan atau produk, portofolio atau klien, dan kontak. Halaman tambahan seperti blog atau karier bisa ditambahkan sesuai kebutuhan.",
      },
      {
        question: "Apakah saya perlu menyiapkan konten sendiri?",
        answer:
          "Sebaiknya Anda menyiapkan informasi dasar seperti profil perusahaan, layanan, dan foto. Kami membantu menyusun struktur dan merapikan teksnya agar mudah dipahami pengunjung.",
      },
      {
        question: "Apakah website company profile bisa muncul di Google?",
        answer:
          "Bisa. Setiap website yang kami buat sudah dilengkapi SEO dasar dan sitemap. Peringkat di Google tetap bergantung pada persaingan kata kunci dan konten yang Anda terbitkan.",
      },
    ],
  },
  {
    slug: "toko-online",
    name: "Toko online",
    title: "Jasa pembuatan website toko online",
    metaTitle: "Jasa Pembuatan Website Toko Online",
    description:
      "Website toko online dengan katalog produk, keranjang belanja, dan pembayaran lokal, supaya Anda bisa berjualan tanpa bergantung pada marketplace.",
    accent: "ink",
    intro:
      "Marketplace membantu Anda mulai berjualan, tetapi biaya platform, persaingan harga, dan aturan yang berubah-ubah bisa menggerus margin. Toko online sendiri memberi Anda kendali penuh atas merek, harga, dan data pelanggan.",
    audience: [
      "Brand fashion, kecantikan, dan makanan",
      "Penjual marketplace yang ingin punya kanal sendiri",
      "Produsen yang menjual langsung ke konsumen",
      "Bisnis dengan pelanggan yang sering membeli ulang",
    ],
    includes: [
      { title: "Katalog produk", body: "Kategori, filter, varian ukuran atau warna, dan stok." },
      { title: "Keranjang dan checkout cepat", body: "Alur pembelian singkat yang nyaman di ponsel." },
      { title: "Pembayaran lokal", body: "Integrasi payment gateway untuk transfer bank, e-wallet, dan virtual account." },
      { title: "Ongkos kirim otomatis", body: "Perhitungan ongkir sesuai kurir dan alamat pembeli." },
      { title: "Pengelolaan pesanan", body: "Pantau pesanan, status pembayaran, dan pengiriman dari satu dashboard." },
      { title: "SEO untuk halaman produk", body: "Produk Anda bisa ditemukan langsung lewat pencarian Google." },
    ],
    tierId: "professional",
    relatedProjects: ["toko-online-kopi"],
    relatedPosts: ["wordpress-atau-website-custom", "biaya-pembuatan-website"],
    faqs: [
      {
        question: "Toko online dibuat dengan WordPress atau custom?",
        answer:
          "Untuk sebagian besar toko, WooCommerce di WordPress sudah cukup dan lebih cepat diluncurkan. Website custom kami sarankan jika Anda butuh fitur khusus atau performa tinggi dengan banyak produk.",
      },
      {
        question: "Metode pembayaran apa saja yang bisa digunakan?",
        answer:
          "Tergantung payment gateway yang dipilih. Umumnya mencakup transfer bank, virtual account, e-wallet, dan kartu kredit. Kami bantu proses integrasinya.",
      },
      {
        question: "Apakah saya bisa mengelola produk sendiri?",
        answer:
          "Bisa. Anda dapat menambah produk, mengubah harga, dan memproses pesanan sendiri. Kami berikan panduan saat serah terima.",
      },
    ],
  },
  {
    slug: "website-wordpress",
    name: "Website WordPress",
    title: "Jasa pembuatan website WordPress",
    metaTitle: "Jasa Pembuatan Website WordPress",
    description:
      "Website WordPress yang cepat, aman, dan mudah dikelola sendiri. Cocok untuk bisnis yang ingin segera online dengan biaya terjangkau.",
    accent: "coral",
    intro:
      "WordPress adalah platform website yang sangat populer karena mudah dikelola dan punya banyak pilihan plugin. Kami membangun website WordPress yang ringan dan rapi, bukan sekadar memasang tema lalu selesai.",
    audience: [
      "Bisnis yang ingin online dalam hitungan minggu",
      "Tim yang akan sering memperbarui konten sendiri",
      "Website dengan blog atau artikel rutin",
      "Anggaran awal yang terbatas",
    ],
    includes: [
      { title: "Tema yang dioptimalkan", body: "Tema ringan yang disesuaikan dengan merek, atau tema custom." },
      { title: "Plugin seperlunya", body: "Hanya plugin yang dibutuhkan, agar website tetap cepat dan aman." },
      { title: "Editor yang mudah", body: "Ubah halaman dan tulis artikel tanpa menyentuh kode." },
      { title: "Keamanan dasar", body: "SSL, pembatasan login, dan backup otomatis." },
      { title: "SEO dasar", body: "Pengaturan judul, deskripsi, sitemap, dan struktur URL." },
      { title: "Panduan pengelolaan", body: "Sesi serah terima agar tim Anda percaya diri mengelola website." },
    ],
    tierId: "starter",
    relatedProjects: ["toko-online-kopi"],
    relatedPosts: ["wordpress-atau-website-custom", "checklist-sebelum-website-online"],
    faqs: [
      {
        question: "Apakah WordPress aman?",
        answer:
          "Aman jika dirawat dengan benar: tema dan plugin diperbarui rutin, password kuat, dan backup berjalan. Kami juga menawarkan paket maintenance untuk menangani hal ini.",
      },
      {
        question: "Apakah saya perlu membayar lisensi WordPress?",
        answer:
          "WordPress sendiri gratis. Biaya yang mungkin muncul adalah hosting, domain, dan lisensi tema atau plugin premium jika digunakan.",
      },
      {
        question: "Bisakah website WordPress dipindah ke website custom nanti?",
        answer:
          "Bisa. Konten dan struktur halaman dapat dimigrasikan saat bisnis Anda membutuhkan performa atau fitur yang lebih khusus.",
      },
    ],
  },
  {
    slug: "website-custom",
    name: "Website custom",
    title: "Jasa pembuatan website custom",
    metaTitle: "Jasa Pembuatan Website Custom",
    description:
      "Website custom dengan Next.js dan React: desain unik, performa tinggi, dan fitur yang dibangun khusus untuk kebutuhan bisnis Anda.",
    accent: "graphite",
    intro:
      "Website custom dibangun dari awal sesuai kebutuhan Anda, tanpa batasan tema atau plugin. Hasilnya website yang lebih cepat, desain yang benar-benar mencerminkan merek, dan fitur yang bisa tumbuh bersama bisnis.",
    audience: [
      "Startup dan perusahaan teknologi",
      "Bisnis dengan alur atau fitur yang unik",
      "Website yang perlu terhubung ke sistem lain",
      "Merek yang mengutamakan kecepatan dan pengalaman pengguna",
    ],
    includes: [
      { title: "Desain UI/UX custom", body: "Riset, wireframe, dan desain yang disusun khusus untuk pengunjung Anda." },
      { title: "Frontend modern", body: "Dibangun dengan Next.js dan React untuk performa terbaik." },
      { title: "Headless CMS", body: "Tim non-teknis tetap bisa mengelola konten dengan mudah." },
      { title: "Integrasi API", body: "Terhubung dengan CRM, ERP, pembayaran, atau sistem internal Anda." },
      { title: "Performa dan aksesibilitas", body: "Halaman cepat dan nyaman digunakan semua orang." },
      { title: "SEO teknis lengkap", body: "Structured data, metadata, sitemap, dan halaman yang mudah dirayapi." },
    ],
    tierId: "professional",
    relatedProjects: ["website-marketing-saas", "website-booking-klinik"],
    relatedPosts: ["wordpress-atau-website-custom", "biaya-pembuatan-website"],
    faqs: [
      {
        question: "Apa bedanya website custom dengan WordPress?",
        answer:
          "Website custom ditulis khusus untuk kebutuhan Anda, sehingga lebih fleksibel dan biasanya lebih cepat. WordPress lebih cepat diluncurkan dan lebih terjangkau. Baca perbandingan lengkapnya di blog kami.",
      },
      {
        question: "Apakah saya tetap bisa mengubah konten sendiri?",
        answer:
          "Bisa. Kami menghubungkan website ke headless CMS sehingga Anda bisa mengubah teks, gambar, dan artikel tanpa developer.",
      },
      {
        question: "Berapa lama pengerjaan website custom?",
        answer:
          "Umumnya 4–10 minggu, tergantung jumlah halaman dan kompleksitas fitur. Jadwal pasti disepakati di tahap perencanaan.",
      },
    ],
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((page) => page.slug === slug);
}
