import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Container } from "@mui/material";


import { TextField, Typography, Box, Grid, Paper } from "@mui/material";

function Shortener() {
  const [urls, setUrls] = useState([{ longUrl: "", validity: "", shortcode: "" }]);

  const handleChange = (index, field, value) => {
    const newUrls = [...urls];
    newUrls[index][field] = value;
    setUrls(newUrls);
  };

  const addRow = () => {
    if (urls.length < 5) {
      setUrls([...urls, { longUrl: "", validity: "", shortcode: "" }]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (logic will be added in Step 2B)");
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        URL Shortener
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {urls.map((row, index) => (
            <Grid item xs={12} key={index}>
              <Paper sx={{ p: 2, mb: 2 }}>
                <TextField
                  label="Original URL"
                  value={row.longUrl}
                  onChange={(e) => handleChange(index, "longUrl", e.target.value)}
                  fullWidth
                  required
                  margin="normal"
                />
                <TextField
                  label="Validity (minutes)"
                  value={row.validity}
                  onChange={(e) => handleChange(index, "validity", e.target.value)}
                  fullWidth
                  type="number"
                  margin="normal"
                />
                <TextField
                  label="Custom Shortcode"
                  value={row.shortcode}
                  onChange={(e) => handleChange(index, "shortcode", e.target.value)}
                  fullWidth
                  margin="normal"
                />
              </Paper>
            </Grid>
          ))}
        </Grid>

        {urls.length < 5 && (
          <Button onClick={addRow} variant="outlined" sx={{ mr: 2 }}>
            + Add another URL
          </Button>
        )}
        <Button type="submit" variant="contained">
          Shorten URLs
        </Button>
      </form>
    </Box>
  );
}

function Stats() {
  return <h2>Statistics Page (Step 3)</h2>;
}

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/shorten">
            Shortener
          </Button>
          <Button color="inherit" component={Link} to="/stats">
            Statistics
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/shorten" element={<Shortener />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/" element={<Shortener />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;

