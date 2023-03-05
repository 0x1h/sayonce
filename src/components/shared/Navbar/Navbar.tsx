import {
  Navbar as NextNavbar,
  Link,
  Text,
  Avatar,
  Dropdown,
} from "@nextui-org/react";
import { collapseItems } from "./constant/collapseItems";
import { SNavbarLayout } from "./SNavbar.styled";

export const Navbar = () => {
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
                <Avatar bordered as="button" color="primary" size="md" />
              </Dropdown.Trigger>
            </NextNavbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="primary"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  zoey@example.com
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="error">
                Log Out
              </Dropdown.Item>
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
