import * as s from "./StatsMeter.styles";

type TStatsMeter = {
  title: string;
  stats: number;
};
const tickNumber = [0, 1, 2, 3, 4];
const StatsMeter = (props: TStatsMeter) => {
  return (
    <s.StatsMeterContainer>
      {props.title && <span className="tickTitle">{props.title}</span>}
      <s.TickContainer>
        {tickNumber.map((e, i) => {
          return (
            <s.Tick filled={(props.stats > e).toString()} key={i}></s.Tick>
          );
        })}
      </s.TickContainer>
    </s.StatsMeterContainer>
  );
};

export default StatsMeter;
