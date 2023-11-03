module.exports = function dateIlYADixAns() {
  let dateActuelle = new Date();
  let datePassee = new Date(
    dateActuelle.setFullYear(dateActuelle.getFullYear() - 10)
  );
  return datePassee.toISOString().split("T")[0]; // Retourne la date au format 'YYYY-MM-DD', et corrigez l'erreur de typographie ici.
};
