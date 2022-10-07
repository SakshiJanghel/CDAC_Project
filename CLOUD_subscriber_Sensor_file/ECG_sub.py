import datetime
import mysql.connector
import paho.mqtt.client as mqtt
mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password ="nancy@123",
auth_plugin = 'mysql_native_password'
)
mycursor = mydb.cursor()
try:
    mycursor.execute("CREATE DATABASE ECGData") 
except mysql.connector.Error as err:
  print("Something went wrong: {}".format(err))
        
mycursor.execute("use ECGData")
try:
  mycursor.execute("CREATE TABLE EcgData (timestamp VARCHAR(50),id MEDIUMINT NOT NULL AUTO_INCREMENT,EcgValue FLOAT(20),PRIMARY KEY (id))")
except mysql.connector.Error as err:
  print("Something went wrong: {}".format(err)) 
topic_name = "esp32/data"
qos = 1
# The callback for when the client receives a CONNACK response from the server.
def on_connect(client, userdata, flags, rc):
    print("Connected with result code "+str(rc))

    # Subscribing in on_connect() means that if we lose the connection and
    # reconnect then subscriptions will be renewed.
    
    client.subscribe(topic_name,qos)

# The callback for when a PUBLISH message is received from the server.
def on_message(client, userdata, msg):
    #print("Subscibed to topic %s " % (msg.topic))
    d=datetime.datetime.now().strftime("%d/%m/%Y %H:%M:%S")
    print(msg.payload.decode())
    mycursor.execute("INSERT INTO EcgData (timestamp,EcgValue) VALUES(%s,%s)",(d,msg.payload.decode()))
    print("Database is sucessfully updated")
    mydb.commit() 
client = mqtt.Client()   #constructor
client.on_connect = on_connect
client.on_message = on_message
client.connect("localhost", 1883, 60)
client.loop_forever()
