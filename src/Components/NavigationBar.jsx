import { Navbar, Button, DarkThemeToggle } from "flowbite-react";
import { useLocation } from "react-router-dom";

function NavigationBar() {
  const location = useLocation();

  return (
    <header>
      <Navbar
        fluid
        className="border-gray-200 bg-gray-200 px-6 py-2.5 dark:bg-gray-800 sm:px-1 lg:px-10"
      >
        <Navbar.Brand href="/">
          <img
            src="https://i.imgur.com/gESvrE4.png"
            className="mr-3 h-9 sm:h-12"
            alt="Pusat Laptop Nusantara Logo"
          />
        </Navbar.Brand>
        <div className="flex items-center lg:order-2">
          <DarkThemeToggle />
          <Button as="a" href="https://maps.app.goo.gl/Vww45g3yiZ34VZNX9" target="_blank">
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
            active={location.pathname === "/"}
            href="/"
            className="flex h-full items-center border-b bg-transparent dark:border-gray-700 md:border-0"
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            active={location.pathname === "/catalogue"}
            href="/catalogue"
            className="flex h-full items-center"
          >
            Katalog
          </Navbar.Link>
          <Navbar.Link
            active={location.pathname === "/contact"}
            href="/contact"
            className="flex h-full items-center"
          >
            Kontak
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default NavigationBar;
