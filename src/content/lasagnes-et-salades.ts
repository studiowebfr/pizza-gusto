export const lasagne = {
  prix: 6.9,
  formules: [
    { nom: "Lasagne + boisson 50cl + dessert", prix: 9.9 },
    { nom: "Lasagne + boisson 33cl + dessert", prix: 9.0 },
    { nom: "Lasagne + bière en canette + dessert", composition: "Heineken ou 1664.", prix: 10.0 },
  ],
};

export const saladeComposee = {
  prix: 5.9,
  // Composition non détaillée sur le site actuel.
  composition: null as string | null,
};
