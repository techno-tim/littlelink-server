#!/bin/bash
originalfile="/usr/src/app/www/js/env.js"
tmpfile=$(mktemp)
cp --attributes-only --preserve $originalfile $tmpfile
cat $originalfile | envsubst | tee $tmpfile &&  mv $tmpfile $originalfile
exec "$@"
