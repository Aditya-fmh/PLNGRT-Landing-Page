import { Card, Button, Modal } from "flowbite-react";
import { useState } from "react";

import hp840G3Image from "../assets/840G2.jpg";

function KatalogHP() {
  const [openModals, setOpenModals] = useState({
    hp840G3: false,
    hp640G4: false,
    hp640G5: false,
    hp6470: false,
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
        Katalog Laptop HP
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        <Card
          className="max-w-sm"
          imgAlt="HP EliteBook 840 G3"
          imgSrc={hp840G3Image}
        >
          <a href="#">
            <h5 className="text-center text-xl tracking-tight text-gray-900 dark:text-white">
              HP EliteBook 840 G3
            </h5>
          </a>
          <h5 className="text-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Rp3.600.000
          </h5>
          <Button onClick={() => toggleModal("hp840G3")}>Detail Barang</Button>
          <Modal
            show={openModals.hp840G3}
            onClose={() => toggleModal("hp840G3")}
          >
            <Modal.Header>HP EliteBook 840 G3</Modal.Header>
            <Modal.Body>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Spesifikasi Laptop: <br />
                  Processor: Intel Core i5-6300U <br />
                  RAM: 8 GB DDR4 <br />
                  Storage: 256 GB SSD <br />
                  Display: 14"
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
              <Button as="a" href="https://wa.link/2n7og6" target="_blank">
                Beli Sekarang
              </Button>
              <Button color="gray" onClick={() => toggleModal("hp840G3")}>
                Kembali
              </Button>
            </Modal.Footer>
          </Modal>
        </Card>
      </div>
    </>
  );
}

export default KatalogHP;