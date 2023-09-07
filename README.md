# Coffee shop

<a href="https://ibb.co/54Dwxcd"><img src="https://i.ibb.co/fFRLG0b/Snimka-zaslona-2023-09-07-210716.png" alt="Snimka-zaslona-2023-09-07-210716" border="0" /></a>
### Link na web stranicu: http://coffee-shop.great-site.net/
### Link na web stranicu: http://coffee-shop.great-site.net/

## Sadržaj

- [Uvod](#uvod)
    - [Očekivani tip korisnika](#očekivani-tip-korisnika)
    - [Zahtjevi i zadaće aplikacije](#zahtjevi-i-zadaće-aplikacije)
    - [Ograničenja korištenja sustava](#ograničenja-korištenja-sustava)
- [Dokumentacija](#dokumentacija)
    - [Sitemap](https://www.notion.so/Sitemap-888a0aec2ee742d9bda76bbc2e7613e2?pvs=21)
    - [Low Fidelity](https://www.notion.so/Low-Fidelity-7464afc694074b2a97a6e15616ba9318?pvs=21)
    - [High Fidelity](https://www.notion.so/High-Fidelity-892bf7af3bff44b1bc3adf486b2e6ffb?pvs=21)
    - [Heuristike](https://www.notion.so/Heuristike-252e76313ef4444da417818caa5aa2fe?pvs=21)
    - [CRAP principi](https://www.notion.so/CRAP-principi-78d7e69b1e1d4a7db1efb808c4379e09?pvs=21)
    - [Teorije niske razine](https://www.notion.so/Teorije-niske-razine-2abb241450da47ee8aab2ac2281c3337?pvs=21)
- [Korišteni alati](#korišteni-alati)
- [Zaključak](#zaključak)

## Uvod

U okviru ovog seminara izrađena je aplikacija Coffee Shop. Prilikom izrade korišteni su Excalidraw alat za izradu sitemape i low fidelity, Figma za izradu high fidelity prototipa te React  za implementaciju. Cilj ove web aplikacije je omogućiti korisnicima laganu online kupovinu kave  te se korisnici mogu informirati o svim novostima u svijetu kave čitajući blog.

### Očekivani tip korisnika

- Aplikacija je namijenjena širokom krugu korisnika.
- Baza korisnika uključuje i osobe čija informatička pismenost nije na vrlo visokoj razini
- Korisnici mogu biti i osobe starije životne dobi (60 i više godina) koje sporo tipkaju, imaju slabiji vid i/ili sluh

### Zahtjevi i zadaće aplikacije

- Aplikacija se koristi iz web preglednika
- Aplikacija će se koristiti na uređajima različite veličine (smartphones, tableti, laptopi i desktop računala)
- Korisnik može pretraživati/filtrirati proizvode
- Broj proizvoda koji se nudi u web aplikaciji veći je od 20
- Korisnik će koristiti aplikaciju kao gost ili će se logirati u vlastiti profil
- Broj *javnih* stranica (one stranice koje ne zahtijevaju logiranje u sustav) je minimalno 5
- Jedna od javnih stranica je blog (blog mora sadržavati minimalno 20 postova koje mogu uključivati slike, videa, code snippete)

### Ograničenja korištenja sustava

Da bi korisnik mogao koristiti aplikaciju mora:

- razumjeti engleski jezik
- imati pristup internetskoj vezi
- imati uređaj s web preglednikom

## Dokumentacija

[Sitemap](https://www.notion.so/Sitemap-888a0aec2ee742d9bda76bbc2e7613e2?pvs=21)

[Low Fidelity](https://www.notion.so/Low-Fidelity-7464afc694074b2a97a6e15616ba9318?pvs=21)

[High Fidelity](https://www.notion.so/High-Fidelity-892bf7af3bff44b1bc3adf486b2e6ffb?pvs=21)

[Heuristike](https://www.notion.so/Heuristike-252e76313ef4444da417818caa5aa2fe?pvs=21)

[CRAP principi](https://www.notion.so/CRAP-principi-78d7e69b1e1d4a7db1efb808c4379e09?pvs=21)

[Teorije niske razine](https://www.notion.so/Teorije-niske-razine-2abb241450da47ee8aab2ac2281c3337?pvs=21)

## Korišteni alati
* Low and High Fidelity
    - [Excalidraw](https://excalidraw.com/) - za izradu sitemape i low fidelity prototipa
    - [Figma](https://www.figma.com/) - za izradu high fidelity prototipa
* Implementacija aplikacije
    - [React](https://reactjs.org/) - JavaScript biblioteka za izradu korisničkih sučelja
    - [Redux](https://redux.js.org/) - za upravljanje stanjem aplikacije
    - [Express](https://expressjs.com/) - Node.js framework
    - [MongoDB](https://www.mongodb.com/) - baza podataka
    - [Stripe](https://stripe.com/) - za online plaćanje
* Deploy
    - [Render](https://render.com/) - za deploy api-ja
    - [InfinityFree](https://infinityfree.net/) - za deploy clienta

## Zaključak

Pravilno razumijevanje i primjena različitih dizajnerskih principa, kao i korištenje high fidelity i low fidelity prototipiranja je ključno za stvaranje stranice koja će privući posjetitelje i pružiti im izvanredno iskustvo. Najviše truda uloženo je u stvaranje High fidelity prototipa gdje smo trebali primjenit dizajnerske principe i heuristike. Samim time pomogla nam je u implementaciji stranice jer smo imali sve spremno, nismo  o tome trebali razmišljat u implementaciji. Upravo to dokazuje koliko je bitna praksa da se u prvom koraku dizajnira stranica i razmisli o rješenjima koja će se implementirati  kako bi stranica bila što ugodnija i jednostavnija za korištenje.

## Autori

* [Ana Palac](https://github.com/apalac13)
* [Jakov Filip Prgin](https://github.com/jfprgin)


## Ostalo

### Link za Notion dokumentaciju: https://www.notion.so/Coffee-Shop-e68773c29498429f860f4b7c507c7299

### Github repozitoriji: https://github.com/jfprgin/HCI_Seminarski.git


### Za pokretanje projekta potrebno je:
* Za api:
    ```bash
    npm install -g nodemon --save-dev

    npm install -g yarn

    yarn add express

    yarn add express mongoose dotenv nodemon

    yarn add crypto-js

    yarn add jsonwebtoken

    yarn add stripe

    yarn add cors
    ```

* Za client:
    ```bash
    yarn add styled-components

    yarn add @material-ui/core @material-ui/icons

    yarn add react-stripe-checkout

    yarn add react-router-dom

    yarn add axios

    yarn add @reduxjs/toolkit react-redux

    yarn add react-stripe-checkout

    yarn add redux-persist
    ```