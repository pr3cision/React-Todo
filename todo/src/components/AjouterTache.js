import { useState } from "react";

const AjouterTache = ({ ajouterLaTache }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false); //Reminder default est a false

  const onSubmit = (event) => {
    event.preventDefault();

    /**
     * validation pour prevenir insertion de script JS
     */

    if (!text) {
      alert("veuillez inserer une tache valide");
      return;
    }

    /**
     * Si valide , ont passe la tache qui vient d'etre cree
     */
    ajouterLaTache({ text, day, reminder });

    /**
     * vider les champs lorsque form est submit
     */

    setText("");
    setDay("");
    setReminder(false); //set a false par defaut
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Tache</label>
        <input
          type="text"
          placeholder="Ajouter une tache"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </div>

      <div className="form-control">
        <label>Jour</label>
        <input
          type="text"
          placeholder="Ajouter la date et l\'heure "
          value={day}
          onChange={(event) => setDay(event.target.value)}
        />
      </div>

      <div className="form-control form-control-check">
        <label>Placer un rappel</label>
        <input
          type="checkbox"
          value={reminder}
          checked={reminder}
          onChange={(event) => setReminder(event.currentTarget.checked)}
        />
      </div>

      <input
        className="btn btn-block"
        type="submit"
        value="Ajouter a la liste"
      />
    </form>
  );
};

export default AjouterTache;
