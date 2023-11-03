const express = require("express");
const addition = require("./s1/exercice1");
const soustraction = require("./s1/exercice2");
const multiplication = require("./s1/exercice3");
const division = require("./s1/exercice4");
const factorielle = require("./s1/exercice5");
const estPairOuImpair = require("./s1/exercice6");
const celsiusEnFahrenheit = require("./s1/exercice7");
const aireCercle = require("./s1/exercice8");
const estPalindrome = require("./s1/exercice9");
const pgcd = require("./s1/exercice10");

const dateIlYADixAns = require("./s2/exercice1");
const formaterDate = require("./s2/exercice2");
const differenceEnJours = require("./s2/exercice3");
const ajouterJours = require("./s2/exercice4");
const estAnneeBissextile = require("./s2/exercice5");
const premierJourDuMois = require("./s2/exercice6");
const dernierJourDuMois = require("./s2/exercice7");
const formaterDuree = require("./s2/exercice8");
const chevauchementDates = require("./s2/exercice9");
const calculerAge = require("./s2/exercice10");

const app = express();
const PORT = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  return res.json([{ id: 1, name: "John Doe" }]);
});

app.post("/:param", (req, res) => {
  return res.json([{ error: false, num: req.params.param }]);
});

app.post("/s1/exercice1", (req, res) => {
  const n1 = req.body.n1;
  const n2 = req.body.n2;

  if (n1 == null || n2 == null) {
    return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
  }

  if (!n1) {
    return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
  }

  if (!n2) {
    return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
  }

  let a = addition(n1, n2);
  return res.json([{ reponse: a }]);
});

app.post("/s1/exercice2", (req, res) => {
  const { n1, n2 } = req.body;

  if (n1 == null || n2 == null) {
    return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
  }
  if (n1 == null) {
    return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
  }

  if (n2 == null) {
    return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
  }

  let a = soustraction(n1, n2);
  return res.json([{ reponse: a }]);
});

app.post("/s1/exercice3", (req, res) => {
  const n1 = req.body.n1;
  const n2 = req.body.n2;

  if (n1 == null || n2 == null) {
    return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
  }
  if (n1 == null) {
    return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
  }

  if (n2 == null) {
    return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
  }

  let a = multiplication(n1, n2);
  return res.json([{ reponse: a }]);
});

app.post("/s1/exercice4", (req, res) => {
  const n1 = req.body.n1;
  const n2 = req.body.n2;

  if (n1 == null || n2 == null) {
    return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
  }
  if (n1 == null) {
    return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
  }

  if (n2 == null) {
    return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
  }
  let a = division(n1, n2);
  return res.json([{ reponse: a }]);
});

app.post("/s1/exercice5", (req, res) => {
  const n1 = req.body.n1;

  if (n1 == null) {
    return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
  }
  let a = factorielle(n1);
  return res.json([{ reponse: a }]);
});

app.post("/s1/exercice6", (req, res) => {
  const n1 = req.body.n1;

  if (n1 == null) {
    return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
  }
  let a = estPairOuImpair(n1);
  return res.json([{ reponse: a }]);
});

app.post("/s1/exercice7", (req, res) => {
  const n1 = req.body.n1;

  if (n1 == null) {
    return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
  }
  let a = celsiusEnFahrenheit(n1);
  return res.json([{ reponse: a }]);
});

app.post("/s1/exercice8", (req, res) => {
  const n1 = req.body.n1;
  if (n1 == null) {
    return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
  }
  let a = aireCercle(n1);
  return res.json([{ reponse: a }]);
});

app.post("/s1/exercice9", (req, res) => {
  const n1 = req.body.n1;
  let a = estPalindrome(n1);
  return res.json([{ reponse: a }]);
});

app.post("/s1/exercice10", (req, res) => {
  const n1 = req.body.n1;
  const n2 = req.body.n2;
  if (n1 == null || n2 == null) {
    return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
  }

  if (n1 == null) {
    return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
  }

  if (n2 == null) {
    return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
  }

  let a = pgcd(n1, n2);
  return res.json([{ reponse: a }]);
});

