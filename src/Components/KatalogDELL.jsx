import { Card, Button, Modal } from "flowbite-react";
import { useState } from "react";

import dell5480Image from "../assets/5480.jpg";
import dell5490Image from "../assets/5490.jpg";
import dell7470Image from "../assets/7470.jpg";
import dellvostroImage from "../assets/Vostro 15.jpg";

function KatalogDELL() {
  const [openModals, setOpenModals] = useState({
    dell5480: false,
    dell5490: false,
    dell7470: false,
    dellvostro: false,
  });

  const toggleModal = (modalId) => {
    setOpenModals((prevState) => ({
      ...prevState,
      [modalId]: !prevState[modalId],
    }));
  };

  return (
    <>
      <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white">
        Katalog Laptop DELL
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        <Card
          className="max-w-sm"
          imgAlt="DELL 5480"
          imgSrc={dell5480Image}
        >
          <a href="#">
            <h5 className="text-center text-xl tracking-tight text-gray-900 dark:text-white">
              DELL Latitude 5480
            </h5>
          </a>
          <h5 className="text-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Rp3.750.000
          </h5>
          <Button onClick={() => toggleModal("dell5480")}>Detail Barang</Button>
          <Modal show={openModals.dell5480} onClose={() => toggleModal("dell5480")}>
            <Modal.Header>DELL Latitude 5480</Modal.Header>
            <Modal.Body>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Spesifikasi Laptop: <br />
                  Processor: Intel Core i5-7200U <br />
                  RAM: 8 GB DDR4 <br />
                  Storage: 256 GB SSD <br />
                  Display: 14" <br />
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
              <Button as="a" href="https://wa.link/d2cr4i" target="_blank">
                Beli Sekarang
              </Button>
              <Button color="gray" onClick={() => toggleModal("dell5480")}>
                Kembali
              </Button>
            </Modal.Footer>
          </Modal>
        </Card>

        <Card
          className="max-w-sm"
          imgAlt="DELL 5490"
          imgSrc={dell5490Image}
        >
          <a href="#">
            <h5 className="text-center text-xl tracking-tight text-gray-900 dark:text-white">
              DELL Latitude 5490
            </h5>
          </a>
          <h5 className="text-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Rp3.750.000
          </h5>
          <Button onClick={() => toggleModal("dell5490")}>Detail Barang</Button>
          <Modal show={openModals.dell5490} onClose={() => toggleModal("dell5490")}>
            <Modal.Header>DELL Latitude 5490</Modal.Header>
            <Modal.Body>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Spesifikasi Laptop: <br />
                  Processor: Intel Core i5-8350U <br />
                  RAM: 8 GB DDR4 <br />
                  Storage: 256 GB SSD <br />
                  Display: 14" Full HD <br />
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
              <Button as="a" href="https://wa.link/yijz4d" target="_blank">
                Beli Sekarang
              </Button>
              <Button color="gray" onClick={() => toggleModal("dell5490")}>
                Kembali
              </Button>
            </Modal.Footer>
          </Modal>
        </Card>

        <Card
          className="max-w-sm"
          imgAlt="DELL 7470"
          imgSrc={dell7470Image}
        >
          <a href="#">
            <h5 className="text-center text-xl tracking-tight text-gray-900 dark:text-white">
              DELL Latitude 7470
            </h5>
          </a>
          <h5 className="text-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Rp3.600.000
          </h5>
          <Button onClick={() => toggleModal("dell7470")}>Detail Barang</Button>
          <Modal show={openModals.dell7470} onClose={() => toggleModal("dell7470")}>
            <Modal.Header>DELL Latitude 7470</Modal.Header>
            <Modal.Body>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Spesifikasi Laptop: <br />
                  Processor: Intel Core i5-6300U <br />
                  RAM: 8 GB DDR4 <br />
                  Storage: 256 GB SSD <br />
                  Display: 14" <br />
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
              <Button as="a" href="https://wa.link/i22cxf" target="_blank">
                Beli Sekarang
              </Button>
              <Button color="gray" onClick={() => toggleModal("dell7470")}>
                Kembali
              </Button>
            </Modal.Footer>
          </Modal>
        </Card>

        <Card
          className="max-w-sm"
          imgAlt="DELL Vostro 15"
          imgSrc={dellvostroImage}
        >
          <a href="#">
            <h5 className="text-center text-xl tracking-tight text-gray-900 dark:text-white">
              DELL Vostro 15
            </h5>
          </a>
          <h5 className="text-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Rp3.500.000
          </h5>
          <Button onClick={() => toggleModal("dellvostro")}>Detail Barang</Button>
          <Modal show={openModals.dellvostro} onClose={() => toggleModal("dellvostro")}>
            <Modal.Header>DELL Vostro 15</Modal.Header>
            <Modal.Body>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Spesifikasi Laptop: <br />
                  Processor: Intel Core i5-7200U <br />
                  RAM: 8 GB DDR4 <br />
                  Storage: 1 TB HDD <br />
                  Display: 15,6" <br />
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
              <Button as="a" href="https://wa.link/eyze25" target="_blank">
                Beli Sekarang
              </Button>
              <Button color="gray" onClick={() => toggleModal("dellvostro")}>
                Kembali
              </Button>
            </Modal.Footer>
          </Modal>
        </Card>
      </div>
    </>
  );
}

export default KatalogDELL;