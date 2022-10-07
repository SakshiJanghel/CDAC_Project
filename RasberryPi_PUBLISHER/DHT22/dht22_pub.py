import paho.mqtt.client as mqtt 
import json
from random import randrange, uniform
import time

import Adafruit_DHT

DHT_SENSOR = Adafruit_DHT.DHT22
DHT_PIN = 6

mqttBroker = "43.205.145.119"

client = mqtt.Client("Temperature_Inside")
client.connect(mqttBroker) 

while True:
    humidity, temperature = Adafruit_DHT.read_retry(DHT_SENSOR, DHT_PIN)
    final_data=str(str(temperature)+","+str(humidity))
    client.publish("TEMPERATURE1",final_data)
    if humidity is not None and temperature is not None:
        print("Temp={0:0.1f}*C  Humidity={1:0.1f}%".format(temperature, humidity))
    else:
        print("Failed to retrieve data from humidity sensor")
    time.sleep(3)


