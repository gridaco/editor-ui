import React, { CSSProperties, useState } from "react";
import styled from "@emotion/styled";
import Icon from "../../../icons/";
import ColorPicker from "./color-picker";

const colors = [
  "aliceblue",
  "antiquewhite",
  "aqua",
  "aquamarine",
  "azure",
  "beige",
  "bisque",
  "black",
  "blanchedalmond",
  "blue",
  "blueviolet",
  "brown",
  "burlywood",
  "cadetblue",
  "chartreuse",
  "chocolate",
  "coral",
  "cornflowerblue",
  "cornsilk",
  "crimson",
  "cyan",
  "darkblue",
  "darkcyan",
  "darkgoldenrod",
  "darkgray",
  "darkgreen",
  "darkgrey",
  "darkkhaki",
  "darkmagenta",
  "darkolivegreen",
  "darkorange",
  "darkorchid",
  "darkred",
  "darksalmon",
  "darkseagreen",
  "darkslateblue",
  "darkslategray",
  "darkslategrey",
  "darkturquoise",
  "darkviolet",
  "deeppink",
  "deepskyblue",
  "dimgray",
  "dimgrey",
  "dodgerblue",
  "firebrick",
  "floralwhite",
  "forestgreen",
  "fuchsia",
  "gainsboro",
  "ghostwhite",
  "gold",
  "goldenrod",
  "gray",
  "green",
  "greenyellow",
  "grey",
  "honeydew",
  "hotpink",
  "indianred",
  "indigo",
  "ivory",
  "khaki",
  "lavender",
  "lavenderblush",
  "lawngreen",
  "lemonchiffon",
  "lightblue",
  "lightcoral",
  "lightcyan",
  "lightgoldenrodyellow",
  "lightgray",
  "lightgreen",
  "lightgrey",
  "lightpink",
  "lightsalmon",
  "lightseagreen",
  "lightskyblue",
  "lightslategray",
  "lightslategrey",
  "lightsteelblue",
  "lightyellow",
  "lime",
  "limegreen",
  "linen",
  "magenta",
  "maroon",
  "mediumaquamarine",
  "mediumblue",
  "mediumorchid",
  "mediumpurple",
  "mediumseagreen",
  "mediumslateblue",
  "mediumspringgreen",
  "mediumturquoise",
  "mediumvioletred",
  "midnightblue",
  "mintcream",
  "mistyrose",
  "moccasin",
  "navajowhite",
  "navy",
  "oldlace",
  "olive",
  "olivedrab",
  "orange",
  "orangered",
  "orchid",
  "palegoldenrod",
  "palegreen",
  "paleturquoise",
  "palevioletred",
  "papayawhip",
  "peachpuff",
  "peru",
  "pink",
  "plum",
  "powderblue",
  "purple",
  "rebeccapurple",
  "red",
  "rosybrown",
  "royalblue",
  "saddlebrown",
  "salmon",
  "sandybrown",
  "seagreen",
  "seashell",
  "sienna",
  "silver",
  "skyblue",
  "slateblue",
  "slategray",
  "slategrey",
  "snow",
  "springgreen",
  "steelblue",
  "tan",
  "teal",
  "thistle",
  "tomato",
  "transparent",
  "turquoise",
  "violet",
  "wheat",
  "white",
  "whitesmoke",
  "yellow",
  "yellowgreen",
];

interface BackgroundInputStyledProps {
  definedColor: CSSProperties["backgroundColor"];
}

function BackgrounInput() {
  const [color, setColor] = useState({ hex: "", alpha: "" });

  return (
    <Wrapper>
      <ColorPicker />
      <CustomColorSelector>
        <ColorInputArea>
          <Icon name="pipette" />

          <div className="custom-area">
            <div className="color-hex">
              <span>#</span>
              <input
                placeholder="FFFFFF"
                maxLength={6}
                value={color.hex}
                onChange={({ target: { value } }) =>
                  setColor((d) => ({
                    ...d,
                    hex: value,
                  }))
                }
              />
            </div>
            <div className="alpha-percent">
              <input
                placeholder="100"
                maxLength={3}
                value={color.alpha}
                onChange={({ target: { value } }) =>
                  setColor((d) => ({
                    ...d,
                    alpha: value.length === 3 ? "100" : value,
                  }))
                }
              />
              <span>%</span>
            </div>
          </div>
        </ColorInputArea>
        <DefinedColorArea>
          <select>
            <option>Document</option>
          </select>
          <div className="defined-color-list">
            {colors.map((i) => (
              <DefinedColor definedColor={i} />
            ))}
          </div>
        </DefinedColorArea>
      </CustomColorSelector>
    </Wrapper>
  );
}

export default BackgrounInput;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 420px;
  box-shadow: 0px 4px 16px 2px rgba(82, 82, 82, 0.04);

  input,
  select {
    outline: none;
    border: none;
    width: 100%;
  }
`;

const CustomColorSelector = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 12px;
`;

const ColorInputArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    cursor: pointer;
  }

  span {
    color: #818181;
  }

  .custom-area {
    width: 180px;
    display: flex;
    justify-content: space-between;

    .color-hex {
      display: flex;
      width: calc(100% - 80px);
    }

    .alpha-percent {
      display: flex;
      width: 40px;
    }
  }
`;

const DefinedColorArea = styled.div`
  margin-top: 12px;

  select {
    width: 50% !important;
  }

  .defined-color-list {
    overflow-y: auto;
    display: grid;
    height: 75px;

    margin-top: 10px;
    grid-template-columns: repeat(auto-fill, minmax(21px, 1fr));
    grid-column-gap: 4px;
    grid-row-gap: 4px;
  }
`;

const DefinedColor = styled.div<BackgroundInputStyledProps>`
  cursor: pointer;
  width: 21px;
  height: 21px;
  border-radius: 50%;
  background-color: ${(p) => p.definedColor};
`;
