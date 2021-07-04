import React from "react";
import "../anunturi/Acasa.css";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Divider } from "@material-ui/core";
import { teal } from "@material-ui/core/colors";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Button } from "@material-ui/core";
import { Link } from "@material-ui/core";

function Personal() {
  return (
    <div className="page__wrapper">
      <div className="accordion__wrapper">
        <div className="accordion__left">
          <Accordion component={"div"} className="accordion" style={{ color: "#000" }}>
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
                  <div className="item__info">chichiuc@mail.com</div>
                </div>
                <Divider component="div" />
                <div className="accordion__item">
                  <div className="item__role">Director adjunct adjunct</div>
                  <div className="item__name">Gorea Constantin</div>
                  <div className="item__info">chichiuc@mail.com</div>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion component={"div"} className="accordion">
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
                  <div className="item__role">Director</div>
                  <div className="item__name">Chiciuc Constantin</div>
                  <div className="item__info">chichiuc@mail.com</div>
                </div>
                <Divider component="div" style={{ width: "100%" }} />
                <div className="accordion__item">
                  <div className="item__role">Director Adjunct</div>
                  <div className="item__name">Hagioglo Victor</div>
                  <div className="item__info">chichiuc@mail.com</div>
                </div>
                <Divider component="div"/>
                <div className="accordion__item">
                  <div className="item__role">Director adjunct adjunct</div>
                  <div className="item__name">Gorea Constantin</div>
                  <div className="item__info">chichiuc@mail.com</div>
                </div>
                <Divider component="div"/>
                <div className="accordion__item">
                  <div className="item__role">Director</div>
                  <div className="item__name">Chiciuc Constantin</div>
                  <div className="item__info">chichiuc@mail.com</div>
                </div>
                <Divider  component="div" style={{ width: "100%" }} />
                <div className="accordion__item">
                  <div className="item__role">Director Adjunct</div>
                  <div className="item__name">Hagioglo Victor</div>
                  <div className="item__info">chichiuc@mail.com</div>
                </div>
                <Divider component="div" />
                <div className="accordion__item">
                  <div className="item__role">Director adjunct adjunct</div>
                  <div className="item__name">Gorea Constantin</div>
                  <div className="item__info">chichiuc@mail.com</div>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion component={"div"} className="accordion">
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
                  <div className="item__role">Director</div>
                  <div className="item__name">Chiciuc Constantin</div>
                  <div className="item__info">chichiuc@mail.com</div>
                </div>
                <Divider component="div" style={{ width: "100%" }} />
                <div className="accordion__item">
                  <div className="item__role">Director Adjunct</div>
                  <div className="item__name">Hagioglo Victor</div>
                  <div className="item__info">chichiuc@mail.com</div>
                </div>
                <Divider component="div" />
                <div className="accordion__item">
                  <div className="item__role">Director adjunct adjunct</div>
                  <div className="item__name">Gorea Constantin</div>
                  <div className="item__info">chichiuc@mail.com</div>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="accordion__right">
          <Accordion component={"div"} className="accordion" style={{ color: "#000" }}>
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
                  <div className="item__role">Director</div>
                  <div className="item__name">Chiciuc Constantin</div>
                  <div className="item__info">chichiuc@mail.com</div>
                </div>
                <Divider component="div" style={{ width: "100%" }} />
                <div className="accordion__item">
                  <div className="item__role">Director Adjunct</div>
                  <div className="item__name">Hagioglo Victor</div>
                  <div className="item__info">chichiuc@mail.com</div>
                </div>
                <Divider component="div" />
                <div className="accordion__item">
                  <div className="item__role">Director adjunct adjunct</div>
                  <div className="item__name">Gorea Constantin</div>
                  <div className="item__info">chichiuc@mail.com</div>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion component={"div"} className="accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Ore de lucru</Typography>
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
                  <div className="item__info">chichiuc@mail.com</div>
                </div>
                <Divider component="div" />
                <div className="accordion__item">
                  <div className="item__role">Director adjunct adjunct</div>
                  <div className="item__name">Gorea Constantin</div>
                  <div className="item__info">chichiuc@mail.com</div>
                </div>
                <Divider component="div" />
                <div className="accordion__item">
                  <div className="item__role">Director</div>
                  <div className="item__name">Chiciuc Constantin</div>
                  <div className="item__info">chichiuc@mail.com</div>
                </div>
                <Divider component="div" style={{ width: "100%" }} />
                <div className="accordion__item">
                  <div className="item__role">Director Adjunct</div>
                  <div className="item__name">Hagioglo Victor</div>
                  <div className="item__info">chichiuc@mail.com</div>
                </div>
                <Divider component="div"/>
                <div className="accordion__item">
                  <div className="item__role">Director adjunct adjunct</div>
                  <div className="item__name">Gorea Constantin</div>
                  <div className="item__info">chichiuc@mail.com</div>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion component={"div"} className="accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>Informatii auxiliare</Typography>
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
                  <div className="item__info">chichiuc@mail.com</div>
                </div>
                <Divider component="div" />
                <div className="accordion__item">
                  <div className="item__role">Director adjunct adjunct</div>
                  <div className="item__name">Gorea Constantin</div>
                  <div className="item__info">chichiuc@mail.com</div>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <footer className="footer personal">
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
                Puteti vedea orarele{" "}
                <Link href="/orar" color="secondary">
                  Aici
                </Link>{" "}
                <br />
                Puteti vedea cadrele didactice{" "}
                <Link href="/personal" color="secondary">
                  Aici
                </Link>{" "}
                <br /> <br />
                Daca ati intalnit probleme utilizand acest site, ne puteti
                contacta pe acest email:
                <span> example@mail-ltiv.com</span>
              </Typography>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Personal;
