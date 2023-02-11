int button_value=0;
void setup(){
  Serial.begin(9600);
  pinMode(2, INPUT_PULLUP);
}

void loop() {
  if(digitalRead(2)==LOW){
    button_value++;
    delay(100);
  }
  Serial.println(button_value);
}
