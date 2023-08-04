import IntroCard from "../../components/IntroCard/IntroCard";
import * as s from "./About.style";

const IntroCardData = {
  second: `Some things
  about me`,
  third: `My entry point within IT started with programming. The education programs I’ve attended came with
  6 month period of internship. During my internship I’ve come to a discovery of what I really wanted
  to focus within the IT. UX!

  I fell in love with the process of discovery, empathy phases to get to know the real
  problems and provide solutions to them. 

  It’s real fun to me when the designs you create actually solve problems. And I am very
  interested to become better at the UI and interaction part of UX.`,
};

const About = () => {
  return (
    <s.AboutPageContainer>
      <s.Section>
        <IntroCard data={IntroCardData} buttonVisible={false} />
      </s.Section>
    </s.AboutPageContainer>
  );
};

export default About;
