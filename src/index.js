class Joueur {
    constructor(nom) {
      this.nom = nom;
      this.victoires = 0;
    }
  
    choisirAleatoire() {
      const choixPossibles = ["pierre", "feuille", "ciseaux"];
      const indiceChoix = Math.floor(Math.random() * choixPossibles.length);
      return choixPossibles[indiceChoix];
    }
  
    gagner() {
      this.victoires++;
    }
  }
  
  class Partie {
    constructor(joueur1, joueur2) {
      this.joueur1 = joueur1;
      this.joueur2 = joueur2;
    }
  
    determinerVainqueur(choixJoueur1, choixJoueur2) {
      if (choixJoueur1 === choixJoueur2) {
        return "Égalité !";
      } else if (
        (choixJoueur1 === "pierre" && choixJoueur2 === "ciseaux") ||
        (choixJoueur1 === "feuille" && choixJoueur2 === "pierre") ||
        (choixJoueur1 === "ciseaux" && choixJoueur2 === "feuille")
      ) {
        return `${this.joueur1.nom} a gagné !`;
      } else {
        return `${this.joueur2.nom} a réussie !`;
      }
    }
  
    jouerPartie() {
      let victoiresJoueur1 = 0;
      let victoiresJoueur2 = 0;
  
        for (let tour = 1; tour <= 3; tour++) {
          console.log(`Tour ${tour}`);
  
          const choixJoueur1 = this.joueur1.choisirAleatoire();
          const choixJoueur2 = this.joueur2.choisirAleatoire();
  
          console.log(`${this.joueur1.nom} a choisi : ${choixJoueur1}`);
          console.log(`${this.joueur2.nom} a choisi : ${choixJoueur2}`);
  
          const resultatTour = this.determinerVainqueur(choixJoueur1, choixJoueur2);
          console.log(resultatTour);
  
          if (resultatTour.includes("a gagné")) {
            victoiresJoueur1++;
          } else if (resultatTour.includes("a réussie")) {
            victoiresJoueur2++;
          }
        }
  
      // Déterminer le vainqueur final
      if (victoiresJoueur1 > victoiresJoueur2) {
        console.log(`Le vainqueur final est ${this.joueur1.nom} avec ${victoiresJoueur1} victoires.`);
      } else if (victoiresJoueur1 < victoiresJoueur2) {
        console.log(`Le vainqueur final est ${this.joueur2.nom} avec ${victoiresJoueur2} victoires.`);
      } else {
        console.log("La partie est terminée avec un match nul.");
      }
    }
  }
  
  // Utilisation des classes
  const joueur1 = new Joueur("Joueur 1");
  const joueur2 = new Joueur("Joueur 2");
  
  const partie = new Partie(joueur1, joueur2);
  partie.jouerPartie();
  
  module.exports = { Joueur, Partie };
  