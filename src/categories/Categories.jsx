import { Box, CircularProgress } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import useCategs from "../hooks/useCategs";

export default function Categories() {
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
      sx={{
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 2,
      }}
    >
      {data.map((categs) => (
        <Card
          key={categs.id}
          sx={{
            flex: {
              xs: "1 1 100%",
              sm: "1 1 45%",
              md: "1 1 30%",
              lg: "1 1 20%",
            },
            borderRadius: "20px",
            boxShadow: "inherit",
            border: "1px solid #503217",
          }}
        >
          <CardActionArea>
            <CardContent>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontFamily: "poppins",
                  color: "#503217",
                }}
                gutterBottom
                variant="h5"
                component="div"
              >
                {categs.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}
