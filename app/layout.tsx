import "./globals.css";
import Link from "next/link";
import Image from "next/image";
// import font awesome
import "@fortawesome/fontawesome-svg-core/styles.css"
// configurasi font awesome
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
// import font awesome (icon)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";



export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="retro">
      <body>
        {/* buat header */}
        <header>
          {/* <Image
            src="/logo.png"
            width={250}
            height={250}
            alt="Logo"
          /> */}
          {/* <img src={"/logo.png"} alt="logo UTI" /> */}
          <Image src={"/logo.png"} alt="Logo UTI" width={320} height={60}priority></Image>
        </header>

        {/* buat menu */}
        <nav className="mt-2.5 text-center">
          <Link
            href="/"
            className="rounded-full bg-hitam-tua hover:bg-hitam-muda px-10 py-5 text-putih mr-10"
          >
            Data Mahasiswa
          </Link>
          <Link
            href="/log"
            className="rounded-full bg-cyan-500 hover:bg-hitam-sedang px-10 py-5 text-putih ml-10"
          >
            Log Data Mahasiswa
          </Link>
        </nav>

        {/* buat konten menu */}
        <section className="m-20px">
        {children}
        </section>

        {/* buat footer */}
        <footer className="text-merah bg-kuning mt-10">
          Copyright &copy; 2024 - Claviaa
        </footer>
      </body>
    </html>
  );
}