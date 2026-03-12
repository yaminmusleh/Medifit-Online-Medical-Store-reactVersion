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
  IconButton,
  useTheme,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Loader from "../../ui/Loader";
import useRemoveFromCart from "../../hooks/useRemoveFromCart";
import { ToastContainer, toast, Bounce } from "react-toastify";
import useUpdateQty from "../../hooks/useUpdateQty";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Cart({ MainColor, MainFont }) {
  const { t } = useTranslation();
  const { data, isError, isLoading, error } = useCard();
  const { mutate, isPending } = useRemoveFromCart();
  const { mutate: UpdateQty, isPending: isPendingUpdate } = useUpdateQty();
  const navigate = useNavigate();
  const theme = useTheme();

  const isDark = theme.palette.mode === "dark";

  const handleUpdate = (productId, sign) => {
    const item = data?.items.find((i) => i.productId === productId);
    if (sign === "-") {
      UpdateQty({ productId, count: item.count - 1 });
      toast.success(t("cart.itemsUpdated"));
    } else {
      UpdateQty({ productId, count: item.count + 1 });
      toast.success(t("cart.itemsUpdated"));
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
          fontSize: { xs: 20, lg: 45 },
          fontWeight: 600,
          mb: 7,
        }}
      >
        {t("cart.myCart")}
      </Typography>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                sx={{
                  fontFamily: "cursive",
                  color: isDark ? "#fff" : MainColor,
                }}
              >
                {t("cart.product")}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontFamily: "cursive",
                  color: isDark ? "#fff" : MainColor,
                }}
              >
                {t("cart.qty")}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: isDark ? "#fff" : MainColor,
                  fontFamily: "cursive",
                }}
              >
                {t("cart.totalPrice")}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: isDark ? "#fff" : MainColor,
                  fontFamily: "cursive",
                }}
              >
                {t("cart.changedMind")}
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.items.map((item, i) => (
              <TableRow key={i}>
                <TableCell
                  align="center"
                  sx={{
                    color: isDark ? "#fff" : MainColor,
                    fontFamily: MainFont,
                  }}
                >
                  {item.productName}
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    color: isDark ? "#fff" : MainColor,
                    fontFamily: MainFont,
                  }}
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
                      onClick={() => handleUpdate(item.productId, "-")}
                    >
                      <RemoveIcon />
                    </IconButton>

                    {item.count}

                    <IconButton
                      disabled={isPendingUpdate}
                      onClick={() => handleUpdate(item.productId, "+")}
                    >
                      <AddIcon />
                    </IconButton>
                  </Box>
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    color: isDark ? "#fff" : MainColor,
                    fontFamily: MainFont,
                  }}
                >
                  {item.count * item.price}$
                </TableCell>

                <TableCell align="center">
                  <Button
                    disabled={isPending}
                    onClick={() => {
                      mutate(item.productId);
                      toast.success(t("cart.itemRemoved"));
                    }}
                    variant="outlined"
                    sx={{ textTransform: "none" }}
                    color="error"
                  >
                    {t("cart.remove")}
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
                sx={{
                  fontFamily: "math",
                  fontSize: "15px",
                  color: "black",
                  color: isDark ? "#fff" : "#000",
                }}
              >
                {t("cart.totalItemsPrice")} {data.cartTotal}$
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>

      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", sm: "space-between" },
          flexWrap: "wrap",
          marginTop: "30px",
          gap: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              backgroundColor: MainColor,
              fontFamily: MainFont,
              color: "#fff",
            }}
            onClick={() => navigate("/checkout")}
          >
            {t("cart.cashMeOut")}
          </Button>

          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              backgroundColor: MainColor,
              fontFamily: MainFont,
              color: "#fff",
            }}
            onClick={() => navigate("/shop")}
          >
            {t("cart.backToShop")}
          </Button>
        </Box>

        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            backgroundColor: MainColor,
            fontFamily: MainFont,
            color: "#fff",
          }}
        >
          {t("cart.startFresh")}
        </Button>
      </Box>
    </Box>
  );
}
