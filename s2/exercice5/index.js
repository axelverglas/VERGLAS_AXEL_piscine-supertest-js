// Exercice 5: Créer une fonction pour vérifier si une année est bissextile
module.exports = function estAnneeBissextile(annee) {
  if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
    return true;
  }
  return false;
};
