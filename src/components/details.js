import { Box } from "@chakra-ui/layout";
import ItemDetails from "./ItemDetails";
import { useRouter } from "next/router";

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

  const router= useRouter()
  console.log("router",router)

  return (
    <Box>
      {data.map((item) => (
        <ItemDetails key={item.name} item={item} />
      ))}
    </Box>
  );
};

export default WineDetails;
