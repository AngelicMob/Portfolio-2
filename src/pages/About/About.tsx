import Attributes from "../../components/Attributes/Attributes";
import IntroCard from "../../components/IntroCard/IntroCard";
import OutSideWorkSection from "../../components/OutsideWorkSection/OutSideWorkSection";
import SectionList1 from "../../components/SectionList1/SectionList1";
import SectionList2 from "../../components/SectionList2/SectionList2";
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
  imgSrc: "./Snowmen/AboutMe/hobbies.svg",
};

const SectionList1Data = {
  subText: `My Values`,
  itemList: [
    {
      title: "Keep Learning",
      imgSrc: "./about_me_icons/my_values/icon1_learn.svg",
      description: `By problem framing very good, you can uncover the solutions that are best suited for the right problem. Which is why I believe it is one of the most important aspect in UX.`,
    },
    {
      title: "Creativity + Principles",
      imgSrc: "./about_me_icons/my_values/icon2_creative.svg",
      description: "If you uncover the right",
    },
    {
      title: "Stay Humble and Updated ",
      imgSrc: "./about_me_icons/my_values/icon3_humble.svg",
      description: `Immersive Interactions delivers a great and smooth iterating opportunity, and also allows faster feedback for improvements!`,
    },
    {
      title: "Stay Problem Frame Focused",
      imgSrc: "./about_me_icons/my_values/icon4_problem.svg",
      description: `Immersive Interactions delivers a great and smooth iterating opportunity, and also allows faster feedback for improvements!`,
    },
  ],
};

const SectionList2Data = {
  title: `My Knowledge Kit`,
  subText: ``,
  itemList: [
    {
      title: "UX Designing ",

      description:
        "I gained a lot of experience in more pixel perfect design such as: Baseline Grid and Typography. Even though it is a basic thing, I really gained a lot of knowledge for a more prettier UI look. ",
    },
    {
      title: "Graphic Design",

      description: "sy",
    },
    {
      title: "Self Taught Graphic Designer + Artist",

      description: `Creating the different Layouts for the Block library`,
    },
  ],
};

const AttributesData = {
  title: "Attributes",
  ux: {
    title: "UX & UI",
    stats: [
      { title: "Figma", stats: 5 },
      { title: "Protopie", stats: 2 },
      { title: "UI Design", stats: 5 },
      { title: "UX Research", stats: 3 },
    ],
  },
  graphic: {
    title: "Graphic + Digital Design",
    stats: [
      { title: "Adobe Illustrator", stats: 3 },
      { title: "Adobe Photoshop", stats: 3 },
      { title: "Adobe After Effects", stats: 1 },
    ],
  },
};
const About = () => {
  return (
    <s.AboutPageContainer>
      <s.Section>
        <IntroCard data={IntroCardData} buttonVisible={false} />
      </s.Section>
      <s.Section>
        <SectionList1 data={SectionList1Data}></SectionList1>
      </s.Section>
      <div style={{ height: "150px" }}></div>
      <s.SectionWhite className="whiteBg">
        <OutSideWorkSection />
      </s.SectionWhite>
      <s.SectionCyan>
        <SectionList2 data={SectionList2Data}></SectionList2>
      </s.SectionCyan>
      <s.Section>
        <Attributes data={AttributesData} />
      </s.Section>
    </s.AboutPageContainer>
  );
};

export default About;
