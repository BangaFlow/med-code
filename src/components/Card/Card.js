import React from "react";
import { StyledCard } from "./Card.styles";
import Badge from "../Badge/Badge";

const Card = ({ drug }) => {
  return (
    <StyledCard>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2 style={{ marginBottom: "10px", marginTop: "0px" }}>{drug.name}</h2>
        {drug.released}
      </div>
      {drug.diseases.map((disease) => {
        return <Badge key={disease}>{disease}</Badge>;
      })}
      <p>{drug.description}</p>
    </StyledCard>
  );
};

export default Card;
