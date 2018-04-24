#!/bin/bash

curl "http://localhost:7165/users" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

echo
