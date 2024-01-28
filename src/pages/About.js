import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
            fontSize: "25px",
            marginBottom: "25px",
            gap: "30px"
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>

          To customize the welcome message for your restaurant app, you can replace the Lorem Ipsum paragraphs with something more personalized. Here's a suggestion:

          Welcome to Restaurant

          Indulge in an exquisite dining experience where every dish tells a story of passion and culinary mastery. Our menu is crafted with care, offering a fusion of flavors that will tantalize your taste buds and leave you craving for more.

          At Restaurant , we believe in the art of hospitality. From the moment you step through our doors, you're not just a guest; you're family. Our dedicated team is committed to providing you with impeccable service, ensuring that every visit is memorable.

          Whether you're here for a casual meal with friends or a special celebration, we invite you to savor the moment and create unforgettable memories with us.

          Thank you for choosing Restaurant . We look forward to serving you!
        </p>
        <br />

      </Box>
    </Layout>
  );
};

export default About;
