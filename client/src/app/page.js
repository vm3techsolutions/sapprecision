import Applications from "./home/Applications";
import CenterIMG from "./home/CenterIMG";
import Features from "./home/Features";
import Gallery from "./home/Gallery";
import GetYourQuoteForm from "./home/GetYourQuoteForm";
import HomeBanner from "./home/HomeBanner";
import MaterialsRange from "./home/MaterialsRange";
import RelatedProducts from "./home/RelatedProducts";
import TechnicalDownloads from "./home/TechnicalDownloads";
import Testimonal from "./Testimonal";


export default function Home() {
  return (
    <div>

      <HomeBanner/>
     <MaterialsRange/>
     <Features/>
     <Applications/>
      <CenterIMG/>
     <TechnicalDownloads/>
      <Gallery/>
      <RelatedProducts/>
      <Testimonal/>
      <GetYourQuoteForm/>
      
    </div>
  );
}
