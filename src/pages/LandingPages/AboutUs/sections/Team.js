
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
// Material Kit 2 React examples


import Promotional from "../../../../../src/view/Homepage/Promotional"
function Team() {
  const image = "https://i.ibb.co/FVckyHp/patrickrefined-removebg-preview.png"
 
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="white"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid>
  
       
        <div className="promotional-full-container">

         <div className="container">
        <Grid container spacing={10}>
          <Grid item xs={12} sm={6}>

            <Promotional pageHeaderBgImg="" pageHeaderMinVh="20vh" />

        
            <Typography variant="body2" color="green" opacity={0.8}>
              Connect with me
            </Typography>
            <Grid container spacing={3} sx={{ mb: 12 }}>
            <Grid item xs={3} md={4} lg={2}>
           <FacebookIcon />
          </Grid>
          <Grid item xs={3} md={4} lg={2}>
            <TwitterIcon />
          </Grid>
          <Grid item xs={3} md={4} lg={2}>
            <GitHubIcon />
          </Grid>
          <Grid item xs={3} md={4} lg={2}>
            <YouTubeIcon />
          </Grid>
          </Grid>
      
          </Grid>
          <Grid item xs={12} sm={6}>
      
      <MKBox position="relative" borderRadius="lg" mx={2} mt={-3}>

     
            <CenteredBlogCard
              image="https://i.ibb.co/FVckyHp/patrickrefined-removebg-preview.png"
              title="Patrick M."
              description="''On the other hand, we cannot ignore efficiency.'' "
              component="img"
              src={image}
              loading="lazy"
              action={{
                type: "internal",
                route: "/about-us",
                color: "info",
                label: "message me",
              }}          
            />
      </MKBox>
      <MKBox p={3} mt={-1} textAlign="center">
        <MKTypography display="inline" variant="h5" textTransform="capitalize" fontWeight="regular">
        
        </MKTypography>
        <MKBox mt={1} mb={3}>
          <MKTypography variant="body2" component="p" color="text">
        
          </MKTypography>
        </MKBox>
    
      </MKBox>
      
          </Grid>
        </Grid>
        </div>
       
    </div>
  

        </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
