import ServicePageCards from "./ServicePageCards";
import MainPageBlogPage from "./MainPageBlogPage";
import ContactUs from "./ContactUs";
import Products from "./Products";
import Clients from "./Clients";
import AboutUs from "./AboutUs";

function CenterSection() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-12 px-4 py-8 sm:px-6 lg:px-8">
      <AboutUs />  
      <ServicePageCards />
      <MainPageBlogPage />
      <Products />
      <Clients />
      <ContactUs />
    </div>
  );
}

export default CenterSection;