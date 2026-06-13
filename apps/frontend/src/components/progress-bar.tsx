import { ui, type ComponentProps } from "./ui";

interface Props extends ComponentProps<"div"> {
  currentValue: number;
  maxValue: number;
}

export const ProgressBar: React.FC<Props> = (props) => {
  const { backgroundColor, currentValue, maxValue, ...divProps } = props;
  const percentage = Math.min(
    100,
    maxValue === 0 ? 100 : (100 * currentValue) / maxValue,
  );

  return (
    <ui.div
      backgroundColor="gray"
      border="solid gray 1px"
      borderRadius="0.5rem"
      overflow="hidden"
      position="relative"
      {...divProps}
    >
      <ui.div
        alignItems="center"
        backgroundColor={backgroundColor}
        display="flex"
        justifyContent="center"
        position="absolute"
        height="100%"
        width={`${percentage}%`}
      ></ui.div>
      <ui.div
        alignItems="center"
        display="flex"
        fontSize="0.875rem"
        justifyContent="center"
        position="absolute"
        height="100%"
        width="100%"
      >
        {parseFloat(percentage.toFixed(2))}%
      </ui.div>
    </ui.div>
  );
};
