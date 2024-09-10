import { Card, Button, Modal } from "flowbite-react";
import { useState } from "react";

function KatalogLenovo () {
    const [openModal1, setOpenModal1] = useState(false);
    const [openModal2, setOpenModal2] = useState(false);
    const [openModal3, setOpenModal3] = useState(false);
    const [openModal4, setOpenModal4] = useState(false);
    const [openModal5, setOpenModal5] = useState(false);
    const [openModal6, setOpenModal6] = useState(false);
    const [openModal7, setOpenModal7] = useState(false);
    const [openModal8, setOpenModal8] = useState(false);
    return (
      <>
        <h2 className="mb-8 mt-32 text-center text-3xl font-bold text-gray-900 dark:text-white">
          Katalog Laptop Lenovo
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <Card
            className="max-w-sm"
            imgAlt="Lenovo L450"
            imgSrc="./src/assets/L450.jpg"
          >
            <a href="#">
              <h5 className="text-center text-xl tracking-tight text-gray-900 dark:text-white">
                Lenovo ThinkPad L450
              </h5>
            </a>
            <h5 className="text-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Rp3.500.000
            </h5>
            <Button onClick={() => setOpenModal1(true)}>Detail Barang</Button>
            <Modal show={openModal1} onClose={() => setOpenModal1(false)}>
              <Modal.Header>Lenovo ThinkPad L450</Modal.Header>
              <Modal.Body>
                <div className="space-y-6">
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    Spesifikasi Laptop: <br />
                    Processor: Intel Core i5-5200U <br />
                    RAM: 4 GB DDR3 <br />
                    Storage: 128 GB SSD <br />
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
                <Button as="a" href="https://wa.link/9yhfg1" target="_blank">
                  Beli Sekarang
                </Button>
                <Button color="gray" onClick={() => setOpenModal1(false)}>
                  Kembali
                </Button>
              </Modal.Footer>
            </Modal>
          </Card>

          <Card
            className="max-w-sm"
            imgAlt="Lenovo L460"
            imgSrc="./src/assets/L460.jpg"
          >
            <a href="#">
              <h5 className="text-center text-xl tracking-tight text-gray-900 dark:text-white">
                Lenovo ThinkPad L460
              </h5>
            </a>
            <h5 className="text-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Rp3.800.000
            </h5>
            <Button onClick={() => setOpenModal2(true)}>Detail Barang</Button>
            <Modal show={openModal2} onClose={() => setOpenModal2(false)}>
              <Modal.Header>Lenovo ThinkPad L460</Modal.Header>
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
                <Button as="a" href="https://wa.link/a1m79j" target="_blank">
                  Beli Sekarang
                </Button>
                <Button color="gray" onClick={() => setOpenModal2(false)}>
                  Kembali
                </Button>
              </Modal.Footer>
            </Modal>
          </Card>

          <Card
            className="max-w-sm"
            imgAlt="Lenovo T470"
            imgSrc="./src/assets/T470.jpg"
          >
            <a href="#">
              <h5 className="text-center text-xl tracking-tight text-gray-900 dark:text-white">
                Lenovo ThinkPad T470
              </h5>
            </a>
            <h5 className="text-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Rp4.900.000
            </h5>
            <Button onClick={() => setOpenModal3(true)}>Detail Barang</Button>
            <Modal show={openModal3} onClose={() => setOpenModal3(false)}>
              <Modal.Header>Lenovo ThinkPad T470</Modal.Header>
              <Modal.Body>
                <div className="space-y-6">
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    Spesifikasi Laptop: <br />
                    Processor: Intel Core i5-6300U <br />
                    RAM: 8 GB DDR4 <br />
                    Storage: 256 GB SSD Sata <br />
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
                <Button as="a" href="https://wa.link/0w8qfa" target="_blank">
                  Beli Sekarang
                </Button>
                <Button color="gray" onClick={() => setOpenModal3(false)}>
                  Kembali
                </Button>
              </Modal.Footer>
            </Modal>
          </Card>

          <Card
            className="max-w-sm"
            imgAlt="Lenovo T470s 8/256"
            imgSrc="./src/assets/T470s 1.jpg"
          >
            <a href="#">
              <h5 className="text-center text-xl tracking-tight text-gray-900 dark:text-white">
                Lenovo ThinkPad T470s 8/256
              </h5>
            </a>
            <h5 className="text-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Rp4.500.000
            </h5>
            <Button onClick={() => setOpenModal4(true)}>Detail Barang</Button>
            <Modal show={openModal4} onClose={() => setOpenModal4(false)}>
              <Modal.Header>Lenovo ThinkPad T470s 8/256</Modal.Header>
              <Modal.Body>
                <div className="space-y-6">
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    Spesifikasi Laptop: <br />
                    Processor: Intel Core i7-7600U <br />
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
                <Button as="a" href="https://wa.link/v5l6al" target="_blank">
                  Beli Sekarang
                </Button>
                <Button color="gray" onClick={() => setOpenModal4(false)}>
                  Kembali
                </Button>
              </Modal.Footer>
            </Modal>
          </Card>

          <Card
            className="max-w-sm"
            imgAlt="Lenovo T470s 8/512"
            imgSrc="./src/assets/T470s 1.jpg"
          >
            <a href="#">
              <h5 className="text-center text-xl tracking-tight text-gray-900 dark:text-white">
                Lenovo ThinkPad T470s 8/512
              </h5>
            </a>
            <h5 className="text-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Rp4.350.000
            </h5>
            <Button onClick={() => setOpenModal5(true)}>Detail Barang</Button>
            <Modal show={openModal5} onClose={() => setOpenModal5(false)}>
              <Modal.Header>Lenovo ThinkPad T470s 8/512</Modal.Header>
              <Modal.Body>
                <div className="space-y-6">
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    Spesifikasi Laptop: <br />
                    Processor: Intel Core i7-7600U <br />
                    RAM: 8 GB DDR4 <br />
                    Storage: 512 GB SSD <br />
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
                <Button as="a" href="https://wa.link/shh6f1" target="_blank">
                  Beli Sekarang
                </Button>
                <Button color="gray" onClick={() => setOpenModal5(false)}>
                  Kembali
                </Button>
              </Modal.Footer>
            </Modal>
          </Card>

          <Card
            className="max-w-sm"
            imgAlt="Lenovo T470s 12/256"
            imgSrc="./src/assets/T470s 2.jpg"
          >
            <a href="#">
              <h5 className="text-center text-xl tracking-tight text-gray-900 dark:text-white">
                Lenovo ThinkPad T470s 12/256
              </h5>
            </a>
            <h5 className="text-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Rp4.700.000
            </h5>
            <Button onClick={() => setOpenModal6(true)}>Detail Barang</Button>
            <Modal show={openModal6} onClose={() => setOpenModal6(false)}>
              <Modal.Header>Lenovo ThinkPad T470s 12/256</Modal.Header>
              <Modal.Body>
                <div className="space-y-6">
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    Spesifikasi Laptop: <br />
                    Processor: Intel Core i7-7600U <br />
                    RAM: 12 GB DDR4 <br />
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
                <Button as="a" href="https://wa.link/0x5mjh" target="_blank">
                  Beli Sekarang
                </Button>
                <Button color="gray" onClick={() => setOpenModal6(false)}>
                  Kembali
                </Button>
              </Modal.Footer>
            </Modal>
          </Card>

          <Card
            className="max-w-sm"
            imgAlt="Lenovo T470s 20/256"
            imgSrc="./src/assets/T470s 3.jpg"
          >
            <a href="#">
              <h5 className="text-center text-xl tracking-tight text-gray-900 dark:text-white">
                Lenovo ThinkPad T470s 20/256
              </h5>
            </a>
            <h5 className="text-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Rp5.000.000
            </h5>
            <Button onClick={() => setOpenModal7(true)}>Detail Barang</Button>
            <Modal show={openModal7} onClose={() => setOpenModal7(false)}>
              <Modal.Header>Lenovo ThinkPad T470s 20/256</Modal.Header>
              <Modal.Body>
                <div className="space-y-6">
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    Spesifikasi Laptop: <br />
                    Processor: Intel Core i7-7600U <br />
                    RAM: 20 GB DDR4 <br />
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
                <Button as="a" href="https://wa.link/eq6nls" target="_blank">
                  Beli Sekarang
                </Button>
                <Button color="gray" onClick={() => setOpenModal7(false)}>
                  Kembali
                </Button>
              </Modal.Footer>
            </Modal>
          </Card>

          <Card
            className="max-w-sm"
            imgAlt="Lenovo T480"
            imgSrc="./src/assets/T480.jpg"
          >
            <a href="#">
              <h5 className="text-center text-xl tracking-tight text-gray-900 dark:text-white">
                Lenovo ThinkPad T480
              </h5>
            </a>
            <h5 className="text-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Rp4.200.000
            </h5>
            <Button onClick={() => setOpenModal8(true)}>Detail Barang</Button>
            <Modal show={openModal8} onClose={() => setOpenModal8(false)}>
              <Modal.Header>Lenovo ThinkPad T480</Modal.Header>
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
                <Button as="a" href="https://wa.link/0x9y02" target="_blank">
                  Beli Sekarang
                </Button>
                <Button color="gray" onClick={() => setOpenModal8(false)}>
                  Kembali
                </Button>
              </Modal.Footer>
            </Modal>
          </Card>
        </div>
      </>
    );
}

export default KatalogLenovo