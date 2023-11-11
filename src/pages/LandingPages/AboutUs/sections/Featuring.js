
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

// Images

import svgcraft from "assets/images/logos/gray-logos/logo-svgcraft.png";
import carsbids from "assets/images/logos/gray-logos/cars-bids.png";
import mackenya from "assets/images/logos/gray-logos/mackenya.png";
import tradekin from "assets/images/logos/gray-logos/tradekin.png";

function Featuring() {
  return (
    <MKBox component="section" pt={3} pb={8}>
      <Container>
        <Grid container spacing={3} sx={{ mb: 12 }}>
          <Grid item xs={6} md={3} lg={3}>
            <MKBox component="img" src={svgcraft} alt="svgcraft" width="100%" opacity={0.8} />
          </Grid>
          <Grid item xs={6} md={3} lg={3}>
            <MKBox component="img" src={carsbids} alt="carsbids" width="100%" opacity={2} />
          </Grid>
          <Grid item xs={6} md={3} lg={3}>
            <MKBox component="img" src={mackenya} alt="mackenya" width="100%" opacity={0.8} />
          </Grid>
          <Grid item xs={6} md={3} lg={3}>
            <MKBox component="img" src={tradekin} alt="tradekin" width="71%" opacity={2} />
          </Grid>
            

    
    
        </Grid>
        <Grid container justifyContent="center" sx={{ textAlign: "center" }}>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={50}
              separator=","
              suffix="+"
              title="Projects"
              description="Number of High Level projects completed."
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={4000}
              separator=","
              suffix="+"
              title="Hours"
              description="Hours our developers have spent coding."
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={24}
              suffix="/7"
              title="Support"
              description="Our Team offers 24/7 support for our projects."
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Featuring;
