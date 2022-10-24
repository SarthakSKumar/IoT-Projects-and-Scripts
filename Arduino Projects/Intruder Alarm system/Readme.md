## Simple Obstacle Sensor with Arduino
- This is a simple obstacle sensing system with cheap parts like IR LED and photo diode.

[Arduino Software Download](https://www.arduino.cc/en/software)

#### Step 1: Gather Stuff

Stuff you are gonna need:
- Arduino
- 150 ohms resistor
- 3k ohms resistor
- IR LED
- Photodiode
- jumpers
- breadboard
- LEDs

#### Step 2: Assemble

- IR LED Anode => 150 ohms resistor => 5v
- IR Cathode => GND
- PhotoDiode Anode => GND
- PhotoDiode Cathode => 3k ohms resistor => D2
- PhotoDiode Cathode => A0
- Green LED => D13
- Red LED => D12
