// Liste des verbes Pular
const verbes = [
  "windugol", 

  "jannugol"
];

// Constantes de conjugaison
const pronomsCont = ["Lan", "Ɗa", "Mo", "Ɗen", "Ɗon", "Ɓe"];
const pronomsSujet = ["Mi", "A", "O", "En", "On", "Ɓe"];

const tempsOrdre = [
  "present", "continu", "passecompose", "passesimple", "imparfait", "plusque",
  "futurproche", "futursimple", "futurcont", "futurante", "condpresent", "condforme1"
];

const tempsLabels = {
  present: "Présent",
  continu: "Présent continu",
  passecompose: "Passé composé",
  passesimple: "Passé simple",
  imparfait: "Imparfait",
  plusque: "Plus-que-parfait",
  futurproche: "Futur proche",
  futursimple: "Futur simple",
  futurcont: "Futur continu",
  futurante: "Futur antérieur",
  condpresent: "Conditionnel présent",
  condforme1: "Conditionnel forme 1"
};

// Verbes irréguliers
const irreguliers = {
  "faalegol": { base: "faal", presentAffSuffix: "aa" },
  "yiƊugol": { base: "yiƊ", presentAffSuffix: "i", passeSimpleAffSuffix: "uno" }
};