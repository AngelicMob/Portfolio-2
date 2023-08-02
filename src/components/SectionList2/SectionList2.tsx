import Card from "../Cards/Card";
import * as s from "./SectionList2.styles";

type TSectionList1 = {
  data: {
    title?: string;
    subText?: string;
    itemList?: ItemList[];
  };
};

export type ItemList = {
  title: string;
  imgSrc: string;
  description: string;
};

const SectionList2 = (props: TSectionList1) => {
  return (
    <s.SectionList2Container>
      {props.data.title && <span className="title">{props.data.title}</span>}
      {props.data.subText && (
        <span className="subTitle">{props.data.subText}</span>
      )}
      <s.ListContainer>
        {props.data.itemList &&
          props.data.itemList.map((e: ItemList) => {
            return <Card withImage={true} data={e} />;
          })}
      </s.ListContainer>
    </s.SectionList2Container>
  );
};

export default SectionList2;
