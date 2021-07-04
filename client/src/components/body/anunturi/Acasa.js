import React from "react";
import "../anunturi/Acasa.css";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import imageCard from "./Images/imagliceu.jpg";
import imageMap from "./Images/ltivmap.png";

import { teal } from "@material-ui/core/colors";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Button } from "@material-ui/core";
import { Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    color: teal[50],
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "#d47611",
  },
}));

function Acasa() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="page__wrapper">
      <div className="page__content">
        <div className="left__column">
          <div className="column__content">
            <Card
              className={classes.root}
              variant="outlined"
              style={{ borderWidth: "0" }}
            >
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    LTIV
                  </Avatar>
                }
                title="Informatii Generale"
                subheader="Septembrie 14, 2019"
                style={{ backgroundColor: "#37424f", color: teal[50] }}
              />
              <CardMedia
                className={classes.media}
                title="Liceul Teoretic Ioan Voda"
                style={{ height: 0, paddingTop: "56.25%" }}
                image={imageCard}
              />
              <CardContent
                style={{ backgroundColor: "#37424f", color: "#dbdbdb" }}
              >
                <Typography variant="body2" component="p">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
              <CardActions
                disableSpacing
                style={{ backgroundColor: "#37424f" }}
              >
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse
                in={expanded}
                timeout="auto"
                unmountOnExit
                style={{ backgroundColor: "#37424f", color: teal[50] }}
              >
                <CardContent>
                  <Typography paragraph>Method:</Typography>
                  <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep
                    skillet over medium-high heat. Add chicken, shrimp and
                    chorizo, and cook, stirring occasionally until lightly
                    browned, 6 to 8 minutes. Transfer shrimp to a large plate
                    and set aside, leaving chicken and chorizo in the pan. Add
                    pimentón, bay leaves, garlic, tomatoes, onion, salt and
                    pepper, and cook, stirring often until thickened and
                    fragrant, about 10 minutes. Add saffron broth and remaining
                    4 1/2 cups chicken broth; bring to a boil.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </div>
        </div>
        <div className="right__column">
          <div className="column__content">hey right</div>
          <div className="column__content">hey right</div>
          <div className="column__content">hey right</div>
        </div>
        <div className="map__wrapper">
          <div className="map__content">
            <a
              href="https://www.google.ro/maps/place/Liceul+Teoretic+%22Ioan+Vod%C4%83%22/@45.915763,28.214379,697m/data=!3m1!1e3!4m5!3m4!1s0x40b65cb11c596655:0xc7ea73b923e6982f!8m2!3d45.9153764!4d28.2160094!5m1!1e4"
              target="_blank"
            >
              <img src={imageMap} alt="img satelit" />
            </a>
          </div>
        </div>
        <footer className="footer">
          <div className="footer__content" style={{ color: teal[50] }}>
            <div className="footer__socials">
              <Typography>Ne puteti gasi aici</Typography>
              <Button
                size="medium"
                startIcon={<FacebookIcon />}
                href="https://www.facebook.com/groups/270345909985839"
              ></Button>
              <Button
                size="medium"
                startIcon={<InstagramIcon />}
                href="https://www.instagram.com/ce.liceulteoretic.ioanvoda/"
              ></Button>
            </div>
            <div className="footer__info">
              <div className="info__left">
                <Typography>
                  Puteti apela la secretariatul scolii la acest numar:{" "}
                  <span>060034706</span> <br />
                  <br />
                </Typography>
              </div>
              <div className="info__right">
                <Typography>
                  Orele se tin de Luni pana Vineri, incepand cu ora 8:30 <br />{" "}
                  <br />
                  Puteti vedea orarele <Link href="/orar" color="secondary">
                    Aici
                  </Link> <br />
                  Puteti vedea cadrele didactice <Link href="/personal" color="secondary">
                    Aici
                  </Link> <br /> <br />
                  Daca ati intalnit probleme utilizand acest site, ne puteti
                  contacta pe acest email:
                  <span> example@mail-ltiv.com</span>
                </Typography>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Acasa;
