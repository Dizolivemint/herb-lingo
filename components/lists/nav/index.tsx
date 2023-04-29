import styled from 'styled-components';
import Link from 'next/link';
import Button from '@/components/button';

const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    margin: 0 1rem;
  }
`;

type NavProps = {
  list: {
    name: string;
    href: string;
  }[];
};

const Nav = (props: NavProps) => {
  return (
    <nav>
      <List>
        {props.list.map((item, index) => {
          return (
            <li key={index}>
              <Button>
                <Link href={item.href}>
                  {item.name}
                </Link>
              </Button>
            </li>
          )
        })}
      </List>
    </nav>
  );
};

export default Nav;