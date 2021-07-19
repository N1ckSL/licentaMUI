import React from "react";
import "../anunturi/Acasa.css";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Divider } from "@material-ui/core";
import { teal, grey, orange } from "@material-ui/core/colors";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Button } from "@material-ui/core";
import { Link } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import CardActionArea from "@material-ui/core/CardActionArea";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "auto",
    backgroundColor: "#2C2C2C",
    color: grey[50],
    minHeight: "auto",
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


function Personal() {
  const classes = useStyles();
  return (
    <div className="page__wrapper">
      <div className="accordion__wrapper">
        <Grid
          container
          spacing={4}
          className={classes.gridContainer}
          justify="center"
          style={{width:"100%"}}
        >
           <Grid item xs={12} sm={12} md={6}>
            <Accordion
              component={"div"}
              className={classes.root}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Conducere</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component={"span"}>
                  <div className="accordion__item">
                    <div className="item__role">Director</div>
                    <div className="item__name">Chiciuc Constantin</div>
                    <div className="item__info">chichiuc@mail.com</div>
                  </div>
                  <Divider component="div" style={{ width: "100%" }} />
                  <div className="accordion__item">
                    <div className="item__role">Director Adjunct</div>
                    <div className="item__name">Hagioglo Victor</div>
                    <div className="item__info">hagiogo@mail.com</div>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion component={"div"} className={classes.root}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Profesori</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component={"span"}>
                  <div className="accordion__item">
                    <div className="item__role">Limba și Literatura Română</div>
                    <div className="item__name">Coteț Elena</div>
                    <div className="item__info">c.elena@mail.com</div>
                  </div>
                  <Divider component="div" style={{ width: "100%" }} />
                  <div className="accordion__item">
                    <div className="item__role">Matematică</div>
                    <div className="item__name">Hagioglo Victor</div>
                    <div className="item__info">hagioglo@mail.com</div>
                  </div>
                  <Divider component="div" />
                  <div className="accordion__item">
                    <div className="item__role">Informatică</div>
                    <div className="item__name">Gorea Constantin</div>
                    <div className="item__info">gorea.c@mail.com</div>
                  </div>
                  <Divider component="div" />
                  <div className="accordion__item">
                    <div className="item__role">Biologie</div>
                    <div className="item__name">Cicanci Eugen</div>
                    <div className="item__info">cc.eugen@mail.com</div>
                  </div>
                  <Divider component="div" style={{ width: "100%" }} />
                  <div className="accordion__item">
                    <div className="item__role">Chimie</div>
                    <div className="item__name">Ioan Cuza</div>
                    <div className="item__info">i.cuza@mail.com</div>
                  </div>

                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion component={"div"} className={classes.root}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography>Personal auxiliar</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component={"span"}>
                  <div className="accordion__item">
                    <div className="item__role">Inginer tehnic</div>
                    <div className="item__name">Victor Vlasov</div>
                    <div className="item__info">v.vlasov@mail.com</div>
                  </div>
                  <Divider component="div" style={{ width: "100%" }} />
                  <div className="accordion__item">
                    <div className="item__role">Asistent medical</div>
                    <div className="item__name">Oana Tudor</div>
                    <div className="item__info">tudor.oana@mail.com</div>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <Accordion
              component={"div"}
              className={classes.root}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Secretariat</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component={"span"}>
                  <div className="accordion__item">
                    <div className="item__role">Secretar șef</div>
                    <div className="item__name">Madlena Istrati</div>
                    <div className="item__info">istarti.mad@mail.com</div>
                  </div>
                  <Divider component="div" style={{ width: "100%" }} />
                  <div className="accordion__item">
                    <div className="item__role">Secretar </div>
                    <div className="item__name">Paula Marcovanu</div>
                    <div className="item__info">marcovanu.p@mail.com</div>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion component={"div"} className={classes.root}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography>Alte Informatii</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component={"span"}>
                  <div className="accordion__item">
                    <div className="item__role">Vacanță Toamnă</div>
                    <div className="item__name">25 octombrie </div>
                    <div className="item__info">31 octombrie</div>
                  </div>
                  <Divider component="div" style={{ width: "100%" }} />
                  <div className="accordion__item">
                    <div className="item__role">Vacanță Iarnă</div>
                    <div className="item__name">23 decembrie  </div>
                    <div className="item__info">9 ianuarie</div>
                  </div>
                  <Divider component="div"  style={{ width: "100%" }}/>
                  <div className="accordion__item">
                    <div className="item__role">Perioadă examene bacalaureat</div>
                    <div className="item__name">4 iunie  </div>
                    <div className="item__info">22 iunie</div>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
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
                        style={{ color: teal[400] }}
                        gutterBottom
                      >
                        Ore de lucru Secretariat
                      </WhiteTextTypography>
                      <WhiteTextTypography
                        variant="h3"
                        component="h3"
                        style={{ color: orange[400] }}
                      >
                        9:00 - 13:00
                      </WhiteTextTypography>
                      <WhiteTextTypography
                        className={classes.pos}
                        style={{ color: teal[400] }}
                      >
                        Telefon de contact
                      </WhiteTextTypography>
                      <WhiteTextTypography
                        variant="h4"
                        component="h4"
                        style={{ color: orange[400] }}
                      >
                        (299)71-3-80
                      </WhiteTextTypography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
        </Grid>
      </div>
      <footer className="footer personal">
          <div className="footer__content" style={{ color: teal[50] }}>
            <div className="footer__socials">
              <Typography style={{textAlign:"center"}}>Ne puteți găsi pe Facebook</Typography>
              <Button
                size="medium"
                startIcon={<FacebookIcon />}
                href="https://www.facebook.com/groups/270345909985839"
                style={{display:"flex", justifyContent:"center"}}
              />
              <Typography style={{textAlign:"center"}}>Sau ne puteți găsi pe Instagram</Typography>
              <Button
                size="medium"
                startIcon={<InstagramIcon />}
                href="https://www.instagram.com/ce.liceulteoretic.ioanvoda/"
                style={{display:"flex", justifyContent:"center"}}
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
                  <Link href="/login"> autentificați</Link> sau sa vă <Link href="/register">înregistrați</Link>, dacă nu dețineți un
                  profil
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
  );
}

export default Personal;
