import React, { useState } from "react";
import useCard from "../../hooks/useCard";
import Loader from "../../ui/Loader";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import useCheckout from "../../hooks/useCheckout";
import { useTranslation } from "react-i18next";

export default function Checkout({ MainColor, MainFont }) {
  const { t } = useTranslation();

  const { data, isError, isLoading, error } = useCard();
  const { mutate: checkout, isPending: checkoutPending } = useCheckout();

  const [paymentMethod, setPaymentMethod] = useState("");

  if (isLoading) return <Loader />;
  if (isError)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "red",
        }}
      >
        <Typography component={"h1"} variant="h1">
          {error.message}
        </Typography>
      </Box>
    );

  return (
    <Box sx={{ textAlign: "center", py: 7 }}>
      {/* Page Title */}
      <Typography
        sx={{
          color: MainColor,
          fontFamily: "cursive",
          fontSize: { xs: 20, lg: 45 },
          fontWeight: 600,
          mb: 7,
        }}
      >
        {t("checkout.title")}
      </Typography>

      {/* Table */}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ color: MainColor, fontFamily: "cursive" }}>
                {t("checkout.product")}
              </TableCell>
              <TableCell align="center" sx={{ color: MainColor, fontFamily: "cursive" }}>
                {t("checkout.qty")}
              </TableCell>
              <TableCell align="center" sx={{ color: MainColor, fontFamily: "cursive" }}>
                {t("checkout.totalPrice")}
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.items.map((item, i) => (
              <TableRow key={i}>
                <TableCell align="center" sx={{ color: MainColor, fontFamily: MainFont }}>
                  {item.productName}
                </TableCell>

                <TableCell align="center" sx={{ color: MainColor, fontFamily: MainFont }}>
                  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {item.count}
                  </Box>
                </TableCell>

                <TableCell align="center" sx={{ color: MainColor, fontFamily: MainFont }}>
                  {item.price * item.count}$
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableCell align="center" colSpan={5} sx={{ fontFamily: "math", fontSize: "15px", color: "black" }}>
                {t("checkout.totalItemsPrice")} {data.cartTotal}$
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>

      {/* Payment Section */}
      <Box className="payment" sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "20px" }}>
        <FormControl sx={{ width: { xs: "100%", sm: "40%" }, marginTop: "20px" }}>
          <InputLabel sx={{ fontFamily: MainFont }} id="checkout-payment-label">
            {t("checkout.payment")}
          </InputLabel>
          <Select
            sx={{ textAlign: "start" }}
            labelId="checkout-payment-label"
            id="checkout-payment"
            value={paymentMethod}
            label={t("checkout.payment")}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <MenuItem value={"Cash"}>{t("checkout.cash")}</MenuItem>
            <MenuItem value={"Visa"}>{t("checkout.visa")}</MenuItem>
          </Select>
        </FormControl>

        <Button
          onClick={() => checkout(paymentMethod)}
          variant="contained"
          sx={{ backgroundColor: MainColor, textTransform: "none", fontFamily: MainFont }}
        >
          {t("checkout.payNow")}
        </Button>
      </Box>
    </Box>
  );
}