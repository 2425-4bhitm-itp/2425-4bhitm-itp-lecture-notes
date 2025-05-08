#FROM maven:3.9.9-eclipse-temurin-21-jammy AS builder
#
#WORKDIR /usr/local/src/vehicle
#
#COPY ./pom.xml .
##CMD ["sleep", "900"]
#COPY ./src ./src
#
#
#RUN mvn -B -DskipTests package


FROM eclipse-temurin:21-jre-alpine

WORKDIR /opt
COPY ./target/vehicle-*-runner.jar /opt/backend.jar

CMD ["java", "-jar", "/opt/backend.jar"]
