import {
  Navbar as NextNavbar,
  Link,
  Text,
  Avatar,
  Dropdown,
  Tooltip,
  Loading,
} from "@nextui-org/react";
import { collapseItems } from "./constant/collapseItems";
import { SNavbarLayout, STextAuthorize } from "./SNavbar.styled";
import { FaDiscord } from "react-icons/fa";
import { signIn, signOut } from "next-auth/react";
import { useSSR } from "@nextui-org/react";
import { useContext, useState } from "react";
import { AUTH_STAGE_ENUM, AuthContext } from "@/contexts/AuthContext";
import { useRouter } from "next/router";

export const Navbar = () => {
  const { isBrowser } = useSSR();
  const [loading, setLoading] = useState(false);
  const { authStage, session } = useContext(AuthContext);
  const { pathname } = useRouter();

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
          <Link href="/">
            <Text b color="inherit" hideIn="xs">
              Sayonce
            </Text>
          </Link>
        </NextNavbar.Brand>
        <NextNavbar.Content
          enableCursorHighlight
          activeColor="primary"
          hideIn="xs"
          variant="highlight-rounded"
        >
          <NextNavbar.Link isActive={pathname === "/"} href="/">
            Posts
          </NextNavbar.Link>
          <NextNavbar.Link isActive={pathname === "/create"} href="/create">
            Create
          </NextNavbar.Link>
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
            <Tooltip
              content={session?.user.name}
              placement="bottom"
              color={"primary"}
            >
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
            </Tooltip>
            <Dropdown.Menu aria-label="User menu actions" color="primary">
              {authStage === AUTH_STAGE_ENUM.UNAUTHORIZED ? (
                <Dropdown.Item key="profile" css={{ height: "$18" }}>
                  <STextAuthorize
                    // eslint-disable-next-line
                    onClick={async () => {
                      setLoading(true);
                      // eslint-disable-next-line
                      signIn("discord");
                    }}
                  >
                    <FaDiscord />
                    <p>Authorize with Discord</p>
                    {loading && (
                      <Loading
                        color={"white"}
                        size="xs"
                        style={{ marginLeft: "10px" }}
                      />
                    )}
                  </STextAuthorize>
                </Dropdown.Item>
              ) : (
                <Dropdown.Item
                  key="profile"
                  css={{ height: "$18" }}
                  color="error"
                >
                  <STextAuthorize
                    color="error"
                    // eslint-disable-next-line
                    onClick={() => {
                      setLoading(true);
                      // eslint-disable-next-line
                      signOut();
                    }}
                  >
                    <p>Log out</p>
                    {loading && (
                      <Loading
                        color={"white"}
                        size="xs"
                        style={{ marginLeft: "10px" }}
                      />
                    )}
                  </STextAuthorize>
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </NextNavbar.Content>
        <NextNavbar.Collapse>
          {collapseItems.map((item, index) => (
            <NextNavbar.CollapseItem
              key={item.name}
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
                href={item.link}
              >
                {item.name}
              </Link>
            </NextNavbar.CollapseItem>
          ))}
        </NextNavbar.Collapse>
      </NextNavbar>
    </SNavbarLayout>
  );
};
