FROM python:3.8-slim

RUN pip install --upgrade pip

COPY ./requirements.txt .
RUN pip install -r requirements.txt

COPY . /app
WORKDIR /server

COPY ./entrypoint.sh .
ENTRYPOINT [ "sh", "/server/entrypoint.sh" ]