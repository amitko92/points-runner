import React from "react";
import { Link } from "react-router-dom";
import Style from "../MainMenuStyle.module.css";

type Props = {
    title: string, 
    link: string
}

const MainMenuButton = ({title, link}: Props) => {
  return <Link className={Style.btn} to={link}>{title}</Link>;
};

export default MainMenuButton;
