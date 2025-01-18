import * as s from "./Project.style";
import IntroCard from "../../components/IntroCard/IntroCard";
import CyanCard from "../../components/CyanCard/CyanCard";
import SectionList2 from "../../components/SectionList2/SectionList2";
import DesignPhase from "../../components/DesignPhase/DesignPhase";

const IntroCardData = {
  first: "MY LATEST PROJECT",
  second: `Devinova Block
  Library`,
  third:
    "Devinova's project involved creating a headless CMS for clients, and as a UX designer, my role was to create reusable layout templates with everything editable. To achieve this, I utilized auto layout, properties, instances, and the whole kit and caboodle, so that future UX designers can easily make edits.",
  imgSrc: "./project_icons/devinova.svg",
};

const cyanCardData = {
  sectionTitle: "",
  card: {
    initalText: "THE TASK",
    title: "Creating a Devinova Library Block",
    description: `The need for a more advanced and better-structured Colors + Brand Guidelines and
    Typography that would benefit the business with a structured and professional UI feel.`,
  },
};

const cyanCardData2 = {
  sectionTitle: "Empathy",
  card: {
    description: `To understand and provide along with the vision of the company, I went through an Empathy phase.
    The main focus was to create a headless CMS for customers, and since the developers had limited amount of the time, the focus for me as a UX designer was to design prototypes on how these layouts would look like.`,
  },
};
const phasesData = {
  title: `Phases: `,
  subText: ``,
  itemList: [
    {
      title: "Empathy",
      imgSrc: "./project_icons/section1_phases/icon1_empathy.svg",
      description: `Interviewed Stakeholders, and made sure the product owners vision was understood, in order to deliver the right style and design.`,
    },
    {
      title: "Design",
      imgSrc: "./project_icons/section1_phases/icon2_design.svg",
      description:
        "Followed and used 3 basic heuristics to construct the layout designs.",
    },
    {
      title: "Iteration",
      imgSrc: "./project_icons/section1_phases/icon3_iterate.svg",
      description: `Upon iterating, I was able to deliver the stakeholders expectations and further improve the design of the templates.`,
    },
  ],
  imageAvailable: true,
};

const DesignPhaseData = {
  sectionTitleVisible: true,
  sectionTitle: "Design Phase",
  initiacardData:
    "By following all UI principles and guidelines, I created the layout and updated the components. I also utilized my UX knowledge and research to create a smooth transition between Dark and Light Mode by using HSL in the Colors and testing with neutral and primary colors.",
};

const keyLearningsData = {
  title: `Key Learnings`,
  subText: ``,
  itemList: [
    {
      title: "Preciseness (Graphic Design)",
      imgSrc: "./exArt.jpg",
      description: `I gained a lot of experience in more pixel perfect design such as: Baseline Grid
      and Typography. Even though it is a basic thing, I really gained a lot of knowledge for a more
      prettier UI look. `,
    },
    {
      title: "Good Color System",
      imgSrc: "./exArt.jpg",
      description: `By tons of testing and using HSL, I really learned how to create a System that was easy
      and editable for multiple variations of styles. `,
    },
    {
      title: "Consistency",
      imgSrc: "./exArt.jpg",
      description: `Creating the different Layouts for the Block library gave a great practice within the
      UI aspect of UX. `,
    },
  ],
};
const Project = () => {
  return (
    <s.ProjectPageContainer>
      <s.Section>
        <IntroCard data={IntroCardData} buttonVisible={false} />
      </s.Section>
      <s.Section>
        <CyanCard {...cyanCardData} sectionTitleVisible={false} />
      </s.Section>
      <s.Section>
        <SectionList2 data={phasesData}></SectionList2>
      </s.Section>
      <s.Section>
        <CyanCard {...cyanCardData2} sectionTitleVisible={true} />
      </s.Section>
      <s.Section>
        <DesignPhase {...DesignPhaseData} />
      </s.Section>
      <s.Section>
        <SectionList2 data={keyLearningsData}></SectionList2>
      </s.Section>
    </s.ProjectPageContainer>
  );
};

export default Project;
