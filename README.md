# Thermostat

Build a thermostat JavaScript application.

Each day I have been pairing with a different person. The result of each pairing session has been push on a separate branch.

## Features

* Thermostat starts at 20 degrees
* You can increase the temperature with an up function
* You can decrease the temperature with a down function
* The minimum temperature is 10 degrees
* If power saving mode is on, the maximum temperature is 25 degrees
* If power saving mode is off, the maximum temperature is 32 degrees
* Power saving mode is on by default but it can also be turned off
* You can reset the temperature to 20 with a reset function
* You can ask about the thermostat's current energy usage: < 18 is `low-usage`, <= 25 is `medium-usage`, anything else is `high-usage`.
* (In the challenges where we add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)

## How to run 

1. `git clone repo`
2. `$ cd thermostat`
3. `npm install`
5. `$ open views/thermostat.html`


## How to run test

`$ open SpecRunner.html`


## **Home**
![Home](20.png)
## **Turn up temperature**
![Turn up temperature](25.png)
## **Power saving mode off**
![Power saving mode off](power_off.png)