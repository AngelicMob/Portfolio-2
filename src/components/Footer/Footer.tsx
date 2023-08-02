import React from "react";
import * as s from "./Footer.style";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
type TFooter = {};

const Footer = (props: TFooter) => {
  return (
    <s.FooterContainer>
      <s.Content>
        <s.Text>Let's Connect</s.Text>
        <div>
          <MailOutlineRoundedIcon style={{ fontSize: "32px" }} />
          <LinkedInIcon style={{ fontSize: "32px" }} />
        </div>
      </s.Content>
    </s.FooterContainer>
  );
};

export default Footer;
