import React from "react";
import { Icon } from "../../../components/icon/Icon";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Media = () => {
  return (
    <div>
      <h3>Media</h3>
      <FlexWrapper>
        <Icon
          iconId={"github"}
          width={"32"}
          height={"32"}
          viewBox={"0 0 32 32"}
        />
        <Icon
          iconId={"linkedin"}
          width={"32"}
          height={"32"}
          viewBox={"-4 -4 32 32"}
        />
        <Icon
          iconId={"figma"}
          width={"32"}
          height={"32"}
          viewBox={"0 0 32 32"}
        />
      </FlexWrapper>
    </div>
  );
};
