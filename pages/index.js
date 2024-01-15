import path from "path";
import fs from "fs/promises";

function HomePage(props) {
  const { products } = props;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  console.log("Re-Generating !!!!!");
  const filePath = path.join(process.cwd(), "dummy-backend.json");
  const jsondata = await fs.readFile(filePath);
  const data = JSON.parse(jsondata);
  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
}

export default HomePage;
