const request = require("supertest");
const app = require("./index");

describe("GET /", () => {
  test("Test 1", (done) => {
    request(app)
      .get("/")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ id: 1, name: "John Doe" }]);
        done();
      });
  });
});

describe("POST /:param", () => {
  test("Test 1/2", (done) => {
    request(app)
      .post("/1")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ error: false, num: "1" }]);
        done();
      });
  });
});

describe("POST /s1/exercice1", () => {
  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice1")
      .send({ n1: null, n2: 2 });
    expect(res.statusCode).toBe(400); // Devrait s'attendre à 400, pas 200
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("renvoie une erreur si n1 et n2 ne sont pas des nombres", async () => {
    const res = await request(app)
      .post("/s1/exercice1")
      .send({ n1: "un", n2: "deux" });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });
  test("Renvoie une erreur si n2 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice1")
      .send({ n1: 1, n2: null });
    expect(res.statusCode).toBe(400); // Devrait s'attendre à 400, pas 200
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("renvoie une erreur si n1 et n2 sont undefined", async () => {
    const res = await request(app)
      .post("/s1/exercice1")
      .send({ n1: undefined, n2: undefined });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Renvoie une erreur si n1 et n2 sont null", async () => {
    const res = await request(app)
      .post("/s1/exercice1")
      .send({ n1: null, n2: null });
    expect(res.statusCode).toBe(400); // Devrait s'attendre à 400, pas 200
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Calcule correctement la somme de n1 et n2", async () => {
    const res = await request(app).post("/s1/exercice1").send({ n1: 1, n2: 2 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: 3 }]);
  });
});

