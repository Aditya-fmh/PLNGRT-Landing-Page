import { Button, Flowbite, Carousel } from "flowbite-react";
import NavigationBar from "../Components/NavigationBar.jsx";
import Footer from "../Components/Footer.jsx";

import hero1 from "../assets/hero-1.jpg";
import hero2 from "../assets/hero-2.jpg";
import hero3 from "../assets/hero-3.jpg";
import hero4 from "../assets/hero-4.jpg";
import hero5 from "../assets/hero-5.jpg";

function Home() {
  return (
    <>
      <Flowbite>
        <NavigationBar />

        <section className="bg-w hite antialiased dark:bg-gray-900">
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 lg:py-24">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">
              <div className="lg:max-w-xl xl:shrink-0">
                <div>
                  <h2 className="text-3xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                    Cari Laptop Second? Ingat Pusat Laptop Nusantara Garut!
                  </h2>
                  <p className="mt-5 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl md:max-w-3xl">
                    Telah melayani ratusan konsumen sejak 2021, kami menyediakan
                    berbagai macam merk dan tipe laptop untuk berbagai kebutuhan
                    anda.
                  </p>
                </div>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button size="lg" href="/catalogue">
                    Buka Katalog
                  </Button>
                  <Button
                    size="lg"
                    color="gray"
                    className="[&>span]:items-center"
                    href="/contact"
                    outline
                  >
                    <svg
                      aria-hidden="true"
                      className="-ml-1 mr-2 h-4 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 25 25"
                      fill="currentColor"
                    >
                      <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    Hubungi Kami
                  </Button>
                </div>
              </div>
              <Carousel className="h-64 md:h-96">
                <img src={hero1} className="rounded-lg" alt="" />
                <img src={hero2} className="rounded-lg" alt="" />
                <img src={hero3} className="rounded-lg" alt="" />
                <img src={hero4} className="rounded-lg" alt="" />
                <img src={hero5} className="rounded-lg" alt="" />
              </Carousel>
            </div>
          </div>
        </section>

        <section className="bg-gray-200 dark:bg-gray-800">
          <div className="mx-auto max-w-screen-xl px-4 py-8 text-center sm:py-16 lg:px-6">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Kenapa harus Pusat Laptop Nusantara Garut?
            </h2>
            <p className="text-gray-500 dark:text-gray-400 sm:text-xl">
              Karena di sini, kami menjual laptop second grade A yang pastinya
              bergaransi dan telah melewati proses QC sebelum di display
              sehingga barang yang anda terima terjamin kualitasnya.
            </p>
            <div className="mt-8 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:mt-12 lg:grid-cols-3">
              <div>
                <svg
                  className="text-primary-600 dark:text-primary-500 mx-auto mb-4 h-12 w-12"
                  fill="#0891B2"
                  viewBox="0 0 576 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zm64 320l-64 0 0-64c35.3 0 64 28.7 64 64zM64 192l0-64 64 0c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64l0 64-64 0zm64-192c-35.3 0-64-28.7-64-64l64 0 0 64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
                    clipRule="evenodd"
                  />
                </svg>
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  Harga Murah
                </h3>
                <p className="mb-4 text-gray-500 dark:text-gray-400">
                  Kami menjual laptop mulai dari harga 2 jutaan. Cocok untuk
                  kebutuhan kantor/sekolah.
                </p>
              </div>
              <div>
                <svg
                  className="text-primary-600 dark:text-primary-500 mx-auto mb-4 h-12 w-12"
                  fill="#0891B2"
                  viewBox="0 0 384 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M374.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-320 320c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l320-320zM128 128A64 64 0 1 0 0 128a64 64 0 1 0 128 0zM384 384a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  Diskon Menarik
                </h3>
                <p className="mb-4 text-gray-500 dark:text-gray-400">
                  Banyak diskon menarik setiap bulannya, seperti potongan harga,
                  free aksesoris, dan diskon-diskon lainnya yang pastinya sayang
                  banget kalau ketinggalan
                </p>
              </div>
              <div>
                <svg
                  className="text-primary-600 dark:text-primary-500 mx-auto mb-4 h-12 w-12"
                  fill="#0891B2"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  Garansi Terjamin
                </h3>
                <p className="mb-4 text-gray-500 dark:text-gray-400">
                  Meskipun second, kita tetap beri garansi untuk menjamin
                  kenyamanan anda. Total garansi selama 3 bulan mencakup 1 bulan
                  garansi service dan 2 bulan garansi software.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16">
            <div className="mx-auto max-w-screen-sm">
              <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Apa kata konsumen tentang kami?
              </h2>
              <p className="text-gray-500 dark:text-gray-400 sm:text-xl">
                Kami telah beroperasi selama kurang lebih 3 tahun dan ini adalah
                tanggapan beberapa konsumen yang puas dengan pelayanan kami.
              </p>
            </div>
            <div className="h-80 py-4 2xl:h-96">
              <Carousel
                leftControl={
                  <span className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"             
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="hidden">Previous</span>
                  </span>
                }
                rightControl={
                  <span className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="hidden">Next</span>
                  </span>
                }
                theme={{
                  root: {
                    base: "relative h-72 md:mx-auto md:h-64 md:w-2/3",
                    leftControl:
                      "absolute bottom-0 right-1/2 flex items-center justify-center px-4 focus:outline-none",
                    rightControl:
                      "absolute bottom-0 left-1/2 flex items-center justify-center px-4 focus:outline-none",
                  },
                  indicators: {
                    base: "d-none",
                  },
                  scrollContainer: {
                    base: "flex h-72 snap-mandatory overflow-y-visible overflow-x-scroll scroll-smooth rounded-lg md:h-64",
                  },
                }}
              >
                <div>
                  <blockquote>
                    <p className="text-lg font-medium text-gray-900 dark:text-white sm:text-2xl">
                      "Pertama kali beli disini, tempatnya nyaman, pelayanannya
                      ramah, penginstaln cepet, yg bener2 berkesan sih
                      pengecekan mendetil bngt! recomended ya, sukses selalu
                      tokonya👍👍"
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center justify-center space-x-1 md:space-x-3">
                    <img
                      alt=""
                      src="https://lh3.googleusercontent.com/a/ACg8ocKqQR2U8nJT1uuMAyETBjgnmHfPGB-u-rQnQ0uAbl9B4NCq_Q=w36-h36-p-rp-mo-br100"
                      className="h-6 w-6 rounded-full"
                    />
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <div className="pr-3 font-medium text-gray-900 dark:text-white">
                        <a
                          href="https://maps.app.goo.gl/iLaKnx6tfqzrQ7C79"
                          className="hover:underline"
                          target="blank"
                        >
                          Sri Rizky
                        </a>
                      </div>
                      <div className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                        ⭐⭐⭐⭐⭐
                      </div>
                    </div>
                  </figcaption>
                </div>
                <div>
                  <blockquote>
                    <p className="text-lg font-medium text-gray-900 dark:text-white sm:text-2xl">
                      "Kualitas laptopnya mantapp banget buat laptop second
                      dengan harga yang sangat terjangkau. Yang bikin poin plus
                      pelayanannya luar biasa baik, ramah banget. Makasih sukses
                      terus 😁👍"
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center justify-center space-x-1 md:space-x-3">
                    <img
                      alt=""
                      src="https://lh3.googleusercontent.com/a/ACg8ocLgR_KQuScqmxv2NNAHryinws4IHh1BMaHTDskS5pdj3-xMJA=w36-h36-p-rp-mo-br100"
                      className="h-6 w-6 rounded-full"
                    />
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <div className="pr-3 font-medium text-gray-900 dark:text-white">
                        <a
                          href="https://maps.app.goo.gl/PzPuqKnT9tJsFE5U6"
                          className="hover:underline"
                          target="blank"
                        >
                          Sadam Habnawi
                        </a>
                      </div>
                      <div className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                        ⭐⭐⭐⭐⭐
                      </div>
                    </div>
                  </figcaption>
                </div>
                <div>
                  <blockquote>
                    <p className="text-lg font-medium text-gray-900 dark:text-white sm:text-2xl">
                      "Toko laptop digarut yang recomend budget juga bisa
                      menyesuaikan,pelayanan yang sangat baik terimakasih dengan
                      adanya pusat laptop alhamdulillah tabarakallah mantenging
                      terus ig nya @laptopnusantara.garut bisa angkut 1 laptop
                      impian sukses terus."
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center justify-center space-x-1 md:space-x-3">
                    <img
                      alt=""
                      src="https://lh3.googleusercontent.com/a-/ALV-UjXGjxJmaTLxw6vCuJdWRKZ0QNKnIj4Stl5E9Bj7EIJn-bUqbN4=w36-h36-p-rp-mo-br100"
                      className="h-6 w-6 rounded-full"
                    />
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <div className="pr-3 font-medium text-gray-900 dark:text-white">
                        <a
                          href="https://maps.app.goo.gl/ZoJCCsPaqUatCVTG9"
                          className="hover:underline"
                          target="blank"
                        >
                          Anita
                        </a>
                      </div>
                      <div className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                        ⭐⭐⭐⭐⭐
                      </div>
                    </div>
                  </figcaption>
                </div>
                <div>
                  <blockquote>
                    <p className="text-lg font-medium text-gray-900 dark:text-white sm:text-2xl">
                      "buat teman" yg lagi nyari laptop second, jangan ragu beli
                      ditoko inii yaa, insyaallah gabakalan nyeselll. kakak" yg
                      melayaninya jugaa baikk bangettt, terimakasih"
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center justify-center space-x-3">
                    <img
                      alt=""
                      src="https://lh3.googleusercontent.com/a-/ALV-UjV3YKVHxe59wgTEMNUVLeF-E39jxyoze4nsCjXm2kVhXze-ki_a=w36-h36-p-rp-mo-br100"
                      className="h-6 w-6 rounded-full"
                    />
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <div className="pr-3 font-medium text-gray-900 dark:text-white">
                        <a
                          href="https://maps.app.goo.gl/zSgsmS8S1TYTnwHE7"
                          className="hover:underline"
                          target="blank"
                        >
                          Tasya Julfiah
                        </a>
                      </div>
                      <div className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                        ⭐⭐⭐⭐⭐
                      </div>
                    </div>
                  </figcaption>
                </div>
                <div>
                  <blockquote>
                    <p className="text-lg font-medium text-gray-900 dark:text-white sm:text-2xl">
                      "Layanan yang luar biasa dari awal hingga akhir. Stafnya
                      sangat membantu dalam memilih laptop yang sesuai dengan
                      anggaran dan kebutuhan saya. Prosesnya cepat tanpa
                      hambatan. Sangat direkomendasikan!"
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center justify-center space-x-3">
                    <img
                      alt=""
                      src="https://lh3.googleusercontent.com/a-/ALV-UjXoP6RHyb5ca6oEG_t1VjMw-njACNaMK2SRuYTmrzF-rRTdK6We=w36-h36-p-rp-mo-br100"
                      className="h-6 w-6 rounded-full"
                    />
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <div className="pr-3 font-medium text-gray-900 dark:text-white">
                        <a
                          href="https://maps.app.goo.gl/5wKQMeJRVUzDQW9R7"
                          className="hover:underline"
                          target="blank"
                        >
                          Rahmi Nursyarifah
                        </a>
                      </div>
                      <div className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                        ⭐⭐⭐⭐⭐
                      </div>
                    </div>
                  </figcaption>
                </div>
              </Carousel>
            </div>
          </div>
        </section>

        <Footer />
      </Flowbite>
    </>
  );
}

export default Home;
