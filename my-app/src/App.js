import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Data from "./components/Data";

function App() {
  const card = Data.map((index) => {
    return (
      <Card
        title={index.title}
        location={index.location}
        googleMapUrl={index.googleMapsUrl}
        startDate={index.startDate}
        endDate={index.endDate}
        description={index.description}
        imageUrl={index.imageUrl}
      />
    );
  });

  return (
    <>
      <Header />
      {card}
    </>
  );
}

export default App;
