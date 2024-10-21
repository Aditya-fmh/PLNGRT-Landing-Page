import { Card, Button, Modal } from "flowbite-react";
import { useState } from "react";

import hp840G3Image from "../assets/840G3.jpg";
import hp640G2Image from "../assets/640G2.jpg"
import hp640G5Image from "../assets/640G5.jpg"

function KatalogHP() {
  const [openModals, setOpenModals] = useState({
    hp840G3: false,
    hp640G2: false,
    hp640G5: false,
    hp640G5v2: false,
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
              <Button as="a" href="https://wa.link/bi04vb" target="_blank">
                Beli Sekarang
              </Button>
              <Button color="gray" onClick={() => toggleModal("hp840G3")}>
                Kembali
              </Button>
            </Modal.Footer>
          </Modal>
        </Card>

        <Card
          className="max-w-sm"
          imgAlt="HP ProBook 640 G2"
          imgSrc={hp640G2Image}
        >
          <a href="#">
            <h5 className="text-center text-xl tracking-tight text-gray-900 dark:text-white">
              HP ProBook 640 G2
            </h5>
          </a>
          <h5 className="text-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Rp3.500.000
          </h5>
          <Button onClick={() => toggleModal("hp640G2")}>Detail Barang</Button>
          <Modal
            show={openModals.hp640G2}
            onClose={() => toggleModal("hp640G2")}
          >
            <Modal.Header>HP ProBook 640 G2</Modal.Header>
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
              <Button as="a" href="https://wa.link/vnu1cw" target="_blank">
                Beli Sekarang
              </Button>
              <Button color="gray" onClick={() => toggleModal("hp640G2")}>
                Kembali
              </Button>
            </Modal.Footer>
          </Modal>
        </Card>

        <Card
          className="max-w-sm"
          imgAlt="HP ProBook 640 G5"
          imgSrc={hp640G5Image}
        >
          <a href="#">
            <h5 className="text-center text-xl tracking-tight text-gray-900 dark:text-white">
              HP ProBook 640 G5
            </h5>
          </a>
          <h5 className="text-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Rp4.000.000
          </h5>
          <Button onClick={() => toggleModal("hp640G5")}>Detail Barang</Button>
          <Modal
            show={openModals.hp640G5}
            onClose={() => toggleModal("hp640G5")}
          >
            <Modal.Header>HP ProBook 640 G5</Modal.Header>
            <Modal.Body>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Spesifikasi Laptop: <br />
                  Processor: Intel Core i5-8350U <br />
                  RAM: 8 GB DDR4 <br />
                  Storage: 256 GB SSD <br />
                  Display: 14" (Full HD)
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
              <Button as="a" href="https://wa.link/3lzqok" target="_blank">
                Beli Sekarang
              </Button>
              <Button color="gray" onClick={() => toggleModal("hp640G5")}>
                Kembali
              </Button>
            </Modal.Footer>
          </Modal>
        </Card>

        <Card
          className="max-w-sm"
          imgAlt="HP ProBook 640 G5 16GB"
          imgSrc={hp640G5Image}
        >
          <a href="#">
            <h5 className="text-center text-xl tracking-tight text-gray-900 dark:text-white">
              HP ProBook 640 G5 16GB
            </h5>
          </a>
          <h5 className="text-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Rp4.200.000
          </h5>
          <Button onClick={() => toggleModal("hp640G5v2")}>Detail Barang</Button>
          <Modal
            show={openModals.hp640G5v2}
            onClose={() => toggleModal("hp640G5v2")}
          >
            <Modal.Header>HP ProBook 640 G5 16 GB</Modal.Header>
            <Modal.Body>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Spesifikasi Laptop: <br />
                  Processor: Intel Core i5-8350U <br />
                  RAM: 16 GB DDR4 <br />
                  Storage: 256 GB SSD <br />
                  Display: 14" (Full HD)
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
              <Button as="a" href="https://wa.link/v8u2ee" target="_blank">
                Beli Sekarang
              </Button>
              <Button color="gray" onClick={() => toggleModal("hp640G5v2")}>
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