app.post("/s2/exercice1", (req, res) => {
  const date = dateIlYADixAns();
  return res.json([{ reponse: date }]);
});

app.post("/s2/exercice2", (req, res) => {
  const date = new Date(req.body.date);

  if (isNaN(date.getTime())) {
    return res
      .status(400)
      .json({ reponse: "Veuillez entrer une date valide." });
  }

  const dateFormatee = formaterDate(date);
  return res.json([{ reponse: dateFormatee }]);
});

app.post("/s2/exercice3", (req, res) => {
  // Extraction des dates à partir du corps de la requête
  const date1 = new Date(req.body.date1);
  const date2 = new Date(req.body.date2);

  // Validation des dates
  if (isNaN(date1.getTime()) || isNaN(date2.getTime())) {
    return res
      .status(400)
      .json({ reponse: "Veuillez entrer des dates valides." });
  }

  // Utilisation de la fonction differenceEnJours pour obtenir la différence
  const jours = differenceEnJours(date1, date2);
  return res.json([{ reponse: jours }]);
});

app.post("/s2/exercice4", (req, res) => {
  const { date, jours } = req.body;

  if (!date || isNaN(jours)) {
    return res.status(400).json({ reponse: "Données invalides." });
  }

  const dateResultat = ajouterJours(new Date(date), jours);
  return res.json({ reponse: dateResultat.toISOString() });
});

app.post("/s2/exercice5", (req, res) => {
  const { annee } = req.body;

  if (isNaN(annee)) {
    return res.status(400).json({ reponse: "Données invalides." });
  }

  const estBissextile = estAnneeBissextile(annee);
  return res.json({ reponse: estBissextile });
});

app.post("/s2/exercice6", (req, res) => {
  const date = new Date(req.body.date);

  if (isNaN(date.getTime())) {
    return res
      .status(400)
      .json({ reponse: "Veuillez fournir une date valide." });
  }

  const premierJour = premierJourDuMois(date);
  return res.json({ reponse: premierJour.toISOString().split("T")[0] });
});

app.post("/s2/exercice7", (req, res) => {
  const date = new Date(req.body.date);
  if (isNaN(date.getTime())) {
    return res
      .status(400)
      .json({ reponse: "Veuillez fournir une date valide." });
  }
  const dernierJour = dernierJourDuMois(date);
  return res.json({ reponse: dernierJour });
});

app.post("/s2/exercice8", (req, res) => {
  const { heures, minutes } = req.body;

  // Vérifie que les heures et les minutes sont des nombres
  if (typeof heures !== "number" || typeof minutes !== "number") {
    return res.status(400).json({
      reponse:
        "Veuillez fournir des nombres valides pour les heures et les minutes.",
    });
  }

  // Appel de la fonction formaterDuree
  const dureeFormatee = formaterDuree(heures, minutes);
  return res.json({ reponse: dureeFormatee });
});

app.post("/s2/exercice9", (req, res) => {
  const { debut1, fin1, debut2, fin2 } = req.body;

  // Vérification des dates pour s'assurer qu'elles sont valides
  if (
    isNaN(new Date(debut1).getTime()) ||
    isNaN(new Date(fin1).getTime()) ||
    isNaN(new Date(debut2).getTime()) ||
    isNaN(new Date(fin2).getTime())
  ) {
    return res
      .status(400)
      .json({ reponse: "Veuillez entrer des dates valides." });
  }

  // Appel de la fonction chevauchementDates
  const chevauchent = chevauchementDates(debut1, fin1, debut2, fin2);
  return res.json({ reponse: chevauchent });
});

app.post("/s2/exercice10", (req, res) => {
  const { dateNaissance } = req.body;

  if (isNaN(new Date(dateNaissance).getTime())) {
    return res
      .status(400)
      .json({ reponse: "Veuillez entrer une date de naissance valide." });
  }

  const age = calculerAge(dateNaissance);
  return res.json({ reponse: age });
});
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

module.exports = app;
