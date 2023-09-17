import React from "react";
import ListItem from "./ListItem/ListItem";
import * as s from "./SectionList1.styles";

type TSectionList1 = {
  data: {
    title?: string;
    subText?: string;
    itemList?: ItemList[];
  };
};

export type ItemList = {
  title?: string;
  imgSrc?: string;
  description?: string;
};

const SectionList1 = (props: TSectionList1) => {
  return (
    <s.SectionList1Container>
      {props.data.title && <span className="title">{props.data.title}</span>}
      {props.data.subText && (
        <span className="subTitle">{props.data.subText}</span>
      )}
      <s.ListContainer>
        {props.data.itemList &&
          props.data.itemList.map((e: ItemList) => {
            return (
              <React.Fragment key={e.title}>
                {" "}
                <ListItem data={e} />
              </React.Fragment>
            );
          })}
      </s.ListContainer>
    </s.SectionList1Container>
  );
};

export default SectionList1;
