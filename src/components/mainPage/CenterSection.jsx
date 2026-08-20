import ServicePageCards from "./ServicePageCards";
import MainPageBlogPage from "./MainPageBlogPage";
import ContactUs from "./ContactUs";
import Products from "./Products";
import Clients from "./Clients";
import AboutUs from "./AboutUs";

function CenterSection() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 py-8">
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