// Fonctions de conjugaison
function detectType(verbe) {
  verbe = verbe.trim().toLowerCase();
  if (verbe.endsWith("ugol")) return "ugol";
  if (verbe.endsWith("agol")) return "agol";
  if (verbe.endsWith("egol")) return "egol";
  if (verbe.endsWith("rgol") || verbe.endsWith("ngol") || verbe.endsWith("irgol") || verbe.endsWith("angol")) return "gol";
  return "gol";
}

function getBase(verbe) {
  verbe = verbe.trim().toLowerCase();
  if (irreguliers[verbe]) return irreguliers[verbe].base;
  if (verbe.endsWith("ugol") || verbe.endsWith("agol") || verbe.endsWith("egol")) return verbe.slice(0, -4);
  if (verbe.endsWith("gol")) return verbe.slice(0, -3);
  return verbe;
}

function getSuffix(type, temps, mode, verbeOrig) {
  const isIrreg = irreguliers[verbeOrig];
  
  if (type === "ugol") {
    const map = {
      present: mode === "neg" ? "ataa" : (isIrreg?.presentAffSuffix || "a"),
      continu: "ude",
      passecompose: mode === "neg" ? "aali" : "ii",
      passesimple: mode === "neg" ? "aani" : (isIrreg?.passeSimpleAffSuffix || "i"),
      imparfait: "ude",
      plusque: mode === "neg" ? "aano" : "iino",
      futurproche: mode === "neg" ? "aata" : "ay",
      futursimple: mode === "neg" ? "oyta" : "oyay",
      futurcont: "ude",
      futurante: mode === "neg" ? "oyaali" : "oyii",
      condpresent: mode === "neg" ? "ataano" : "ayno",
      condforme1: mode === "neg" ? "oytaano" : "oyayno"
    };
    return map[temps] || "";
  } else if (type === "agol") {
    const map = {
      present: mode === "neg" ? "otaako" : "oo",
      continu: "aade",
      passecompose: mode === "neg" ? "aaki" : "ike",
      passesimple: mode === "neg" ? "aani" : "i",
      imparfait: "aade",
      plusque: mode === "neg" ? "anooki" : "inoke",
      futurproche: mode === "neg" ? "otaako" : "toto",
      futursimple: mode === "neg" ? "oytaako" : "oyto",
      futurcont: "aade",
      futurante: mode === "neg" ? "oyaaki" : "oyike",
      condpresent: mode === "neg" ? "otanooko" : "otono",
      condforme1: mode === "neg" ? "oytanooko" : "oytono"
    };
    return map[temps] || "";
  } else if (type === "egol") {
    const map = {
      present: mode === "neg" ? "etaake" : "ee",
      continu: "eede",
      passecompose: mode === "neg" ? "aaka" : "aama",
      passesimple: mode === "neg" ? "aaka" : "aa",
      imparfait: "eede",
      plusque: mode === "neg" ? "anooka" : "anooma",
      futurproche: mode === "neg" ? "etaake" : "tete",
      futursimple: mode === "neg" ? "oytaake" : "oyte",
      futurcont: "eede",
      futurante: mode === "neg" ? "otoyaaka" : "otoyaama",
      condpresent: mode === "neg" ? "etanooke" : "eteno",
      condforme1: mode === "neg" ? "oytanooke" : "oyteno"
    };
    return map[temps] || "";
  } else if (type === "gol") {
    const map = {
      present: mode === "neg" ? "ta" : "a",
      continu: "de",
      passecompose: mode === "neg" ? "aali" : "ii",
      passesimple: mode === "neg" ? "aani" : "i",
      imparfait: "de",
      plusque: mode === "neg" ? "aano" : "iino",
      futurproche: "ay",
      futursimple: mode === "neg" ? "oytaake" : "oyte",
      futurcont: "de",
      futurante: mode === "neg" ? "oyaali" : "oyi",
      condpresent: mode === "neg" ? "taano" : "ayno",
      condforme1: mode === "neg" ? "oytaano" : "oyayno"
    };
    return map[temps] || "";
  }
  return "";
}

function getPrefix(temps, mode) {
  let prefix = "";
  if (["imparfait", "plusque"].includes(temps)) prefix = "Hari ";
  if (["futurante", "futurcont"].includes(temps)) prefix = "Haray ";
  if (mode === "neg" && ["continu", "imparfait", "futurcont"].includes(temps)) prefix += "alaa ";
  return prefix;
}

