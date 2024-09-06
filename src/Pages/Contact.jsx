import NavigationBar from "../Components/NavigationBar.jsx";
import Footer from "../Components/Footer.jsx";
import { Button, Label, TextInput, Textarea } from "flowbite-react";

function Contact() {
  return (
    <>
      <NavigationBar />
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm px-4 text-center lg:mb-16 lg:px-6">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Kontak
            </h2>
            <p className="text-gray-600 dark:text-gray-400 sm:text-xl">
              Punya pertanyaan? Atau mau konsultasi dulu sebelum membeli? Jangan
              sungkan untuk menghubungi kami.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
            <div className="col-span-2 mb-8 lg:mb-0">
              <form
                action="#"
                className="mx-auto grid max-w-screen-md grid-cols-1 gap-8 sm:grid-cols-2"
              >
                <div className="grid grid-cols-1 gap-2">
                  <Label htmlFor="first-name" className="dark:text-white">
                    Nama Depan
                  </Label>
                  <TextInput id="first-name" placeholder="Nama" required />
                </div>
                <div className="grid grid-cols-1 gap-2">
                  <Label htmlFor="last-name" className="dark:text-white">
                    Nama Belakang
                  </Label>
                  <TextInput id="last-name" placeholder="Anda" />
                </div>
                <div className="grid grid-cols-1 gap-2">
                  <Label htmlFor="topic" className="dark:text-white">
                    Topik Pesan
                  </Label>
                  <TextInput
                    id="topic"
                    placeholder="Konsultasi, Tanya Harga, Dll"
                    required
                    type="topic"
                  />
                </div>
                <div className="grid grid-cols-1 gap-2">
                  <Label htmlFor="phone-number" className="dark:text-white">
                    Nomor Handphone
                  </Label>
                  <TextInput
                    id="phone-number"
                    placeholder="08234567890"
                    required
                    type="number"
                  />
                </div>
                <div className="grid grid-cols-1 gap-2 sm:col-span-2">
                  <Label htmlFor="message" className="dark:text-white">
                    Tulis Pesan
                  </Label>
                  <Textarea
                    id="message"
                    placeholder=""
                    rows={6}
                    className="text-sm"
                    required
                  />
                </div>
                <Button type="submit">Kirim Pesan</Button>
              </form>
            </div>
            <div className="col-span-1 grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 lg:h-16 lg:w-16">
                  <svg
                    className="h-5 w-5 text-gray-600 dark:text-gray-500 lg:h-8 lg:w-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  Alamat Toko:
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Jl. Guntur, Komplek Ruko IBC (Intan Bisnis Center), Blok D-19,
                  Pakuwon, Kec. Garut Kota, Kabupaten Garut, Jawa Barat 44117
                </p>
              </div>
              <div>
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 lg:h-16 lg:w-16">
                  <svg
                    className="h-5 w-5 text-gray-600 dark:text-gray-500 lg:h-8 lg:w-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <p className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  Kontak WhatsApp:
                </p>
                <p className="mb-3 text-gray-500 dark:text-gray-400">
                  Silahkan untuk menghubungi kami untuk konsultasi dan
                  tanya-tanya seputar laptop
                </p>
                <p className="text-primary-600 dark:text-primary-500 font-semibold">
                  <a
                    href=""
                    target="blank"
                    className="text-2xl text-blue-600 hover:underline"
                  >
                    0821-1115-5411
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
