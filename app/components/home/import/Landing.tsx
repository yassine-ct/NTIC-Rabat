import React from "react";
import { DefaultButton, OutlinedButton } from "../../core/button";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
export default function Landing() {
    return (
        <div className="Landing">
            <div className="Title">
                <h3>
                    Institut Spécialisée de Technologies Appliquées
                    <span> NTIC Rabat</span>
                </h3>
                <p>
                    Depuis son ouverture en 2007, l&apos;ISTA NTIC Hay Riad a
                    formé plus de 3 600 techniciens dans les secteurs
                    Informatiques.
                </p>
            </div>
            <div className="APIs">
                <OutlinedButton
                    startIcon={<CalendarMonthOutlinedIcon />}
                    bgColor="Blue"
                >
                    Consulter les emplois
                </OutlinedButton>
                <OutlinedButton
                    startIcon={<GroupsOutlinedIcon />}
                    bgColor="LightBlue"
                >
                    Consultez le Forum
                </OutlinedButton>
            </div>
            <div className="Cards">
                <div className="Card">
                    <h3>+30</h3>
                    <h5>Formateurs Certifiés</h5>
                </div>
                <div className="Card">
                    <h3>+3600</h3>
                    <h5>Techniciens spécialisés</h5>
                </div>
                <div className="Card">
                    <h3>+12</h3>
                    <h5>Formations</h5>
                </div>
                <div className="Card">
                    <h3>2005</h3>
                    <h5>Ouvert à enseigner depuis</h5>
                </div>
            </div>
        </div>
    );
}
