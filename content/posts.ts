import type { Post } from "./types";

// Newest first. Add new articles at the top of this list.
export const posts: Post[] = [
  {
    slug: "biaya-pembuatan-website",
    title: "Berapa biaya pembuatan website? Faktor yang menentukan harganya",
    excerpt:
      "Harga website bisa sangat berbeda antara satu penyedia dan lainnya. Pelajari faktor yang memengaruhi biaya, supaya Anda bisa membandingkan penawaran dengan tepat.",
    category: "Panduan",
    accent: "lazuardi",
    publishedAt: "2026-11-01",
    author: "Tim Lazulab",
    tags: ["biaya website", "jasa pembuatan website", "UMKM"],
    body: [
      {
        type: "p",
        text: "Pertanyaan pertama yang hampir selalu muncul saat ingin membuat website adalah: berapa biayanya? Jawabannya tergantung pada apa yang Anda butuhkan. Website profil sederhana dan toko online dengan ratusan produk tentu memerlukan pekerjaan yang sangat berbeda.",
      },
      {
        type: "p",
        text: "Artikel ini menjelaskan faktor utama yang menentukan harga, sehingga Anda bisa memahami isi penawaran dan memilih paket yang sesuai.",
      },
      { type: "h2", text: "1. Jumlah dan jenis halaman" },
      {
        type: "p",
        text: "Semakin banyak halaman yang perlu didesain dan diisi, semakin besar pekerjaannya. Halaman seperti beranda, layanan, dan kontak biasanya menjadi dasar. Halaman yang membutuhkan tata letak khusus, misalnya halaman produk atau studi kasus, memerlukan waktu desain tambahan.",
      },
      { type: "h2", text: "2. Template atau desain custom" },
      {
        type: "p",
        text: "Website berbasis template WordPress bisa diluncurkan lebih cepat dengan biaya lebih rendah. Desain custom dibuat khusus untuk merek dan pengunjung Anda, sehingga butuh tahap riset, desain, dan revisi yang lebih panjang. Baca perbandingan lengkapnya di [WordPress atau website custom](/blog/wordpress-atau-website-custom).",
      },
      { type: "h2", text: "3. Fitur dan integrasi" },
      {
        type: "p",
        text: "Fitur di luar halaman informasi akan menambah ruang lingkup. Contohnya:",
      },
      {
        type: "ul",
        items: [
          "Toko online dengan keranjang dan **payment gateway**",
          "Sistem booking atau janji temu",
          "Area member dengan login",
          "Integrasi dengan CRM, ERP, atau aplikasi lain",
          "Multi bahasa",
        ],
      },
      { type: "h2", text: "4. Konten" },
      {
        type: "p",
        text: "Siapa yang menyiapkan teks, foto, dan video? Jika konten sudah siap, proses berjalan lebih cepat. Jika perlu bantuan penulisan atau foto produk, biaya tersebut biasanya dihitung terpisah.",
      },
      { type: "h2", text: "5. Biaya rutin setelah website online" },
      {
        type: "p",
        text: "Selain biaya pembuatan, ada biaya yang dibayar secara berkala:",
      },
      {
        type: "ul",
        items: [
          "**Domain**, diperpanjang setiap tahun",
          "**Hosting**, tergantung kapasitas dan trafik",
          "**Maintenance**, untuk update, backup, dan keamanan",
          "Lisensi plugin atau layanan pihak ketiga, jika ada",
        ],
      },
      {
        type: "callout",
        text: "Saat membandingkan penawaran, pastikan Anda tahu apa saja yang sudah termasuk: jumlah halaman, putaran revisi, SEO dasar, dan bantuan setelah peluncuran.",
      },
      { type: "h2", text: "Cara mendapatkan penawaran yang akurat" },
      {
        type: "ol",
        items: [
          "Tuliskan tujuan utama website, misalnya mendapatkan leads atau menjual produk.",
          "Buat daftar halaman dan fitur yang dibutuhkan.",
          "Siapkan contoh website yang Anda sukai.",
          "Tentukan target waktu peluncuran.",
        ],
      },
      {
        type: "p",
        text: "Dengan informasi ini, penyedia jasa bisa memberikan penawaran tertulis yang jelas. Lihat [paket harga Lazulab](/#harga) atau [jadwalkan konsultasi gratis](/#kontak) untuk mendiskusikan kebutuhan Anda.",
      },
    ],
  },
  {
    slug: "wordpress-atau-website-custom",
    title: "WordPress atau website custom: mana yang cocok untuk bisnis Anda?",
    excerpt:
      "WordPress cepat dan mudah dikelola, website custom fleksibel dan bisa sangat cepat. Berikut perbandingan praktis untuk membantu Anda memilih.",
    category: "Teknologi",
    accent: "ink",
    publishedAt: "2026-10-24",
    author: "Tim Lazulab",
    tags: ["WordPress", "website custom", "Next.js"],
    body: [
      {
        type: "p",
        text: "Dua pilihan yang paling sering kami diskusikan dengan klien adalah WordPress dan website custom. Keduanya bisa menghasilkan website yang bagus. Yang membedakan adalah kebutuhan, anggaran, dan rencana jangka panjang bisnis Anda.",
      },
      { type: "h2", text: "Kapan WordPress menjadi pilihan tepat" },
      {
        type: "p",
        text: "WordPress adalah sistem manajemen konten yang sangat populer dan memiliki ekosistem tema serta plugin yang luas. Cocok jika:",
      },
      {
        type: "ul",
        items: [
          "Anda ingin website segera online",
          "Tim Anda akan sering memperbarui konten sendiri",
          "Fitur yang dibutuhkan sudah tersedia dalam bentuk plugin",
          "Anggaran awal terbatas",
        ],
      },
      {
        type: "p",
        text: "Hal yang perlu diperhatikan: plugin dan tema harus rutin diperbarui demi keamanan, dan terlalu banyak plugin bisa memperlambat website.",
      },
      { type: "h2", text: "Kapan website custom lebih masuk akal" },
      {
        type: "p",
        text: "Website custom dibangun dengan framework modern seperti **Next.js** dan React. Kode ditulis khusus untuk kebutuhan Anda. Pilihan ini cocok jika:",
      },
      {
        type: "ul",
        items: [
          "Kecepatan halaman dan performa menjadi prioritas",
          "Desain harus benar-benar unik dan konsisten dengan merek",
          "Website perlu terhubung dengan sistem lain lewat API",
          "Ada fitur khusus yang tidak tersedia di plugin",
        ],
      },
      {
        type: "p",
        text: "Konten tetap bisa dikelola sendiri dengan menghubungkan website ke **headless CMS**, sehingga tim non-teknis tetap bisa mengubah teks dan gambar.",
      },
      { type: "h2", text: "Ringkasan perbandingan" },
      {
        type: "ul",
        items: [
          "**Waktu pengerjaan:** WordPress lebih cepat, custom butuh waktu lebih panjang.",
          "**Biaya awal:** WordPress lebih terjangkau, custom lebih tinggi.",
          "**Fleksibilitas desain:** custom tanpa batas, WordPress mengikuti tema.",
          "**Perawatan:** WordPress perlu update plugin rutin, custom lebih sedikit ketergantungan pihak ketiga.",
        ],
      },
      {
        type: "callout",
        text: "Tidak yakin harus memilih yang mana? Mulailah dari tujuan bisnis, bukan teknologinya. Teknologi yang tepat adalah yang paling sederhana untuk mencapai tujuan tersebut.",
      },
      {
        type: "p",
        text: "Kami menyediakan keduanya: paket Starter untuk WordPress dan paket Professional untuk website custom. Lihat [perbandingan paket](/#harga) atau baca juga [faktor yang menentukan biaya website](/blog/biaya-pembuatan-website).",
      },
    ],
  },
  {
    slug: "checklist-sebelum-website-online",
    title: "Checklist sebelum website Anda online",
    excerpt:
      "Sebelum meluncurkan website, pastikan hal-hal penting ini sudah dicek: dari formulir dan SSL sampai sitemap dan Google Search Console.",
    category: "SEO",
    accent: "coral",
    publishedAt: "2026-10-17",
    author: "Tim Lazulab",
    tags: ["SEO", "peluncuran website", "checklist"],
    body: [
      {
        type: "p",
        text: "Hari peluncuran adalah momen yang ditunggu. Namun, kesalahan kecil seperti formulir yang tidak terkirim atau halaman yang tidak terindeks bisa membuat Anda kehilangan calon pelanggan sejak hari pertama. Gunakan checklist ini sebelum website online.",
      },
      { type: "h2", text: "Fungsi dan konten" },
      {
        type: "ul",
        items: [
          "Semua formulir sudah dites dan pesan masuk ke email yang benar",
          "Tidak ada tautan rusak atau halaman kosong",
          "Teks contoh (lorem ipsum) sudah diganti",
          "Nomor telepon dan alamat email bisa diklik",
          "Halaman kebijakan privasi tersedia jika mengumpulkan data",
        ],
      },
      { type: "h2", text: "Tampilan di berbagai perangkat" },
      {
        type: "ul",
        items: [
          "Dicek di ponsel, tablet, dan desktop",
          "Dicek di Chrome, Safari, dan Firefox",
          "Teks mudah dibaca dan tombol mudah ditekan di layar kecil",
        ],
      },
      { type: "h2", text: "Kecepatan" },
      {
        type: "ul",
        items: [
          "Gambar sudah dikompres dan menggunakan ukuran yang tepat",
          "Tidak ada script atau plugin yang tidak digunakan",
          "Skor performa dicek dengan PageSpeed Insights",
        ],
      },
      { type: "h2", text: "SEO dasar" },
      {
        type: "ul",
        items: [
          "Setiap halaman punya **judul** dan **meta description** yang unik",
          "Struktur heading rapi: satu H1 per halaman",
          "Gambar memiliki teks alt yang deskriptif",
          "**Sitemap.xml** dan **robots.txt** tersedia",
          "Website didaftarkan ke Google Search Console",
        ],
      },
      { type: "h2", text: "Keamanan dan domain" },
      {
        type: "ul",
        items: [
          "SSL aktif dan semua halaman memakai HTTPS",
          "Versi www dan non-www mengarah ke satu alamat",
          "Backup otomatis sudah berjalan",
        ],
      },
      {
        type: "callout",
        text: "Simpan checklist ini dan jalankan ulang setiap kali ada perubahan besar pada website.",
      },
      {
        type: "p",
        text: "Di Lazulab, checklist ini menjadi bagian dari tahap testing dan deployment di setiap proyek. Pelajari [proses kerja kami](/#proses) atau [hubungi kami](/#kontak) jika Anda butuh bantuan meluncurkan website.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

/** Rough reading time in minutes at ~200 words per minute. */
export function readingTime(post: Post) {
  const words = post.body
    .flatMap((block) => ("items" in block ? block.items : [block.text]))
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(iso));
}
