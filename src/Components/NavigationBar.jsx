import { Navbar, Dropdown, DarkThemeToggle, Button } from "flowbite-react";

function NavigationBar() {
  return (
    <header>
      <Navbar
        fluid
        className="border-gray-200 bg-gray-200 px-6 py-2.5 dark:bg-gray-800 lg:px-10"
      >
        <Navbar.Brand href="/">
          <img
            src="https://i.imgur.com/gESvrE4.png"
            className="mr-3 h-9 sm:h-12"
            alt="Pusat Laptop Nusantara Logo"
          />
        </Navbar.Brand>
        <div className="flex items-center gap-3 lg:order-2">
          <DarkThemeToggle />
          <Button
            color="info"
            href="https://maps.app.goo.gl/NnkTvKUpga2HyvyNA"
            target="blank"
          >
            Lokasi
          </Button>
          <Navbar.Toggle theme={{ icon: "h-5 w-5 shrink-0" }} />
        </div>
        <Navbar.Collapse
          theme={{
            list: "mt-4 flex flex-col lg:mt-0 lg:flex-row lg:space-x-8 lg:text-base lg:font-medium",
          }}
          className="lg:order-1"
        >
          <Navbar.Link
            active
            href="/"
            className="flex h-full items-center border-b bg-transparent dark:border-gray-700 md:border-0"
          >
            Home
          </Navbar.Link>
          <Navbar.Link href="#" className="flex h-full items-center">
            Katalog
          </Navbar.Link>
          <Navbar.Link className="-mx-4 [&_span]:items-center">
            <Dropdown
              color="none"
              label="Marketplace"
              theme={{
                floating: {
                  target: "w-fit [&>span]:text-base [&_span]:py-0",
                },
              }}
            >
              <Dropdown.Item theme={{ base: "" }}>
                <a
                  href="https://www.tokopedia.com/puslapnusgrt"
                  target="blank"
                  className="hover:text-primary-600 flex w-full items-center px-4 py-2 text-sm text-gray-500 dark:text-gray-400 dark:hover:text-white"
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
                  Tokopedia
                </a>
              </Dropdown.Item>
              <Dropdown.Item theme={{ base: "" }}>
                <a
                  href="https://shopee.co.id/pusatlaptopnusantaragarut"
                  target="blank"
                  className="hover:text-primary-600 flex w-full items-center px-4 py-2 text-sm text-gray-500 dark:text-gray-400 dark:hover:text-white"
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
                  Shopee
                </a>
              </Dropdown.Item>
            </Dropdown>
          </Navbar.Link>
          <Navbar.Link href="/contact" className="flex h-full items-center">
            Kontak
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default NavigationBar;
