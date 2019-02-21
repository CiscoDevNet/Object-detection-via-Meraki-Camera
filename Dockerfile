FROM python:3.5.3-slim


ADD . /opt/

WORKDIR /opt/

RUN pip3 install -r requirements.txt

ENTRYPOINT ["python3", "./app.py"]
