export type Realisatie = {
  slug: string;
  label: string;
  location: string;
  type: string;
  duration: string;
  description: string;
  thumbnail: string;
  images: string[];
};

export const realisaties: Realisatie[] = [
  {
    slug: "strak-pleisterwerk-nieuwbouwwoning",
    label: "Strak pleisterwerk — nieuwbouwwoning",
    location: "Antwerpen",
    type: "Binnenpleisterwerken",
    duration: "3 weken",
    description:
      "Voor deze nieuwbouwwoning in Antwerpen verzorgden wij het volledige binnenpleisterwerk. Van de ruwbouwmuren tot een spiegelglad eindresultaat, klaar voor schilderwerk. Alle wanden en plafonds werden vakkundig afgewerkt met spuitplamuur voor een perfecte, strakke uitstraling.",
    thumbnail:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "gevelbekleding-volledige-renovatie",
    label: "Gevelbekleding — volledige renovatie",
    location: "Gent",
    type: "Buitenpleisterwerken",
    duration: "2 weken",
    description:
      "Deze woning in Gent kreeg een volledig nieuwe buitenbepleistering. De oude, verweerde gevel werd grondig voorbehandeld en vervolgens voorzien van een weerbestendige bepleistering. Het resultaat is een frisse, beschermde gevel die er jarenlang mooi blijft uitzien.",
    thumbnail:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "spuitplamuur-luxe-interieur",
    label: "Spuitplamuur afwerking — luxe interieur",
    location: "Brussel",
    type: "Spuitplamuur",
    duration: "1 week",
    description:
      "In dit luxe appartement in Brussel werden alle wanden en plafonds behandeld met spuitplamuur. Deze techniek geeft een perfect vlakke ondergrond en is ideaal voor hoogwaardige interieurs. De bewoners kozen bewust voor dit afwerkingsniveau om het maximale uit hun schilderwerk te halen.",
    thumbnail:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];
