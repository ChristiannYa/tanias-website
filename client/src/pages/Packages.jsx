import PackagesSection from "../sections/packages/Packages";
import BookButton from "../components/BookButton";
import Faqs from "../sections/packages/Faqs";

const Packages = () => {
  return (
    <div className="screen1200 mx-auto py-2 colflex-center gap-y-6">
      <PackagesSection/>
      <BookButton/>
      <Faqs/>
    </div>
  )
}

export default Packages