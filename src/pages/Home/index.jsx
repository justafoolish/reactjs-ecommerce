import { Hero, Sponsor, Loading, ProductsSlider } from "../../components";
import { Container } from "react-bootstrap";
import useFetch from "../../hooks/useFetch";

function Home() {
  const { data: latestProduct, isPending: latestProductPending, error: latestProductError } = useFetch("https://hactun-ecom.herokuapp.com/api/products?_sort=createdAt&_order=desc&_limit=6");
  const { data: popularProduct, isPending: popularProductPending, error: popularProductError } = useFetch("https://hactun-ecom.herokuapp.com/api/products?_sort=sold&_order=desc&_limit=6");

  return (
    <>
      <Hero />
      <Container fluid className="my-5">
        <Loading isPending={latestProductPending} error={latestProductError} errorMessage={"Fetch Data Error"} />
        {latestProduct && <ProductsSlider HeaderTitle="Latest Products" Products={latestProduct} />}
      </Container>
      <Container fluid>
        <Loading isPending={popularProductPending} error={popularProductError} errorMessage={"Fetch Data Error"} />
        {latestProduct && <ProductsSlider HeaderTitle="Popular Products" Products={popularProduct} />}
      </Container>
      <Sponsor />
    </>
  );
}

export default Home;
