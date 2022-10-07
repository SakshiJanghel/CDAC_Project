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
  mycursor.execute("CREATE TABLE BodyData (timestamp VARCHAR(50),Body_Temp_C FLOAT(20),Body_temp_F FLOAT(20))")
except mysql.connector.Error as err:
  print("Something went wrong: {}".format(err))
topic_name = "BODY_TEMPERATURE"
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
    temp=msg.payload.decode()
    x=temp.split(",")
    mycursor.execute("INSERT INTO BodyData VALUES(%s,%s,%s)",(d,x[0],x[1]))
    print("Database is sucessfully updated")
    mydb.commit()
client = mqtt.Client()   #constructor
client.on_connect = on_connect
client.on_message = on_message
client.connect("localhost", 1883, 60)
client.loop_forever()
