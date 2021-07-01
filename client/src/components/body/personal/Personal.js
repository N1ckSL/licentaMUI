import React, { useState, useEffect, Component } from "react";
import "../anunturi/Acasa.css";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Personal() {
  return (
    <div className="page__wrapper">
      <Accordion className="accordion" style={{color:"#000"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Conducători</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
            <div className="accordion__item">
              <div className="item__role">Director</div>
              <div className="item__name">Chiciuc Constantin</div>
              <div className="item__info">chichiuc@mail.com</div>
              </div>
    
            <div className="accordion__item">
              <div className="item__role">Director Adjunct</div>
              <div className="item__name">Chiciuc Constantin</div>
              <div className="item__info">chichiuc@mail.com</div>
              </div>
    
            <div className="accordion__item">
              <div className="item__role">Director</div>
              <div className="item__name">Chiciuc Constantin</div>
              <div className="item__info">chichiuc@mail.com</div>
              </div>
    

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Profesori</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Personal auxiliar</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Personal;
