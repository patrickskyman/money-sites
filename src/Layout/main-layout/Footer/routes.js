// react-router-dom components

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const router = {
  brand: "Moneysites",
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/Moneysites/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/moneysites",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/moneysites",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", href: "https://moneysites.net/about-us" },
        { name: "freebies", href: "https://moneysites.net/freebies" },
        { name: "blog", href: "https://moneysites.net/blog" },
      ],
    },
    {
      name: "resources",
      items: [
        { name: "affiliate program", href: "https://moneysites.net/affiliate-program"},
        { name: "Our Works", href: "https://moneysites.net/"},
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", href: "https://moneysites.net/contact-us"},
        { name: "knowledge center",href: "https://moneysites.net/knowledge-center" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "https://moneysites.net/terms-conditions"},
        { name: "privacy policy", href: "https://moneysites.net/privacy-policy" },
      ],
    },
  ],
};

export default router;