#!/bin/bash

DIR="/share/ExchangeCurrency/src/ExchangeRates"
PATH=/opt/bitnami/redis/bin:/opt/bitnami/python/bin:/opt/bitnami/nodejs/bin:/opt/bitnami/git/bin:/opt/bitnami/apache2/bin:/opt/bitnami/common/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games

cd "$DIR" && embark blockchain
