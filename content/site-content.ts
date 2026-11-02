import type {
  Faq,
  NavItem,
  NavLink,
  PricingTier,
  Principle,
  ProcessStep,
  Service,
  Tool,
} from "./types";

// Top level links go to pages; everything on the home page sits under "Layanan".
export const navigation: NavItem[] = [
  {
    label: "Layanan",
    items: [
      { label: "Website company profile", description: "Kenalkan bisnis dan bangun kepercayaan", href: "/layanan/website-company-profile" },
      { label: "Toko online", description: "Jualan sendiri tanpa bergantung marketplace", href: "/layanan/toko-online" },
      { label: "Website WordPress", description: "Cepat online dan mudah dikelola sendiri", href: "/layanan/website-wordpress" },
      { label: "Website custom", description: "Desain dan fitur khusus untuk bisnis Anda", href: "/layanan/website-custom" },
      { label: "Harga paket", description: "Starter, Professional, dan Enterprise", href: "/#harga" },
      { label: "Semua layanan", description: "Lihat semua layanan dan proses kerja kami", href: "/layanan" },
    ],
  },
  { label: "Tentang kami", href: "/tentang-kami" },
  { label: "Portofolio", href: "/portofolio" },
  { label: "Blog", href: "/blog" },
];

export const footerLinks: NavLink[] = [
  { label: "Layanan", href: "/layanan" },
  { label: "Proses kerja", href: "/#proses" },
  { label: "Harga", href: "/#harga" },
  { label: "Portofolio", href: "/portofolio" },
  { label: "Blog", href: "/blog" },
  { label: "Tentang kami", href: "/tentang-kami" },
  { label: "FAQ", href: "/#faq" },
  { label: "Kebijakan privasi", href: "/kebijakan-privasi" },
];

export const services: Service[] = [
  {
    title: "Website WordPress",
    summary:
      "Website WordPress yang cepat, rapi, dan bisa Anda kelola sendiri. Cocok jika Anda ingin segera online dan memperbarui konten tanpa bantuan developer.",
    deliverables: ["Tema siap pakai atau custom", "Halaman mudah diedit", "Pengaturan plugin"],
    featured: true,
    href: "/layanan/website-wordpress",
  },
  {
    title: "Website custom",
    summary:
      "Website dan aplikasi web yang dibangun khusus dengan framework modern seperti Next.js dan React, untuk kebutuhan performa, integrasi, atau fitur unik.",
    deliverables: ["Frontend custom", "Integrasi CMS atau API", "Target performa"],
    featured: true,
    href: "/layanan/website-custom",
  },
  {
    title: "Strategi dan perencanaan",
    summary:
      "Kami mulai dari tujuan bisnis dan pelanggan Anda, lalu menyepakati struktur halaman, ruang lingkup, dan jadwal sebelum desain dimulai.",
    deliverables: ["Sesi konsultasi", "Sitemap dan rencana konten", "Ruang lingkup tetap"],
  },
  {
    title: "Desain UI dan UX",
    summary:
      "Tampilan yang dirancang sesuai cara pengunjung membaca, membandingkan, dan memutuskan. Anda meninjau desain halaman sebelum kami membangunnya.",
    deliverables: ["Desain desktop dan mobile", "Design system", "Putaran revisi"],
  },
  {
    title: "Peluncuran dan perawatan",
    summary:
      "Hosting, domain, analytics, dan dasar SEO kami siapkan, lalu tersedia layanan update, backup, dan keamanan setelah website online.",
    deliverables: ["Deployment dan DNS", "SEO dan analytics", "Paket maintenance"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Discovery",
    summary: "Kami mempelajari bisnis, target pengunjung, dan tujuan Anda dalam konsultasi gratis.",
    outcome: "Project brief",
  },
  {
    title: "Perencanaan",
    summary: "Kami memetakan halaman, konten, dan fitur, lalu menyepakati ruang lingkup, biaya, dan jadwal.",
    outcome: "Sitemap dan proposal",
  },
  {
    title: "Desain",
    summary: "Anda meninjau desain halaman untuk desktop dan mobile, lalu meminta revisi.",
    outcome: "Desain yang disetujui",
  },
  {
    title: "Development",
    summary: "Kami membangun website dengan kode yang rapi, loading cepat, dan konten yang mudah diedit.",
    outcome: "Website staging",
  },
  {
    title: "Testing",
    summary: "Kami mengecek browser, perangkat, formulir, kecepatan, aksesibilitas, dan dasar SEO.",
    outcome: "Checklist peluncuran",
  },
  {
    title: "Deployment",
    summary: "Website online di domain Anda, akses diserahkan, dan kami tetap mendampingi setelah peluncuran.",
    outcome: "Website live",
  },
];

// TODO: ganti dengan harga asli Anda.
export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    approach: "Website WordPress",
    audience: "Untuk personal, UMKM, dan startup yang butuh website solid dengan cepat.",
    price: "Mulai Rp X.XXX.XXX",
    priceNote: "Biaya proyek sekali bayar",
    features: [
      "Website WordPress dengan halaman yang bisa diedit",
      "Responsif di semua ukuran layar",
      "Hingga 5 halaman utama",
      "Formulir kontak",
      "Pengaturan SEO dasar",
      "Bantuan deployment dan peluncuran",
    ],
    cta: "Mulai sekarang",
  },
  {
    id: "professional",
    name: "Professional",
    approach: "Website custom",
    audience: "Untuk bisnis yang butuh desain custom serta website yang lebih cepat dan fleksibel.",
    price: "Mulai Rp X.XXX.XXX",
    priceNote: "Biaya proyek sekali bayar",
    features: [
      "Desain UI dan UX custom",
      "Frontend modern",
      "Layout responsif dan aksesibel",
      "Optimasi performa",
      "SEO on-page dan structured data",
      "Dukungan deployment dan peluncuran",
    ],
    cta: "Diskusikan proyek Anda",
    recommended: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    approach: "Solusi custom",
    audience: "Untuk kebutuhan kompleks, integrasi sistem, dan website yang harus siap berkembang.",
    price: null,
    priceNote: "Dihitung setelah konsultasi",
    features: [
      "Arsitektur custom",
      "Fitur lanjutan dan integrasi",
      "Logika bisnis kompleks",
      "Infrastruktur yang scalable",
      "Konsultasi khusus",
      "Perencanaan dan harga custom",
    ],
    cta: "Minta konsultasi",
  },
];

