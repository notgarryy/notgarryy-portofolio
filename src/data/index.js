export const publications = [
  {
    rank: "Q1", rankClass: "q1",
    title: "Spatiotemporal Feature Learning for Real-Time Human Fall Detection System Using TCNs and FMCW Radar Point Clouds",
    meta: "IEEE Access · 2026",
    doi: "https://doi.org/10.1109/ACCESS.2026.3676850"
  },
  {
    rank: "Q3", rankClass: "q3",
    title: "Real-Time Fall Detection Using FMCW Radar Point Clouds with TTSNet Spatiotemporal Feature Learning",
    meta: "Advance Sustainable Science, Engineering and Technology · 2026 · Accepted (Under Revision)",
    doi: null
  },
];
 
export const projects = [
  { // TTSNET
    name: "Real-Time Fall Detection — TTSNet",
    desc: "Real-time human activity recognition system using FMCW radar and TTSNet deep learning architecture. Published in Q3 SINTA 1 journal.",
    tags: ["TensorFlow", "TTSNet", "FMCW Radar", "DBSCAN", "Python"],
    metric: "ASSET Q3 SINTA 1 Publication",
    github: "https://github.com/notgarryy/real-time-fall-detection-system-with-TTSNet",
    demo: "https://drive.google.com/file/d/12HRj3mdjADJ0RxVA1lhDYze7Rh0scgG_/view?usp=sharing",
    details: "TTSNet is a novel spatiotemporal deep learning architecture designed for human fall detection using FMCW radar point cloud sequences. The model processes temporal sequences of clustered radar returns to distinguish falls from activities of daily living in real time. This work was accepted and published in the Advance Sustainable Science, Engineering and Technology journal (SINTA 1, Q3).",
    highlights: [
      "Novel TTSNet architecture combining spatial and temporal feature branches",
      "Processes FMCW radar point cloud sequences at real-time frame rates",
      "DBSCAN-based clustering for noise-robust point cloud segmentation",
      "Published in ASSET journal — SINTA 1, Q3",
    ],
    images: [
      "/images/fall.png"
    ],
  },
  { // TCN
    name: "Real-Time Fall Detection — TCN",
    desc: "TCN-based spatiotemporal feature learning for fall detection using FMCW radar. Research published in IEEE Access Q1.",
    tags: ["TensorFlow", "TCN", "FMCW Radar", "Signal Processing"],
    metric: "IEEE Access Q1 Publication",
    github: "https://github.com/notgarryy/realtime-fall-detection-with-TCN",
    demo: "https://drive.google.com/file/d/1-5mkvyEH51D_cvQmDb5Vsz-8n9WWDRP_/view?usp=sharing",
    details: "Temporal Convolutional Network (TCN) applied to FMCW radar point cloud data for spatiotemporal human fall detection. The model achieves 99.82% classification accuracy across fall and non-fall activity classes. This research was published in IEEE Access, a Q1 peer-reviewed journal, and forms the core methodology behind the deployed inference API.",
    highlights: [
      "99.82% classification accuracy across all activity classes",
      "TCN architecture for efficient long-range temporal dependency modeling",
      "Sliding window inference pipeline for continuous real-time monitoring",
      "Published in IEEE Access — Q1, DOI: 10.1109/ACCESS.2026.3676850",
    ],
    images: [],
  },
  { // API
    name: "Fall Detection Inference API",
    desc: "Production-ready REST API for real-time fall detection from FMCW radar point cloud data. Full preprocessing pipeline with DBSCAN clustering, sliding window inference, and TTSNet model serving.",
    tags: ["FastAPI", "Docker", "TensorFlow", "Railway", "MLflow"],
    metric: "98% classification accuracy",
    github: "https://github.com/notgarryy/fall-detection-api",
    demo: "https://fall-detection-api-production.up.railway.app/",
    details: "A cloud-deployed inference API built with FastAPI and containerized with Docker, serving a trained TTSNet model for real-time human fall detection. The pipeline includes DBSCAN-based point cloud clustering, sliding window segmentation, and standardized feature extraction before inference. Experiment tracking is handled via MLflow and CI/CD is automated through GitHub Actions.",
    highlights: [
      "Deployed to Railway with zero-downtime CI/CD via GitHub Actions",
      "MLflow experiment tracking across multiple model iterations",
      "DBSCAN clustering pipeline for raw radar point cloud preprocessing",
      "REST endpoint serving real-time inference with sub-100ms response",
    ],
    images: [],
  },
  { // Dustify
    name: "Dustify — IoT Particulate Matter Analyzer",
    desc: "Full-stack IoT system for real-time PM2.5/PM10 air quality monitoring. Spans embedded firmware, a Flutter mobile app, and a web dashboard — all connected via Firebase RTDB.",
    tags: ["C++", "Flutter", "Dart", "Firebase RTDB", "IoT", "ESP32", "PlatformIO"],
    metric: "End-to-end IoT system — Firmware to Mobile",
    github: "https://github.com/notgarryy/dustify-app",
    demo: "https://drive.google.com/file/d/1Pu2K1tJYhEgCppjr-Rh_uhtoE6LkPAqX/view?usp=sharing",
    details: "Dustify is a capstone design project built as a complete IoT pipeline for particulate matter air quality monitoring. The embedded firmware (C++, PlatformIO) runs on an ESP32 and reads PM2.5/PM10 sensor data in real time. Data is pushed to Firebase Realtime Database and consumed by both a Flutter mobile application and a web dashboard, enabling live monitoring across platforms.",
    highlights: [
      "Embedded C++ firmware on ESP32 using PlatformIO for real-time PM2.5/PM10 sensor acquisition",
      "Firebase RTDB integration for live bidirectional data sync across all clients",
      "Flutter mobile app (Dart) for real-time PM reading display and historical tracking",
      "Web dashboard for browser-based monitoring — three repos, one unified system",
    ],
    images: [
      "/images/dustify_device.png",
      "/images/dustify.png"
    ],
  },
  { // Face
    name: "Face Recognition Smart Door Lock",
    desc: "FaceNet-based face authentication system deployed on Raspberry Pi 4 for real-time processing and physical door lock actuation.",
    tags: ["FaceNet", "Raspberry Pi", "Python", "Computer Vision"],
    metric: "88.9% recognition accuracy",
    github: "https://github.com/notgarryy/facenet-face-detection",
    demo: null,
    details: "An edge-deployed face recognition system using FaceNet embeddings running on a Raspberry Pi 4. The system performs real-time face detection and identity verification, triggering physical door lock actuation on successful authentication. Designed as a low-cost smart home security solution with on-device inference — no cloud dependency.",
    highlights: [
      "On-device inference on Raspberry Pi 4 — no cloud dependency",
      "FaceNet embedding-based identity verification pipeline",
      "Physical relay actuation for door lock control on authentication",
      "88.9% recognition accuracy across enrolled identities",
    ],
    images: [],
  },
];
 
