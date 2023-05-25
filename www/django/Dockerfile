# pull official base image
FROM python:3.10-alpine
RUN apk update \
    add \
    build-base \
    postgresql \
    postgresql-dev \
    libpq
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY ./requirements.txt .
RUN pip install -r requirements.txt
ENV PYTHONUNBUFFERED 1
COPY . .
# запуск приложения
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]