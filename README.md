# Originale plan:

## Hvilke filer skal projektet have? 
#### data/text.json - client sender.
#### logs/logs.log
#### utils/logger.js
#### utils/eventEmitter.js
#### ./server.js

## Hvor håndteres routes? 
#### server.js i get/post(express)

## Hvor anvendes async/await? 
#### Ved vores filhåndtering

## Hvor håndteres fejl? 
#### Over det hele hvor vi validerer.

## Hvilket event skal udsendes? 
#### “request” i forbindelse med at en klient laver et GET/ eller POST/ request

## Hvad skal loggen indeholde? 
#### GET /read-file   (Tidspunkt)  (Statuskode)
#### POST /write-file (Tidspunkt)  (Statuskode)
#### Server startet på port:3000

## Hvordan vil I teste fejlforløbet? 
#### Postman, Manuelle test


# Efter review Plan:

## Hvilke filer skal projektet have? 
- controllers
  - fileController.js
- data
  - text.txt  (client text)
- logs
  - logs.log  (event log)
- routes
  - standard.js
- utils
  - logger.js
- server.js 

## Hvor håndteres routes? 
#### standard.js i get/post(express)

## Hvor anvendes async/await? 
#### Ved vores filhåndtering som sker både ved logger.js og fileController.js

## Hvor håndteres fejl? 
#### Vi håndterer lidt fejl over det hele.

## Hvilket event skal udsendes? 
#### “request” (teknisk set sender vi event med navn "log") i forbindelse med at en klient laver et GET/ eller POST/ request

## Hvad skal loggen indeholde? 
#### GET /read-file   (Tidspunkt)  (Statuskode)
#### POST /write-file (Tidspunkt)  (Statuskode)
#### Server startet på port:3000

## Hvordan vil I teste fejlforløbet? 
#### Postman, Manuelle test


# Hvad laver programmet?

#### Opstarter en server som klienter kan tilgå og skrive samt læse én specifik fil.
#### Til webserveren bruger vi express, som hjælper med simplificering af GET og POST samt de tilhørende END-Points 

# Asynkronitet

#### Vores web-server blocker ikke for resten af serveren mens filoperationer er i gang, da vi har brugt async og await.


# EventEmitter

#### Vi udsender et event fra fileController.js ved et request til serveren (har brugt event navn "log"), som logges i en fil. 


# Test

#### Vi har manuelt testet success af programmet samt fejlscenarier, der blev fremkaldt ved at manipulere med filen der blev tilgået.

#### Til mange requests har vi brugt Axios, som vores program sagtens kan håndtere

# Agentic Coding

#### Vi har valgt ikke at bruge agent til kodning af dette projekt, da vi gerne selv ville have helt kontrol over udviklingen, da det stadig er lidt nyt.



