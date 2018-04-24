#!/bin/bash

curl "https://baseball-database.herokuapp.com/users/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

echo
