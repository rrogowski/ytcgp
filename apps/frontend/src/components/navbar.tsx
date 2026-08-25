import "./navbar.css";

import { Icon } from "../components/icon";
import { Button } from "../design-system/components/button";
import { Column } from "../design-system/components/column";
import { Row } from "../design-system/components/row";
import { Text } from "../design-system/components/text";
import { useAuth } from "../lib/auth";
import { useRouter } from "../lib/router";
import { useWonderPicks } from "../lib/wonder-picks";

const NAVBAR_BUTTONS = [
  { icon: "book_5", path: "/binder", aliases: ["/", "/search"] },
  { icon: "store", path: "/packs", aliases: ["/pack", "/craft"] },
  { icon: "diversity_3", path: "/community" },
  { icon: "select_all", path: "/wonder-pick" },
  { icon: "draft", path: "/draft" },
];

export const Navbar: React.FC<{ type: "desktop" | "mobile" }> = (props) => {
  const auth = useAuth();
  const router = useRouter();
  const wonderPicks = useWonderPicks();
  const Component = props.type === "desktop" ? Column : Row;

  return (
    <Component
      backgroundColor="#7d5646"
      className={`Navbar ${props.type}`}
      gap="0.5rem"
      justifyContent={props.type === "mobile" ? "space-around" : ""}
      padding={props.type === "desktop" ? "1rem 0.5rem" : "0.5rem"}
    >
      {NAVBAR_BUTTONS.map(({ icon, path, aliases = [] }) => {
        const isActive = [path, ...aliases].includes(router.path);
        return (
          <Button
            key={path}
            alignItems="center"
            aspectRatio="1 / 1"
            backgroundColor={isActive ? "white" : "inherit"}
            borderRadius="0.75rem"
            color={isActive ? "inherit" : "white"}
            disabled={auth.user === null}
            display="flex"
            fontSize="1.5rem"
            justifyContent="center"
            position="relative"
            width="2.375rem"
            onClick={() => router.navigate(path)}
          >
            <Icon>{icon}</Icon>
            {path === "/wonder-pick" && wonderPicks.hasNewPicks && (
              <Text
                backgroundColor="red"
                borderRadius="0.25rem"
                color="white"
                fontSize="0.6rem"
                padding="0.25rem"
                pointerEvents="none"
                position="absolute"
                right="-0.5rem"
                top="-0.5rem"
              >
                New
              </Text>
            )}
          </Button>
        );
      })}
    </Component>
  );
};
