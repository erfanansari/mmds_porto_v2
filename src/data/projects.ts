export interface ProjectData {
  id: number;
  slug: string;
  title: string;
  category: string;
  filter: string;
  description: string;
  shortDescription: string;
  image: string;
  images: string[];
  githubUrl: string;
  tags: string[];
  hardware: string[];
  software: string[];
  challenges: string[];
  results: string[];
  technical: string;
}

export const projects: ProjectData[] = [
  {
    id: 1,
    slug: 'level-detector-of-liquid',
    title: 'Level Detector of Liquid',
    category: 'Embedded Systems',
    filter: 'Embedded',
    description: 'Designed a high-precision liquid level monitoring system with real-time alerts and robust sensor calibration for industrial tanks.',
    shortDescription: 'Real-time liquid level sensing with STM32 and analog signal conditioning.',
    image: 'https://images.unsplash.com/photo-1524650359799-008e63cde776?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1524650359799-008e63cde776?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581091215367-27a28a888e4d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80'
    ],
    githubUrl: 'https://github.com/robotmb/level-detector',
    tags: ['STM32', 'C', 'Sensor Calibration', 'Buzzer Alert'],
    hardware: ['STM32 MCU', 'Ultrasonic and capacitive sensors', 'OLED display', 'Industrial relay'],
    software: ['Embedded C', 'FreeRTOS', 'MATLAB data validation'],
    challenges: [
      'Eliminating noise from analog sensor readings in a metallic tank.',
      'Ensuring stable output for varying fluid dielectric properties.',
      'Maintaining low-power operation during continuous monitoring.'
    ],
    results: [
      'Improved level detection accuracy to ±2mm across multiple fluid types.',
      'Reliable alert triggering with less than 80ms latency.',
      'Robust field-ready design for industrial environments.'
    ],
    technical: 'This project integrates high-resolution analog sensing with STM32-based real-time processing. Custom signal conditioning and calibration curves were implemented to translate raw sensor inputs into stable liquid level measurements, while the firmware maintains autonomous threshold monitoring and user feedback through an OLED interface.'
  },
  {
    id: 2,
    slug: 'autonomous-car-1-10-scale',
    title: 'Autonomous Car 1:10 Scale',
    category: 'Robotics / Control',
    filter: 'Robotics',
    description: 'Built a 1:10 scale autonomous vehicle platform with lane keeping, obstacle detection, and low-latency path control.',
    shortDescription: 'Scaled autonomous driving platform with camera-based perception and motion control.',
    image: 'https://images.unsplash.com/photo-1517308930190-766eed329f8d?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1517308930190-766eed329f8d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1523966211573-2b9b6c7a5f81?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=1200&q=80'
    ],
    githubUrl: 'https://github.com/robotmb/autonomous-car-1-10',
    tags: ['ROS', 'OpenCV', 'PID', 'Path Planning'],
    hardware: ['Raspberry Pi', 'Stereo camera', 'Motor driver board', 'IMU sensor'],
    software: ['ROS 2', 'Python', 'OpenCV', 'Custom motion control'],
    challenges: [
      'Synchronizing camera frames with vehicle actuation under low latency.',
      'Handling indoor lighting changes during lane keep experiments.',
      'Balancing smooth steering with agile path adjustments on a small platform.'
    ],
    results: [
      'Stable lane keeping at 1.2 m/s with <5cm lateral error.',
      'Autonomous obstacle avoidance on a dynamic track layout.',
      'Modular platform ready for further perception upgrades.'
    ],
    technical: 'The small-scale vehicle uses onboard computer vision to detect lane boundaries and obstacles. A ROS-based perception stack processes camera input while a parallel control thread runs closed-loop PID steering and speed commands. The architecture prioritizes deterministic response and smooth trajectory tracking.'
  },
  {
    id: 3,
    slug: 'maze-solver-robot',
    title: 'Maze Solver Robot',
    category: 'Robotics / Algorithms',
    filter: 'Robotics',
    description: 'Delivered a compact maze-solving robot using edge detection, line following, and search-based path planning.',
    shortDescription: 'Autonomous maze navigation with sensor fusion and strategy optimization.',
    image: 'https://images.unsplash.com/photo-1531281959556-1be3b3180ec6?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1531281959556-1be3b3180ec6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517971071642-34a2adacf6d4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=1200&q=80'
    ],
    githubUrl: 'https://github.com/robotmb/maze-solver-robot',
    tags: ['SLAM', 'ARM Cortex', 'Path Search', 'Real-time'],
    hardware: ['ARM Cortex-M4', 'LiDAR distance sensor', 'Wheel encoders', 'IR line sensors'],
    software: ['C++', 'A* search', 'Sensor fusion', 'FreeRTOS'],
    challenges: [
      'Maintaining reliable wall detection at high speed.',
      'Optimizing search strategy for limited compute budget.',
      'Translating sensor data into stable turning commands in tight corridors.'
    ],
    results: [
      'Completed standard maze layouts with a 78% faster solve time than the baseline.',
      'Achieved robust response to variable wall textures and reflections.',
      'Delivered a compact firmware framework for future strategy testing.'
    ],
    technical: 'The robot combines line sensors and LiDAR-based mapping to build a lightweight representation of its environment. A* search provides path planning, while motion commands are generated in a velocity-based control layer that adapts to real-time sensor feedback.'
  },
  {
    id: 4,
    slug: 'ball-and-plate-control-system',
    title: 'Ball and Plate Control System',
    category: 'Control Systems',
    filter: 'Control',
    description: 'Implemented a high-bandwidth ball and plate control prototype with precise state estimation and active stabilization.',
    shortDescription: 'Precision plate control using real-time feedback and robust PID/LQR algorithms.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1616610971206-a3b0f6ddcca8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=1200&q=80'
    ],
    githubUrl: 'https://github.com/robotmb/ball-and-plate-control',
    tags: ['LQR', 'MATLAB', 'State Estimation', 'Actuators'],
    hardware: ['Servo actuators', 'Optical position sensors', 'STM32 control board', 'Aluminum plate'],
    software: ['MATLAB/Simulink', 'C', 'Kalman filter', 'Real-time data logging'],
    challenges: [
      'Compensating for mechanical backlash and non-linear actuator response.',
      'Designing a stable observer for fast-moving ball dynamics.',
      'Maintaining microsecond-level loop timing on embedded hardware.'
    ],
    results: [
      'Achieved sub-millimeter ball positioning accuracy in steady state.',
      'Stabilized plate motion with a 45% reduction in overshoot.',
      'Delivered tunable control templates for advanced research prototypes.'
    ],
    technical: 'The system uses a state-space controller paired with a discrete Kalman filter to estimate the ball position and velocity. Real-time firmware executes the control loop at 1 kHz, ensuring smooth actuator response while rejecting disturbances from plate dynamics.'
  },
  {
    id: 5,
    slug: 'vending-machine',
    title: 'Vending Machine',
    category: 'Automation / Embedded',
    filter: 'Embedded',
    description: 'Created a secure, automated vending kiosk with product selection, payment validation, and motor actuation.',
    shortDescription: 'Embedded vending automation with modular payment and dispensing control.',
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80'
    ],
    githubUrl: 'https://github.com/robotmb/vending-machine',
    tags: ['PLC', 'C++', 'HMI', 'Stepper Motor'],
    hardware: ['Microcontroller controller', 'Keypad & TFT display', 'Stepper motors', 'Weight sensor'],
    software: ['C++', 'State machine logic', 'Serial diagnostics', 'Transaction logging'],
    challenges: [
      'Preventing jams during product delivery under variable loads.',
      'Securing payment flow while keeping the interface fast and responsive.',
      'Designing a modular firmware update process for the kiosk module.'
    ],
    results: [
      'Delivered a consistent pick-and-release rate with fewer than 1% failures.',
      'Implemented secure transaction flow and status reporting.',
      'Built a scalable control architecture for future vending variants.'
    ],
    technical: 'The firmware is built around a compact state machine that controls user input, payment validation, and motor actuation. Sensor feedback from weight and position sensors ensures correct product delivery and prevents mechanical faults before they occur.'
  },
  {
    id: 6,
    slug: 'soccer-player-robot',
    title: 'Soccer Player Robot',
    category: 'Computer Vision',
    filter: 'Vision',
    description: 'Developed an autonomous soccer robot with vision-based ball tracking, opponent avoidance, and goal-directed motion control.',
    shortDescription: 'Vision-guided robot for competitive soccer behavior and fast target capture.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80'
    ],
    githubUrl: 'https://github.com/robotmb/soccer-player-robot',
    tags: ['OpenCV', 'Strategy', 'Embedded', 'PID'],
    hardware: ['Raspberry Pi', 'RGB camera', 'Motor controller', 'High-torque servos'],
    software: ['Python', 'OpenCV', 'ROS', 'Finite State Machine'],
    challenges: [
      'Balancing vision processing speed with accurate ball detection.',
      'Designing movement strategies for dynamic opponent interaction.',
      'Ensuring stable drive commands on uneven surfaces.'
    ],
    results: [
      'Captured and positioned the ball reliably within 1.5 seconds.',
      'Executed obstacle avoidance while maintaining offensive motion.',
      'Delivered a layered architecture for future multi-agent behavior.'
    ],
    technical: 'The robot uses a camera pipeline to detect the ball and field geometry. A control layer fuses vision output with encoder feedback to create smooth drives and precise shots, while a behavior module chooses the best action based on game state.'
  },
  {
    id: 7,
    slug: 'self-balancing-robot',
    title: 'Self Balancing Robot',
    category: 'Embedded / Control',
    filter: 'Control',
    description: 'Engineered a two-wheel self-balancing prototype with IMU fusion and adaptive PID control for stable upright motion.',
    shortDescription: 'IMU-driven balancing robot with fast closed-loop stabilization.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1451187164391-0fa1b4a7b7bc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80'
    ],
    githubUrl: 'https://github.com/robotmb/self-balancing-robot',
    tags: ['IMU Fusion', 'PID', 'C', 'Motor Control'],
    hardware: ['MPU6050 IMU', 'DC motors', 'Motor driver', 'Lithium battery'],
    software: ['C', 'Kalman filter', 'Real-time PWM control', 'Diagnostics'],
    challenges: [
      'Minimizing latency between sensor update and motor actuation.',
      'Tuning PID gains for stable response across payload change.',
      'Managing battery voltage drift during extended runs.'
    ],
    results: [
      'Balanced reliably within 0.2 seconds after disturbance.',
      'Maintained upright operation for over 10 minutes continuously.',
      'Delivered a reusable embedded control foundation for balancing systems.'
    ],
    technical: 'The robot uses IMU fusion to estimate tilt angle and angular velocity. A microcontroller runs a fast PID loop and translates the control effort into motor PWM commands, with safety thresholds that prevent runaway behavior and enable recovery from external pushes.'
  },
  {
    id: 8,
    slug: 'inverted-pendulum',
    title: 'Inverted Pendulum',
    category: 'Control Systems',
    filter: 'Control',
    description: 'Developed an inverted pendulum experimental rig using state feedback control and rapid actuation to maintain upright stability.',
    shortDescription: 'State-space inverted pendulum controller with rapid stabilization.',
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e61?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1517256064527-09c73fc73e61?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517456793577-06b6f1b1c2ca?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1545239766-1b2c45d6d893?auto=format&fit=crop&w=1200&q=80'
    ],
    githubUrl: 'https://github.com/robotmb/inverted-pendulum',
    tags: ['LQR', 'State Feedback', 'MATLAB', 'Dynamics'],
    hardware: ['DC motor actuation', 'Encoder feedback', 'Real-time controller', 'Aluminum arm'],
    software: ['MATLAB', 'C', 'Simulink', 'Control synthesis'],
    challenges: [
      'Creating a reliable state estimator from noisy encoder data.',
      'Tuning the controller for both stability and agility.',
      'Isolating the mechanical structure to reduce vibration influence.'
    ],
    results: [
      'Maintained upright balance with a 95% success ratio under impulses.',
      'Reduced settling time by 30% after controller tuning.',
      'Produced a repeatable platform for advanced control research.'
    ],
    technical: 'The inverted pendulum rig uses real-time encoder feedback and a state-space controller to keep the payload upright. Controller gains were derived from a linearized model and validated through iterative testing against disturbance inputs.'
  }
];
