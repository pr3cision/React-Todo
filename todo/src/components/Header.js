import Button from "./Button";

/**
 * Arrow function meme chose que
 * function Header() {
 *  return (
 *      insere code ici
 *  );
 * };
 */

const Header = ({ title, onAdd, afficheFormulaireButtonState }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={afficheFormulaireButtonState ? "red" : "green"}
        text={afficheFormulaireButtonState ? "Annuler" : "Ajouter une tache"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

/**
 * Css injecte directement dans la balise style {headerStyle}
 */
/*
const headerStyle = {
  color: "green",
  fontStyle: "italic",
};
*/

export default Header;
