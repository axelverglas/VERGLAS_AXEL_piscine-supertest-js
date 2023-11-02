// Exercice 9: Créer une fonction pour vérifier si deux plages de dates se chevauchent
module.exports = function chevauchementDates(debut1, fin1, debut2, fin2) {
  // Conversion des dates en objets Date pour pouvoir les comparer
  debut1 = new Date(debut1);
  fin1 = new Date(fin1);
  debut2 = new Date(debut2);
  fin2 = new Date(fin2);

  // Vérification du chevauchement
  return fin1 >= debut2 && debut1 <= fin2;
};
