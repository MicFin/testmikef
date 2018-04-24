#!/bin/bash

curl "https://baseball-database.herokuapp.com/users" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

echo
