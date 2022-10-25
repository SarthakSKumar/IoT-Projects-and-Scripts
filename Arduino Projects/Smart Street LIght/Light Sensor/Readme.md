# Light Sensing system
- A Light Sensor is a device that detects light. It generates an output signal that is proportional to the intensity of light. A light sensor measures the radiant energy present in the wide range of frequencies in the light spectrum. Some of the common frequencies are infrared, visible and ultraviolet.
- In this project,I've designed a simple light sensor that indicates when the light is indicated. When the LDR detects a light over certain intensity, the Arduino will trigger the buzzer. When the intensity of light decreases, the buzzer is turned off.
- A photo resistor changes its resistance when light is incident on it. Hence, a photo resistor is also called as Light Dependent Resistor or LDR.When there is no light, the resistance of LDR is very high. When there is light incident on the LDR, its resistance decreases.

**Hardware Required**
>- Arduino UNO.
>- Light Dependent Resistor (LDR)
>- 100 KΩ POT
>- Buzzer


**Working of Arduino Light Sensor**
- Light Sensors are very useful devices in wide range of applications. One of the common application is an automatic night lamp, where a light bulb is automatically turned on as soon as the sun sets down.

- Another good application is solar tracker, which tracks the sun and rotates the solar panel accordingly.

- All these applications use a simple photo resistor or an LDR as the main sensing device. Hence, in this project, we designed a simple light sensor that indicates when the light is indicated. The working of the project is very simple and is explained below.

- All the connections are made as per the circuit diagram. The code for Arduino is written and dumped in the board. When the LDR detects a light over certain intensity, the Arduino will trigger the buzzer. When the intensity of light decreases, the buzzer is turned off.

- The 100 KΩ POT used in the voltage divider network can be used to adjust the intensity levels at which the buzzer is triggered.

**Circuit Design of Light Sensor :**

As the photo resistor or LDR is a variable resistor, a voltage divider network must be used to gets the analog equivalent output from it.

A 100 KΩ POT and the LDR form a voltage divider and the output of the voltage divider is given to the analog input A0 of Arduino.

A buzzer is connected to pin 11 of Arduino.

![alt text](img/lightSensor.jpg)
![alt text](./img/lightSensor.1.jpg)
