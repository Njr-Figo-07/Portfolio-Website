// src/lib/data.ts

export const site = {
  name: "Figo Cardozo",
  role: "CS Master’s @ Ohio State · ML / CV Engineer",
  location: "Columbus, OH · Open to Remote",
  email: "figoevander34@gmail.com",
  linkedin: "https://linkedin.com/in/figo-cardozo",
  github: "https://github.com/Njr-Figo-07",

  headline: "I build applied ML systems that ship.",
  subheadline:
    "Focused on computer vision, multimodal learning, and accessible AI — from real-time navigation for visually impaired users to secure biometrics and data products.",

  ctas: [
    { label: "Download Resume", href: "/resume.pdf" },
    { label: "View GitHub", href: "https://github.com/Njr-Figo-07" },
  ],
};

export const projects = [
  {
    title: "Nav-AI — Assistive Navigation for Visually Impaired Users",
    timeframe: "Oct 2024",
    tags: ["Computer Vision", "YOLOv8", "LLMs", "Accessibility", "TTS"],
    bullets: [
      "Built a real-time assistive navigation system leveraging object detection for obstacle awareness.",
      "Generated contextual instructions using LLM prompting and spoke guidance via Text-to-Speech.",
      "Integrated live camera input (IP Webcam + OpenCV) for an end-to-end real-time pipeline.",
    ],
  },
  {
    title: "RAKSHA — 3-Factor Secure Access Control (Patent Filed)",
    timeframe: "Aug 2023 – Apr 2024",
    tags: ["Biometrics", "Security", "Liveness Detection", "PyTorch", "TensorFlow"],
    bullets: [
      "Designed 3-factor authentication using crypto cards + face recognition (with liveness) + dynamic voice verification.",
      "Developed anti-spoofing protocols to strengthen resilience against replay/spoof attacks.",
      "Presented work on AI-driven authentication and cryptographic security; patent filed.",
    ],
  },
  {
    title: "Economic & Employment Data Analysis (Ohio)",
    timeframe: "Apr 2025",
    tags: ["Python", "Pandas", "NumPy", "Tableau", "EDA"],
    bullets: [
      "Cleaned and merged 8 datasets; derived indices like financial stress and wage-cost imbalance.",
      "Built 7 interactive Tableau visualizations (heatmaps, bubble charts) to surface key trends.",
      "Identified patterns in revenue concentration and signals of job-switch volatility.",
    ],
  },
  {
    title: "Mind Matters — Mental Health Platform (500+ users)",
    timeframe: "Apr 2023",
    tags: ["Full-Stack", "APIs", "Healthcare", "Product"],
    bullets: [
      "Built a full-stack platform connecting patients with psychologists (appointments, screening tests, blog).",
      "Engineered backend APIs for secure data handling and real-time scheduling flows.",
      "Iterated with clinician feedback and scaled to 500+ users.",
    ],
  },
];

export const experience = [
  {
    role: "Research Intern — Biometrics & Cybersecurity",
    org: "Indian School of Economics and Research (ISER)",
    timeframe: "Aug 2023 – Apr 2024",
    bullets: [
      "Developed a secure 3-factor authentication system combining crypto cards, face recognition, and voice verification.",
      "Implemented liveness detection and anti-spoofing strategies using PyTorch/TensorFlow.",
      "Presented research on AI-driven authentication and cryptographic security.",
    ],
  },
  {
    role: "Machine Learning Intern",
    org: "Fox Trading Solutions",
    timeframe: "Oct 2021 – Dec 2021",
    bullets: [
      "Built a real-time hand gesture recognition system for wireless sound control using Python + OpenCV.",
      "Trained and optimized models using TensorFlow and scikit-learn; achieved ~88% recognition accuracy.",
      "Delivered an end-to-end prototype demonstrating practical HCI via computer vision.",
    ],
  },
];

export const skills = [
  {
    group: "ML / AI",
    items: ["PyTorch", "TensorFlow", "scikit-learn", "LLMs", "Computer Vision", "NLP"],
  },
  {
    group: "Data / Analytics",
    items: ["Python", "SQL", "Pandas", "NumPy", "Tableau", "EDA"],
  },
  {
    group: "Engineering / Tools",
    items: ["Git/GitHub", "APIs", "OpenCV", "Cloud Basics"],
  },
];

// --- Shuff-style Career section data (optional, for timeline rendering)
export type CareerItem = {
  title: string;
  org?: string;
  location?: string;
  timeframe: string;
  kind: "Project" | "Research" | "Internship" | "Publication";
  summary: string;
  highlights: string[];
  stack: string[];
  links?: { label: string; href: string }[];
};

export const career: CareerItem[] = [
  {
    title: "Multimodal Perspective Classification (Own-Eyes vs Observer)",
    org: "The Ohio State University (Thesis Research)",
    location: "Columbus, OH",
    timeframe: "2024 – Present",
    kind: "Research",
    summary:
      "Developing a multimodal AI pipeline to classify narrative perspective in audio-visual interviews and analyze interpretability.",
    highlights: [
      "Building models to distinguish first-person (“own eyes”) vs third-person (“observer”) narrative perspectives.",
      "Exploring transformer-based representations across language + audio/visual signals.",
      "Applying interpretability analysis to understand model decisions.",
    ],
    stack: ["Multimodal", "Transformers", "NLP", "PyTorch"],
  },
  {
    title: "Nav-AI — Assistive Navigation for Visually Impaired Users",
    org: "Hackathon / Product Build",
    timeframe: "Oct 2024",
    kind: "Project",
    summary:
      "Real-time navigation assistant using object detection + LLM-generated spoken guidance from a live camera feed.",
    highlights: [
      "Object detection for obstacles and key objects using YOLOv8.",
      "LLM prompting for concise guidance; spoken output via TTS.",
      "Live camera ingestion using IP Webcam + OpenCV.",
    ],
    stack: ["YOLOv8", "OpenCV", "LLMs", "TTS"],
    links: [{ label: "GitHub", href: "https://github.com/Njr-Figo-07" }],
  },
];
