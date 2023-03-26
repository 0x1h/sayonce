import {
  Navbar as NextNavbar,
  Link,
  Text,
  Avatar,
  Dropdown,
} from "@nextui-org/react";
import { collapseItems } from "./constant/collapseItems";
import { SNavbarLayout, STextAuthorize } from "./SNavbar.styled";
import { FaDiscord } from "react-icons/fa";
import { signIn, signOut } from "next-auth/react";
import { useSSR } from "@nextui-org/react";
import { useContext } from "react";
import { AUTH_STAGE_ENUM, AuthContext } from "@/contexts/AuthContext";

export const Navbar = () => {
  const { isBrowser } = useSSR();
  const { authStage, session } = useContext(AuthContext);

  if (!isBrowser) return null;

  return (
    <SNavbarLayout>
      <NextNavbar
        isBordered
        variant="sticky"
        css={{
          background: "transparent",
        }}
      >
        <NextNavbar.Toggle showIn="xs" />
        <NextNavbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <Text b color="inherit" hideIn="xs">
            Sayonce
          </Text>
        </NextNavbar.Brand>
        <NextNavbar.Content
          enableCursorHighlight
          activeColor="primary"
          hideIn="xs"
          variant="highlight-rounded"
        >
          <NextNavbar.Link>Posts</NextNavbar.Link>
          <NextNavbar.Link isActive>Create</NextNavbar.Link>
        </NextNavbar.Content>
        <NextNavbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
          <Dropdown placement="bottom-right">
            <NextNavbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="primary"
                  size="md"
                  src={session?.user?.image || ""}
                />
              </Dropdown.Trigger>
            </NextNavbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="primary"
              onAction={(actionKey) => {}}
            >
              {authStage === AUTH_STAGE_ENUM.UNAUTHORIZED ? (
                <Dropdown.Item key="profile" css={{ height: "$18" }}>
                  <STextAuthorize
                    onClick={() => {
                      // eslint-disable-next-line
                      signIn("discord");
                    }}
                  >
                    <FaDiscord />
                    Authorize with Discord
                  </STextAuthorize>
                </Dropdown.Item>
              ) : (
                <Dropdown.Item key="profile" css={{ height: "$18" }} color="error">
                  <STextAuthorize
                    color="error"
                    onClick={() => {
                      // eslint-disable-next-line
                      signOut();
                    }}
                  >
                    Log out
                  </STextAuthorize>
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </NextNavbar.Content>
        <NextNavbar.Collapse>
          {collapseItems.map((item, index) => (
            <NextNavbar.CollapseItem
              key={item}
              activeColor="primary"
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
              }}
              isActive={index === 2}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </NextNavbar.CollapseItem>
          ))}
        </NextNavbar.Collapse>
      </NextNavbar>
    </SNavbarLayout>
  );
};
