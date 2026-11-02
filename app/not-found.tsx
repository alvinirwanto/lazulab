import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="text-center">
        <p className="text-sm font-medium text-muted">Error 404</p>
        <h1 className="mt-4 text-heading font-semibold">Halaman tidak ditemukan</h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          Halaman yang Anda cari mungkin sudah dipindahkan atau alamatnya salah ketik.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/">Kembali ke beranda</ButtonLink>
          <ButtonLink href="/blog" variant="soft">
            Baca blog
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
