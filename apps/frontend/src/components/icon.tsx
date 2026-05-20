import { ui } from "./ui";

export const Icon: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <ui.span className="material-symbols-outlined" fontSize="inherit">
      {props.children}
    </ui.span>
  );
};
