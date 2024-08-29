import React from "react";

export default function Main(props) {
  return (
    <div
      className={props.darkMode ? "container--main dark" : "container--main"}
    >
      <h2 className={props.darkMode? "main--title dark" : "main--title"}>Fun facts about React</h2>
      <ul className={props.darkMode ? "main--facts dark" : "main--facts"}>
        <li>
          Voluptate amet ullamco anim tempor et et esse velit aute laboris est.
        </li>
        <li class>Sit labore excepteur cillum esse nostrud in.</li>
        <li>Nisi eiusmod pariatur consectetur anim magna.</li>
        <li>Elit aliquip quis excepteur proident sunt aliqua amet ad.</li>
        <li>Eiusmod aliquip aliquip magna cupidatat elit in anim.</li>
      </ul>
    </div>
  );
}
