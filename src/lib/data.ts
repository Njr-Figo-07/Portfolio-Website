// src/lib/data.ts

import { group } from "console";

export const site = {
  name: "Figo Cardozo",
  role: "CS Master’s @ Ohio State · AI / ML Engineer",
  location: "Columbus, OH · Open to Remote",
  email: "figoevander34@gmail.com",
  linkedin: "https://linkedin.com/in/figo-cardozo",
  github: "https://github.com/Njr-Figo-07",

  headline: "I build applied AI/ML systems that ship.",
  subheadline:
    "Focused on AI, Computer Vision, LLMs, multimodal systems, and accessible AI; from real-time navigation for visually impaired users to secure biometrics and data products.",

  ctas: [
    { label: "Download Resume", href: "/resume.pdf" },
    { label: "GitHub", href: "https://github.com/Njr-Figo-07?tab=repositories" },
  ],
};

export const projects = [
    {
        title: "NavOn: AI-Powered Mobile Navigation App for Visually Impaired Users",
        timeframe: "2025 – Present",
        tags: ["Mobile AI", "Yolov26", "Depth-Anything-v2", "LLMs", "Accessibility", "Real-Time Systems"],
        bullets: [
            "Co-founded and built a mobile-first assistive navigation app enabling safer real-world mobility for visually impaired users.(Currently in testing)",
            "Implemented on-device and backend computer vision pipelines for real-time obstacle detection and scene understanding.",
            "Designed LLM-driven instruction generation to translate visual context into concise, actionable spoken guidance.",
            "Integrated live camera input, backend inference APIs, and low-latency Text-to-Speech for an end-to-end mobile experience.",
        ],
        link:"https://www.navon.live/",
    },
    {
        title: "Prickly: AI-Powered Accessibility Tool for Visually Impaired Users",
        timeframe: "Oct 2025",
        tags: ["AI for Accessibility", "Voice AI", "LLMs", "Web Automation", "Hackathon Project"],
        bullets: [
            "Built an AI-driven accessibility tool at HackOHI/O 2025 to enable visually impaired users to navigate and control web pages via voice commands.",
            "Developed a Python backend that extracts webpage structure using BeautifulSoup and interprets it with an open-source LLM to summarize content and actionable elements.",
            "Integrated Microsoft Azure Speech-to-Text for verbal user input and designed the LLM to interpret intent and execute browser actions for inclusive interaction.",
            "Collaborated with teammates to pivot design around core accessibility challenges, delivering a functional prototype under hackathon constraints with demonstrable inclusive impact.",  
        ],
        link: "https://www.linkedin.com/posts/figo-cardozo_hackohio-accessibilitytech-aiforgood-activity-7388600459319644160-7xIW?utm_source=share&utm_medium=member_desktop&rcm=ACoAADY4UTQB2lz_3vjm2oLnciAhQCTMnZCa4iA",
    },
    {
        title: "Nav-AI: Assistive Navigation for Visually Impaired Users",
        timeframe: "Oct 2024",
        tags: ["Computer Vision", "YOLOv8", "LLMs", "Accessibility", "TTS"],
        bullets: [
        "Built a real-time assistive navigation system leveraging object detection for obstacle awareness.",
        "Generated contextual instructions using LLM prompting and spoke guidance via Text-to-Speech.",
        "Integrated live camera input (IP Webcam + OpenCV) for an end-to-end real-time pipeline.",
        ],
        link:"https://www.linkedin.com/posts/figo-cardozo_hackohio-hackathon-accessibilitytech-activity-7254340221771628545-UHUb?utm_source=share&utm_medium=member_desktop&rcm=ACoAADY4UTQB2lz_3vjm2oLnciAhQCTMnZCa4iA",
    },
    {
        title: "RAKSHA: 3-Factor Secure Access Control (Patent Filed)",
        timeframe: "Aug 2023 – Apr 2024",
        tags: ["Biometrics", "Security", "Liveness Detection", "PyTorch", "TensorFlow"],
        bullets: [
        "Designed 3-factor authentication using crypto cards + face recognition (with liveness detection) + dynamic voice verification.",
        "Developed anti-spoofing protocols to strengthen resilience against replay/spoof attacks.",
        "Presented work on AI-driven authentication and cryptographic security; patent filed.",
        ],
        link: "https://www.linkedin.com/posts/figo-cardozo_majorproject-tifr-finalyearproject-activity-7185246881956974592-Iwqf?utm_source=share&utm_medium=member_desktop&rcm=ACoAADY4UTQB2lz_3vjm2oLnciAhQCTMnZCa4iA",
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
        link: "",
    },
    {
        title: "Mind Matters — Mental Health Platform",
        timeframe: "August 2022 - Apr 2023",
        tags: ["Django", "APIs", "Healthcare", "Product"],
        bullets: [
        "Built a full-stack platform connecting patients with psychologists (appointments, screening tests, blog).",
        "Engineered backend APIs for secure data handling and real-time scheduling flows.",
        "Iterated with clinician feedback and scaled to 500+ users.",
        ],
        link: "https://link.springer.com/chapter/10.1007/978-981-99-3761-5_28",
    },
];

export const experience = [
    {
    role: "AI Research Fellow",
    org: "Handshake AI Solutions (Project Canary)",
    timeframe: "October 2025",
    bullets: [
        "Selected as part of a small research cohort to study domain-specialized LLM reasoning.",
        "Developed domain-specific prompting strategies to improve consistency and reliability of LLM reasoning.",
        "Evaluated interpretability and identified failure modes of LLMs under structured prompting setups.",
    ],
    },
  {
    role: "Research Intern",
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
    group: "AI / ML",
    items: ["PyTorch", "TensorFlow", "scikit-learn", "LLMs", "Computer Vision", "NLP", "Deep Learning", "Neural Networks", "Attention", "SSLs", "Transformers", "Speech Emotion Recognition", "Prompt Engineering"],
  },
  {
    group: "Data / Analytics",
    items: ["Python", "SQL", "Pandas", "NumPy", "Tableau", "EDA", "Power BI", "Snowflake", "ETL", "Data Cleaning", "Data Preprocessing"],
  },
  {
    group: "Engineering / Tools",
    items: ["Git/GitHub", "APIs", "OpenCV", "Software Design", "APIs", "Django", "Linux", "Flutter", "Dart", "Mobile App Development"],
  },
  {
    group: "Cloud / Infrastructure",
    items: ["Cloud Computing", "AWS", "GCP", "HPC / SLURM", "Cloud Basics", "Ohio Super Computer(OSC)"],
  },
  {
    group: "Research / Advanced ML",
    items: ["Multimodal Learning", "Audio-Visual Modeling", "Cross-Modal Learning", "Representation Learning", "Fine-Tuning LLMs", "Interpretability / Explainable AI", 
        "Evaluation Metrics (MSE, SRCC, MOS)"],
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
    title: "Nav-AI: Assistive Navigation for Visually Impaired Users",
    org: "Hackathon / Product Build",
    timeframe: "Oct 2024",
    kind: "Project",
    summary:
      "Real-time navigation assistant using Yolov8(object detection) + LLM-generated spoken guidance from a live camera feed.",
    highlights: [
      "Object detection for obstacles and key objects using YOLOv8.",
      "LLM prompting for concise guidance; spoken output via TTS.",
      "Live camera ingestion using IP Webcam + OpenCV.",
    ],
    stack: ["YOLOv8", "OpenCV", "LLMs", "TTS"],
    links: [{ label: "GitHub", href: "https://github.com/Njr-Figo-07" }],
  },
];
