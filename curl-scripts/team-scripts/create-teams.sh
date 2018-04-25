#!/bin/bash

curl "https://baseball-database.herokuapp.com/teams/" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "team": {
      "name": "'"${TEAM}"'"
    }
  }'

echo
