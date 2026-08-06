import { Center } from "../design-system/components/center";
import { Expanded } from "../design-system/components/expanded";
import { Text } from "../design-system/components/text";

export const FullPageText: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <Expanded>
      <Center>
        <Text>{props.children}</Text>
      </Center>
    </Expanded>
  );
};
