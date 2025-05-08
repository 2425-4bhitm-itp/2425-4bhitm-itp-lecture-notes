#!/usr/bin/env bash

mvn -B clean package -DskipTests

docker build -f ./src/main/docker/Dockerfile -t vehicle-backend:latest .
