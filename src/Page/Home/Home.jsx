import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
//import process.env.REACT_APP_API_KEY from "../../config";
import { css } from "@emotion/react";
import { GridLoader } from "react-spinners";

function Home() {
  const [cards, setCards] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  console.log(cards)

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log(process.env.REACT_APP_API_KEY)
    try {
      const manpowerResponse = await axios.get(`${process.env.REACT_APP_API_KEY}/api/v1/manpower`);
      const employersResponse = await axios.get(`${process.env.REACT_APP_API_KEY}/api/v1/employer/getAll`);
      const agentsResponse = await axios.get(`${process.env.REACT_APP_API_KEY}/api/v1/agentt/get/getAllAgent`);

      const manpowerCount = manpowerResponse.data.data.length || 0;
      const employersCount = employersResponse.data.data.length || 0;
      const agentsCount = agentsResponse.data.data.length || 0;

      const dynamicCards = [
        {
          id: "1",
          backgroundColor: "#40189d",
          icon: "person-fill",
          heading: "Total Manpower",
          number: manpowerCount,
          link: "/manPower",
        },
        {
          id: "2",
          backgroundColor: "#48a9f8",
          icon: "person-circle",
          heading: "Total Employers",
          number: employersCount,
          link: "/employer",
        },
        {
          id: "3",
          backgroundColor: "#1bd084",
          icon: "people-fill",
          heading: "Total Agent",
          number: agentsCount,
          link: "/agent",
        },
        {
          id: "4",
          backgroundColor: "#8bc740",
          icon: "currency-dollar",
          heading: "Total Revenue",
          number: "1000",
          link: "/revenue",
        },
      ];  
      console.log(dynamicCards)

      setCards(dynamicCards);
      // setIsLoading(false);
      setIsLoading(true);
    } catch (error) {
      console.log(error);

      setIsLoading(false);
    }
  };

  if (!isLoading) {
    return (
      <div className="text-center col-10">
        <GridLoader color={"hsla(52, 67%, 53%, 1)"} loading={true} css={override} size={50} />
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="col-xl-10 bg">
      <div className="row">
        <Navbar heading="Dashboard" />

        {/* {isLoading ? (
          <div className="col-lg-3 my-3 text-center">
            <h1>Loading...</h1>
          </div>
        ) : ( */}

          {cards.map((data) => {
            const { id, backgroundColor, icon, heading, number, link } = data;
            console.log(data)
            return (
              <div className="col-lg-3 my-3 text-white" key={id}>
                <Link to={link} style={{ textDecoration: "none" }}>
                  <div className="rounded-3 shadow-sm p-3" style={{ backgroundColor }}>
                    <div className="d-flex justify-content-between">
                      <div className="content-center text-white">
                        <i className={`bi bi-${icon} fs-1 text-white`}></i>
                      </div>
                      <div>
                        <h6 className="text-white">{heading}</h6>
                        <h1 className="text-white">{number}</h1>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Home;
