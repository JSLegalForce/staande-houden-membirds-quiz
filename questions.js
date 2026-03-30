const ALLE_VRAGEN = [
  {
    thema: "Bevoegdheid staande houden",
    vraag: "Mag iedereen een verdachte staande houden?",
    opties: [
      "Ja, iedereen mag een verdachte staande houden",
      "Nee, alleen een opsporingsambtenaar mag een verdachte staande houden",
      "Ja, ook burgers mogen iemand staande houden",
      "Nee, alleen de politie heeft deze bevoegdheid"
    ],
    juist: 1,
    uitleg: "Alleen een opsporingsambtenaar mag een verdachte staande houden (art. 52 Sv). Een burger heeft deze bevoegdheid niet, maar mag wel aanhouden bij heterdaad (art. 53 Sv). Voor BOA's geldt dat zij alleen mogen staande houden voor feiten waarvoor zij opsporingsbevoegd zijn.",
    artikel: "Art. 52 Sv"
  },
  {
    thema: "Doel van staande houden",
    vraag: "Het doel van staande houden is het opnemen van een verklaring van de verdachte.",
    opties: [
      "Ja, dat is het doel van staande houden",
      "Nee, het doel is het vaststellen van de identiteit van de verdachte",
      "Ja, staande houden is bedoeld voor verhoor",
      "Nee, het doel is het in beslag nemen van voorwerpen"
    ],
    juist: 1,
    uitleg: "Het doel van staande houden is het vaststellen van de identiteit van de verdachte (art. 52 Sv). Het horen van de verdachte is een afzonderlijke ambtsverrichting.",
    artikel: "Art. 52 Sv"
  },
  {
    thema: "Mededeling van verdenking",
    vraag: "Bij een staande houding hoef je niet te vertellen waarvan iemand wordt verdacht.",
    opties: [
      "Ja, je hoeft de reden niet te noemen",
      "Nee, je moet de verdachte altijd mededelen waarvan hij wordt verdacht",
      "Ja, dit is alleen verplicht bij aanhouding",
      "Nee, maar alleen als de verdachte ernaar vraagt"
    ],
    juist: 1,
    uitleg: "Je moet de verdachte mededelen waarvan hij wordt verdacht (art. 27c lid 1 Sv). Dit geldt dus ook bij het staande houden van een verdachte.",
    artikel: "Art. 27c lid 1 Sv"
  },
  {
    thema: "Heterdaad vereiste",
    vraag: "Je ziet iemand wildplassen (APV). Hij rent weg. De volgende dag zie je hem opnieuw en wil je hem alsnog staande houden. Mag dat?",
    opties: [
      "Nee, je mag alleen bij heterdaad staande houden",
      "Nee, de overtreding is verjaard na 24 uur",
      "Ja, artikel 52 Sv vereist geen heterdaad",
      "Ja, maar alleen als je een bevel hebt van de officier van justitie"
    ],
    juist: 2,
    uitleg: "Artikel 52 Sv vereist geen heterdaad. Staande houden mag ook later, zolang dit nog proportioneel en uitlegbaar is. Een dag later is in de praktijk doorgaans nog redelijk.",
    artikel: "Art. 52 Sv"
  },
  {
    thema: "Medewerking verdachte",
    vraag: "Je houdt iemand staande voor baldadigheid. Hij loopt weg. Je vordert hem te blijven staan op grond van art. 184 Sr. Moet hij daaraan voldoen?",
    opties: [
      "Ja, hij moet altijd gehoor geven aan een vordering",
      "Nee, een verdachte hoeft niet mee te werken aan zijn eigen veroordeling",
      "Ja, weglopen is altijd strafbaar",
      "Nee, maar je mag hem direct aanhouden op grond van art. 52 Sv"
    ],
    juist: 1,
    uitleg: "Een verdachte hoeft niet mee te werken aan zijn eigen veroordeling en mag weglopen. Je kunt de verdachte wel bij heterdaad aanhouden (art. 53 Sv).",
    artikel: "Art. 53 Sv",
    juridischAdvies: true
  },
  {
    thema: "Wederspannigheid",
    vraag: "Je houdt iemand staande voor vernieling. Hij rukt zich met kracht los en roept dat hij je zal slaan. Wat is dit?",
    opties: [
      "Poging tot mishandeling",
      "Bedreiging",
      "Wederspannigheid",
      "Belediging van een ambtenaar in functie"
    ],
    juist: 2,
    uitleg: "De verdachte verzet zich met geweld tegen een ambtsverrichting en dreigt met geweld. Dit levert wederspannigheid op (art. 180 Sr). De verdachte hoeft niet mee te werken, maar moet de ambtshandeling wel dulden.",
    artikel: "Art. 180 Sr",
    juridischAdvies: true
  },
  {
    thema: "Mulderfeit vs. strafbaar feit",
    vraag: "Mag je een fietser die een mobiele telefoon vasthoudt staande houden op grond van art. 52 Sv?",
    opties: [
      "Ja, dit is altijd toegestaan als opsporingsambtenaar",
      "Nee, dit betreft een Mulderfeit en geen strafbaar feit in de zin van het Wetboek van Strafvordering",
      "Ja, maar alleen als je ook verkeersbevoegdheid hebt",
      "Nee, dit is uitsluitend voorbehouden aan de politie"
    ],
    juist: 1,
    uitleg: "Dit betreft een Mulderfeit (RVV 1990) en geen strafbaar feit in de zin van het Wetboek van Strafvordering. De betrokkene is geen verdachte. Je handelt als toezichthouder en kunt op grond van art. 5:16a Awb een identiteitsbewijs vorderen. Je kunt de betrokkene stilhouden op grond van art. 5:16 Awb.",
    artikel: "Art. 5:16 Awb / Art. 5:16a Awb"
  }
];
