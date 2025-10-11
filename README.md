"# url-shortener-nodejs" 


used to create a project url shortener

first connect mongodb in local or using docker by starting docker in local
 and running below command in terminal

 docker run -d \     
  -p 27017:27017 \
  --name mongodb \
  -v ~/mongo-data:/data/db \
  mongo:latest

can run project by below command

# npm start

It will start the project on http://localhost:8081

now the project local setup is done and ready to hit endpoints in POSTMAN
below are the endpoint collections


// To create shortURL

curl --location 'http://localhost:8081/url' \
--header 'Content-Type: application/json' \
--data '{
    "url":"https://www.youtube.com/"
}'



// To get Analytics of short URL

curl --location 'http://localhost:8081/url/analytics/gSwp4GN7k' \
--data ''



// To redirect the short URL

curl --location --request GET 'http://localhost:8081/lbXrTd9ap' \
--header 'Content-Type: application/json' \
--data '{
    "url" : "https://www.facebook.com"
}'



