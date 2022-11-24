import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

export default function DemoForm() {
  const [fetchedData, setFetchedData] = React.useState("");
  const [intput1Value, setInput1Value] = React.useState("");
  const [intput2Value, setInput2Value] = React.useState("");
  const [intput3Value, setInput3Value] = React.useState(0);

  // url const for large amounts of lipsum text
  const demoUrl = "https://baconipsum.com/api/?type=meat-and-filler";

  const fetchFromRest = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    setFetchedData(JSON.stringify(data));
  };

  React.useEffect(() => {
    console.log("input1Value", intput1Value);
    console.log("input2Value", intput2Value);
    console.log("input3Value", intput3Value);
  }, [intput1Value, intput2Value, intput3Value]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          // height: '100%',
        }}
      >
        <TextField
          sx={{
            my: 2,
          }}
          id="input1"
          label="Input 1"
          variant="outlined"
          onChange={(e) => setInput1Value(e.target.value)}
        />
        <TextField
          sx={{
            my: 2,
          }}
          id="input2"
          label="Input 2"
          variant="outlined"
          onChange={(e) => setInput2Value(e.target.value)}
        />

        <TextField
          sx={{
            my: 2,
          }}
          id="input3"
          label="Input 3 (number)"
          variant="outlined"
          type="number"
          onChange={(e) => setInput3Value(Number(e.target.value))}
        />
        <Button onClick={() => fetchFromRest(demoUrl)}>Fetch Data</Button>
      </Box>

      {/* // Scrollable container to display the fetched data */}
      <Box
        sx={{
          my: 2,
          p: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "600px",
          height: "400px",
        }}
      >
        <Box
          sx={{
            border: "1px solid",
            px: 2,
            width: "100%",
            height: "100%",
            overflow: "scroll",
          }}
        >
          <Typography> {fetchedData} </Typography>
        </Box>
      </Box>
    </Box>
  );
}
