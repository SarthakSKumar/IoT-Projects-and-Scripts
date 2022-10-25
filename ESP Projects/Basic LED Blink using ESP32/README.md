# LED Blinking using ESP32


## ESP32 LED Blinking Tutorial Prerequisites

Let’s start with the basic introduction of general-purpose input-output pins of the ESP32 Devkit. You can use any ESP32 development board you want until it has an ESP-WROOM-32 chip on it. Also, the concepts used in this article will remain applicable to other types of ESP32 boards. For more features of this board, you can go through this tutorial:



We will be using  **Arduino IDE**  to program ESP32. So if you don’t know how to install a library of this IOT board you can check this tutorial:

-   [How to install ESP32 in Arduino IDE](https://microcontrollerslab.com/install-esp32-arduino-ide/)

## ESP32 GPIO Pins

ESP32 Devkit supports 36 GPIO pins and but not all the pins can be used as digital output pins. From a total of 30 pins, only 24 pins can be used both as digital input and output. But six pins like GPIO34, GPIO35, GPIO36, GPIO37, GPIO38, GPIO39 can be used as digital input pins only. But We have enough 24 pins which can be used as digital output pins. So we can use any out of thirty pins to drive a LED, relay, seven segment displays, liquid crystal display, and other actuators.

Note: GPIO6 to GPIO 11 are not exposed to pinout of ESP32 dev kit which we are using in this tutorial. Because these pins are internally connected to the integrated SPI flash on the ESP-WROOM-32 chip.

-   [ESP32 pinout and details of each pin](https://microcontrollerslab.com/esp32-pinout-use-gpio-pins/)

Now that I believed you have already installed ESP32 in Arduino IDE and You have also gone through the article on ESP32 pinout. Now let’s see how to blink an LED using ESP32 and Arduino IDE.

[![ESP32 pin mapping](https://microcontrollerslab.com/wp-content/uploads/2019/03/ESP32-pin-mapping-1024x578.jpg)](https://microcontrollerslab.com/wp-content/uploads/2019/03/ESP32-pin-mapping.jpg)