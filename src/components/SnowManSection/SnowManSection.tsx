import * as s from "./SnowManSection.style";
import { createSearchParams, useNavigate } from "react-router-dom";

type TSnowManSection = {
  data: SnowManData[];
};

type SnowManData = {
  linkTo: string;
  imgSrc: string;
  title: string;
};

const SnowManSection = (props: TSnowManSection) => {
  //for attributes that is on the same as about page but on bottom of the page
  const navigate = useNavigate();

  function navigateParams(pathname: string, params: string) {
    const path = {
      pathname,
      search: createSearchParams(params).toString(),
    };
    navigate(path);
  }
  return (
    <s.SnowManSectionContainer>
      {props.data &&
        props.data.map((e: SnowManData, i: number) => {
          return (
            <s.SnowManContainer
              key={e.imgSrc}
              onClick={() => navigateParams(e.linkTo, e.title)}
            >
              <span className="cardTitle">{e.title}</span>
              <s.ImageContainer>
                <img
                  src={e.imgSrc}
                  alt="iconImage"
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "100%",
                  }}
                ></img>
              </s.ImageContainer>
            </s.SnowManContainer>
          );
        })}
    </s.SnowManSectionContainer>
  );
};

export default SnowManSection;
