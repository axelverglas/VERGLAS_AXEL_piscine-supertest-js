// Exercice 7: Créer une fonction pour obtenir le dernier jour du mois d'une date donnée
module.exports = function dernierJourDuMois(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const lastDay = new Date(Date.UTC(year, month + 1, 0, 12));
  return lastDay.toISOString().split("T")[0];
};
