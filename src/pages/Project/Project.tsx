import React from "react";
import * as s from "./Project.style";
import IntroCard from "../../components/IntroCard/IntroCard";
import CyanCard from "../../components/CyanCard/CyanCard";
import SectionList2 from "../../components/SectionList2/SectionList2";
type TProject = {};

const IntroCardData = {
  first: "MY LATEST PROJECT",
  second: `Devinova Block
  Library`,
  third:
    "Devinova's project involved creating a headless CMS for clients, and as a UX designer, my role was to create reusable layout templates with everything editable. To achieve this, I utilized auto layout, properties, instances, and the whole kit and caboodle, so that future UX designers can easily make edits.",
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
    description: `By problem framing very good, you can uncover the solutions that are best suited for the right problem. Which is why I believe it is one of the most important aspect in UX.`,
  },
};
const phasesData = {
  title: `Phases: `,
  subText: ``,
  itemList: [
    {
      title: "Empathy",
      imgSrc: "./exArt.jpg",
      description: `Interviewed Stakeholders, `,
    },
    {
      title: "Design",
      imgSrc: "./exArt.jpg",
      description:
        "Followed and used 3 basic heuristics to construct the layout designs.",
    },
    {
      title: "Iteration",
      imgSrc: "./exArt.jpg",
      description: `Immersive Interactions delivers a great and smooth iterating
      opportunity, and also allows faster feedback for improvements!`,
    },
  ],
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
const Project = (props: TProject) => {
  return (
    <s.ProjectPageContainer>
      <s.Section>
        <IntroCard data={IntroCardData} buttonVisible={true} />
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
        <SectionList2 data={keyLearningsData}></SectionList2>
      </s.Section>
    </s.ProjectPageContainer>
  );
};

export default Project;
