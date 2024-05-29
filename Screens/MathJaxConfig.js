export default {
  TeX: {
    Macros: {
      RR: "\\mathbb{R}", // Definiert ein Makro für die reellen Zahlen
      bold: ["{\\bf #1}", 1], // Definiert ein Makro für fettgedruckten Text
      vector: ["\\boldsymbol{#1}", 1], // Definiert ein Makro für Vektoren
      argmax: ["\\operatorname{arg\\,max}", 0],
    },
  },
};