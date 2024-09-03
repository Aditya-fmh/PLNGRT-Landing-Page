
import { Button, Navbar, DarkThemeToggle, Flowbite, Carousel, Footer, Dropdown } from "flowbite-react";

function App() {
  return (
    <Flowbite>
      <header>
      <Navbar fluid className="bg-gray-200 dark:bg-gray-800 border-gray-200 px-6 lg:px-72 py-2.5">
        <Navbar.Brand href="/">
          <img
            src="https://i.imgur.com/gESvrE4.png"
            className="mr-3 h-9 sm:h-12"
            alt="Pusat Laptop Nusantara Logo"
          />
        </Navbar.Brand>
        <div className="flex items-center gap-3 lg:order-2">
          <DarkThemeToggle />
          <Button color="info" href="#">
            Lokasi
          </Button>
          <Navbar.Toggle theme={{icon: "h-5 w-5 shrink-0"}} />
        </div>
        <Navbar.Collapse
          theme={{
            list: "mt-4 flex flex-col lg:mt-0 lg:flex-row lg:space-x-8 lg:text-base lg:font-medium",
          }}
          className="lg:order-1"
        >
          <Navbar.Link
            active
            href="#"
            className="flex h-full items-center bg-transparent border-b md:border-0 dark:border-gray-700"
          >
            Home
          </Navbar.Link>
          <Navbar.Link href="#" className="flex h-full items-center">
            Features
          </Navbar.Link>
          <Navbar.Link href="#" className="flex h-full items-center">
            Marketplace
          </Navbar.Link>
          <Navbar.Link className="-mx-4 [&_span]:items-center">
            <Dropdown
              color="none"
              label="Company"
              theme={{
                floating: {
                  target: "w-fit [&>span]:text-base [&_span]:py-0",
                },
              }}
            >
              <Dropdown.Item theme={{ base: "" }}>
                <a
                  href="#"
                  className="text-sm flex w-full items-center px-4 py-2 text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white"
                >
                  <svg
                    aria-hidden
                    className="mr-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Audience
                </a>
              </Dropdown.Item>
              <Dropdown.Item theme={{ base: "" }}>
                <a
                  href="#"
                  className="text-sm flex w-full items-center px-4 py-2 text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white"
                >
                  <svg
                    aria-hidden
                    className="mr-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                  </svg>
                  Marketing Automation
                </a>
              </Dropdown.Item>
              <Dropdown.Item theme={{ base: "" }}>
                <Dropdown
                  color="none"
                  label={
                    <div className="text-sm flex items-center text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white">
                      <svg
                        aria-hidden
                        className="mr-2 h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Creative Tools
                    </div>
                  }
                  theme={{
                    floating: {
                      target: "w-fit [&_span]:text-base",
                    },
                  }}
                >
                  <Dropdown.Item theme={{ base: "" }}>
                    <a
                      href="#"
                      className="text-sm flex w-full items-center px-4 py-2 hover:text-primary-600 dark:hover:text-primary-500"
                    >
                      Marketing CRM
                    </a>
                  </Dropdown.Item>
                  <Dropdown.Item theme={{ base: "" }}>
                    <a
                      href="#"
                      className="text-sm flex w-full items-center px-4 py-2 hover:text-primary-600 dark:hover:text-primary-500"
                    >
                      Sign up forms
                    </a>
                  </Dropdown.Item>
                  <Dropdown.Item theme={{ base: "" }}>
                    <a
                      href="#"
                      className="text-sm flex w-full items-center px-4 py-2 hover:text-primary-600 dark:hover:text-primary-500"
                    >
                      Segmentation
                    </a>
                  </Dropdown.Item>
                  <Dropdown.Item theme={{ base: "" }}>
                    <a
                      href="#"
                      className="text-sm flex w-full items-center px-4 py-2 hover:text-primary-600 dark:hover:text-primary-500"
                    >
                      Dynamic content
                    </a>
                  </Dropdown.Item>
                  <Dropdown.Item theme={{ base: "" }}>
                    <a
                      href="#"
                      className="text-sm flex w-full items-center px-4 py-2 hover:text-primary-600 dark:hover:text-primary-500"
                    >
                      A/B Testing
                    </a>
                  </Dropdown.Item>
                  <Dropdown.Item theme={{ base: "" }}>
                    <a
                      href="#"
                      className="text-sm flex w-full items-center px-4 py-2 hover:text-primary-600 dark:hover:text-primary-500"
                    >
                      Behavioural testing
                    </a>
                  </Dropdown.Item>
                  <Dropdown.Item theme={{ base: "" }}>
                    <a
                      href="#"
                      className="text-sm flex w-full items-center px-4 py-2 hover:text-primary-600 dark:hover:text-primary-500"
                    >
                      Integrations
                    </a>
                  </Dropdown.Item>
                </Dropdown>
              </Dropdown.Item>
              <Dropdown.Item theme={{ base: "" }}>
                <a
                  href="#"
                  className="text-sm flex w-full items-center px-4 py-2 text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white"
                >
                  <svg
                    aria-hidden
                    className="mr-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Insights &amp; Analytics
                </a>
              </Dropdown.Item>
              <Dropdown.Item theme={{ base: "" }}>
                <a
                  href="#"
                  className="text-sm flex w-full items-center px-4 py-2 text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white"
                >
                  <svg
                    aria-hidden
                    className="mr-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg>
                  Demographics
                </a>
              </Dropdown.Item>
              <Dropdown.Item theme={{ base: "" }}>
                <a
                  href="#"
                  className="text-sm flex w-full items-center px-4 py-2 text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white"
                >
                  <svg
                    aria-hidden
                    className="mr-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Contact Profiles
                </a>
              </Dropdown.Item>
            </Dropdown>
          </Navbar.Link>
          <Navbar.Link href="#" className="flex h-full items-center">
            Team
          </Navbar.Link>
          <Navbar.Link href="#" className="flex h-full items-center">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>

    <section className="bg-white antialiased dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 lg:py-24">
        <div className="flex flex-col gap-8 lg:items-center lg:gap-16 lg:flex-row">
          <div className="lg:max-w-xl xl:shrink-0">
            <div>
              <h2 className="text-3xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Cari Laptop Second? Ingat Pusat Laptop Nusantara Garut!
              </h2>
              <p className="mt-5 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl md:max-w-3xl">
              Telah melayani ratusan konsumen sejak 2021, kami menyediakan berbagai macam merk dan tipe laptop untuk berbagai kebutuhan anda.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg">Buka Katalog</Button>
              <Button size="lg" color="gray" className="[&>span]:items-center" outline>
                <svg
                  aria-hidden="true"
                  className="-ml-1 mr-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
                Hubungi Kami
              </Button>
            </div>
          </div>
          <Carousel className="h-64 md:h-96">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/ngo-carousel/image-1.jpg"
                className="rounded-lg"
                alt=""
              />
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/ngo-carousel/image-2.jpg"
                className="rounded-lg"
                alt=""
              />
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/ngo-carousel/image-3.jpg"
                className="rounded-lg"
                alt=""
              />
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/ngo-carousel/image-4.jpg"
                className="rounded-lg"
                alt=""
              />
          </Carousel>
        </div>
      </div>
    </section>

    <section className="bg-gray-200 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center sm:py-16 lg:px-6">
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        Kenapa harus Pusat
        Laptop Nusantara Garut?
        </h2>
        <p className="text-gray-500 dark:text-gray-400 sm:text-xl">
        Karena di sini, kami menjual laptop second
                    grade A yang pastinya bergaransi dan telah melewati proses QC sebelum di display sehingga barang
                    yang anda terima terjamin kualitasnya.
        </p>
        <div className="mt-8 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:mt-12 lg:grid-cols-3">
          <div>
            <svg
              className="mx-auto mb-4 h-12 w-12 text-primary-600 dark:text-primary-500"
              fill="#0891B2"
              viewBox="0 0 576 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zm64 320l-64 0 0-64c35.3 0 64 28.7 64 64zM64 192l0-64 64 0c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64l0 64-64 0zm64-192c-35.3 0-64-28.7-64-64l64 0 0 64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
                clipRule="evenodd"
              />
            </svg>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
            Harga Murah
            </h3>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
            Kami menjual laptop mulai dari harga 2 jutaan. Cocok
            untuk kebutuhan kantor/sekolah.
            </p>
          </div>
          <div>
            <svg
              className="mx-auto mb-4 h-12 w-12 text-primary-600 dark:text-primary-500"
              fill="#0891B2"
              viewBox="0 0 384 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M374.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-320 320c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l320-320zM128 128A64 64 0 1 0 0 128a64 64 0 1 0 128 0zM384 384a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"
                clipRule="evenodd"
              />
            </svg>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
            Diskon Menarik
            </h3>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
            Banyak diskon menarik setiap bulannya, seperti potongan harga, free aksesoris, dan diskon-diskon lainnya yang pastinya sayang banget kalau ketinggalan
            </p>
          </div>
          <div>
            <svg
              className="mx-auto mb-4 h-12 w-12 text-primary-600 dark:text-primary-500"
              fill="#0891B2"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"
                clipRule="evenodd"
              />
            </svg>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
            Garansi Terjamin
            </h3>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
            Meskipun second, kita tetap beri garansi untuk menjamin
                        kenyamanan anda. Total garansi selama 3 bulan mencakup 1 bulan garansi service dan 2 bulan
                        garansi software.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Testimonials
          </h2>
          <p className="text-gray-500 dark:text-gray-400 sm:text-xl">
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind
          </p>
        </div>
        <div className="h-80 py-4 2xl:h-96">
          <Carousel
            leftControl={
              <span className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="hidden">Previous</span>
              </span>
            }
            rightControl={
              <span className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="hidden">Next</span>
              </span>
            }
            theme={{
              root: {
                base: "relative h-72 md:h-64 md:mx-auto md:w-2/3",
                leftControl:
                  "absolute bottom-0 right-1/2 flex items-center justify-center px-4 focus:outline-none",
                rightControl:
                  "absolute bottom-0 left-1/2 flex items-center justify-center px-4 focus:outline-none",
              },
              indicators: {
                "base": "d-none"
              },
              scrollContainer: {
                base: "flex h-72 md:h-64 snap-mandatory overflow-y-visible overflow-x-scroll scroll-smooth rounded-lg",
              },
            }}
          >
            <div>
              <blockquote>
                <p className="text-lg font-medium text-gray-900 dark:text-white sm:text-2xl">
                  "Flowbite is just awesome. It contains tons of predesigned
                  components and pages starting from login screen to complex
                  dashboard. Perfect choice for your next SaaS application."
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-center space-x-1 md:space-x-3">
                <img
                  alt=""
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                  className="h-6 w-6 rounded-full"
                />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div className="pr-3 font-medium text-gray-900 dark:text-white">
                    Bonnie Green
                  </div>
                  <div className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                    Web developer at Google
                  </div>
                </div>
              </figcaption>
            </div>
            <div>
              <blockquote>
                <p className="text-lg font-medium text-gray-900 dark:text-white sm:text-2xl">
                  "As someone who mainly designs in the browser, I've been a
                  casual user of Figma, but as soon as I saw and started playing
                  with Flowbite my mind was blown and became so productive."
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-center space-x-1 md:space-x-3">
                <img
                  alt=""
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
                  className="h-6 w-6 rounded-full"
                />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div className="pr-3 font-medium text-gray-900 dark:text-white">
                    Helene Engels
                  </div>
                  <div className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                    Creative designer at Adobe
                  </div>
                </div>
              </figcaption>
            </div>
            <div>
              <blockquote>
                <p className="text-lg font-medium text-gray-900 dark:text-white sm:text-2xl">
                  "As someone who mainly designs in the browser, I've been a
                  casual user of Figma, but as soon as I saw and started playing
                  with Flowbite my mind was blown and became so productive."
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-center space-x-1 md:space-x-3">
                <img
                  alt=""
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
                  className="h-6 w-6 rounded-full"
                />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div className="pr-3 font-medium text-gray-900 dark:text-white">
                    Helene Engels
                  </div>
                  <div className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                    Creative designer at Adobe
                  </div>
                </div>
              </figcaption>
            </div>
            <div>
              <blockquote>
                <p className="text-lg font-medium text-gray-900 dark:text-white sm:text-2xl">
                  "Flowbite has code in one place and I'm not joking when I say
                  it took me a matter of minutes to copy the code, customise it
                  and integrate within a Laravel + Vue application."
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-center space-x-3">
                <img
                  alt=""
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png"
                  className="h-6 w-6 rounded-full"
                />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div className="pr-3 font-medium text-gray-900 dark:text-white">
                    Neil Sims
                  </div>
                  <div className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                    CTO at Microsoft
                  </div>
                </div>
              </figcaption>
            </div>
          </Carousel>
        </div>
      </div>
    </section>

    <Footer className="p-4 sm:p-6">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <a href="/" class="flex items-center">
              <img src="https://i.imgur.com/fTDFGfu.png" class="mr-3 h-16" alt="FlowBite Logo" />
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-6 md:grid-cols-3">
            <div>
              <Footer.Title title="Follow Us" className="text-gray-800" />
              <Footer.LinkGroup className="text-base text-gray-600 dark:text-gray-400" col>
                <Footer.Link href="https://www.facebook.com/laptopnusantara.garut/" target="blank">Facebook</Footer.Link>
                <Footer.Link href="https://www.instagram.com/laptopnusantara.garut/" target="blank">Instagram</Footer.Link>
                <Footer.Link href="https://www.tiktok.com/@plngarutd19" target="blank">TikTok</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Marketplace" className="text-gray-800" />
              <Footer.LinkGroup className="text-base text-gray-600 dark:text-gray-400" col>
                <Footer.Link href="https://www.tokopedia.com/puslapnusgrt">Tokopedia</Footer.Link>
                <Footer.Link href="https://shopee.co.id/pusatlaptopnusantaragarut">Shopee</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Kontak" className="text-gray-800" />
              <Footer.LinkGroup className="text-base text-gray-600 dark:text-gray-400" col>
                <Footer.Link href="mailto:laptopnusantara.grt@gmail.com">Email</Footer.Link>
                <Footer.Link href="https://wa.link/dhurui">WhatsApp</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            by="Pusat Laptop Nusantara Garut™. All Rights Reserved."
            href="/"
            year={2021}
          />
        </div>
      </div>
    </Footer>
    </Flowbite>
  )
}

export default App
