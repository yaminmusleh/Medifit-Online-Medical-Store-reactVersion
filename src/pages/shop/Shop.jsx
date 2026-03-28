import { useTranslation } from "react-i18next";
import Products from "../../components/products/Products";
import { Box } from "@mui/material";

export default function Shop() {
  const color1 = "#503217";
  const font = "poppins";

  const {t}=useTranslation();

  return (
    <Box>
      <Products
        MainColor={color1}
        MainFont={font}
        title={t("products.title2")}
        showFilters={true}
      />
    </Box>
  );
}
