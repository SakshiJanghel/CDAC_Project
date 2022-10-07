
/* ESP 32
vin-3.3
gnd-
output-35
lo- ->22
lo+ ->23
*/
#include <ArduinoJson.h>
#include <Arduino.h>
#include <WiFi.h>
#include <PubSubClient.h>
WiFiClient wifiClient;
PubSubClient mqttClient(wifiClient); 

const char* ssid = "MOB_001";
const char* password = "NANCYRASTOGI";

char *mqttServer = "43.205.145.119";
int mqttPort = 1883;

void setupMQTT() {
  mqttClient.setServer(mqttServer, mqttPort);
}

void reconnect() {
  Serial.println("Connecting to MQTT Broker...");
  while (!mqttClient.connected()) {
      Serial.println("Reconnecting to MQTT Broker..");
      String clientId = "ESP32Client-";
      clientId += String(random(0xffff), HEX);
      if (mqttClient.connect(clientId.c_str())) {
        Serial.println("Connected.");}
            
  }
}

void setup() {
// initialize the serial communication:
Serial.begin(9600);
 WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED) {
      delay(500);
      Serial.print(".");
    } 
    Serial.println("");
     Serial.println("Connected to Wi-Fi");
pinMode(23, INPUT); // Setup for leads off detection LO +
pinMode(22, INPUT); // Setup for leads off detection LO -
setupMQTT();
 
}
 
void loop() {
  if (!mqttClient.connected())
    reconnect();
  mqttClient.loop();

if((digitalRead(23) == 1)||(digitalRead(22) == 1)){
Serial.println('!');
}
else{
// send the value of analog input 0:
int value = analogRead(35);
char dataString[8];
dtostrf(value, 1, 2, dataString);  //dtostrf turn float into 
Serial.println(analogRead(35));
mqttClient.publish("esp32/data", dataString);

}
//Wait for a bit to keep serial data from saturating
delay(1);
}
