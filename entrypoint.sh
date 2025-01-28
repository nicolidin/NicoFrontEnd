# start.sh
#!/bin/sh

if [ "$NODE_ENV" = "production" ]; then
  echo "Starting in production mode..."
  yarn install && yarn build && yarn start
else
  echo "Starting in development mode..."
  yarn install && yarn dev
fi
