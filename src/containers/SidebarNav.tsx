import { useLocation, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Accordion from "react-bootstrap/Accordion";
import Icon from "../components/Icon";

const SidebarNav = ({ items }: any) => {
  const location = useLocation();
  const { pathname } = location;

  const CollapsableNavItem = (props: any) => {
    const {
      item: { to, name, icon, items: navs },
    } = props;
    const defaultKey = pathname.indexOf(to) !== -1 ? to : "";

    return (
      <Accordion as={Nav.Item} defaultActiveKey={defaultKey}>
        <Accordion.Item eventKey={to}>
          <Accordion.Button
            as={Nav.Link}
            className="d-flex justify-content-between align-items-center"
          >
            <span>
              <span className="sidebar-icon">
                <Icon name={icon} />{" "}
              </span>
              <span className="sidebar-text">{name}</span>
            </span>
          </Accordion.Button>
          <Accordion.Body className="multi-level">
            <Nav className="flex-column">
              {navs?.map((item: any, index: any) =>
                item.items ? (
                  <CollapsableNavItem key={index} item={item} />
                ) : (
                  <NavItem
                    key={index}
                    title={item.name}
                    link={item.to}
                    icon={item.icon}
                  />
                )
              )}
            </Nav>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  };

  const NavItem = (props: any) => {
    const { title, link, external, target, icon } = props;
    const navLinkClassName = link === pathname ? "active" : "";
    const linkProps = external ? { href: link } : { as: Link, to: link };

    return (
      <Nav.Item>
        <Nav.Link
          {...(linkProps as any)}
          target={target}
          className={navLinkClassName as string}
        >
          <span>
            {icon ? <Icon name={icon} /> : null}
            <span className="sidebar-text">{title}</span>
          </span>
        </Nav.Link>
      </Nav.Item>
    );
  };

  return (
    <Nav className="flex-column pt-3 pt-md-0">
      {items &&
        items.map((item: any, index: any) => {
          if (item.divider) return <hr key={index} />;
          return item.items ? (
            <CollapsableNavItem key={index} item={item} />
          ) : (
            <NavItem
              key={index}
              title={item.name}
              link={item.to}
              icon={item.icon}
            />
          );
        })}
    </Nav>
  );
};

export default SidebarNav;
