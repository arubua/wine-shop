import { Box } from "@chakra-ui/layout";
import ItemDetails from "../src/components/ItemDetails";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://storage.googleapis.com/wineshop-assets/wine-shop.json"
  );
  const data = await res.json();

  return {
    props: { data },
  };
};

const WineDetails = ({ data }) => {
  return (
    <Box>
      {data.map((item) => (
        <ItemDetails key={item.name} item={item} />
      ))}
    </Box>
  );
};

export default WineDetails;
