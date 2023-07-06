import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

const DataComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.gyanibooks.com/library/get_dummy_notes"
      );
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      {data.map((item) => (
        <Card key={item.id}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {item.title}
            </Typography>
            <Typography color="textSecondary">{item.description}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DataComponent;
