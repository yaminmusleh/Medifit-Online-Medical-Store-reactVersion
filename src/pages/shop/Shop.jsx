import Products from "../../components/products/Products";
import { Box } from "@mui/material";

export default function Shop() {
  const color1 = "#503217";
  const font = "poppins";

  return (
    <Box>
      <Products
        MainColor={color1}
        MainFont={font}
        title={"Ready to fill your cart?"}
      />
    </Box>
  );
}
