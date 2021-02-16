import Tache from "./Tache";

function ListeTaches({ listeTaches, onDelete, onToggle }) {
  return (
    <>
      {listeTaches.map(function (tache) {
        return (
          <Tache
            key={tache.id}
            tache={tache}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        );
      })}
    </>
  );
}

export default ListeTaches;
