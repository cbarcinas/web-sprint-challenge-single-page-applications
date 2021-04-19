import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-image: url("https://images.unsplash.com/photo-1589906493606-a6ca2a06078b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80");
`;

// export const ContentContainer = styled.div``;

export const Logo = styled.h2`
  color: white;
  font-size: 3rem;
`;

export const NavLinks = styled.ul`
  display: flex;
`;

export const NavItems = styled.ul`
  list-style: none;
`;
export const NavAnchor = styled.ul`
  text-decoration: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: white;
`;

export const OrderButton = styled.button`
  padding: 1rem 1.5rem;
`;
