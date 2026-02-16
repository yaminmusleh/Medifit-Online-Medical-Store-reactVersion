import { Box, CircularProgress } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import useCategs from "../hooks/useCategs";

export default function Categories() {
  const number = [32, 20, 30, 35, 25, 35, 30];

  const { data, isLoading, isError, error } = useCategs();
  //data, isLoading, isError, error takes the values from the query that we returned in useCategs

  if (isLoading)
    return (
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <CircularProgress />
      </Box>
    );
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
    <Box
      component={"shop-by-category-section"}
      sx={{
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 2,
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          color: "#503217",
          fontSize: "48px",
          fontFamily: "poppins",
          mb: "60px",
          mt: "130px",
        }}
      >
        Shop By Category
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
          width: "100%",
        }}
      >
        {data.map((categs, index) => (
          <Card
            key={categs.id}
            sx={{
              flexBasis: {
                xs: "50%",
                sm: "30%",
                md: "20%",
                lg: "15%",
              },
              borderRadius: "20px",
              height: "200px",
              boxShadow: "inherit",
              border: "1px solid #503217",
              backgroundColor: "#EEEDE7",
            }}
          >
            <CardActionArea
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent
                sx={{ flex: 1, display: "flex", flexDirection: "column" }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontFamily: "poppins",
                    color: "#503217",
                    mt: "auto",
                  }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {categs.name}
                </Typography>
                <Typography sx={{color:'#8F7D6A',fontFamily:'poppins',fontSize:'13.5px'}}>{number[index % number.length]} Items</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
