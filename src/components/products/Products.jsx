import React, { useState } from "react";
import useProducts from "./useProducts";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Loader from "../../ui/Loader";
import { Link } from "react-router-dom";
import ProductUi from "../UI/ProductUi";
import useProducts2 from "../../hooks/useProducts2";
import { useTranslation } from "react-i18next";

export default function Products({
  MainColor,
  MainFont,
  Product,
  title,
  showFilters = false,
}) {
  const limit = Product?.limit || 4;
  const { isLoading, isError, error } = useProducts(limit);
  const [filters, setFilters] = useState({
    search: "",
    minPrice: "",
    maxPrice: "",
    sortBy: "",
    ascending: true,
  });
  const {t}= useTranslation();

  const [appliedFilters, setAppliedFilters] = useState({ ...filters });
  const { data } = useProducts2({ ...appliedFilters });

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
    <Box py={"70px"} sx={{ textAlign: "center" }}>
      <Typography
        sx={{
          fontFamily: MainFont,
          color: MainColor,
          fontSize: {
            md: "48px",
            xs: "27px",
            sm: "35px",
          },
          fontWeight: 600,
        }}
        marginBottom={"20px"}
      >
        {title || t("products.title")}
      </Typography>

      {showFilters && (
        <Box
          mb={4}
          sx={{
            width: "fit-content",
            display: "flex",
            flexDirection: "column",
            mx: "auto",
            gap: 3,
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              justifyContent: "center",
            }}
          >
            <TextField
              label="Search"
              value={filters.search}
              variant="outlined"
              size="small"
              onChange={(e) =>
                setFilters({ ...filters, search: e.target.value })
              }
            />
            <TextField
              label="Min Price"
              value={filters.minPrice}
              type="number"
              size="small"
              onChange={(e) =>
                setFilters({ ...filters, minPrice: e.target.value })
              }
            />
            <TextField
              label="Max Price"
              value={filters.maxPrice}
              type="number"
              size="small"
              onChange={(e) =>
                setFilters({ ...filters, maxPrice: e.target.value })
              }
            />
          </Box>
          <Box
  sx={{
    display: "flex",
    gap: 2,
    flexWrap: "wrap",
    justifyContent: "center",
    textAlign:'start',
  }}
>
  <FormControl
    size="small"
    sx={{
      
      flex: { xs: "1 1 100%", sm: "1 1 150px", md: "1 1 200px" },
    }}
  >
    <InputLabel>Sort By</InputLabel>
    <Select
      value={filters.sortBy}
      onChange={(e) =>
        setFilters({ ...filters, sortBy: e.target.value })
      }
    >
      <MenuItem value="">None</MenuItem>
      <MenuItem value="price">Price</MenuItem>
      <MenuItem value="rating">Rating</MenuItem>
    </Select>
  </FormControl>

  <FormControl
    size="small"
    sx={{
      flex: { xs: "1 1 100%", sm: "1 1 150px", md: "1 1 200px" },
    }}
  >
    <InputLabel>Order</InputLabel>
    <Select 
      value={filters.ascending ? "true" : "false"}
      onChange={(e) =>
        setFilters({ ...filters, ascending: e.target.value === "true" })
      }
    >
      
      <MenuItem value="true">Ascending</MenuItem>
      <MenuItem value="false">Descending</MenuItem>
    </Select>
  </FormControl>
</Box>

          <Button
            variant="contained"
            onClick={() => setAppliedFilters({ ...filters })}
            sx={{
              width: {
                xs:130, md:200
              },
              mx: "auto",
              textTransform: "none",
              color: "#fff",
              backgroundColor: MainColor,
              fontFamily:MainFont
            }}
          >
            Apply Filters
          </Button>
        </Box>
      )}
      <ProductUi
        MainColor={MainColor}
        MainFont={MainFont}
        Product={data}
        limit={limit}
      />
    </Box>
  );
}