describe("POST /s1/exercice2", () => {
  test("Calcule correctement la soustraction de n1 et n2", async () => {
    const res = await request(app).post("/s1/exercice2").send({ n1: 5, n2: 3 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: 2 }]);
  });

  test("renvoie une erreur si n1 et n2 ne sont pas des nombres", async () => {
    const res = await request(app)
      .post("/s1/exercice2")
      .send({ n1: "un", n2: "deux" });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice2")
      .send({ n1: null, n2: 3 });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("renvoie une erreur si n1 et n2 sont undefined", async () => {
    const res = await request(app)
      .post("/s1/exercice2")
      .send({ n1: undefined, n2: undefined });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Renvoie une erreur si n2 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice2")
      .send({ n1: 5, n2: null });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Renvoie une erreur si n1 et n2 sont null", async () => {
    const res = await request(app)
      .post("/s1/exercice2")
      .send({ n1: null, n2: null });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });
});

describe("POST /s1/exercice3", () => {
  test("Calcule correctement la multiplication de n1 et n2", async () => {
    const res = await request(app).post("/s1/exercice3").send({ n1: 5, n2: 3 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: 15 }]);
  });

  test("renvoie une erreur si n1 et n2 sont undefined", async () => {
    const res = await request(app)
      .post("/s1/exercice3")
      .send({ n1: undefined, n2: undefined });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("renvoie une erreur si n1 et n2 ne sont pas des nombres", async () => {
    const res = await request(app)
      .post("/s1/exercice3")
      .send({ n1: "un", n2: "deux" });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice3")
      .send({ n1: null, n2: 3 });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Renvoie une erreur si n2 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice3")
      .send({ n1: 5, n2: null });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });
});

describe("POST /s1/exercice4", () => {
  test("Calcule correctement la division de n1 et n2", async () => {
    const res = await request(app).post("/s1/exercice4").send({ n1: 6, n2: 3 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: 2 }]);
  });

  test("renvoie une erreur si n1 et n2 sont undefined", async () => {
    const res = await request(app)
      .post("/s1/exercice4")
      .send({ n1: undefined, n2: undefined });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("renvoie une erreur si n1 et n2 ne sont pas des nombres", async () => {
    const res = await request(app)
      .post("/s1/exercice4")
      .send({ n1: "un", n2: "deux" });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice4")
      .send({ n1: null, n2: 3 });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Renvoie une erreur si n2 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice4")
      .send({ n1: 5, n2: null });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });
});

describe("POST /s1/exercice5", () => {
  test("Factorielle de n1", async () => {
    const res = await request(app).post("/s1/exercice5").send({ n1: 5 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: 120 }]);
  });

  test("renvoie une erreur si n1 n'est pas un nombre", async () => {
    const res = await request(app)
      .post("/s1/exercice5")
      .send({ n1: "un", n2: "deux" });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("renvoie une erreur si n1 est undefined", async () => {
    const res = await request(app)
      .post("/s1/exercice5")
      .send({ n1: undefined, n2: undefined });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app).post("/s1/exercice5").send({ n1: null });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });
});

describe("POST /s1/exercice6", () => {
  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app).post("/s1/exercice6").send({ n1: null });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("renvoie une erreur si n1 n'est pas un nombre", async () => {
    const res = await request(app)
      .post("/s1/exercice6")
      .send({ n1: "un", n2: "deux" });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("renvoie une erreur si n1 est undefined", async () => {
    const res = await request(app)
      .post("/s1/exercice6")
      .send({ n1: undefined, n2: undefined });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("n1 est un nombre impair ou pair", async () => {
    const res = await request(app).post("/s1/exercice6").send({ n1: 5 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "impair" }]);
  });

  test("n1 est un nombre impair ou pair", async () => {
    const res = await request(app).post("/s1/exercice6").send({ n1: 4 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "pair" }]);
  });
});

describe("POST /s1/exercice7", () => {
  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app).post("/s1/exercice7").send({ n1: null });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("renvoie une erreur si n1 n'est pas un nombre", async () => {
    const res = await request(app)
      .post("/s1/exercice7")
      .send({ n1: "un", n2: "deux" });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("renvoie une erreur si n1 est undefined", async () => {
    const res = await request(app)
      .post("/s1/exercice7")
      .send({ n1: undefined, n2: undefined });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("celsius en fahrenheit", async () => {
    const res = await request(app).post("/s1/exercice7").send({ n1: 5 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: 41 }]);
  });
});

describe("POST /s1/exercice8", () => {
  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app).post("/s1/exercice8").send({ n1: null });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("renvoie une erreur si n1 n'est pas un nombre", async () => {
    const res = await request(app)
      .post("/s1/exercice8")
      .send({ n1: "un", n2: "deux" });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("renvoie une erreur si n1 est undefined", async () => {
    const res = await request(app)
      .post("/s1/exercice8")
      .send({ n1: undefined, n2: undefined });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("calcul aire d'un cercle", async () => {
    const res = await request(app).post("/s1/exercice8").send({ n1: 5 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: 78.53981633974483 }]);
  });
});

describe("POST /s1/exercice9", () => {
  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app).post("/s1/exercice9").send({ n1: null });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un mot valide" }]);
  });

  test("renvoie une erreur si n1 n'est pas un mot", async () => {
    const res = await request(app)
      .post("/s1/exercice9")
      .send({ n1: 5, n2: "deux" });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un mot valide" }]);
  });

  test("renvoie une erreur si n1 est undefined", async () => {
    const res = await request(app)
      .post("/s1/exercice9")
      .send({ n1: undefined, n2: undefined });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un mot valide" }]);
  });

  test("n1 n'est pas un palindrome", async () => {
    const res = await request(app).post("/s1/exercice9").send({ n1: "test" });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: false }]);
  });

  test("est un palindrome", async () => {
    const res = await request(app).post("/s1/exercice9").send({ n1: "kayak" });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: true }]);
  });
});

