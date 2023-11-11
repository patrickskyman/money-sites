
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { Box} from "@mui/material";
import { Link } from "react-router-dom"
import Typography from '@mui/material/Typography';


import Card from '@mui/material/Card';


import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";



function Information() {
  return (
 
       <>
       <Container>
       <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <Typography variant="h2" color="red">Loved by </Typography>
          <Typography variant="h2" color="green" textGradient mb={2}>
            20000+ developers
          </Typography>
          <Typography variant="body1" color="text" mb={2}>
           500+ companies love
            our services.
          </Typography>
        </Grid>
   <Box
    sx={{
      display: 'flex',
      gap: 1,
      py: 1,
      overflow: 'auto',
      width: 'auto',
     
      margin: 1,
      scrollSnapType: 'x mandatory',
      '& > *': {
        scrollSnapAlign: 'center',
      },
      '::-webkit-scrollbar': { display: 'none' },
    }}
  >
  <Link to="">
    <Card variant="outlined" sx={{ width: 360 }}>
    <DefaultReviewCard
              name="Pat Fredrick"
              date="1 day ago"
              review="This is an excellent product, the documentation is excellent and helped me get things done more efficiently."
              rating={5}
            />
  </Card>
  </Link>
  <Link to="">
  <Card variant="outlined" sx={{ width: 360 }}>
  <DefaultReviewCard
              name="Michael Jonathan"
              date="1 day ago"
              review="This is an excellent product, the documentation is excellent and helped me get things done more efficiently."
              rating={5}
            />
  </Card>
</Link>
<Link to="">
  <Card variant="outlined" sx={{ width: 360 }}>
  <DefaultReviewCard
              name="Anna"
              date="1 day ago"
              review="This is an excellent product, the documentation is excellent and helped me get things done more efficiently."
              rating={5}
            />
  </Card>
</Link>
 
      
            </Box>
        
        <Divider sx={{ my: 6 }} />
        <Grid container spacing={3} justifyContent="center">
        <Typography color="green">
        Become part of our success journey today.
        </Typography>
        </Grid>
        </Container>
        </>
  );
}

export default Information;
