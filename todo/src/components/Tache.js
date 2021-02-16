import { FaTimes } from "react-icons/fa";
/**
 * set la classe task par defaut ,
 * si reminder = true , ajoute classe reminder else , aucune classe
 * @param {*} param0
 */
function Tache({ tache, onDelete, onToggle }) {
  return (
    <div
      className={`task ${tache.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(tache.id)}
    >
      <h3>
        {tache.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(tache.id)}
        />
      </h3>
      <p>{tache.day}</p>
    </div>
  );
}

export default Tache;
