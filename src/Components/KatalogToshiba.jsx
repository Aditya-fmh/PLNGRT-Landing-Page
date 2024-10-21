import { Card, Button, Modal } from "flowbite-react";
import { useState } from "react";

import G83Image from "../assets/G83.jpg";
import R73i7Image from "../assets/R73.jpg";

function KatalogToshiba() {
    const [openModals, setOpenModals] = useState({
        toshibaG83: false,
        toshibaR73i7: false,
    });

    const toggleModal = (modalId) => {
        setOpenModals((prevState) => ({
            ...prevState,
            [modalId]: !prevState[modalId],
        }));
    };

    return (
      <>
        <h2 className="mb-8 mt-32 text-center text-3xl font-bold text-gray-900 dark:text-white">
          Katalog Laptop Toshiba
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <Card
            className="max-w-sm"
            imgAlt="Toshiba Dynabook G83"
            imgSrc={G83Image}
          >
            <a href="#">
              <h5 className="text-center text-xl tracking-tight text-gray-900 dark:text-white">
                Toshiba Dynabook G83
              </h5>
            </a>
            <h5 className="text-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Rp3.700.000
            </h5>
            <Button onClick={() => toggleModal("toshibaG83")}>Detail Barang</Button>
            <Modal show={openModals.toshibaG83} onClose={() => toggleModal("toshibaG83")}>
              <Modal.Header>Toshiba Dynabook G83</Modal.Header>
              <Modal.Body>
                <div className="space-y-6">
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    Spesifikasi Laptop: <br />
                    Processor: Intel Core i5-8250U <br />
                    RAM: 8 GB DDR4 <br />
                    Storage: 256 GB SSD <br />
                    Display: 13,3"
                    <br />
                    OS: Windows 10/11 (Bisa Request)
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    Kelengkapan: <br />
                    - Dus Box <br />
                    - Charger <br />
                    - Mouse <br />
                    - Aplikasi Standard <br />
                    - Garansi Hardware 1 Bulan <br />- Garansi Software 2 Bulan
                  </p>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button as="a" href="https://wa.link/heank2" target="_blank">
                  Beli Sekarang
                </Button>
                <Button color="gray" onClick={() => toggleModal("toshibaG83")}>
                  Kembali
                </Button>
              </Modal.Footer>
            </Modal>
          </Card>
        </div>
      </>
    );
}

export default KatalogToshiba