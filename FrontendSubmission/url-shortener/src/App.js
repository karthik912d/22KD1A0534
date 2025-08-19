import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";

function Home() {
  return <Typography variant="h5" sx={{ p: 2 }}>Welcome to URL Shortener</Typography>;
}

function Shortener() {
  return <Typography variant="h5" sx={{ p: 2 }}>URL Shortener Page</Typography>;
}

function Stats() {
  return <Typography variant="h5" sx={{ p: 2 }}>Statistics Page</Typography>;
}

export default function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/shorten">Shorten</Button>
          <Button color="inherit" component={Link} to="/stats">Stats</Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shorten" element={<Shortener />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </Router>
  );
}
