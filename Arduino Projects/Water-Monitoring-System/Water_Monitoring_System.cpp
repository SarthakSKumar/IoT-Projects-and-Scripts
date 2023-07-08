const int trigPin = 5; 
const int echoPin = 18; 
const int buzzer  = 19; 
 
//define sound speed in cm/uS 
#define SOUND_SPEED 0.034 
#define CM_TO_INCH 0.393701 
long duration; 
float distanceCm; 
float distanceInch; 
 
void setup() { 
   
  Serial.begin(115200); // Starts the serial communication  
  pinMode(trigPin, OUTPUT); // Sets the trigPin as an Output   
  pinMode(echoPin, INPUT); // Sets the echoPin as an Input   
  pinMode(buzzer,OUTPUT);  // Assignment of the buzzer pin to output. 
}  
void loop() { 
  // Clears the trigPin 
 
  digitalWrite(trigPin, LOW);   
  delayMicroseconds(2); 
  digitalWrite(trigPin, HIGH);   
  delayMicroseconds(10); 
  digitalWrite(trigPin, LOW);  
  digitalWrite(buzzer,LOW); 
   
  // Reads the echoPin, returns the sound wave travel time in microseconds   
  duration = pulseIn(echoPin, HIGH); 
   
  // Calculate the distance   
  distanceCm = duration * SOUND_SPEED/2; 
   
  // Convert to inches   
  distanceInch = distanceCm * CM_TO_INCH; 
   
  // Prints the distance in the Serial Monitor 
  Serial.print("Distance (cm): "); 
  Serial.println(distanceCm); 
  Serial.print("Distance (inch): ");   
  Serial.println(distanceInch);   
  digitalWrite(buzzer,LOW); 
  if(distanceCm <= 5)    //you can change the limit as per your choice
  {     
     digitalWrite(buzzer,HIGH);    
     tone(buzzer,4000);  
  }   
  else
  { 
    noTone(buzzer); 
   } 
   
      delay(1000); 
} 
