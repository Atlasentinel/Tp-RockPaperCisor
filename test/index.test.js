const { expect } = require('chai');
const { Joueur, Partie } = require('../src/index');

describe('Joueur', () => {
  it('choisirAleatoire doit retourner une valeur valide', () => {
    const joueur = new Joueur('Test');
    const choix = joueur.choisirAleatoire();
    expect(['pierre', 'feuille', 'ciseaux']).to.include(choix);
  });

  it('gagner doit incrémenter le nombre de victoires', () => {
    const joueur = new Joueur('Test');
    joueur.gagner();
    expect(joueur.victoires).to.equal(1);
  });
});

describe('Partie', () => {
  it('determinerVainqueur doit retourner le résultat correct', () => {
    const joueur1 = new Joueur('Joueur 1');
    const joueur2 = new Joueur('Joueur 2');
    const partie = new Partie(joueur1, joueur2);

    const resultat = partie.determinerVainqueur('pierre', 'ciseaux');
    expect(resultat).to.equal('Joueur 1 a gagné !');
  });

  it('jouerPartie doit retourner le vainqueur correct', () => {
    const joueur1 = new Joueur('Joueur 1');
    const joueur2 = new Joueur('Joueur 2');
    const partie = new Partie(joueur1, joueur2);

    partie.jouerPartie();

  });
});
