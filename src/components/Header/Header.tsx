import { Link, useLocation } from "react-router-dom";
import * as s from "./Header.style";
import HouseboatRoundedIcon from "@mui/icons-material/HouseboatRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";

const Header = () => {
  const currentRoute = useLocation();

  return (
    <s.HeaderContainer>
      <s.Content>
        <div>
          <HouseboatRoundedIcon style={{ fontSize: "48px" }} />
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <s.Text currentroute={currentRoute.pathname === "/" ? 1 : 0}>
              Home
            </s.Text>
          </Link>
        </div>
        <div>
          <Link to={"/project"} style={{ textDecoration: "none" }}>
            <s.Text currentroute={currentRoute.pathname === "/project" ? 1 : 0}>
              Project
            </s.Text>
          </Link>
          <Link to={"/about"} style={{ textDecoration: "none" }}>
            <s.Text currentroute={currentRoute.pathname === "/about" ? 1 : 0}>
              About
            </s.Text>
          </Link>
          <DarkModeRoundedIcon style={{ fontSize: "32px" }} />
        </div>
      </s.Content>
    </s.HeaderContainer>
  );
};

export default Header;
