import { Card, Button, Modal } from "flowbite-react";
import { useState } from "react";

import hp840G3Image from "../assets/840 G3.jpg";
import hp640G2Image from "../assets/640 G4.jpg";
import hp640G4Image from "../assets/640 G4.jpg";
import hp640G5Image from "../assets/640 G4.jpg";
import hp6470Image from "../assets/6470.jpg";

function KatalogHP() {
  const [openModals, setOpenModals] = useState({
    hp840G3: false,
    hp640G2: false,
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
              <Button as="a" href="https://wa.link/k3m0k2" target="_blank">
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
          imgAlt="HP ProBook 640 G4"
          imgSrc={hp640G4Image}
        >
          <a href="#">
            <h5 className="text-center text-xl tracking-tight text-gray-900 dark:text-white">
              HP ProBook 640 G4
            </h5>
          </a>
          <h5 className="text-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Rp4.000.000
          </h5>
          <Button onClick={() => toggleModal("hp640G4")}>Detail Barang</Button>
          <Modal
            show={openModals.hp640G4}
            onClose={() => toggleModal("hp640G4")}
          >
            <Modal.Header>HP ProBook 640 G4</Modal.Header>
            <Modal.Body>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Spesifikasi Laptop: <br />
                  Processor: Intel Core i5-8350U <br />
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
              <Button as="a" href="https://wa.link/dsvtg4" target="_blank">
                Beli Sekarang
              </Button>
              <Button color="gray" onClick={() => toggleModal("hp640G4")}>
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
              <Button as="a" href="https://wa.link/n00dab" target="_blank">
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
          imgAlt="HP ProBook 6470"
          imgSrc={hp6470Image}
        >
          <a href="#">
            <h5 className="text-center text-xl tracking-tight text-gray-900 dark:text-white">
              HP ProBook 6470
            </h5>
          </a>
          <h5 className="text-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Rp2.600.000
          </h5>
          <Button onClick={() => toggleModal("hp6470")}>Detail Barang</Button>
          <Modal show={openModals.hp6470} onClose={() => toggleModal("hp6470")}>
            <Modal.Header>HP ProBook 6470</Modal.Header>
            <Modal.Body>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Spesifikasi Laptop: <br />
                  Processor: Intel Core i5-3320M <br />
                  RAM: 4 GB DDR3 <br />
                  Storage: 256 GB SSD <br />
                  Display: 14"
                  <br />
                  OS: Windows 7/10 (Bisa Request)
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
              <Button as="a" href="https://wa.link/zbs64y" target="_blank">
                Beli Sekarang
              </Button>
              <Button color="gray" onClick={() => toggleModal("hp6470")}>
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