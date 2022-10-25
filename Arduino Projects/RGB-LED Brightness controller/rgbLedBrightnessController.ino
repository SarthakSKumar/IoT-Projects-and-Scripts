int blue = 9; // Define Digital Pins for each colour of the LED
int green = 10;
int red = 11;

int redPot = A0;
int greenPot = A1; //Define Analog Pins for the 3 potentiometers
int bluePot = A2;


int greenVal = 0; //Create a variable to store the state of each Potentiometer
int blueVal = 0;
int redVal = 0;

const int BUTTON = 7; //Define the button Pin
int state = 0;    //Create a variable to store wether button is on or off
int val = 0;      //Create a variable to store the momentary state of the button
int old_val = 0;  //create a variable to store the previous state of the button

void setup() {
  // put your setup code here, to run once:

  pinMode(green, OUTPUT);  //Set LED's as output's, button as input
  pinMode(blue, OUTPUT);
  pinMode(red, OUTPUT);
  pinMode(BUTTON, INPUT);
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  Serial.begin(9600);                       //Open the serial monitor at 9600 baud

  val = digitalRead(BUTTON);                // Check state of button

  if ((val == HIGH) && (old_val == LOW)) {  //Check to see if state of button has changed
    state = 1 - state;                      //Set the button as either on (1) or off (0)
    delay(10);                      
  }

  old_val = val;                            // Save the previous button reading to compare next time through loop

  greenVal = analogRead(greenPot);          //Read the position of the potentiometers
  blueVal = analogRead(bluePot);
  redVal = analogRead(redPot);

  if (state == 1) {                         //If button is on, set the state of each LED according to position
    analogWrite(green, greenVal / 4);       //of its correspoding potentiometer. Anolog inputs range from 0-1023,
    analogWrite(blue, blueVal / 4);         // while anolog outputs as PMW can be from 0-255. Therefore we must
    analogWrite(red, redVal / 4);           // divide the potentiometer readings by 4 to set the state correctly
    
    Serial.print("RGB(");
    Serial.print(redVal/4); 
    Serial.print(",");
    Serial.print(greenVal/4); 
    Serial.print(",");
    Serial.print(blueVal/4);                 //Print the RGB Code, resuable in any RGB application
    Serial.println(")");
    
    delay(50);
  } else {                                   // If button is off, set all LED's to LOW/off
    analogWrite(green, 0);
    analogWrite(blue, 0);
    analogWrite(red, 0);
    delay(50);
  }
}
