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
      description: `To stay updated and grow I believe it is really important to keep learning and have fun while at it. `,
    },
    {
      title: "Creativity + Principles",
      imgSrc: "./about_me_icons/my_values/icon2_creative.svg",
      description: "By having principles applied it is way easier to design to maintain professionalism and also be able to provide the right level of creativity in your designs.",
    },
    {
      title: "Stay Humble and Updated ",
      imgSrc: "./about_me_icons/my_values/icon3_humble.svg",
      description: `To keep learning, it is important to stay humble, otherwise it might be easy to stay stuck and not grow further to your potential.`,
    },
    {
      title: "Stay Problem Frame Focused",
      imgSrc: "./about_me_icons/my_values/icon4_problem.svg",
      description: `By finding out the real problem while holding the needs and the stakeholders in mind, it can really provide the best solutions that benefits both.`,
    },
  ],
};

const SectionList2Data = {
  title: `My Kit`,
  subText: ``,
  itemList: [
    {
      title: "UX Designing ",

      description:
        "The key foundations of UX are Design Principles, Research, and problem framing. I can offer both cost-effective and flexible solutions which I have prepared and have in store. ",
    },
    {
      title: "Graphic Design",

      description: "With the knowledge of fundamentals of art and colour theory, I have some knowledge within Graphic design and can apply it within my UI designs.",
    },
    {
      title: "Self Taught Graphic Designer + Artist",

      description: `My interest in art has made me very eager to expand my knowledge within Graphic design as well as motion graphics in order to expand my learnings especially within the Graphical parts of UX the most.`,
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
