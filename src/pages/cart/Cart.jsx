import React from "react";
import useCard from "../../hooks/useCard";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Loader from "../../ui/Loader";
import useRemoveFromCart from "../../hooks/useRemoveFromCart";
import { ToastContainer, toast } from "react-toastify";
import { Bounce } from "react-toastify";
import useUpdateQty from "../../hooks/useUpdateQty";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";

export default function Cart({ MainColor, MainFont }) {
  const { data, isError, isLoading, error } = useCard();
  const { mutate, isPending } = useRemoveFromCart();
  const { mutate: UpdateQty, isPending: isPendingUpdate } = useUpdateQty();

  const handleUpdate = (productId, sign) => {
    const item = data.items.find((i) => {
      return i.productId === productId;
    });
    if (sign == "-") {
      UpdateQty({ productId, count: item.count - 1 });
    } else {
      UpdateQty({ productId, count: item.count + 1 });
    }
  };

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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
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
        My Cart
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
              <TableCell
                align="center"
                sx={{ color: MainColor, fontFamily: "cursive" }}
              >
                Changed your mind?
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
                    <IconButton
                      disabled={isPendingUpdate}
                      onClick={() => {
                        handleUpdate(item.productId, "-");
                        toast.success("Items updated, refresh :)");
                      }}
                    >
                      <RemoveIcon />
                    </IconButton>

                    {item.count}
                    <IconButton
                      disabled={isPendingUpdate}
                      onClick={() => {
                        handleUpdate(item.productId, "+");
                        toast.success("Items updated, refresh :)");
                      }}
                    >
                      <AddIcon />
                    </IconButton>
                  </Box>
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ color: MainColor, fontFamily: MainFont }}
                >
                  {item.count * item.price}$
                </TableCell>
                <TableCell align="center">
                  <Button
                    disabled={isPending}
                    onClick={() => {
                      mutate(item.productId);
                      toast.success("Items Removed Successfully");
                    }}
                    variant="outlined"
                    sx={{ textTransform: "none" }}
                    color="error"
                  >
                    Remove
                  </Button>
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
    </Box>
  );
}