function genererTableauTemps(verbeInput, type, temps, mode) {
  const verbeOrig = verbeInput.toLowerCase();
  const base = getBase(verbeInput);
  const prefixGlobal = getPrefix(temps, mode);
  const suffix = getSuffix(type, temps, mode, verbeOrig);
  const estAffContinu = (["present", "continu", "imparfait", "futurcont"].includes(temps) && mode === "aff");

  let html = `<div class="temps-section"><table class="temps-table"><thead><tr><th>${tempsLabels[temps]} — ${mode === "aff" ? "Affirmatif" : mode === "neg" ? "Négatif" : "Interrogatif"}</th></tr></thead><tbody>`;

  for (let i = 0; i < 6; i++) {
    const pronom = estAffContinu ? pronomsCont[i].toLowerCase() : pronomsSujet[i].toLowerCase();
    let forme = prefixGlobal;
    if (prefixGlobal) forme += " " + pronom + " " + base + suffix;
    else forme += pronom + " " + base + suffix;

    if (mode === "int") forme += "?";
    forme = forme.charAt(0).toUpperCase() + forme.slice(1);

    html += `<tr><td>${forme}</td></tr>`;
  }
  html += `</tbody></table></div>`;
  return html;
}

function genererParticipeGerondif(verbeInput, type) {
  const base = getBase(verbeInput);
  let html = `<div class="extra-section"><div class="extra-title">Participe & Gérondif</div><div class="extra-grid">`;

  if (type === "ugol") {
    html += `<div class="extra-item"><strong>Participe présent</strong><div>u (2e sing.), en (1re plur.), ee (2e plur. respectueux)</div></div>`;
    html += `<div class="extra-item"><strong>Gérondif présent</strong><div>Ɗe ${base}ee</div></div>`;
    html += `<div class="extra-item"><strong>Gérondif passé</strong><div>Ɗe ${base}anoo</div></div>`;
  } else if (type === "agol") {
    html += `<div class="extra-item"><strong>Participe présent</strong><div>o (2e sing.), oƊen (1re plur.), ee (2e plur. respectueux)</div></div>`;
    html += `<div class="extra-item"><strong>Gérondif présent</strong><div>Ɗe ${base}otoo</div></div>`;
    html += `<div class="extra-item"><strong>Gérondif passé</strong><div>Ɗe ${base}inoo</div></div>`;
  } else if (type === "egol") {
    html += `<div class="extra-item"><strong>Participe présent</strong><div>ee (toutes personnes)</div></div>`;
    html += `<div class="extra-item"><strong>Gérondif présent</strong><div>Ɗe ${base}ee</div></div>`;
    html += `<div class="extra-item"><strong>Gérondif passé</strong><div>Ɗe ${base}anoo</div></div>`;
  } else if (type === "gol") {
    html += `<div class="extra-item"><strong>Participe présent</strong><div>en (1re plur.), ee (2e plur.)</div></div>`;
    html += `<div class="extra-item"><strong>Gérondif présent</strong><div>Ɗe ${base}ee</div></div>`;
    html += `<div class="extra-item"><strong>Gérondif passé</strong><div>Ɗe ${base}anoo</div></div>`;
  }

  html += `</div></div>`;
  return html;
}

// Fonction principale de conjugaison
function conjuguer() {
  const verbeInput = document.getElementById("verbe").value.trim();
  const mode = document.getElementById("mode").value;
  const allTempsChecked = document.getElementById("allTemps").checked;

  if (!verbeInput) {
    alert("Veuillez entrer un verbe !");
    return;
  }

  const type = detectType(verbeInput);
  const listContainer = document.getElementById("conjugationList");
  listContainer.innerHTML = "";

  document.getElementById("note").textContent = `Verbe : ${verbeInput} | Base : ${getBase(verbeInput)} | Groupe détecté : ${type}`;

  if (allTempsChecked) {
    tempsOrdre.forEach(temps => {
      listContainer.innerHTML += genererTableauTemps(verbeInput, type, temps, mode);
    });
    listContainer.innerHTML += genererParticipeGerondif(verbeInput, type);
  } else {
    const temps = document.getElementById("temps").value;
    listContainer.innerHTML += genererTableauTemps(verbeInput, type, temps, mode);
  }

  document.getElementById("resultsCard").classList.add("show");
}

// Événements
document.addEventListener("DOMContentLoaded", function() {
  // Entrée avec Enter
  document.getElementById("verbe").addEventListener("keypress", e => {
    if (e.key === "Enter") conjuguer();
  });

  // Récupérer verbe depuis liste
  const verbeStocke = localStorage.getItem("verbeAConjuguer");
  const tousTemps = localStorage.getItem("tousLesTemps") === "true";
  const mode = localStorage.getItem("modeConjugaison") || "aff";

  if (verbeStocke) {
    document.getElementById("verbe").value = verbeStocke;
    document.getElementById("mode").value = mode;
    document.getElementById("allTemps").checked = tousTemps;
    conjuguer();

    // Nettoyer
    localStorage.removeItem("verbeAConjuguer");
    localStorage.removeItem("tousLesTemps");
    localStorage.removeItem("modeConjugaison");
  }
});