import { Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from "../../styles/banner";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer >
      <BannerImage src="/images/banner/banner.jpg" />
      <BannerContent>
        <Typography variant="h6">Best Seller Art</Typography>
        <BannerTitle variant="h2">
          BW Collection
        </BannerTitle>

        <BannerDescription variant="subtitle">
          From our black & white fall collection, the BW Tulips are
          the most popular. Grab one today at 10% off!! 
        </BannerDescription>

        <BannerShopButton color="primary">Shop Now</BannerShopButton>
      </BannerContent>
    </BannerContainer>
  );
}
