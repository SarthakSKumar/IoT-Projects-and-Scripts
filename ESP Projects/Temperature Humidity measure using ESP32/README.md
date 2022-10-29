# ESP32 - Temperature and Humidity measure using DHT22(Serial Monitor)


### DHT11 vs DHT22

The DHT11 and DHT22 are very similar, but differ in their specifications. The following table compares some of the most important specifications of the DHT11 and DHT22 temperature and humidity sensors. For a more in-depth analysis of these sensors, please check the sensors’ datasheet.

|   | **DHT11** | **DHT22** |
|---|---|---|
|**Temperature range**| 0 to 50 ºC  +/-2 ºC  | -40 to 80 ºC  +/-0.5ºC |
|   | ![](https://i0.wp.com/randomnerdtutorials.com/wp-content/uploads/2019/04/dht11_bb.png?resize=40%2C57&quality=100&strip=all&ssl=1)  |  ![](https://i0.wp.com/randomnerdtutorials.com/wp-content/uploads/2019/04/dht22_bb.png?resize=40%2C57&quality=100&strip=all&ssl=1) |
|**Humidity range** | 20 to 90%  +/-5%| 0 to 100%  +/-2%|


The DHT22 sensor has a better resolution and a wider temperature and humidity measurement range. However, it is a bit more expensive, and you can only request readings with 2 seconds interval.

The DHT11 has a smaller range and it’s less accurate. However, you can request sensor readings every second. It’s also a bit cheaper.

Despite their differences, they work in a similar way, and you can use the same code to read temperature and humidity. You just need to select in the code the sensor type you’re using.

## DHT Pinout

DHT sensors have four pins as shown in the following figure. However, if you get your DHT sensor in a breakout board, it comes with only three pins and with an internal pull-up resistor on pin 2.

![DHT22 Temperature and Humidity Sensor using Arduino IDE](https://i0.wp.com/randomnerdtutorials.com/wp-content/uploads/2019/04/dht22-pinout.png?resize=138%2C300&quality=100&strip=all&ssl=1)

The following table shows the DHT22/DHT11 pinout. When the sensor is facing you, pin numbering starts at 1 from left to right

**DHT pin**

**Connect to**

**1** -3.3V

**2**-Any digital GPIO; also connect a 10k Ohm pull-up resistor

**3**-Don’t connect

**4**-GND

## Parts Required

To follow this tutorial you need to wire the DHT11 or DHT22 temperature sensor to the ESP32. You need to use a 10k Ohm pull-up resistor.

Here’s a list of parts you need to build the circuit:

-   [ESP32](https://makeradvisor.com/tools/esp32-dev-board-wi-fi-bluetooth/)  (read  [Best ESP32 development boards](https://makeradvisor.com/esp32-development-boards-review-comparison/))
-   [DHT11](https://makeradvisor.com/tools/dht11-temperature-humidity-sensor/) or  [DHT22](https://makeradvisor.com/tools/dht22-temperature-humidity-sensor/) temperature and humidity sensor
-   [10k Ohm resistor](https://makeradvisor.com/tools/resistors-kits/)
-   [Breadboard](https://makeradvisor.com/tools/mb-102-solderless-breadboard-830-points/)
-   [Jumper wires](https://makeradvisor.com/tools/jumper-wires-kit-120-pieces/)

## Schematic Diagram

Wire the DHT22 or DHT11 sensor to the ESP32 development board as shown in the following schematic diagram.

![ESP32 with DHT11/DHT22 Temperature and Humidity Sensor using Arduino IDE](https://i0.wp.com/randomnerdtutorials.com/wp-content/uploads/2019/04/dht_esp32_bb.png?resize=714%2C892&quality=100&strip=all&ssl=1)

In this example, we’re connecting the DHT data pin to  GPIO 4. However, you can use any other suitable digital pin.

Learn how to use the ESP32 GPIOs with our guide:  [ESP32 Pinout Reference: Which GPIO pins should you use?](https://randomnerdtutorials.com/esp32-pinout-reference-gpios/)

## Installing Libraries

To read from the DHT sensor, we’ll use the  [DHT library from Adafruit](https://github.com/adafruit/DHT-sensor-library). To use this library you also need to install the  [Adafruit Unified Sensor library](https://github.com/adafruit/Adafruit_Sensor). Follow the next steps to install those libraries.

Open your Arduino IDE and go to  **Sketch** >  **Include Library**  >  **Manage Libraries**. The Library Manager should open.

Search for “**DHT**” on the Search box and install the DHT library from Adafruit.

![Installing Adafruit DHT library](https://i0.wp.com/randomnerdtutorials.com/wp-content/uploads/2019/04/adafruit_dht_library.png?resize=750%2C422&quality=100&strip=all&ssl=1)

After installing the DHT library from Adafruit, type “**Adafruit Unified Sensor**” in the search box. Scroll all the way down to find the library and install it.

![Installing Adafruit Unified Sensor driver library](https://i0.wp.com/randomnerdtutorials.com/wp-content/uploads/2019/04/adafruit_unified_sensor_library.png?resize=750%2C422&quality=100&strip=all&ssl=1)

After installing the libraries, restart your Arduino IDE.