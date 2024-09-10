import NavigationBar from "../Components/NavigationBar";
import FooterBar from "../Components/Footer";
import KatalogDELL from "../Components/KatalogDELL";
import KatalogHP from "../Components/KatalogHP";
import KatalogLenovo from "../Components/KatalogLenovo";
import KatalogToshiba from "../Components/KatalogToshiba";

function Catalogue() {
    return (
      <>
        <NavigationBar />
        <section className="bg-white antialiased dark:bg-gray-900">
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 lg:py-24">
            <KatalogDELL />
            <KatalogHP />
            <KatalogLenovo />
            <KatalogToshiba />
          </div>
        </section>
        <FooterBar />
      </>
    );
}

export default Catalogue