export const principles: Principle[] = [
  {
    title: "Satu tim, dari rencana sampai rilis",
    body: "Tim yang merencanakan website Anda juga mendesain, membangun, dan merilisnya. Tidak ada yang hilang saat serah terima.",
    icon: "spark",
    action: { label: "Lihat prosesnya", href: "/#proses" },
  },
  {
    title: "Ruang lingkup dan harga jelas",
    body: "Anda menerima ruang lingkup tertulis dan penawaran harga tetap sebelum pekerjaan dimulai. Tanpa tagihan kejutan.",
    icon: "clipboard",
    action: { label: "Lihat harga", href: "/#harga" },
  },
  {
    title: "Mudah ditemukan di Google",
    body: "Kode semantik, halaman cepat, dan dasar SEO sudah termasuk di setiap proyek, bukan tambahan.",
    icon: "search",
    action: { label: "Baca FAQ", href: "/#faq" },
  },
  {
    title: "Sepenuhnya milik Anda",
    body: "Kode, domain, dan konten milik Anda. Kami ajarkan cara mengelolanya, dan tetap siap membantu jika dibutuhkan.",
    icon: "key",
    action: { label: "Mulai proyek", href: "/#kontak" },
  },
];

export const tools: Tool[] = [
  { name: "WordPress", mark: "WP" },
  { name: "Next.js", mark: "N" },
  { name: "React", mark: "R" },
  { name: "TypeScript", mark: "TS" },
  { name: "Tailwind CSS", mark: "TW" },
  { name: "WooCommerce", mark: "Woo" },
  { name: "Headless CMS", mark: "CMS" },
  { name: "Vercel", mark: "▲" },
];

export const faqs: Faq[] = [
  {
    question: "Berapa biaya pembuatan website?",
    answer:
      "Tergantung jumlah halaman, kompleksitas desain, dan fitur yang dibutuhkan. Paket Starter WordPress punya harga awal tetap, website custom dihitung dari dokumen ruang lingkup, dan proyek enterprise dihitung setelah konsultasi. Anda selalu menerima penawaran tertulis sebelum pekerjaan dimulai.",
  },
  {
    question: "Berapa lama proses pembuatannya?",
    answer:
      "Website Starter biasanya selesai dalam 2–4 minggu. Website custom umumnya 4–10 minggu, tergantung ruang lingkup. Jadwal disepakati di tahap perencanaan dan progres kami bagikan di setiap tahap.",
  },
  {
    question: "Berapa kali revisi yang termasuk?",
    answer:
      "Setiap paket sudah termasuk putaran revisi di tahap desain, sehingga tampilan bisa disempurnakan sebelum development dimulai. Jumlah pastinya tercantum di proposal. Perubahan tambahan akan diinfokan biayanya di awal.",
  },
  {
    question: "Apakah sudah termasuk hosting dan domain?",
    answer:
      "Kami bisa menyiapkan hosting dan menghubungkan domain di penyedia yang sesuai dengan website Anda, atau melakukan deployment ke akun yang sudah Anda miliki. Hosting dan domain tetap terdaftar atas nama Anda.",
  },
  {
    question: "Apakah ada layanan maintenance setelah website online?",
    answer:
      "Ada. Paket maintenance opsional mencakup update, backup, pemantauan keamanan, dan perubahan konten kecil. Anda juga bisa mengelola website sendiri, karena kami memberikan panduan saat serah terima.",
  },
  {
    question: "Apa yang dilakukan saat deployment?",
    answer:
      "Kami menjalankan checklist akhir, memindahkan website ke server produksi, menghubungkan domain dan SSL, mengirim sitemap ke mesin pencari, serta memastikan formulir dan analytics berjalan.",
  },
];
