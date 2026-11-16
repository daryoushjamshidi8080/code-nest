FROM python:3.12-slim



LABEL maintainer = "Daryoushjamshidi80@gmail.com"
LABEL github = "https://github.com/daryoushjamshidi8080"

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

COPY requirements.txt /app

RUN apt-get update && apt-get install -y nano && pip install --no-cache-dir --upgrade pip \
    && pip install --no-cache-dir -r  requirements.txt


EXPOSE 8000