# Hvilke filer skal projektet have? 
data/text.json - client sender.
logs/logs.log
utils/logger.js
utils/eventEmitter.js
./server.js

# Hvor håndteres routes? 
server.js i get/post(express)

# Hvor anvendes async/await? 
Ved vores filhåndtering

# Hvor håndteres fejl? 
Over det hele hvor vi validerer.

# Hvilket event skal udsendes? 
“request” i forbindelse med at en klient laver et GET/ eller POST/ request

# Hvad skal loggen indeholde? 
GET /read-file   (Tidspunkt)  (Statuskode)
POST /write-file (Tidspunkt)  (Statuskode)
Server startet på port:3000

# Hvordan vil I teste fejlforløbet? 
Postman, Manuelle test
