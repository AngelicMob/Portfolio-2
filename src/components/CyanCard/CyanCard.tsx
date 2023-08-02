import * as s from "./CyanCard.style";

type TCyanCard = {
  sectionTitleVisible?: boolean;
  sectionTitle?: string;
  card: {
    initalText?: string;
    title?: string;
    description?: string;
  };
};

const CyanCard = (props: TCyanCard) => {
  return (
    <s.CyanCardContainer>
      {props.sectionTitleVisible && (
        <s.SectionTitle>
          <span>{props.sectionTitle}</span>
        </s.SectionTitle>
      )}
      <s.CyanCard>
        {props.card.initalText && (
          <span className="intro">{props.card.initalText}</span>
        )}
        {props.card.title && <span className="title">{props.card.title}</span>}
        {props.card.description && (
          <span className="desc">{props.card.description}</span>
        )}
      </s.CyanCard>
    </s.CyanCardContainer>
  );
};

export default CyanCard;
