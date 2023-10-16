// pages/Home/Home.js
import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import MainContent from "../../components/MainContent/MainContent";
import "./Home.css";

function Home() {
    const [content, setContent] = useState("conteudo0"); // "conteudo1" é apenas um exemplo, você pode definir o valor inicial conforme necessário

  return (
    <div className="home">
      <Header />
      <div className="home__body">
        <Sidebar onButtonClick={(content) => setContent(content)} />
        <MainContent content={content} />
      </div>
    </div>
  );
}

export default Home;
