import { Card, Button, Modal } from "flowbite-react";
import { useState } from "react";

function KatalogToshiba() {
    const [openModals, setOpenModals] = useState({
        toshibaR73i5: false,
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
            imgAlt="Toshiba Dynabook R73 i5"
            imgSrc="./src/assets/R73 i5.jpg"
          >
            <a href="#">
              <h5 className="text-center text-xl tracking-tight text-gray-900 dark:text-white">
                Toshiba Dynabook R73 i5
              </h5>
            </a>
            <h5 className="text-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Rp3.300.000
            </h5>
            <Button onClick={() => toggleModal("toshibaR73i5")}>Detail Barang</Button>
            <Modal show={openModals.toshibaR73i5} onClose={() => toggleModal("toshibaR73i5")}>
              <Modal.Header>Toshiba Dynabook R73 i5</Modal.Header>
              <Modal.Body>
                <div className="space-y-6">
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    Spesifikasi Laptop: <br />
                    Processor: Intel Core i5-6300U <br />
                    RAM: 4 GB DDR4 <br />
                    Storage: 128 GB SSD <br />
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
                <Button as="a" href="https://wa.link/1ayu03" target="_blank">
                  Beli Sekarang
                </Button>
                <Button color="gray" onClick={() => toggleModal("toshibaR73i5")}>
                  Kembali
                </Button>
              </Modal.Footer>
            </Modal>
          </Card>

          <Card
            className="max-w-sm"
            imgAlt="Toshiba Dynabook R73 i7"
            imgSrc="./src/assets/R73 i5.jpg"
          >
            <a href="#">
              <h5 className="text-center text-xl tracking-tight text-gray-900 dark:text-white">
                Toshiba Dynabook R73 i7
              </h5>
            </a>
            <h5 className="text-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Rp3.800.000
            </h5>
            <Button onClick={() => toggleModal("toshibaR73i7")}>Detail Barang</Button>
            <Modal show={openModals.toshibaR73i7} onClose={() => toggleModal("toshibaR73i7")}>
              <Modal.Header>Toshiba Dynabook R73 i7</Modal.Header>
              <Modal.Body>
                <div className="space-y-6">
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    Spesifikasi Laptop: <br />
                    Processor: Intel Core i7-6500U <br />
                    RAM: 4 GB DDR4 <br />
                    Storage: 120 GB SSD <br />
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
                <Button as="a" href="https://wa.link/twp2fb" target="_blank">
                  Beli Sekarang
                </Button>
                <Button color="gray" onClick={() => toggleModal("toshibaR73i7")}>
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