int photoDiode=2;                      
int GreenLed=13;                     
int senRead=0;                  
int SenseRate=905;                   
 void setup()    
 {  
  pinMode(photoDiode,OUTPUT);  
  pinMode(GreenLed,OUTPUT);
  pinMode(12,OUTPUT);
  digitalWrite(photoDiode,HIGH);       
  digitalWrite(GreenLed,LOW);      
  Serial.begin(9600);           
 }  
 void loop()  
 {  
  int val=analogRead(senRead);    
  Serial.println(val);            
  if(val <= SenseRate)               
  {
   digitalWrite(12,HIGH);  
   digitalWrite(GreenLed,LOW);       
   delay(20);  
  }  
  else if(val > SenseRate)            
  {  
   digitalWrite(12,LOW);
   digitalWrite(GreenLed,HIGH);       
   delay(20);  
  }  
 }  
