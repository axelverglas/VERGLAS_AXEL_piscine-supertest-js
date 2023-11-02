// Exercice 3: Créer une fonction pour calculer la différence en jours entre deux dates
module.exports = function differenceEnJours(date1, date2) {
  const diffTime = Math.abs(date2 - date1);
  // Et on le convertit en jours
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};
