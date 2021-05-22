import { useState } from "react";
import styled from "styled-components";

export const Box = ({player, mark, clickBox, index, result}) => {
  const [isShown, setIsShown] = useState(false)

  return (
  <StyledBox 
    onMouseEnter={() => !result && setIsShown(true)}
    onMouseLeave={() => setIsShown(false)}
    onClick={() => !result && (mark === null) && clickBox(index)}
    mark
    result
  >
    <span className="mark">
      {mark}
    </span>
    <span className="hover">
      {(mark === null) && isShown && player}
    </span>
  </StyledBox>
  );
};

const StyledBox =styled.div`
  height: 5rem;
  width: 5rem;
  border: 5px solid blanchedalmond;
  text-align: center;
  text-justify: center;
  font-weight: 700;
  font-size: 3rem;
  box-shadow: 5px 5px 10px blueviolet;
  border-radius: 12px;
  /* cursor: ${props => props.result === true ? "not-allowed" : "pointer"}; */
  .hover{
    color: rgba(0,0,0,0.5)
  }
  .mark{
    color: #34656d;
  }
`