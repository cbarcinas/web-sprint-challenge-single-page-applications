import React from "react";
import { Link } from "react-router-dom";
import * as style from "./StyledComponents";

const Home = () => {
  return (
    <div>
      <style.Container>
        <style.Nav>
            <style.Logo textColor="white">Lambda Eats</style.Logo>        
          <style.NavLinks>
            <style.NavItems>
              <style.NavAnchor href="#">Home</style.NavAnchor>
            </style.NavItems>
            <style.NavItems>
              <style.NavAnchor href="#">Contact</style.NavAnchor>
            </style.NavItems>
          </style.NavLinks>
        </style.Nav>

        <Link to="/pizza">
          <button>Order</button>
        </Link>
      </style.Container>
    </div>
  );
};

export default Home;
