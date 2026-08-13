Travel Agency Router

In diesem Projekt habe ich eine bestehende Reisebüro-Webseite um ein vollständiges Routing-System und eine globale Zustandsverwaltung erweitert. Die Anwendung entstand im Rahmen meiner Umschulung zum Softwareentwickler an der WBS Coding School.

Neben den Pflichtanforderungen habe ich zwei Bonusfunktionen umgesetzt: eine Buchungsverwaltung mit useReducer und einen Theme-Wechsler mit der Context API.

Funktionen

Navigation zwischen mehreren Seiten ohne vollständiges Neuladen

dynamische Detailseiten für Reiseziele

eigene 404-Seite mit Zurück-Button

Reiseziele buchen und Buchungen wieder entfernen

Schutz vor doppelten Buchungen

Premiumstatus ab drei gebuchten Reisezielen

Anzeige der aktuellen Buchungsanzahl

Auswahl zwischen Dark, Light, Cupcake und Halloween

Speicherung des ausgewählten Themes im localStorage

responsives Design mit TailwindCSS und DaisyUI

Verwendete Technologien

React

React Router

Context API

useReducer, useState und useEffect

eigene React Hooks

Vite

TailwindCSS und DaisyUI

ESLint

Git und GitHub

React Router

Für die Navigation habe ich React Router verwendet. Der BrowserRouter umschließt die Anwendung. In App.jsx habe ich die einzelnen Routen mit Routes und Route definiert.

Pfad

Komponente

Aufgabe

/

Home

Startseite

/about

About

Informationen über das Reisebüro

/contact

Contact

Kontaktseite

/destinations

Destinations

Übersicht aller Reiseziele

/destinations/:slug

SingleDest

dynamische Detailseite

*

NotFound

404-Seite für unbekannte Pfade

Für interne Links verwende ich Link und NavLink. Dadurch wechselt React die Ansicht, ohne die komplette Webseite neu zu laden. Mit useParams() lese ich den slug aus der URL und finde damit das passende Reiseziel. Der Zurück-Button auf der 404-Seite verwendet useNavigate().

BookingContext und useReducer

Die Buchungsverwaltung habe ich mit der Context API und useReducer umgesetzt. Der globale Buchungsstatus besteht aus zusammengehörigen Werten:

{
  destinations: [],
  premium: false
}

Der Reducer verarbeitet zwei Aktionen:

ADD_BOOKING fügt ein Reiseziel hinzu.

REMOVE_DESTINATION entfernt ein Reiseziel.

Ich habe useReducer gewählt, weil Buchungsliste und Premiumstatus zusammengehören und durch verschiedene Aktionen verändert werden. Die gesamte Update-Logik befindet sich dadurch zentral im Reducer. Doppelte Buchungen werden verhindert. Ab drei Buchungen wird der Premiumstatus aktiviert und beim Entfernen einer Buchung automatisch neu berechnet.

Der eigene Hook useBooking() gibt den Komponenten einen einfachen Zugriff auf bookingState, addDestination() und removeDestination().

ThemeContext

Für den Theme-Wechsler habe ich einen zweiten Context erstellt. Über useTheme() kann die Navbar das aktuelle Theme lesen und ändern.

Verfügbare DaisyUI-Themes:

Dark

Light

Cupcake

Halloween

Mit useEffect setze ich das ausgewählte Theme als data-theme auf dem HTML-Element. Zusätzlich speichere ich es im localStorage. Deshalb bleibt die Auswahl auch nach einem Neuladen erhalten.

Projektstruktur

src/
├── components/
│   ├── DestCard.jsx
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   ├── PopDests.jsx
│   ├── Search.jsx
│   └── WhyBook.jsx
├── contexts/
│   ├── BookingContext.js
│   ├── BookingProvider.jsx
│   ├── ThemeContext.js
│   ├── ThemeProvider.jsx
│   ├── useBooking.js
│   └── useTheme.js
├── data/
│   └── destinations.js
├── pages/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Destinations.jsx
│   ├── Home.jsx
│   ├── NotFound.jsx
│   └── SingleDest.jsx
├── App.jsx
├── index.css
└── main.jsx

Context, Provider und eigene Hooks habe ich bewusst auf getrennte Dateien verteilt. Dadurch bleibt der Code übersichtlich und ich vermeide Fast-Refresh-Warnungen.

Installation und Start

git clone https://github.com/bmkbauservice-hue/travel-agency-router.git
cd travel-agency-router
npm install
npm run dev

Vite zeigt anschließend die lokale Adresse im Terminal an.

Qualitätsprüfung

Ich habe das Projekt abschließend mit folgenden Befehlen geprüft:

npm run lint
npm run build

Ergebnis:

ESLint ohne Fehler

Produktions-Build erfolgreich

Einsatz von KI

Ich habe bei diesem Projekt KI als Lern- und Entwicklungshilfe eingesetzt. Sie hat mich beim Verstehen der Aufgabenstellung, beim Strukturieren der Arbeitsschritte, beim Erklären von React Router, Context API und useReducer sowie bei der Fehlersuche unterstützt.

Die Umsetzung habe ich Schritt für Schritt in meinem eigenen Projekt durchgeführt, im Browser getestet und mit ESLint sowie dem Produktions-Build kontrolliert. Besonders wichtig war mir, nicht nur Code zu übernehmen, sondern zu verstehen, warum ich useState, useReducer, Context, Provider und eigene Hooks in den jeweiligen Situationen verwende.

Was ich gelernt habe

In diesem Projekt habe ich gelernt,

wie ich eine React-App mit mehreren Routen strukturiere,

wie dynamische URL-Parameter funktionieren,

wie ich globale Daten mit der Context API bereitstelle,

wann useReducer gegenüber useState sinnvoll ist,

wie ich eigene Hooks erstelle,

wie ich DaisyUI-Themes dynamisch wechsle und speichere,

wie ich ein Projekt mit ESLint und Vite überprüfe,

und wie ich ein Starter-Repository als upstream behalte und mein eigenes GitHub-Repository als origin verwende.

Autor

Mario „Muju“ 

Projekt im Rahmen meiner Umschulung bei der WBS Coding School.
