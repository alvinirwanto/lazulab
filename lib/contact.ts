import { pricingTiers } from "@/content/site-content";

export const packageOptions = [
  ...pricingTiers.map((tier) => ({ value: tier.id, label: `${tier.name} — ${tier.approach}` })),
  { value: "unsure", label: "Belum yakin" },
];

export type Inquiry = {
  name: string;
  email: string;
  company: string;
  package: string;
  message: string;
};

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<keyof Inquiry, string>>;
  values?: Partial<Inquiry>;
};

export function validateInquiry(data: Inquiry): ContactFormState["errors"] {
  const errors: ContactFormState["errors"] = {};
  if (!data.name) errors.name = "Masukkan nama Anda.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Masukkan alamat email yang valid.";
  if (!packageOptions.some((option) => option.value === data.package)) errors.package = "Pilih paket.";
  if (data.message.length < 20) errors.message = "Ceritakan sedikit lebih detail, minimal 20 karakter.";
  if (data.message.length > 5000) errors.message = "Pesan maksimal 5.000 karakter.";
  return Object.keys(errors).length ? errors : undefined;
}

/**
 * Sends an inquiry to CONTACT_WEBHOOK_URL as JSON (works with Slack, Zapier,
 * Make, Formspree-style endpoints, or your own API). Swap this for an email
 * provider SDK if you prefer. Returns false when delivery is not possible.
 */
export async function deliverInquiry(inquiry: Inquiry): Promise<boolean> {
  const endpoint = process.env.CONTACT_WEBHOOK_URL;

  if (!endpoint) {
    if (process.env.NODE_ENV === "development") {
      console.info("[contact] CONTACT_WEBHOOK_URL not set. Inquiry:", inquiry);
      return true;
    }
    console.error("[contact] CONTACT_WEBHOOK_URL is not configured; inquiry not delivered.");
    return false;
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...inquiry, submittedAt: new Date().toISOString() }),
    });
    if (!res.ok) console.error(`[contact] Webhook responded ${res.status}`);
    return res.ok;
  } catch (error) {
    console.error("[contact] Webhook request failed:", error);
    return false;
  }
}
