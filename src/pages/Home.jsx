import Hero from '../components/Hero';
import Abouttakumi from '../components/Abouttakumi';
import Products from '../components/ProductsPreview';
import ProductionProcess from '../components/ProductionProcess';
import Customers from '../components/Customers';
import PartnerCTA from '../components/PartnerCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Abouttakumi />
      <Products />
      <ProductionProcess />
      <Customers />
      <PartnerCTA />
    </>
  );
}
