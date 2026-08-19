import ServicePageCards from "./ServicePageCards";
import MainPageBlogPage from "./MainPageBlogPage";
import ContactUs from "./ContactUs";

function CenterSection() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 py-8">
      <ServicePageCards />
      <MainPageBlogPage />
      <ContactUs />
    </div>
  );
}

export default CenterSection;