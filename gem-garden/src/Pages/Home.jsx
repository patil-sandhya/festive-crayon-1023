import React from "react";
import heroimg from "../Assets/Hero_image.jpg";
import styled from "styled-components";
import product_1 from "../Assets/new-collection-product-1.jpg";
import product_2 from "../Assets/new-collection-product-2.jpg";
import product_3 from "../Assets/new-collection-product-3.jpg";
import product_4 from "../Assets/new-collection-product-4.jpg";
import Collectioncard from "../Components/Collectioncard";

function Home() {
  return (
    <DIV>
      <div className="hero-img">
        <img src={heroimg} />
        <div className="hero-text">
          <h1>
            Your Jewlry Search <br />
            Starts Here
          </h1>
          <p>
            Discover the perfect jewlry pieces <br />
            for your uique style at our store
          </p>
        </div>
      </div>

      {/* hero part complete */}

      <div className="new-collections">
        <div className="new-collections-heading">
          <div>
            <h2>New Collections</h2>
            <p>Check Out the New Collections of Famous Brands</p>
          </div>
          <div className="new-collections-heading-right">
            <p>ALL COLLLECTIONS</p>
          </div>
        </div>
        <div className="new-collection-products">
          <Collectioncard
            image={product_1}
            title={"Messika"}
            desc={"Move Uno Collection"}
          />
          <Collectioncard
            image={product_2}
            title={"Cartier"}
            desc={"Love Collection"}
          />
          <Collectioncard
            image={product_3}
            title={"Garrard"}
            desc={"1735 Colection"}
          />
          <Collectioncard
            image={product_4}
            title={"Messika"}
            desc={"Lucky move collection"}
          />
        </div>
      </div>

      {/* New Collection Done */}

      <div className="categories">
        <div className="categories-left">
          <div className="categories-heading">
            <h2>Categories</h2>
            <p>Discover Our collection of Jewelry by categories</p>
          </div>
        </div>
        <div className="categories-right"></div>
      </div>
    </DIV>
  );
}

export default Home;
// font-family: 'Nunito Sans', sans-serif;
// font-family: 'Oswald', sans-serif;
const DIV = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,300;6..12,400&family=Oswald:wght@500&display=swap");

  .hero-img {
    width: 100%;
    object-fit: cover;
    object-position: center;
    position: relative;
    z-index: -1;
  }
  img {
    object-fit: cover;
    width: 100%;
    object-position: center;
  }
  .hero-text {
    position: absolute;
    top: 35%;
    left: 5%;
    color: white;
  }
  .hero-text h1 {
    font-family: "Oswald", sans-serif;
    line-height: 50px;
    letter-spacing: 3px;
  }
  .hero-text p {
    font-family: "Nunito Sans", sans-serif;
    font-weight: 400;
    line-height: 30px;
    font-size: medium;
    letter-spacing: 1px;
  }
  .new-collections,
  .categories {
    margin: 80px auto;
    width: 90%;
  }
  .new-collections-heading {
    display: flex;
    justify-content: space-between;
  }
  .new-collections-heading > div > h2 , .categories-heading >h2 {
    font-family: "Nunito Sans", sans-serif;
    font-size: 30px;
  }
  .new-collections-heading > div > p {
    font-family: "Nunito Sans", sans-serif;
  }
  .new-collections-heading-right {
    letter-spacing: 3px;
    font-family: "Nunito Sans", sans-serif;
  }
  .new-collection-products {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
  }
  .categories{
    display: flex;
  }
`;
