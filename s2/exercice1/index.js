module.exports = function dateIlYADixAns() {
  let dateActuelle = new Date();
  let datePassee = new Date(
    dateActuelle.setFullYear(dateActuelle.getFullYear() - 10)
  );
  return datePassée.toISOString().split("T")[0]; // Retourne la date au format 'YYYY-MM-DD'
};
