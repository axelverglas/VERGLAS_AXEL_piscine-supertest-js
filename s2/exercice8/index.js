// Exercice 8: Créer une fonction pour formater une durée en heures et minutes
module.exports = function formaterDuree(heures, minutes) {
  // Ajout d'un zéro devant les heures et les minutes si elles sont inférieures à 10
  const heuresFormatees = heures < 10 ? `0${heures}` : `${heures}`;
  const minutesFormatees = minutes < 10 ? `0${minutes}` : `${minutes}`;

  // Format final "hh:mm"
  return `${heuresFormatees}:${minutesFormatees}`;
};
