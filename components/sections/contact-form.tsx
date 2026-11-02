"use client";

import Link from "next/link";
import { useActionState, type ReactNode } from "react";
import { submitInquiry } from "@/app/actions/contact";
import { icons } from "@/components/ui/icons";
import { packageOptions, type ContactFormState } from "@/lib/contact";

const initialState: ContactFormState = { status: "idle" };

const inputClass =
  "mt-2 block min-h-13 w-full rounded-control border border-transparent bg-white px-4 py-3 placeholder:text-muted/70 transition-colors hover:border-line focus:border-ink focus:outline-none aria-invalid:border-coral";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitInquiry, initialState);

  if (state.status === "success") {
    return (
      <div role="status" className="py-6 text-center">
        <span className="mx-auto grid size-14 place-items-center rounded-full bg-lazuardi text-white">
          <icons.check className="size-6" />
        </span>
        <p className="mt-5 text-title font-medium">Pesan terkirim</p>
        <p className="mt-2 text-muted">{state.message}</p>
      </div>
    );
  }

  const { errors, values } = state;

  return (
    <form action={formAction} noValidate className="grid gap-6 sm:grid-cols-2">
      <Field id="name" label="Nama" error={errors?.name}>
        <input id="name" name="name" autoComplete="name" required defaultValue={values?.name} {...errorProps("name", errors?.name)} className={inputClass} />
      </Field>
      <Field id="email" label="Email" error={errors?.email}>
        <input id="email" name="email" type="email" autoComplete="email" required defaultValue={values?.email} {...errorProps("email", errors?.email)} className={inputClass} />
      </Field>
      <Field id="company" label="Perusahaan" hint="Opsional">
        <input id="company" name="company" autoComplete="organization" defaultValue={values?.company} className={inputClass} />
      </Field>
      <Field id="package" label="Paket" error={errors?.package}>
        {/* Native arrow hugs the edge, so draw our own with matching padding. */}
        <div className="relative">
          <select
            id="package"
            name="package"
            required
            defaultValue={values?.package ?? "unsure"}
            {...errorProps("package", errors?.package)}
            className={`${inputClass} cursor-pointer appearance-none pr-12`}
          >
            {packageOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <svg
            viewBox="0 0 12 12"
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 right-4 mt-1 size-3.5 -translate-y-1/2 text-muted"
          >
            <path d="m2.5 4.5 3.5 3.5 3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </Field>
      <Field id="message" label="Tentang proyek Anda" error={errors?.message} className="sm:col-span-2">
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Apa bisnis Anda, dan apa yang ingin dicapai lewat website?"
          defaultValue={values?.message}
          {...errorProps("message", errors?.message)}
          className={inputClass}
        />
      </Field>

      {/* Honeypot for bots; hidden from people and assistive tech. */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <p className="text-sm text-muted sm:col-span-2">
        Dengan mengirim pesan, Anda menyetujui{" "}
        <Link href="/kebijakan-privasi" className="font-medium text-ink underline underline-offset-4">
          kebijakan privasi
        </Link>{" "}
        kami.
      </p>

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p aria-live="polite" className="text-sm font-medium text-[#c2382c]">
          {state.status === "error" ? state.message : null}
        </p>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex min-h-13 shrink-0 items-center justify-center rounded-control bg-ink px-8 font-medium text-white transition-colors hover:bg-graphite disabled:opacity-60"
        >
          {pending ? "Mengirim…" : "Kirim pesan"}
        </button>
      </div>
    </form>
  );
}

function errorProps(id: string, error?: string) {
  return error ? { "aria-invalid": true, "aria-describedby": `${id}-error` } : {};
}

type FieldProps = {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  className?: string;
  children: ReactNode;
};

function Field({ id, label, hint, error, className = "", children }: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="flex justify-between text-sm font-medium">
        {label}
        {hint ? <span className="font-normal text-muted">{hint}</span> : null}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-[#c2382c]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
