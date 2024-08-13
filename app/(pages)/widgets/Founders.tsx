import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";

const Founders = () => {
  const founders = [
    {
      name: "Kelvin",
      title: "Documentation Lead",
      description: "Previously Software Engineer at BitPay.",
      imgSrc: "https://pravatar.cc/300?img=2",
    },
    {
      name: "Zidane",
      title: "Product Manager",
      description: "Creator of CipherBrowser and Co-Founder at Nitrous,.",
      imgSrc: "https://pravatar.cc/300?img=1",
    },
    {
      name: "Joy",
      title: "Product Manager",
      description: "Previously Co-Founder of Benchrise, Inc.",
      imgSrc: "https://pravatar.cc/300?img=3",
    },
    {
      name: "Yvonne",
      title: "Researcher",
      description: "Previously Software Engineer at BitPay.",
      imgSrc: "https://pravatar.cc/300?img=4",
    },
    {
      name: "Clinton",
      title: "Team Lead",
      description: "Creator of CipherBrowser and Co-Founder at Nitrous,.",
      imgSrc: "https://pravatar.cc/300?img=5",
    },
    {
      name: "Ruth",
      title: "Developer",
      description: "Previously Co-Founder of Benchrise, Inc.",
      imgSrc: "https://pravatar.cc/300?img=6",
    },
  ];

  return (
    <Box p={4} my={10}>
      <Typography variant="h4" sx={{ mb: 5 }} gutterBottom align="center">
        Nyumba Blockchain Team
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {founders.map((founder, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar
                src={founder.imgSrc}
                alt={`${founder.name} Image`}
                sx={{
                  borderRadius: "50%",
                  width: "150px",
                  height: "150px",
                  marginTop: "16px",
                }}
              />
              <CardContent sx={{ textAlign: "center", flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {founder.name}
                </Typography>
                <Typography variant="body1" color="primary">
                  {founder.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Founders;
