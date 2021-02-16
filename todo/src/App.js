import Header from "./components/Header";
import ListeTaches from "./components/ListeTaches";
import { useState } from "react";
import AjouterTache from "./components/AjouterTache";

function App() {
  /* Rien mettre a interieur du return , uniquement du render
  variable en haut 
  */

  const [afficheAjoutTache, setAfficheAjoutTache] = useState(false);
  const [listeTaches, setTache] = useState([
    {
      id: 1,
      text: "Rendez-vous chez le medecin",
      day: "5 Fevrier 14h",
      reminder: true,
    },

    {
      id: 2,
      text: "Rencontre a l'ecole",
      day: "6 Fevrier 13h30",
      reminder: true,
    },
    {
      id: 3,
      text: "Faire l'epicerie",
      day: "5 Fevrier a 15h",
      reminder: false,
    },
  ]);

  /**
   * ajouterTache
   * va aller chercher le contenu du form
   * et le parse dans l'array liste de tache comme un nouvel element Json
   */

  const ajouterTache = (tache) => {
    // Genere un Id aleatoire
    const id = Math.floor(Math.random() * 10000) + 1;
    // Get les donne de la tache , et le random id generer
    const nouvelleTache = { id, ...tache };
    // aller chercher les donne deja presente , et ajouter la nouvelle tache
    setTache([...listeTaches, nouvelleTache]);
  };

  /**
   * supprimer une tache
   * va chercher la liste de taches
   * filtre tout les resulats de la liste de tache
   * cache la tache dont le id != au id de la tache supprime
   * @param id
   */

  const deleteTask = (id) => {
    setTache(listeTaches.filter((tache) => tache.id !== id));
  };

  /**
   * Toggle le reminder
   * Aller chercher la liste de tache
   * map chaque tache qui on un reminder
   * condition si le id de la tache est correspondant au id clicked
   * switch pour true ou false le reminder
   * activer une classe special
   * @param id
   */

  const reminderToggle = (id) => {
    setTache(
      listeTaches.map((tache) =>
        tache.id === id ? { ...tache, reminder: !tache.reminder } : tache
      )
    );
  };

  return (
    <div className="container">
      {/* Import du compsant header */}
      <Header
        onAdd={() => setAfficheAjoutTache(!afficheAjoutTache)}
        afficheFormulaireButtonState={afficheAjoutTache}
      />{" "}
      {/**
       * insertion du form
       */}
      {afficheAjoutTache && <AjouterTache ajouterLaTache={ajouterTache} />}
      {/**
       * Import de la liste de tache
       * si aucune tache affiche un message
       */}
      {listeTaches.length > 0 ? (
        <ListeTaches
          listeTaches={listeTaches}
          onDelete={deleteTask}
          onToggle={reminderToggle}
        />
      ) : (
        "Il n'y a plus de taches dans votre liste"
      )}
    </div>
  );
}

export default App;
