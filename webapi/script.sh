echo -e '\n\n requesting all heroes'
curl localhost:3000/heroes

echo -e '\n\n requesting flash'
curl localhost:3000/heroes/1 

echo -e '\n\n requesting with wrong body'
curl --silent -X POST \
    --data-binary '{"invalid": "data"}' \
    localhost:3000/heroes

echo -e '\n\n Creating Chapolin '
CREATE=$( curl --silent -X POST \
    --data-binary '{"name": "Chapolin", "age": "100", "power": "Strength"}' \
    localhost:3000/heroes)

echo $CREATE

ID=$(echo $CREATE | jq .id)
echo $ID

echo '\n\n requesting Chapolin'
curl localhost:3000/heroes/$ID
