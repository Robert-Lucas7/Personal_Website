# Self-balancing Robot
In this project I created a self-balancing robot using an arduino and first simulated it with the Gazebo simulation software, ROS2, and Python.

## The Process
### Simulation
To start with I created a simple model (two wheels and a box as the main chassis) and learnt how to control the robot using the 'differential drive' plugin and how to get the orientation data from the IMU (using the gazebo IMU plugin) by following the tutorials on the [Gazebo website](http://classic.gazebosim.org/tutorials). 


Next I used a PID controller to control the robot in the Gazebo simulation and tuned the three constants (proportional, derivative, and integral) so that it balanced. For this, you had to convert angles represented as Quaternions and convert these to Euler angles and then send the appropriate message to the differential drive topic.

Finally, I made a realistic model of the robot using AutoDesk Inventor and inputted the dimensions and masses of the different parts to get accurate inertial values.

### Creating the physical robot
To create the robot, I cut pieces of acrylic and metal threaded bar and connected them together with nuts to create the chassis. Then, I attached the motors and battery packs using Command Strips. Finally, I connected the motors and imu to the arduino and tested they were correctly attached with a simple arduino program.

### Simulation to physical robot
Then, I translated the code from the simulation to work with the arduino and set the constants to the values found in the simulation (these values were later tweaked to make the robot balance better - less fluctuation around the center point).