export const skills = [
  {
    title: "Programming & Frameworks",
    tags: ["Python", "C", "C++", "SQL", "JavaScript", "Dart", "Git", "Flutter", "React"]
  },
  {
    title: "Machine Learning & AI",
    tags: ["TensorFlow", "Keras", "PyTorch", "scikit-Learn", "Hugging Face Transformers", "Time-Series Modeling", "Computer Vision"]
  },
  {
    title: "MLOps & Backend",
    tags: ["FastAPI", "Docker", "MLflow", "GitHub Actions", "CI/CD", "Google Cloud Platform"]
  },
  {
    title: "IoT & Embedded Systems",
    tags: ["ESP32", "Raspberry Pi", "Arduino", "PCB Design", "MQTT", "BLE", "PLC"]
  },
  {
    title: "Language",
    tags: ["Indonesian (Native)", "English (Fluent)", "Chinese Mandarin (Conversational)"]
  },
  {
    title: "LLM & RAG — Currently Learning",
    tags: ["LangChain", "LlamaIndex", "Prompt Engineering", "Vector Databases", "Embeddings", "RAG Pipelines"]
  },
];

export const experiences = [
  {
    date: "Sep 2025 — Jan 2026",
    role: "Research Assistant — Radar & Deep Learning",
    company: "SPELL Lab, Telkom University",
    desc: "Built end-to-end deep learning pipelines for FMCW radar-based Human Activity Recognition by designing spatiotemporal feature extraction architectures, resulting in two peer-reviewed publications including an IEEE Access Q1 paper. Accelerated real-time activity classification research by developing and benchmarking multiple temporal deep learning models on radar point cloud sequences.",  },
  {
    date: "Jun 2025 — Aug 2025",
    role: "IoT & Digital Twin Software Intern",
    company: "PT. Labtech Penta International, Batam",
    desc: "Contributed in developing a real-time Digital Twin system for an industrial HVAC training unit by building a Unity-based interface integrated with an MQTT broker on Google Cloud Platform, enabling live bidirectional synchronization between physical equipment and its virtual counterpart. Reduced manual monitoring overhead by implemented real-time synchronization logic between physical systems and virtual interfaces for monitoring and control workflows.",
  },
  {
    date: "Jan 2024 — Dec 2025",
    role: "Teaching Assistant",
    company: "Electronics & Industrial Automation Lab (ELITIA), Telkom University",
    desc: "Improved student proficiency in embedded IoT systems by teaching wireless communication protocols — Bluetooth, BLE, Wi-Fi, MQTT, and Firebase RTDB — across multiple practical cohorts.	Accelerated student onboarding to industrial automation by instructing PLC fundamentals, sensor and actuator wiring, Ladder Logic programming, and Human Machine Interface (HMI) operation using OMRON hardware.",
  },
  {
    date: "Jul 2023 — Jun 2025",
    role: "Vice Assistant Coordinator & Teaching Assistant",
    company: "Basic Computing Lab, Telkom University",
    desc: "Raised practical course outcomes above department average by mentoring undergraduate students in C programming, debugging, and algorithmic problem solving across multiple cohorts. Improved lab operational consistency by coordinating assistant scheduling and activities, and contributed to restructuring teaching materials and workflows across multiple semesters.",
  },
];