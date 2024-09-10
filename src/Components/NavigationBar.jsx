import { Navbar, Dropdown, DarkThemeToggle, DropdownDivider, DropdownItem } from "flowbite-react";

function NavigationBar() {
  return (
    <header>
      <Navbar
        fluid
        className="border-gray-200 bg-gray-200 px-6 py-2.5 dark:bg-gray-800 lg:px-10 sm:px-1"
      >
        <Navbar.Brand href="/">
          <img
            src="https://i.imgur.com/gESvrE4.png"
            className="mr-3 h-9 sm:h-12"
            alt="Pusat Laptop Nusantara Logo"
          />
        </Navbar.Brand>
        <div className="flex items-center gap-1 lg:order-2">
          <DarkThemeToggle />
          <Dropdown dismissOnClick={false} label="Find Us">
            <Dropdown.Item
              as="a"
              href="https://www.tokopedia.com/puslapnusgrt"
              target="_blank"
            >
              Tokopedia
            </Dropdown.Item>
            <Dropdown.Item
              as="a"
              href="https://shopee.co.id/pusatlaptopnusantaragarut"
              target="_blank"
            >
              Shopee
            </Dropdown.Item>
            <DropdownDivider />
            <Dropdown.Item
              as="a"
              href="https://maps.app.goo.gl/qSSpDhuFQMXFuZiq7"
              target="_blank"
            >
              Google Maps
            </Dropdown.Item>
          </Dropdown>
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
          <Navbar.Link href="/catalogue" className="flex h-full items-center">
            Katalog
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
