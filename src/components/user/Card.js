import React from "react";
import { useNode, Element, useEditor } from "@craftjs/core";
import { Text } from "./Text";
import { Button } from "./Button";
import { Container } from "./Container";

export const Card = ({ background, padding = 20 }) => {
  const editor = useEditor();
  console.log(editor);
  return (
    <Container background={background} padding={padding}>
      <Element id="text" canvas>
        <Text text="Title" fontSize={20} />
        <Text text="Subtitle" fontSize={15} />
      </Element>
      <Element id="buttons" canvas>
        <Button size="small" text="Learn more" />
      </Element>
    </Container>
  );
};
