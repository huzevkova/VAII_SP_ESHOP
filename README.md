# Návod na inštaláciu
## 1. Podmienky
Pred začatím inštalácie sa uistite, že máte na svojom systéme nainštalované nasledovné:
•	Node.js (verzia 20.18.0 alebo novšia)
•	npm (je súčasťou Node.js)
•	MySQL (verzia 8.0.40)
Voliteľné (pre Docker inštaláciu):
•	Docker

# 2. Manuálna inštalácia
## Krok 1: Naklonovanie repozitára
	git clone github.com/huzevkova/VAII_SP_ESHOP
## Krok 2: Inštalácia front-end závislostí:
	cd VAII_SP_ESHOP
	npm install
## Krok 3: Inštalácia back-end závislostí:
	cd server
	npm install
## Krok 4: Nastavenie databázy
  ### 1.	Uistite sa, že váš MySQL server je spustený lokálne.
  ### 2.	Prihláste sa doňho.
    mysql -u root -p
  ### 3.	Vytvorte novú databázu.
    CREATE DATABASE nazov_databazy;
    ctrl+d (návrat do normálneho príkazového riadku)
  ### 4.	Import databázy z sql súboru (namiesto username zadajte meno, ktorým sa do databázy prihlásite).
    mysql -u username -p vaii_db < schema.sql
## Krok 4: Vytvorenie súboru .env
  ### 1.	V priečinku server vytvorte súbor .env a pridajte vaše prihlasovacie údaje k databáze:
    DB_HOST=localhost
    DB_USER=uzivatel
    DB_PASSWORD=heslo
    DB_NAME=nazov_databazy
    PORT=5000
## Krok 5: Spustenie aplikácie
  ### 1.	Spustite server:
    cd server
    npm start
  ### 2.	Spustite frontend aplikáciu:
    cd ..
    npm start
## Krok 6: Otvorenie webstránky
  Keď sú obe časti spustené, otvorte váš prehliadač a prejdite na adresu: 
  http://localhost:3000

# 3. Inštalácia pomocou Dockeru
## Krok 1: Naklonovanie repozitára
	git clone github.com/huzevkova/VAII_SP_ESHOP
## Krok 2: Spustenie Docker Compose
V koreňovom priečinku projektu spustite nasledujúci príkaz:
  ###
    docker-compose up –build
## Krok 4: Otvorenie webstránky
Keď sú kontajnery spustené, otvorte váš prehliadač a prejdite na adresu: 
http://localhost:3000

Prípadne využite aplikáciu Docker Desktop.
