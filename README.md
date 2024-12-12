# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Kyra Kuils

  #### Je startniveau:
  Blauw

  #### Je focus:
  Responsive
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  https://www.brokenplanet.com/ 

  #### Screenshot(s) van de eerste pagina (small screen): 
  hier de naam van de pagina  
  <img src="readme-images/productpagina.PNG" width="375px" alt="productpagina van Broken Planet">

  #### Screenshot(s) van de tweede pagina (small screen):
  hier de naam van de pagina  
  <img src="readme-images/detailpagina.PNG" width="375px" alt="detailpagina van Broken Planet">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen

  - geen samenhang in de teksten. 
  - tekst is alleen maar in capslock. 
  - geen herkening voor invoervelden en buttons.
  - language staat niet in de html (quick fix)
  - op elke pagina staat "broken planet", waardoor je geen idee op welke pagina je bent
  - ze maken geen gebruik van  H- elementen
  - ze maken gebruik van div's en ze gebruiken geen li- elementen
  - ze gebruiken img src maar geen alt tekst
</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="readme-3/breakdownschets-homepagina.png" width="375px" alt="breakdown van pagina 1">
  <img src="readme-images3/breakdownschets-detailpagina.png" width="375px" alt="breakdown van pagina 2">

  ### dynamisch deel (bijv menu): 
  <img src="readme-images3/breakdownschets-header.png" width="375px" alt="breakdown van header">

  ### wellicht nog een dynamisch deel (bijv filter): 
  <img src="readme-images3/breakdownschets-hamburgermenu.png" width="375px" alt="breakdown van hamnburgermenu">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen
  
| kyra:
| grid of flex gebruiken voor de kleding items?
| hoe moet ik .visually-hidden gebruiken voor mijn H-elementen die ik niet zichtbaar wil hebben?

| pleuni:
| hoe gebruk je :nth-of-type () als je geen classes of divs mag gebruiken?

| yulan:
| hoe krijg ik mijn H1 in het midden?




  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - gebruik maken van aria-label als het geen img is.
  - .visually-hidden voor teksten die ik niet zichtbaar wil maken, maar voor de screenreader wel leesbaar is. 
  - voor een font moet ik eerst een font aanmaken door @fontface en daarna spreek je je font aan met font-family:;

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

| pleuni:
| een vervanging voor class?

| kyra:
| hoe drie css stylesheets aanmaken en waar staat elke stylesheet voor

| yulan:
| h3 onzichtbaar maken

| tamara:
| was later bij de les dus hebben van te voren niet met haar kunnen bespreken

  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - 3 css bestanden maken. algemene met je font, root kleur etc. eerste pagina en een voor je tweede pagina
  - place-items:center; (betekent justify & align-items in 1x)

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

  <img src="readme-images4/wcag-1.png" width="375px" alt="WCAG checklist pagina 1">
  <img src="readme-images4/wcag-2.png" width="375px" alt="WCAG checklist pagina 2">
  <img src="readme-images4/wcag-3.png" width="375px" alt="WCAG checklist pagina 3">
  <img src="readme-images5/wcag-4 18.07.16.png" width="375px" alt="WCAG checklist pagina 4">
  <img src="readme-images5/wcag-5 18.07.16.png" width="375px" alt="WCAG checklist pagina 5">

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

| kyra:
| grid-area en @media (min-width en max-width)

| pleuni:
| opstelling van slider en font-size:clamp

| yulan:
| dark/light mode

  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - hoe je light/dark toevoegd en hoe je daar een button voor maakt
  - hoe media query gebruiken 
  - waar bijvoorbeeld grid-area: 2/3/3/2 -->  grid-row-start = 2
                                              grid-column-start = 3
                                              grid-row-end = 3
                                              grid-column-end = 2
    
</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images2/homepage.png" width="375px" alt="homepage laptop size">
  <img src="readme-images2/homepage-mobile-lightmode.png" width="375px" alt="homepage mobile light mode size">
  <img src="readme-images2/homepage-mobile-darkmode.png" width="375px" alt="homepage mobile dark mode size">
  <img src="readme-images/detailpage-laptop.png" width="375px" alt="detailpagina laptop size">
  <img src="readme-images2/detailpage-mobile.png" width="375px" alt="detailpagina mobile size">

  ### Dit ging goed/Heb ik geleerd: 
  
  Ik weet nu hoe ik een geanimeerde hamburger menu maak door middel van span en translate en dat ging goed. 

  <img src="readme-images2/hamburgermenu-open.png" width="375px" alt="hamburger menu open">
  <img src="readme-images2/hamburgermenu-closed.png" width="375px" alt="hamburger menu closed">
    


  ### Dit was lastig/Is niet gelukt:
  Ik vond het lastig om mijn scherm responsive te maken. Vooral voor de tweede pagina waar ik mijn tekst en buttons aan de rechterkant wilde krijgen als het scherm groter word. Helaas is mij dat niet gelukt. 

  <img src="readme-images/detailpage-laptop.png" width="375px" alt="detailpagina responsiveness">
  <img src="readme-images2/orginele-detailpagina.png" width="375px" alt="orginele detailpagina responsiveness">

</details>


## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. [bron 1](https://chatgpt.com/share/675b1283-1fbc-8008-9eea-05be0d409c90)
  2. [bron 2](https://www.w3schools.com/css/tryit.asp?filename=tryresponsive_col-s)
  3. [bron 3](https://www.youtube.com/watch?v=69IbzTWg5PM)
  4. [bron 4](https://codepen.io/shooft/pen/eYwyXLv)
  5. [bron 5](https://codepen.io/shooft/pen/MWMGLGV)
  6. [bron 6](https://www.youtube.com/watch?v=tFKrK4eAiUQ)
</details>