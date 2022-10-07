#from twilio.rest import Client
import paho.mqtt.client as mqtt 
import json
import os
import glob
import time
 
os.system('modprobe w1-gpio')
os.system('modprobe w1-therm')
 
base_dir = '/sys/bus/w1/devices/'
device_folder = glob.glob(base_dir + '28*')[0]
device_file = device_folder + '/w1_slave'

mqttBroker = "43.205.145.119"

client = mqtt.Client("Temperature_Inside")
client.connect(mqttBroker)
 
def read_temp_raw():
    f = open(device_file, 'r')
    lines = f.readlines()
    f.close()
    return lines
 
def read_temp_c():
    lines = read_temp_raw()
    while lines[0].strip()[-3:] != 'YES':
        time.sleep(0.2)
        lines = read_temp_raw()
    equals_pos = lines[1].find('t=')
    if equals_pos != -1:
        temp_string = lines[1][equals_pos+2:]
        temp_c = float(temp_string) / 1000.0
        temp_f = temp_c * 9.0 / 5.0 + 32.0
        return temp_c
def read_temp_f():
    lines = read_temp_raw()
    while lines[0].strip()[-3:] != 'YES':
        time.sleep(0.2)
        lines = read_temp_raw()
    equals_pos = lines[1].find('t=')
    if equals_pos != -1:
        temp_string = lines[1][equals_pos+2:]
        temp_c = float(temp_string) / 1000.0
        temp_f = temp_c * 9.0 / 5.0 + 32.0
        return temp_f    
while True:
    temp_c=read_temp_c()
    temp_f=read_temp_f()
    '''
    if(temp_c < 35):
        account_sid = 'AC70d382a2b7cef95de37f617017182404'
        auth_token = '309e7b2d7457767c3a21bdd8b97ece2e'
        client = Client(account_sid, auth_token)
        message = client.messages.create(  
                     messaging_service_sid='MGfd43ca63cb0c8c06ec3f0ac1039336a5',
                     body='BODYTEMPERATURE is LOW',      
                     to='+917060855321'
                 )
    #print(message.sid)
    elif(temp_c > 38):
        account_sid = 'AC70d382a2b7cef95de37f617017182404'
        auth_token = '309e7b2d7457767c3a21bdd8b97ece2e'
        client = Client(account_sid, auth_token)
        message = client.messages.create(  
                     messaging_service_sid='MGfd43ca63cb0c8c06ec3f0ac1039336a5',
                     body='BODYTEMPERATURE is HIGH',      
                     to='+917060855321'
                 )    
    else:
        print("invalid")'''
    final=str(str(temp_c)+","+str(temp_f))
    client.publish("BODY_TEMPERATURE",final)
    print(final)
    time.sleep(3)


