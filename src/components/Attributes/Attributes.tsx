import StatsMeter from "../StatsMeter/StatsMeter";
import * as s from "./Attributes.styles";

type TAttributes = {
  data: Data;
};

type Data = {
  title: string;
  ux: StatsData;
  graphic: StatsData;
};

type StatsData = {
  title: string;
  stats: Stats[];
};

type Stats = {
  title: string;
  stats: number;
};
const Attributes = (props: TAttributes) => {
  return (
    <s.AttributesContainer>
      {props.data.title && <span className="title">{props.data.title}</span>}
      <s.StatsContainer>
        <s.Container>
          {props.data.ux.title && (
            <span className="sectionTitle">{props.data.ux.title}</span>
          )}
          {props.data.ux.stats.length != 0 &&
            props.data.ux.stats.map((e, i) => {
              return <StatsMeter title={e.title} stats={e.stats} key={i} />;
            })}
        </s.Container>
        <s.Container>
          {props.data.ux.title && (
            <span className="sectionTitle">{props.data.graphic.title}</span>
          )}
          {props.data.graphic.stats.length != 0 &&
            props.data.graphic.stats.map((e, i) => {
              return <StatsMeter title={e.title} stats={e.stats} key={i} />;
            })}
        </s.Container>
      </s.StatsContainer>
    </s.AttributesContainer>
  );
};

export default Attributes;
