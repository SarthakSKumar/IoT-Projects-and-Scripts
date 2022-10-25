## 📌Espressif ESP32
ESP32 is a series of low-cost, low-power system on a chip microcontrollers with integrated Wi-Fi and dual-mode Bluetooth. It employs built-in antenna switches, RF Transceiver, power amplifier, low-noise receive amplifier, filters and power management modules.
This repository contains all the basic Arduino Projects one needs to know before working on end-to-end projects.
### Features of ESP32 include:
- 32-bit microprocessor operating at 160 or 240 MHz.
- Ultra low power co-processor.
- 320 KByte of RAM, 448 KByte of ROM.
-  WiFi 802.11 b/g/n.
-  Bluetooth v4.2 and BLE (shared radio with WiFi).
-  34 programmable GPIO pins.
-  12 bit ADC with upto 18 channels.
-  8 bit DAC.
-  10 Touch (capacitive) GPIO pins.
-  4 SPI.
-  2 I^2S and 2I^C interfaces.
-  3 UART channels.
- CAN bus 2.0.
-  PWM (Motor and LED upto 16 channels).
-  Integrated Hall effect sensor.
-  WPA, WPA2, WPA3 and WLAN authentication and Privacy Infrastructure.
-  5μA deep sleep current.
-  Wake up through GPIO, timer, touch interrupts.
## 📍Pin Diagram
![pindiagram](https://lastminuteengineers.b-cdn.net/wp-content/uploads/iot/ESP32-Pinout.png)

Specifications:
- Input only GPIOs: GPIO34, GPIO35, GPIO36 and GPIO39
- ADC Pins: GPIO2, GPIO4, GPIO12-GPIO15, GPIO25-GPIO27, GPIO32-GPIO36, GPIO39
- DAC Pins: GPIO25 and GPIO26
- Touch Pins: GPIO2, GPIO4, GPIO12-GPIO15, GPIO27, GPIO32, GPIO33
- I2C: SCL(GPIO22) and SDA(GPIO21)
- UART Pins: U0_TXD(GPIO1), U0_RXD(GPIO3), U2_TXD(GPIO17), U2_RXD(GPIO16)
- PWM Pins: All GPIO Pins
- Power pins: VIN pin(raw input voltage), 3.3V, GND
- Enable pin: EN
## 📃Documentation

[Documentation provided by Espressif for all ESP32 Series](https://www.espressif.com/en/support/documents/technical-documents)
