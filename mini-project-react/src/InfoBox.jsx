import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({ Info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1722858343990-1604f540c15d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170";

  const HOT_URL =
    "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170";
  const COLD_URL =
    "https://images.unsplash.com/photo-1668418321923-becc3ef20077?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1536329978773-2f8ac431f330?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735";

  return (
    <div className="InfoBox">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            Info.humidity > 80 ? RAIN_URL : Info.temp > 15 ? HOT_URL : COLD_URL
          }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
        {Info.city}{
            Info.humidity > 80 ? <ThunderstormIcon/> : Info.temp > 15 ? <SunnyIcon/>: <SevereColdIcon/>
        }
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            component={"span"}
          >
            <p>Temperature = {Info.temp}&deg;C</p>
            <p>Humidity = {Info.humidity}</p>
            <p>Min Temp = {Info.tempMin}&deg;C</p>
            <p>Max Temp = {Info.tempMax}&deg;C</p>
            <p>
              The Weather can be described as <i>{Info.weather}</i> and Feels
              like = {Info.feelslike}&deg;C
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
