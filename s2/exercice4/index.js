module.exports = function ajouterJours(date, jours) {
  const result = new Date(date);
  result.setDate(result.getDate() + jours);
  return result;
};
