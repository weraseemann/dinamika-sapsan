import { Truck, Route, ShieldCheck } from "lucide-react";

export const navItems = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Fuhrpark", href: "#fuhrpark" },
  { label: "Consulting", href: "#consulting" },
  { label: "Kontakt", href: "#kontakt" },
];

export const services = [
  {
    icon: Truck,
    title: "Transporte bis 3,5 t",
    text: "Flexible Direkt- und Sonderfahrten für Unternehmen und Privatkunden - schnell, zuverlässig und projektbezogen geplant.",
  },
  {
    icon: Route,
    title: "Europaweite Ziele",
    text: "Mit verlässlichen Fahrern und einem skalierbaren Fuhrpark erreichen wir Ziele in ganz Europa.",
  },
  {
    icon: ShieldCheck,
    title: "Individuelle Lösungen",
    text: "Keine Standardlösung: jede Anfrage wird nach Zeitfenster, Ware, Route und Budget passgenau kalkuliert.",
  },
];

export const stats = [
  { value: "20+", label: "Fahrzeuge im Fuhrpark" },
  { value: "3,5 t", label: "Transportklasse" },
  { value: "EU", label: "Einsatzgebiet" },
];

export const benefits = [
  "Kurzfristige Transportanfragen",
  "Beratung für logistische Herausforderungen",
  "Eigene Werkstatt für hohe Einsatzbereitschaft",
  "Faire Konditionen und transparente Abstimmung",
];
