int WATERPUMP = 13; //motor pump connected to pin 13
int sensor = 8; //sensor digital pin vonnected to pin 8
int val; //This variable stores the value received from Soil moisture sensor.

void setup() {
  
  pinMode(13,OUTPUT); //Set pin 13 as OUTPUT pin
  pinMode(8,INPUT); //Set pin 8 as input pin, to receive data from Soil moisture sensor.
  //Initialize serial and wait for port to open:
  Serial.begin(9600); // opens serial port, sets data rate to 9600 bps
  while (! Serial);// wait for serial port to connect. Needed for native USB
  Serial.println("Speed 0 to 255");
}

void loop()
  { 
  if (Serial.available()) //loop to operate motor
  {
    int speed = Serial.parseInt(); // to read the number entered as text in the Serial Monitor 
    if (speed >= 0 && speed <= 255)
    {
      analogWrite(WATERPUMP, speed);// tuns on the motor at specified speed 
    }
  }
  val = digitalRead(8);  //Read data from soil moisture sensor  
  if(val == LOW) 
  {
  digitalWrite(13,LOW); //if soil moisture sensor provides LOW value send LOW value to motor pump and motor pump goes off
  }
  else
  {
  digitalWrite(13,HIGH); //if soil moisture sensor provides HIGH value send HIGH value to motor pump and motor pump get on
  }
  delay(400); //Wait for few second and then continue the loop.
}
