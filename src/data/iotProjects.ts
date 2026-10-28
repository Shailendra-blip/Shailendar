import { IoTRoboticsProject } from '../types';

export const iotProjectsData: IoTRoboticsProject[] = [
  {
    id: 'iot-proj-01',
    title: 'IoT-Based Smart Automation',
    shortDescription:
      'A hardware prototype demonstrating microcontroller-based control and electronic switching.',
    fullDescription:
      'This experimental IoT hardware setup demonstrates dual ESP32 microcontroller communication and wireless motor switching. Developed on an acrylic test chassis with yellow DC gear motors, the system integrates an L298N dual H-bridge motor driver, breadboard prototyping jumpers, and active LED status indicators powered by an onboard lithium battery pack.',
    categories: ['IoT', 'Embedded Systems', 'Automation'],
    technologyTags: ['IoT', 'ESP32', 'Embedded Systems', 'Automation'],
    primaryImage: '/images/iot-robotics/iot_smart_automation.jpeg',
    galleryImages: [
      {
        url: '/images/iot-robotics/iot_smart_automation.jpeg',
        caption:
          'Bench testing of the wireless controller breadboard and dual-motor robotic platform with ESP32 status LEDs active.',
        altText:
          'Dual ESP32 microcontrollers wired to breadboard and acrylic robot chassis with motor driver',
      },
      {
        url: '/images/iot-robotics/hardware_bench_overview.jpeg',
        caption:
          'Hardware workbench overview showing the smart automation setup (middle-left) alongside other laboratory prototypes.',
        altText: 'Workbench layout of IoT and robotics experimental prototypes',
      },
    ],
    hardwareComponents: [
      'ESP32 Development Board (Wi-Fi / Bluetooth MCU)',
      'L298N Dual H-Bridge Motor Driver Module',
      '4-Wheel Acrylic Robotic Chassis with DC Geared Motors',
      'Solderless Half-Size Prototyping Breadboard',
      'High-Drain Li-ion Battery Power Assembly',
      'DC Barrel Jack Power Connector',
    ],
    prototypeStatus: 'Hardware Bench Prototype',
    notes:
      'Configured for remote switching experiments and wireless serial command transmission over local Wi-Fi.',
    accentColor: '#00AEEF',
  },
  {
    id: 'iot-proj-02',
    title: 'Sensor-Based Robotic Car',
    shortDescription:
      'A robotic car prototype featuring electronic control hardware, motor drivers, and sensors.',
    fullDescription:
      'Built upon a rigid custom blue triangular chassis, this two-wheel differential drive robotic car features an ESP32 microcontroller mounted on a mini breadboard, dual 18650 lithium battery power with an inline rocker toggle, an L298N dual H-bridge driver with aluminum cooling fins, and forward-mounted optical obstacle sensors for trajectory detection.',
    categories: ['Robotics', 'Embedded Systems'],
    technologyTags: ['Robotics', 'Sensors', 'Motor Control', 'Embedded Systems'],
    primaryImage: '/images/iot-robotics/sensor_robotic_car.jpeg',
    galleryImages: [
      {
        url: '/images/iot-robotics/sensor_robotic_car.jpeg',
        caption:
          'Top view of the sensor-based robotic car showing ESP32, L298N driver, dual 18650 power sled, and front tracking sensors.',
        altText:
          'Top-down view of blue robotic car prototype with motor driver and sensors',
      },
      {
        url: '/images/iot-robotics/hardware_bench_overview.jpeg',
        caption:
          'Comprehensive laboratory layout showing the robotic car (bottom-right) during comparative testing.',
        altText: 'Overview photo showing sensor robotic car on laboratory workbench',
      },
    ],
    hardwareComponents: [
      'ESP32 30-Pin Microcontroller Unit',
      'L298N High-Power Stepper/DC Motor Driver',
      'Dual High-Torque Rubber-Tread Drive Wheels',
      'Dual 18650 3.7V Battery Holder & Master Power Switch',
      'Forward Optical Infrared Sensor Array',
      'Rigid Triangle Platform with Castor Wheel Balance',
    ],
    prototypeStatus: 'Operational Mobile Prototype',
    notes:
      'Designed for sensor-driven obstacle avoidance and line-following hardware experimentation.',
    accentColor: '#FF2DAA',
  },
  {
    id: 'iot-proj-03',
    title: 'Smart Control Panel',
    shortDescription:
      'An electronic control prototype with a microcontroller, relay module, indicator lamps, and a cooling fan.',
    fullDescription:
      'A clean, modular electrical control testing rig constructed on a white insulation backboard. The panel features an ESP32 / VC-02 voice and wireless processing module, a 4-channel 5V/10A relay module with optocoupler isolation, three distinct color-coded indicator lamps (yellow, red, blue in standard sockets), a DC brushless ventilation fan, step-down buck converter, and safety switch.',
    categories: ['Automation', 'IoT', 'Embedded Systems'],
    technologyTags: ['ESP32', 'Relays', 'Electronics', 'Automation'],
    primaryImage: '/images/iot-robotics/smart_control_panel.jpeg',
    galleryImages: [
      {
        url: '/images/iot-robotics/smart_control_panel.jpeg',
        caption:
          'Top view of the Smart Control Panel showing color-coded light sockets (yellow, red, blue), 4-channel relay, ESP32, and fan.',
        altText:
          'Smart control panel prototype with 3 colored globes, 4-channel relay module, and DC cooling fan',
      },
      {
        url: '/images/iot-robotics/hardware_bench_overview.jpeg',
        caption:
          'Control panel prototype (bottom-left) alongside other student engineering prototypes.',
        altText: 'Workbench display featuring the smart control panel prototype',
      },
    ],
    hardwareComponents: [
      'ESP32 / VC-02 Embedded Processor Board',
      'HW-316 4-Channel 5V Relay Board with Optocoupler Isolation',
      '3x Heavy-Duty Lamp Sockets with Yellow, Red, Blue Globes',
      '12V Brushless DC Exhaust Fan with Finger Guard',
      'Adjustable DC-DC Step-Down Buck Converter Module',
      'Dual 18650 Battery Pack & Rocker Master Power Switch',
    ],
    prototypeStatus: 'Assembled Bench Rig',
    notes:
      'Used for evaluating multi-load electronic switching, thermal cooling automation, and relay actuation sequences.',
    accentColor: '#00AEEF',
  },
  {
    id: 'iot-proj-04',
    title: 'Autonomous Firefighting Robot Prototype',
    shortDescription:
      'A robotics prototype designed around a mobile platform, sensors, a water container, and tubing.',
    fullDescription:
      'Engineered around a heavy 4-wheel all-terrain chassis, this prototype incorporates an onboard water reservoir box, flexible delivery tubing, an ultrasonic distance sensor (HC-SR04), and an array of front-facing infrared flame/obstacle detection sensors. An ESP32 microcontroller and DC relay coordinate mobility and fluid dispensing mechanisms.',
    categories: ['Robotics', 'IoT', 'Embedded Systems'],
    technologyTags: ['Robotics', 'Sensors', 'IoT', 'Embedded Systems'],
    primaryImage: '/images/iot-robotics/firefighting_robot_front.jpeg',
    galleryImages: [
      {
        url: '/images/iot-robotics/firefighting_robot_front.jpeg',
        caption:
          'Front view of the firefighting robot prototype with water reservoir, delivery tube, ultrasonic sensor, and IR sensor array.',
        altText:
          'Front view of mobile firefighting robot prototype with white reservoir and transparent fluid tube',
      },
      {
        url: '/images/iot-robotics/hardware_bench_overview.jpeg',
        caption:
          'Top-down angle showing the complete 4-wheel mobile chassis and reservoir container layout (middle-right).',
        altText:
          'Overhead view of firefighting mobile robot prototype on laboratory test surface',
      },
    ],
    hardwareComponents: [
      'ESP32 Core Microcontroller',
      'Ultrasonic Distance Sensor (HC-SR04)',
      'Multi-Channel Optical Flame / IR Sensor Array',
      'Integrated Water Container & Flexible Dispensing Tube',
      'Submersible DC Liquid Pump & Relay Controller',
      '4-Wheel Independent Drive Motors with High-Traction Treads',
    ],
    prototypeStatus: 'Hardware Integration Prototype',
    notes:
      'Provisional prototype built for testing spatial navigation, obstacle distance profiling, and targeted fluid dispersion.',
    accentColor: '#FF2DAA',
  },
  {
    id: 'iot-proj-05',
    title: 'Humanoid Robot Prototype',
    shortDescription:
      'A custom-built humanoid robotics prototype developed for experimentation and demonstration.',
    fullDescription:
      'Developed for robotics exhibition and kinematics experimentation, this custom humanoid robot prototype features an articulated multi-degree-of-freedom structure. The frame is constructed with servo motor joints, dual gripping end-effectors, head assembly, and tricolor accents, developed under the Prayoga 2026 engineering initiative at Poornima University.',
    categories: ['Robotics', 'Embedded Systems'],
    technologyTags: ['Robotics', 'Servo Motors', 'Embedded Systems'],
    primaryImage: '/images/iot-robotics/hardware_bench_overview.jpeg',
    galleryImages: [
      {
        url: '/images/iot-robotics/hardware_bench_overview.jpeg',
        caption:
          'Laboratory photograph of the custom humanoid robot prototype (top) displaying servo-jointed limbs and end-effectors.',
        altText:
          'Custom humanoid robot prototype showing articulated servo joints and torso assembly',
      },
    ],
    hardwareComponents: [
      'High-Torque Metal-Gear Servo Actuators',
      'Multi-Axis Articulated Limb Brackets & Torso Frame',
      'Dual Mechanical Gripper End-Effectors',
      'Multi-Channel Servo Control Wiring Bus',
      'Prayoga 2026 Student Engineering Chassis',
    ],
    prototypeStatus: 'Structural & Kinematics Prototype',
    notes:
      'Built by student engineering researcher Shailendra Yadav for kinematic demonstration and multi-servo coordination tests.',
    accentColor: '#00AEEF',
  },
];