describe("POST /s1/exercice10", () => {
  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice10")
      .send({ n1: null, n2: 2 });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("renvoie une erreur si n1 n'est pas un nombre", async () => {
    const res = await request(app)
      .post("/s1/exercice10")
      .send({ n1: "un", n2: "deux" });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("renvoie une erreur si n1 est undefined", async () => {
    const res = await request(app)
      .post("/s1/exercice10")
      .send({ n1: undefined, n2: undefined });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Renvoie une erreur si n2 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice10")
      .send({ n1: 1, n2: null });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Renvoie une erreur si n1 et n2 sont null", async () => {
    const res = await request(app)
      .post("/s1/exercice10")
      .send({ n1: null, n2: null });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("plus grand commun diviseur de n1 et n2", async () => {
    const res = await request(app)
      .post("/s1/exercice10")
      .send({ n1: 6, n2: 3 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: 3 }]);
  });
});

describe("POST /s2/exercice1", () => {
  test("doit renvoyer la date d'aujourd'hui moins 10 ans", async () => {
    const dateActuelle = new Date();
    const année = dateActuelle.getFullYear() - 10;
    const mois = ("0" + (dateActuelle.getMonth() + 1)).slice(-2);
    const jour = ("0" + dateActuelle.getDate()).slice(-2);
    const dateAttendue = `${année}-${mois}-${jour}`;

    const response = await request(app).post("/s2/exercice1").expect(200);

    expect(response.body[0].reponse).toBe(dateAttendue);
  });
});

describe("POST /s2/exercice2", () => {
  test("doit renvoyer une date formatée en 'jj/mm/aaaa'", async () => {
    // Vous devez envoyer une date valide dans le corps de la requête.
    const dateAEnvoyer = new Date(2023, 10, 2); // pour 2 Novembre 2023
    const dateFormateeAttendue = "02/11/2023";

    const response = await request(app)
      .post("/s2/exercice2")
      .send({ date: dateAEnvoyer.toISOString() }) // Supposant que le corps de la requête attend une date ISO.
      .expect(200);

    expect(response.body[0].reponse).toBe(dateFormateeAttendue);
  });

  test("doit renvoyer une erreur si la date est invalide", async () => {
    const dateAEnvoyer = "date invalide";

    const response = await request(app)
      .post("/s2/exercice2")
      .send({ date: dateAEnvoyer })
      .expect(400);

    expect(response.body.reponse).toBe("Veuillez entrer une date valide.");
  });

  test("doit renvoyer une erreur si la date est undefined", async () => {
    const dateAEnvoyer = undefined;

    const response = await request(app)
      .post("/s2/exercice2")
      .send({ date: dateAEnvoyer })
      .expect(400);

    expect(response.body.reponse).toBe("Veuillez entrer une date valide.");
  });

  test("doit renvoyer une erreur si la date est undefined", async () => {
    const dateAEnvoyer = undefined;

    const response = await request(app)
      .post("/s2/exercice2")
      .send({ date: dateAEnvoyer })
      .expect(400);

    expect(response.body.reponse).toBe("Veuillez entrer une date valide.");
  });
});

describe("POST /s2/exercice3", () => {
  test("calcule de jours entre deux dates", async () => {
    const date1 = new Date("2023-01-01");
    const date2 = new Date("2023-01-10");

    const expectedDifference = (date2 - date1) / (1000 * 60 * 60 * 24);

    const response = await request(app)
      .post("/s2/exercice3")
      .send({ date1: date1.toISOString(), date2: date2.toISOString() });

    expect(response.statusCode).toBe(200);
    expect(response.body[0].reponse).toBe(expectedDifference);
  });

  test("dates invalides", async () => {
    const invalidDate1 = "not-a-date";
    const date2 = new Date("2023-01-10");

    const response = await request(app)
      .post("/s2/exercice3")
      .send({ date1: invalidDate1, date2: date2.toISOString() });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe("Veuillez entrer des dates valides.");
  });

  test("date1 > date2", async () => {
    const date1 = new Date("2023-01-10");
    const date2 = new Date("2023-01-01");

    const response = await request(app)
      .post("/s2/exercice3")
      .send({ date1: date1.toISOString(), date2: date2.toISOString() });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe(
      "La première date doit être antérieure à la deuxième."
    );
  });
});

describe("POST /s2/exercice4", () => {
  test("ajoute des jours a une date", async () => {
    const date = new Date("2023-01-01").toISOString();
    const jours = 10;
    const expectedDate = new Date("2023-01-11").toISOString();

    const response = await request(app)
      .post("/s2/exercice4")
      .send({ date, jours });

    expect(response.statusCode).toBe(200);
    expect(response.body.reponse).toBe(expectedDate);
  });

  test("erreur si les jours sont négatifs", async () => {
    const date = new Date("2023-01-01").toISOString();
    const jours = -10;
    const expectedDate = new Date("2023-01-11").toISOString();

    const response = await request(app)
      .post("/s2/exercice4")
      .send({ date, jours });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe("Veuillez entrer un nombre positif.");
  });

  test("erreur si les jours sont nuls", async () => {
    const date = new Date("2023-01-01").toISOString();
    const jours = null;

    const response = await request(app)
      .post("/s2/exercice4")
      .send({ date, jours });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe("Veuillez entrer un nombre.");
  });

  test("erreur si on ne rajoute pas de jours", async () => {
    const date = new Date("2023-01-01").toISOString();
    const jours = 0;

    const response = await request(app)
      .post("/s2/exercice4")
      .send({ date, jours });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe("Veuillez entrer un nombre.");
  });

  test("erreur si les jours sont undefined", async () => {
    const date = new Date("2023-01-01").toISOString();
    const jours = undefined;

    const response = await request(app)
      .post("/s2/exercice4")
      .send({ date, jours });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe("Veuillez entrer un nombre.");
  });

  test("erreur si les jours ne sont pas un nombre", async () => {
    const date = new Date("2023-01-01").toISOString();
    const jours = "not-a-number";

    const response = await request(app)
      .post("/s2/exercice4")
      .send({ date, jours });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe("Données invalides.");
  });

  test("erreur si la date est invalide", async () => {
    const invalidDate = "not-a-date";
    const jours = "not-a-number";

    const response = await request(app)
      .post("/s2/exercice4")
      .send({ date: invalidDate, jours });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe("Données invalides.");
  });
});

describe("POST /s2/exercice5", () => {
  test("devrait retourner true pour une année bissextile", async () => {
    const annee = 2024; // Une année bissextile

    const response = await request(app).post("/s2/exercice5").send({ annee });

    expect(response.statusCode).toBe(200);
    expect(response.body.reponse).toBe(true);
  });

  test("devrait retourner une erreur si l'année est null", async () => {
    const annee = null;

    const response = await request(app).post("/s2/exercice5").send({ annee });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe("Données invalides.");
  });

  test("devrait retourner false pour une année non bissextile", async () => {
    const annee = 2023; // Une année non bissextile

    const response = await request(app).post("/s2/exercice5").send({ annee });

    expect(response.statusCode).toBe(200);
    expect(response.body.reponse).toBe(false);
  });

  test("devrait retourner une erreur si l'année est vide", async () => {
    const annee = undefined;

    const response = await request(app).post("/s2/exercice5").send({ annee });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe("Données invalides.");
  });

  test("l'année doit être positive", async () => {
    const annee = -2023; // Une année non bissextile

    const response = await request(app).post("/s2/exercice5").send({ annee });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe("L'année doit être positive.");
  });

  test("devrait retourner une erreur si l'année est invalide", async () => {
    const annee = "mille neuf cent quatre-vingt-dix-neuf"; // Une chaîne de caractères au lieu d'un nombre

    const response = await request(app).post("/s2/exercice5").send({ annee });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe("Veuillez entrer une année valide.");
  });
});

describe("POST /s2/exercice6", () => {
  test("devrait retourner le premier jour du mois pour une date donnée", async () => {
    const response = await request(app)
      .post("/s2/exercice6")
      .send({ date: "2023-11-15" }); // Utilisez une date en format ISO-8601

    expect(response.statusCode).toBe(200);
    expect(response.body.reponse).toBe("2023-11-01");
  });

  test("devrait retourner une erreur pour une date invalide", async () => {
    const response = await request(app)
      .post("/s2/exercice6")
      .send({ date: "date invalide" });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe("Veuillez fournir une date valide.");
  });

  test("renvoie une erreur si undefined", async () => {
    const response = await request(app)
      .post("/s2/exercice6")
      .send({ date: undefined });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe("Veuillez fournir une date valide.");
  });
});

describe("POST /s2/exercice7", () => {
  test("devrait retourner le dernier jour du mois pour une date donnée", async () => {
    const date = new Date(Date.UTC(2023, 10, 15)); // 15 novembre 2023
    const response = await request(app)
      .post("/s2/exercice7")
      .send({ date: date.toISOString().split("T")[0] });

    expect(response.statusCode).toBe(200);
    expect(response.body.reponse).toBe("2023-11-30");
  });

  test("devrait retourner une erreur pour une date invalide", async () => {
    const response = await request(app)
      .post("/s2/exercice7")
      .send({ date: "une date invalide" });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe("Veuillez fournir une date valide.");
  });

  test("renvoie une erreur si undefined", async () => {
    const response = await request(app)
      .post("/s2/exercice7")
      .send({ date: undefined });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe("Veuillez fournir une date valide.");
  });

  test("devrait retourner une erreur pour une date invalide", async () => {
    const response = await request(app)
      .post("/s2/exercice7")
      .send({ date: "une date invalide" });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe("Veuillez fournir une date valide.");
  });
});

describe("POST /s2/exercice8", () => {
  test('devrait retourner une durée formatée en "hh:mm"', async () => {
    const response = await request(app)
      .post("/s2/exercice8")
      .send({ heures: 9, minutes: 5 });

    expect(response.statusCode).toBe(200);
    expect(response.body.reponse).toBe("09:05");
  });

  test("devrait retourner une erreur si les heures sont supérieures à 23", async () => {
    const response = await request(app)
      .post("/s2/exercice8")
      .send({ heures: 24, minutes: 5 });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe("Veuillez fournir une heure valide.");
  });

  test("devrait retourner une erreur si les minutes sont supérieures à 59", async () => {
    const response = await request(app)
      .post("/s2/exercice8")
      .send({ heures: 9, minutes: 60 });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe("Veuillez fournir une minute valide.");
  });

  test("devrait retourner une erreur si les heures ou les minutes ne sont pas des nombres", async () => {
    const response = await request(app)
      .post("/s2/exercice8")
      .send({ heures: "neuf", minutes: "cinq" });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe(
      "Veuillez fournir des nombres valides pour les heures et les minutes."
    );
  });
});
describe("POST /s2/exercice9", () => {
  test("devrait retourner true si les plages de dates se chevauchent", async () => {
    const response = await request(app).post("/s2/exercice9").send({
      debut1: "2023-01-01",
      fin1: "2023-01-10",
      debut2: "2023-01-05",
      fin2: "2023-01-15",
    });

    expect(response.statusCode).toBe(200);
    expect(response.body.reponse).toBeTruthy();
  });

  test("devrait retourner undefined si date debut1 est invalides", async () => {
    const response = await request(app).post("/s2/exercice9").send({
      debut1: "date invalide",
      fin1: "2023-01-10",
      debut2: "2023-01-05",
      fin2: "2023-01-15",
    });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe("Veuillez entrer des dates valides.");
  });

  test("devrait retourner undefined si date fin1 est invalides", async () => {
    const response = await request(app).post("/s2/exercice9").send({
      debut1: "2023-01-01",
      fin1: "date invalide",
      debut2: "2023-01-05",
      fin2: "2023-01-15",
    });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe("Veuillez entrer des dates valides.");
  });

  test("devrait retourner undefined si date debut2 est invalides", async () => {
    const response = await request(app).post("/s2/exercice9").send({
      debut1: "2023-01-01",
      fin1: "2023-01-10",
      debut2: "date invalide",
      fin2: "2023-01-15",
    });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe("Veuillez entrer des dates valides.");
  });

  test("devrait retourner undefined si date fin2 est invalides", async () => {
    const response = await request(app).post("/s2/exercice9").send({
      debut1: "2023-01-01",
      fin1: "2023-01-10",
      debut2: "2023-01-05",
      fin2: "date invalide",
    });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe("Veuillez entrer des dates valides.");
  });

  test("devrait retourner une erreur si les dates ne sont pas dans le bon ordre", async () => {
    const response = await request(app).post("/s2/exercice9").send({
      debut1: "2023-01-10",
      fin1: "2023-01-01",
      debut2: "2023-01-05",
      fin2: "2023-01-15",
    });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe(
      "La date de début doit être antérieure à la date de fin."
    );
  });

  test("devrait retourner une erreur si le format des dates est invalide", async () => {
    const response = await request(app).post("/s2/exercice9").send({
      debut1: "01-01-2023",
      fin1: "2023-01-10",
      debut2: "2023-01-05",
      fin2: "2023-01-15",
    });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe("Veuillez entrer des dates valides.");
  });

  test("devrait retourner false si les plages de dates ne se chevauchent pas", async () => {
    const response = await request(app).post("/s2/exercice9").send({
      debut1: "2023-01-01",
      fin1: "2023-01-10",
      debut2: "2023-01-11",
      fin2: "2023-01-20",
    });

    expect(response.statusCode).toBe(200);
    expect(response.body.reponse).toBeFalsy();
  });

  test("devrait retourner une erreur pour des dates invalides", async () => {
    const response = await request(app).post("/s2/exercice9").send({
      debut1: "date invalide",
      fin1: "2023-01-10",
      debut2: "2023-01-11",
      fin2: "2023-01-20",
    });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe("Veuillez entrer des dates valides.");
  });

  test("devrait retourner une erreur si les dates ne sont pas dans le bon ordre", async () => {
    const response = await request(app).post("/s2/exercice9").send({
      debut1: "2023-01-10",
      fin1: "2023-01-01",
      debut2: "2023-01-11",
      fin2: "2023-01-20",
    });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe(
      "La date de début doit être antérieure à la date de fin."
    );
  });
});

describe("POST /s2/exercice10", () => {
  test("devrait retourner l'âge correct pour une date de naissance donnée", async () => {
    const response = await request(app)
      .post("/s2/exercice10")
      .send({ dateNaissance: "1990-01-01" }); // Assurez-vous que la date est au format aaaa-mm-jj

    const expectedAge = new Date().getFullYear() - 1990; // Remplacez 1990 par l'année de naissance pour le test
    expect(response.statusCode).toBe(200);
    expect(response.body.reponse).toBe(expectedAge);
  });

  test("devrait retourner une erreur pour une date de naissance future", async () => {
    const response = await request(app)
      .post("/s2/exercice10")
      .send({ dateNaissance: "2090-01-01" });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe(
      "Veuillez entrer une date de naissance valide."
    );
  });

  test("devrait retourner une erreur si la date de naissance est undefined", async () => {
    const response = await request(app)
      .post("/s2/exercice10")
      .send({ dateNaissance: undefined });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe(
      "Veuillez entrer une date de naissance valide."
    );
  });

  test("devrait retourner une erreur si la date de naissance est vide", async () => {
    const response = await request(app)
      .post("/s2/exercice10")
      .send({ dateNaissance: "" });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe(
      "Veuillez entrer une date de naissance valide."
    );
  });

  test("devrait retourner une erreur si le format de la date de naissance est invalide", async () => {
    const response = await request(app)
      .post("/s2/exercice10")
      .send({ dateNaissance: "01-01-1990" });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe(
      "Veuillez entrer une date de naissance valide."
    );
  });

  test("devrait retourner une erreur pour une date de naissance invalide", async () => {
    const response = await request(app)
      .post("/s2/exercice10")
      .send({ dateNaissance: "date invalide" });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe(
      "Veuillez entrer une date de naissance valide."
    );
  });

  test("devrait retourner une erreur pour une date de naissance invalide", async () => {
    const response = await request(app)
      .post("/s2/exercice10")
      .send({ dateNaissance: "date invalide" });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe(
      "Veuillez entrer une date de naissance valide."
    );
  });
});
