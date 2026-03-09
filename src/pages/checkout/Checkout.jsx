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

export default function Checkout({ MainColor, MainFont }) {
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
      <Typography
        sx={{
          color: MainColor,
          fontFamily: "cursive",
          fontSize: {
            xs: 20,
            lg: 45,
          },
          fontWeight: 600,
          mb: 7,
        }}
      >
        Ready to Make It Official?
      </Typography>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                sx={{ color: MainColor, fontFamily: "cursive" }}
              >
                Product
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: MainColor, fontFamily: "cursive" }}
              >
                Qty
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: MainColor, fontFamily: "cursive" }}
              >
                Total Price $
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.items.map((item, i) => (
              <TableRow key={i}>
                <TableCell
                  align="center"
                  sx={{ color: MainColor, fontFamily: MainFont }}
                >
                  {item.productName}
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ color: MainColor, fontFamily: MainFont }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexWrap: "nowrap",
                    }}
                  >
                    {item.count}
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableCell
                align="center"
                colSpan={5}
                sx={{ fontFamily: "math", fontSize: "15px", color: "black" }}
              >
                Total Items Price: {data.cartTotal}$
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      <Box
        className="payment"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <FormControl
          sx={{
            width: {
              xs: "100%",
              sm: "40%",
            },
            marginTop: "20px",
          }}
        >
          <InputLabel sx={{ fontFamily: MainFont }} id="checkout-payment-label">
            Payment
          </InputLabel>
          <Select
            sx={{ textAlign: "start" }}
            labelId="checkout-payment-label"
            id="checkout-payment"
            value={paymentMethod}
            label="Payment"
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <MenuItem value={"Cash"}>Cash</MenuItem>
            <MenuItem value={"Visa"}>Visa</MenuItem>
          </Select>
        </FormControl>

        <Button
          onClick={() => {
            checkout(paymentMethod);
          }}
          variant="contained"
          sx={{
            backgroundColor: MainColor,
            textTransform: "none",
            fontFamily: MainFont,
          }}
        >
          Pay Now!
        </Button>
      </Box>
    </Box>
  );
}
