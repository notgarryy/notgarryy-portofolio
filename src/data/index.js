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
    meta: "Advance Sustainable Science, Engineering and Technology · 2026 · Accepted",
    doi: null
  },
  {
    rank: "SINTA 2", rankClass: "sinta2",
    title: "Enhancing STEM Education through IoT-Based Distance Monitoring Projects in High Schools",
    meta: "Smart Society · 2026",
    doi: "https://doi.org/10.58524/smartsociety.v6i1.1063"
  },
];

export const projects = [
  {
    icon: "📡",
    name: "Fall Detection Inference API",
    desc: "Production-ready REST API for real-time fall detection from FMCW radar point cloud data. Full preprocessing pipeline with DBSCAN clustering, sliding window inference, and TTSNet model serving.",
    tags: ["FastAPI", "Docker", "TensorFlow", "Railway", "MLflow"],
    metric: "98% classification accuracy",
    github: "https://github.com/notgarryy/fall-detection-api",
    demo: "https://fall-detection-api-production.up.railway.app/predict"
  },
  {
    icon: "🎯",
    name: "Real-Time Fall Detection — TTSNet",
    desc: "Real-time human activity recognition system using FMCW radar and TTSNet deep learning architecture. Published in Q3 SINTA 1 journal.",
    tags: ["TensorFlow", "TTSNet", "FMCW Radar", "DBSCAN", "Python"],
    metric: "Q3 SINTA 1 Publication",
    github: "https://github.com/notgarryy/real-time-fall-detection-system-with-TTSNet",
    demo: null
  },
  {
    icon: "🧠",
    name: "Real-Time Fall Detection — TCN",
    desc: "TCN-based spatiotemporal feature learning for fall detection using FMCW radar. Research published in IEEE Access Q1.",
    tags: ["TensorFlow", "TCN", "FMCW Radar", "Signal Processing"],
    metric: "IEEE Access Q1 · 99.82% accuracy",
    github: "https://github.com/notgarryy/real-time-fall-detection-system-with-TCN",
    demo: null
  },
  {
    icon: "🔐",
    name: "Face Recognition Smart Door Lock",
    desc: "FaceNet-based face authentication system deployed on Raspberry Pi 4 for real-time processing and physical door lock actuation.",
    tags: ["FaceNet", "Raspberry Pi", "Python", "Computer Vision"],
    metric: "88.9% recognition accuracy",
    github: "https://github.com/notgarryy/facenet-face-detection",
    demo: null
  },
];

export const skills = [
  {
    title: "Machine Learning & AI",
    tags: ["TensorFlow", "Keras", "Scikit-learn", "Deep Learning", "TCN", "Transformer", "Time-Series", "HAR", "Computer Vision"]
  },
  {
    title: "MLOps",
    tags: ["FastAPI", "Docker", "MLflow", "GitHub Actions", "Google Cloud Platform", "Railway"]
  },
  {
    title: "Signal Processing",
    tags: ["FMCW Radar", "Point Cloud", "DBSCAN", "Real-Time Inference", "Feature Extraction"]
  },
  {
    title: "IoT & Embedded",
    tags: ["ESP32", "Raspberry Pi", "Arduino", "MQTT", "BLE", "PLC Omron", "Ladder Logic"]
  },
  {
    title: "Languages & Tools",
    tags: ["Python", "C", "Flutter", "Git", "SQL", "Unity"]
  },
  {
    title: "Data & Analytics",
    tags: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "StandardScaler"]
  },
];

export const experiences = [
  {
    date: "Jul 2025 — Jan 2026",
    role: "Research Assistant",
    company: "SPELL Lab, Telkom University",
    desc: "Conducted research on Human Activity Recognition using FMCW radar point cloud data. Developed deep learning models for spatiotemporal feature extraction, contributing directly to two peer-reviewed publications."
  },
  {
    date: "Jun 2025 — Aug 2025",
    role: "Digital Twin Intern",
    company: "PT. Labtech Penta International Batam",
    desc: "Developed a Unity-based Digital Twin interface for an HVAC training system. Integrated MQTT broker on Google Cloud Platform for real-time bidirectional communication between physical and virtual systems."
  },
  {
    date: "Jan 2024 — Dec 2025",
    role: "Teaching Assistant",
    company: "Electronics & Automation Lab",
    desc: "Facilitated IoT communication labs using ESP32. Taught PLC programming fundamentals (Omron) and Ladder Logic to undergraduate students."
  },
  {
    date: "Jul 2023 — Jun 2025",
    role: "Teaching Assistant",
    company: "Basic Computing Lab",
    desc: "Assisted students in C programming fundamentals and debugging. Mentored final project students, consistently achieving above-average outcomes."
  },
];