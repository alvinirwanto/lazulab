import { icons } from "@/components/ui/icons";
import { cssVars } from "@/lib/css-vars";

const stages = ["Rencana", "Desain", "Bangun", "Rilis"];
const pages = [
  { name: "Beranda", status: "Disetujui" },
  { name: "Layanan", status: "Disetujui" },
  { name: "Harga", status: "Ditinjau" },
];
const scores = [
  { label: "Performa", value: 98 },
  { label: "Aksesibilitas", value: 100 },
  { label: "SEO", value: 100 },
];

/**
 * Two tilted app screens: a client project dashboard and a launch report.
 * Purely illustrative, so hidden from assistive tech.
 */
export function HeroMockups() {
  return (
    <div aria-hidden="true" className="absolute inset-0 text-ink select-none">
      <div className="absolute top-14 left-1/2 w-[15rem] -translate-x-[5%] sm:w-[19rem] sm:-translate-x-[15%] xl:top-20 xl:left-[42%] xl:translate-x-0">
        <div className="tilt-enter" style={cssVars({ "--tilt": "7deg", "--delay": "350ms" })}>
          <ReportScreen />
        </div>
      </div>
      <div className="absolute top-8 left-1/2 w-[15rem] -translate-x-[70%] sm:w-[19rem] sm:-translate-x-[85%] xl:top-10 xl:left-[4%] xl:translate-x-0">
        <div className="tilt-enter" style={cssVars({ "--tilt": "-5deg", "--delay": "200ms" })}>
          <ProjectScreen />
        </div>
      </div>
    </div>
  );
}

function ProjectScreen() {
  return (
    <div className="rounded-[2rem] bg-white p-5 shadow-float">
      <p className="text-2xl font-semibold tracking-tight">Proyek Anda</p>
      <div className="mt-4 flex items-center gap-2 rounded-xl bg-mist px-3 py-2.5 text-xs text-muted">
        <icons.search className="size-3.5" />
        bisnisanda.com
      </div>
      <div className="mt-3 flex gap-1.5">
        {stages.map((stage) => (
          <span
            key={stage}
            className={`rounded-lg px-2.5 py-1 text-[0.7rem] ${stage === "Bangun" ? "bg-ink text-white" : "bg-mist text-muted"}`}
          >
            {stage}
          </span>
        ))}
      </div>

      <div className="mt-5 rounded-2xl bg-ink p-4 text-white">
        <p className="text-sm font-medium">Pembuatan website</p>
        <p className="text-[0.7rem] text-white/60">Desain custom, 8 halaman</p>
        <div className="mt-4 flex items-end justify-between">
          <p className="text-2xl font-semibold text-lazuardi-bright">72%</p>
          <p className="text-[0.7rem] text-white/60">Sesuai jadwal</p>
        </div>
        <div className="mt-2 h-1.5 rounded-full bg-white/15">
          <div className="h-full w-[72%] rounded-full bg-lazuardi-bright" />
        </div>
      </div>

      <p className="mt-5 text-[0.65rem] tracking-wide text-muted">Halaman</p>
      <ul className="mt-2 space-y-2">
        {pages.map((page) => (
          <li key={page.name} className="flex items-center justify-between rounded-xl border border-line px-3 py-2.5 text-sm">
            {page.name}
            <span className={`text-[0.7rem] ${page.status === "Disetujui" ? "text-[#5f8f00]" : "text-coral"}`}>
              {page.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ReportScreen() {
  return (
    <div className="overflow-hidden rounded-[2rem] bg-ink shadow-float">
      <div className="p-5 text-white">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">Laporan rilis</p>
          <span className="rounded-md bg-white/10 px-2 py-0.5 text-[0.65rem] text-white/70">Staging</span>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-2">
          {scores.map((score) => (
            <Gauge key={score.label} {...score} />
          ))}
        </div>
        <div className="mt-6 flex gap-1.5 text-[0.7rem]">
          {["Mobile", "Desktop", "Tablet"].map((tab, i) => (
            <span key={tab} className={`rounded-md px-2.5 py-1 ${i === 0 ? "bg-white/15 text-white" : "text-white/50"}`}>
              {tab}
            </span>
          ))}
        </div>
      </div>
      <div className="rounded-t-[1.5rem] bg-white p-5">
        <p className="text-[0.65rem] tracking-wide text-muted">Checklist</p>
        <ul className="mt-2 space-y-2 text-sm">
          {["Formulir dites", "SSL dan domain", "Sitemap terkirim"].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="grid size-5 place-items-center rounded-full bg-lazuardi text-white">
                <icons.check className="size-3" />
              </span>
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-5 grid grid-cols-2 gap-2 text-sm font-medium">
          <span className="rounded-xl bg-coral py-2.5 text-center text-white">Minta revisi</span>
          <span className="rounded-xl bg-lazuardi py-2.5 text-center text-white">Setujui</span>
        </div>
      </div>
    </div>
  );
}

function Gauge({ label, value }: { label: string; value: number }) {
  const circumference = 2 * Math.PI * 22;
  return (
    <div className="text-center">
      <svg viewBox="0 0 52 52" className="mx-auto size-14 -rotate-90">
        <circle cx="26" cy="26" r="22" fill="none" stroke="rgb(255 255 255 / 0.12)" strokeWidth="4" />
        <circle
          cx="26"
          cy="26"
          r="22"
          fill="none"
          stroke="var(--color-lazuardi-bright)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - value / 100)}
        />
      </svg>
      <p className="-mt-9.5 text-sm font-semibold">{value}</p>
      <p className="mt-5 text-[0.6rem] text-white/60">{label}</p>
    </div>
  );
}
