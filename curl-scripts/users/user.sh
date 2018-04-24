#!/bin/bash

curl "http://localhost:7165/users/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

echo
