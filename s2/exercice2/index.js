// Exercice 2: Créer une fonction pour formater une date en "jj/mm/aaaa"
module.exports = function formaterDate(date) {
  let jour = date.getDate().toString().padStart(2, "0");
  let mois = (date.getMonth() + 1).toString().padStart(2, "0"); // getMonth() est basé sur zéro
  let année = date.getFullYear().toString();
  return `${jour}/${mois}/${année}`;
};
