#!/bin/bash
if [[ $1 == "dev" ]] && [[ $2 == "down" || $2 == "up" ]]; then
  cd ..
  fileEnv="docker-compose.yaml"
  downOrUp=$2
  echo "Running docker-compose -f docker-compose.yaml -f $fileEnv $downOrUp"
  docker-compose -f docker-compose.yaml -f "$fileEnv" "$downOrUp"
else
  echo "Usage: ./deploy.sh dev [down|up]"
fi
