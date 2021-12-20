docker rm -f mongo

docker run --name mongo -p  27017:27017 -v C:\mongo\data:/data/db -d mongo:latest