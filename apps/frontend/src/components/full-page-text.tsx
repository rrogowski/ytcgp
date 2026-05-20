import { ui } from "./ui";

export const FullPageText: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <ui.div
      alignItems="center"
      display="flex"
      justifyContent="center"
      height="100%"
    >
      {props.children}
    </ui.div>
  );
};
