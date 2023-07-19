#!/bin/sh


# Run install node_modules
npm install

# Execute CMD command
exec "$@"