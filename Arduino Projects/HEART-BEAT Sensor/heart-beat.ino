#include <LiquidCrystal.h>
LiquidCrystal lcd(6, 5, 3, 2, 1, 0);
int data=A0;
int start=7;
int count=0;
unsigned long temp=0;
byte customChar1[8] = {0b00000,0b00000,0b00011,0b00111,0b01111,0b01111,0b01111,0b01111};
byte customChar2[8] = {0b00000,0b11000,0b11100,0b11110,0b11111,0b11111,0b11111,0b11111};
byte customChar3[8] = {0b00000,0b00011,0b00111,0b01111,0b11111,0b11111,0b11111,0b11111};
byte customChar4[8] = {0b00000,0b10000,0b11000,0b11100,0b11110,0b11110,0b11110,0b11110};
byte customChar5[8] = {0b00111,0b00011,0b00001,0b00000,0b00000,0b00000,0b00000,0b00000};
byte customChar6[8] = {0b11111,0b11111,0b11111,0b11111,0b01111,0b00111,0b00011,0b00001};
byte customChar7[8] = {0b11111,0b11111,0b11111,0b11111,0b11110,0b11100,0b11000,0b10000};
byte customChar8[8] = {0b11100,0b11000,0b10000,0b00000,0b00000,0b00000,0b00000,0b00000};
void setup() 
{
lcd.begin(16, 2);
lcd.createChar(1, customChar1);
lcd.createChar(2, customChar2);
lcd.createChar(3, customChar3);
lcd.createChar(4, customChar4);
lcd.createChar(5, customChar5);
lcd.createChar(6, customChar6);
lcd.createChar(7, customChar7);
lcd.createChar(8, customChar8);
pinMode(data,INPUT);
pinMode(start,INPUT_PULLUP);
}
void loop() 
{
 lcd.setCursor(0, 0);
 lcd.print("Place The Finger");
 lcd.setCursor(0, 1);
 lcd.print("And Press Start");
  while(digitalRead(start)>0);
   lcd.clear();
   temp=millis();
   while(millis()<(temp+10000))
   {
      if(analogRead(data)<100)
        {
         count=count+1;
         lcd.setCursor(6, 0);
         lcd.write(byte(1));
         lcd.setCursor(7, 0);
         lcd.write(byte(2));
         lcd.setCursor(8, 0);
         lcd.write(byte(3));
         lcd.setCursor(9, 0);
         lcd.write(byte(4));
         lcd.setCursor(6, 1);
         lcd.write(byte(5));
         lcd.setCursor(7, 1);
         lcd.write(byte(6));
         lcd.setCursor(8, 1);
         lcd.write(byte(7));
         lcd.setCursor(9, 1);
         lcd.write(byte(8));
         while(analogRead(data)<100);
         lcd.clear();
        }
   }
         lcd.clear();
         lcd.setCursor(0, 0);
         count=count*6;
         lcd.setCursor(2, 0);
         lcd.write(byte(1));
         lcd.setCursor(3, 0);
         lcd.write(byte(2));
         lcd.setCursor(4, 0);
         lcd.write(byte(3));
         lcd.setCursor(5, 0);
         lcd.write(byte(4));
         lcd.setCursor(2, 1);
         lcd.write(byte(5));
         lcd.setCursor(3, 1);
         lcd.write(byte(6));
         lcd.setCursor(4, 1);
         lcd.write(byte(7));
         lcd.setCursor(5, 1);
         lcd.write(byte(8));
         lcd.setCursor(7, 1);
 lcd.print(count);
 lcd.print(" BPM");
 temp=0;
 while(1);
}
