import React from "react";
import "../anunturi/Acasa.css";

import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { Link } from "@material-ui/core";
import { Grid } from "@material-ui/core";

import imageCard from "./Images/imagliceu.jpg";
import imageLiceu from "./Images/imagliceu2.jpg";
import imageMap from "./Images/profesori.JPG";

import { teal, purple, grey, orange } from "@material-ui/core/colors";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: "#2C2C2C",
    color: grey[50],
    minHeight: "auto",  
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
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
  },
}));

const WhiteTextTypography = withStyles({
  root: {
    color: grey[50],
  },
})(Typography);

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
          <div>
            <Grid
              container
              spacing={4}
              className={classes.gridContainer}
              justify="center"
              style={{ width: "100%" }}
            >
              <Grid item xs={12} sm={12} md={4}>
                <Card
                  className={classes.root}
                  variant="outlined"
                  style={{ borderWidth: "0" }}
                  id="card"
                >
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        LTIV
                      </Avatar>
                    }
                    title="Informatii Generale"
                    subheader="Septembrie 14, 2020"
                    style={{ backgroundColor: "#2c2c2c", color: teal[50] }}
                  />
                  <CardMedia
                    className={classes.media}
                    title="Liceul Teoretic Ioan Voda"
                    style={{ height: 0, paddingTop: "56.25%" }}
                    image={imageLiceu}
                  />
                  <CardContent
                    style={{ backgroundColor: "#2c2c2c", color: "#dbdbdb" }}
                  >
                    <Typography variant="body2" component="p">
                      Liceul Teoretic “Ioan Vodă” din or. Cahul este prima și
                      cea mai veche instituție din sudul Moldovei și din raionul
                      Cahul, care a fost înființată din anul 1913.
                    </Typography>
                  </CardContent>
                  <CardActions
                    disableSpacing
                    style={{ backgroundColor: "#2c2c2c" }}
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
                    style={{ backgroundColor: "#2c2c2c", color: teal[50] }}
                  >
                    <CardContent>
                      <Typography paragraph style={{ color: orange[400] }}>
                        Scurt istoric:
                      </Typography>
                      <Typography paragraph>
                        Inițial un liceu pentru băieți, în anul 1918 instituția
                        a devenit cunoscută sub numele de “Ioan Voievod”, iar
                        mai târziu a devenit “Școală Internat”. În anul 1990
                        liceului i se conferă statutul de instituție
                        pre-universitară, astfel acesta devine Liceul Teoretic
                        “Ioan Vodă” din or. Cahul. Începând cu anul 2000 liceul
                        este parte a diferitor proiecte internaționale precum:
                        Proiectul Claselor Bilingve din Republica Moldova
                        (2000), Programul ROBOCLUB (2017), North Carolina –
                        Moldova Service Learning School Partnership Project
                        (2016-2017; 2017-2018), etc. De asemenea, elevii
                        liceului participă anual la diferite concursuri la nivel
                        local și internațional obținând locuri de frunte:
                        programul Flex, concursul raional Feel English-Speak
                        English, și olimpiadele raionale și republicane.
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <Card
                  className={classes.root}
                  variant="outlined"
                  style={{ borderWidth: "0", border: "none" }}
                  id="card"
                >
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        LTIV
                      </Avatar>
                    }
                    title="Informatii Generale"
                    subheader="Octombrie 20, 2020"
                    style={{ backgroundColor: "#2c2c2c", color: teal[50] }}
                  />
                  <CardMedia
                    className={classes.media}
                    title="Liceul Teoretic Ioan Voda"
                    style={{ height: 0, paddingTop: "56.25%" }}
                    image={imageCard}
                  />
                  <CardContent
                    style={{ backgroundColor: "#2c2c2c", color: "#dbdbdb" }}
                  >
                    <Typography variant="body2" component="p">
                      Ne concentrăm pe studierea limbilor străine, utilizarea
                      computerelor și a internetului simultan cu o puternică
                      promovare a valorilor civice, a talentelor, a abilităților
                      literare, artistice și sportive care constituie cerințele
                      specifice școlii, în parteneriat cu comunitățile locale și
                      internaționale, ONG-uri, susținând concomitent inițierea
                      proiectelor educaționale.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <Card
                  className={classes.root}
                  variant="outlined"
                  style={{ borderWidth: "0" }}
                  id="card"
                >
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        LTIV
                      </Avatar>
                    }
                    title="Informatii Generale"
                    subheader="Aprilie 8, 2021"
                    style={{ backgroundColor: "#2c2c2c", color: teal[50] }}
                  />
                  <CardMedia
                    className={classes.media}
                    title="Liceul Teoretic Ioan Voda"
                    style={{ height: 0, paddingTop: "56.25%" }}
                    image={imageMap}
                  />
                  <CardContent
                    style={{ backgroundColor: "#2c2c2c", color: "#dbdbdb" }}
                  >
                    <Typography variant="body2" component="p">
                      Instituție educațională, complexă și modernă care îmbină
                      tradiția cu inovația și care oferă elevilor oportunități
                      de instruire accesibilă, sprijinind în același timp
                      dezvoltarea unei personalități armonioase, creative și
                      pragmatice.
                    </Typography>
                  </CardContent>
                  <CardActions
                    disableSpacing
                    style={{ backgroundColor: "#2c2c2c" }}
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
                    style={{ backgroundColor: "#2c2c2c", color: teal[50] }}
                  >
                    <CardContent>
                      <Typography paragraph style={{ color: orange[400] }}>
                        Detalii:
                      </Typography>
                      <Typography paragraph>
                        Din momentul fondării acestei instituții, elevii au
                        șansa de a studia două limbi moderne: Limba Engleză și
                        Limba Franceză. Buna pregătire a elevilor și
                        profesorilor a condus, în ultimii ani, la susținerea cu
                        brio a testelor de certificare a competențelor
                        lingvistice la limba engleză precum: TOEFL, Cambridge,
                        DELF. Liceului dispune de săli bine dotate cu tehnică,
                        mobilier școlar și cadre didactice pregătite, astfel
                        asigurând buna desfășurare a procesului educațional.
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="middle">
          <Grid
            container
            spacing={4}
            className={classes.gridContainer}
            justify="center"
            id="middle"
          >
            <Grid item xs={12} sm={12} md={6}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardContent
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      flexWrap: "wrap",
                      color: grey[50],
                    }}
                  >
                    <WhiteTextTypography
                      className={classes.title}
                      gutterBottom
                      style={{ color: purple[400] }}
                    >
                      Nota medie examene absolvire
                    </WhiteTextTypography>
                    <WhiteTextTypography
                      variant="h1"
                      component="h1"
                      style={{ color: orange[400] }}
                    >
                      7.08
                    </WhiteTextTypography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardContent
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-around",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <WhiteTextTypography
                      className={classes.title}
                      style={{ color: purple[400] }}
                      gutterBottom
                    >
                      Elevi
                    </WhiteTextTypography>
                    <WhiteTextTypography
                      variant="h3"
                      component="h3"
                      style={{ color: orange[400] }}
                    >
                      812
                    </WhiteTextTypography>
                    <WhiteTextTypography
                      className={classes.pos}
                      style={{ color: purple[400] }}
                    >
                      Cadre Didactice
                    </WhiteTextTypography>
                    <WhiteTextTypography
                      variant="h3"
                      component="h3"
                      style={{ color: orange[400] }}
                    >
                      67
                    </WhiteTextTypography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardContent
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-around",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <WhiteTextTypography
                      className={classes.title}
                      style={{ color: purple[400] }}
                      gutterBottom
                    >
                      Nivelul calificare cadre didactice
                    </WhiteTextTypography>
                    <WhiteTextTypography
                      variant="h5"
                      component="h5"
                      
                    >
                      <span style={{ color: orange[400] }}>10%</span> - Grad
                      Superior
                    </WhiteTextTypography>
                    <WhiteTextTypography
                      variant="h5"
                      component="h5"
                      
                    >
                      <span style={{ color: orange[400] }}>12.5%</span> - Grad
                      Didactic I
                    </WhiteTextTypography>
                    <WhiteTextTypography
                      variant="h5"
                      component="h5"
                      
                    >
                      <span style={{ color: orange[400] }}>60.2%</span> - Grad
                      Didactic II
                    </WhiteTextTypography>
                    <WhiteTextTypography
                      variant="h5"
                      component="h5"
                      
                    >
                      <span style={{ color: orange[400] }}>17.3%</span> - Fără
                      Grad Didactic
                    </WhiteTextTypography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardContent
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-around",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <WhiteTextTypography
                      className={classes.title}
                      style={{ color: purple[400] }}
                      gutterBottom
                    >
                      Rata promovare examen bacalaureat
                    </WhiteTextTypography>
                    <WhiteTextTypography variant="h6" component="h6">
                      Matematică -{" "}
                      <span style={{ color: orange[400] }}>89.5%</span>
                    </WhiteTextTypography>
                    <WhiteTextTypography
                      className={classes.pos}
                      variant="h6"
                      component="h6"
                    >
                      Limba română -{" "}
                      <span style={{ color: orange[400] }}>98.4%</span>
                    </WhiteTextTypography>
                    <WhiteTextTypography
                      component="p"
                      style={{ color: purple[400] }}
                    >
                      Nota medie la examenul de bacalaureat
                    </WhiteTextTypography>
                    <WhiteTextTypography variant="h6" component="h6">
                      Matematică -{" "}
                      <span style={{ color: orange[400] }}>6.4</span>
                    </WhiteTextTypography>
                    <WhiteTextTypography variant="h6" component="h6">
                      Limba română -{" "}
                      <span style={{ color: orange[400] }}>6.7</span>
                    </WhiteTextTypography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </div>

        <div className="map__wrapper">
          <div className="map__content">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2775.7965977220556!2d28.21382071544643!3d45.91537637910891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b65cb11c596655%3A0xc7ea73b923e6982f!2sLiceul%20Teoretic%20%22Ioan%20Vod%C4%83%22!5e0!3m2!1sen!2s!4v1625500513482!5m2!1sen!2s"
              width="550"
              height="350"
              allowFullScreen=""
              loading="lazy"
              style={{borderRadius:"15px", border:"1px dashed purple"}}
            ></iframe>
          </div>
        </div>
        <footer className="footer">
          <div className="footer__content" style={{ color: teal[50] }}>
            <div className="footer__socials">
              <Typography style={{textAlign:"center"}}>Ne puteți găsi pe Facebook</Typography>
              <Button
                size="medium"
                startIcon={<FacebookIcon />}
                href="https://www.facebook.com/groups/270345909985839"
                style={{ display: "flex", justifyContent: "center" }}
              />
              <Typography style={{textAlign:"center"}}>Sau ne puteți găsi pe Instagram</Typography>
              <Button
                size="medium"
                startIcon={<InstagramIcon />}
                href="https://www.instagram.com/ce.liceulteoretic.ioanvoda/"
                style={{ display: "flex", justifyContent: "center" }}
              />
            </div>
            <div className="footer__info">
              <div className="info__left">
                <Typography>
                  Puteți apela la secretariatul școlii la acest număr:{" "}
                  <span>
                    <br /> (299) 71380
                  </span>{" "}
                  <br />
                  <br />
                </Typography>
                <Typography>
                  Pentru a putea vizualiza notele, este nevoie să vă
                  <Link href="/login"> autentificați</Link> sau sa vă{" "}
                  <Link href="/register">înregistrați</Link>, dacă nu dețineți
                  un profil
                </Typography>
              </div>
              <div className="info__right">
                <Typography>
                  Orele se țin de Luni până Vineri, începand cu ora 8:30 <br />{" "}
                  <br />
                  Puteți vedea orarele{" "}
                  <Link href="/orar" color="secondary">
                    aici
                  </Link>{" "}
                  <br />
                  Puteți vedea cadrele didactice{" "}
                  <Link href="/personal" color="secondary">
                    aici
                  </Link>{" "}
                  <br /> <br />
                  Daca ați întâlnit probleme utilizând acest site, ne puteți
                  contacta pe acest email:
                  <span> probleme@mail-ltiv.com</span>
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
