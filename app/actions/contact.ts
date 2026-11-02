"use server";

import { deliverInquiry, validateInquiry, type ContactFormState, type Inquiry } from "@/lib/contact";
import { siteConfig } from "@/lib/site";

export async function submitInquiry(_prev: ContactFormState, formData: FormData): Promise<ContactFormState> {
  // Honeypot: real visitors never see or fill this field.
  if (formData.get("website")) return { status: "success", message: "Terima kasih, kami akan segera menghubungi Anda." };

  const field = (key: string) => String(formData.get(key) ?? "").trim();
  const inquiry: Inquiry = {
    name: field("name").slice(0, 200),
    email: field("email").slice(0, 320),
    company: field("company").slice(0, 200),
    package: field("package"),
    message: field("message"),
  };

  const errors = validateInquiry(inquiry);
  if (errors) {
    return { status: "error", message: "Periksa kolom yang ditandai, lalu coba lagi.", errors, values: inquiry };
  }

  const delivered = await deliverInquiry(inquiry);
  if (!delivered) {
    return {
      status: "error",
      message: `Pesan gagal terkirim. Silakan email kami di ${siteConfig.email}.`,
      values: inquiry,
    };
  }

  return {
    status: "success",
    message: "Terima kasih, pesan Anda sudah terkirim. Kami akan segera menghubungi Anda.",
  };
}
