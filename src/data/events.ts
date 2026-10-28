import { EventItem } from '../types';

export const eventsData: EventItem[] = [
  {
    id: 'evt-01',
    title: 'Modern Web Architecture & Cloud Run Deployment',
    category: 'workshops',
    categoryLabel: 'Workshop',
    date: 'November 14, 2026',
    time: '02:30 PM – 05:30 PM IST',
    duration: '3 hours',
    venue: 'Computer Science Lab 3, Poornima University Campus',
    mode: 'In-Person',
    status: 'Registrations Open',
    shortDescription:
      'Hands-on laboratory session constructing scalable micro-frontends and deploying containerized Node.js services to Google Cloud Run.',
    fullDescription:
      'Step into production-grade cloud engineering. In this technical workshop, students will build a reactive TypeScript application from scratch, optimize asset delivery pipelines, containerize the service using minimal Docker configurations, and deploy it to Google Cloud Run with custom domain mappings and automatic TLS.',
    agenda: [
      { time: '02:30 PM', activity: 'Session Overview & Cloud Native Landscape' },
      { time: '03:00 PM', activity: 'Hands-on: Dockerizing Full-Stack React & Node.js' },
      { time: '04:00 PM', activity: 'Google Cloud Run Deployment, IAM & Secrets' },
      { time: '05:00 PM', activity: 'Live Q&A, CI/CD Pipeline Walkthrough & Networking' },
    ],
    prerequisites: [
      'Basic familiarity with JavaScript / TypeScript and terminal commands',
      'Laptop with Node.js 20+ and Docker installed',
      'Free-tier Google Cloud Console account access',
    ],
    keyTakeaways: [
      'Production Docker multi-stage build patterns',
      'Deploying zero-cold-start container services to Cloud Run',
      'Setting up GitHub Actions for continuous automated deployment',
    ],
    speakers: [
      {
        name: 'Technical Track Facilitator',
        role: 'Cloud Engineering Lead (Student Fellow)',
        organization: 'GDG on Campus Poornima',
        topic: 'Serverless Container Platforms',
      },
    ],
    registrationUrl: 'https://gdg.community.dev/events/details/developer-workshop-poornima-cloud',
    isDemo: true,
    accentColor: '#00AEEF',
  },
  {
    id: 'evt-02',
    title: 'Jaipur Campus Hackathon: Build for Good 2026',
    category: 'hackathons',
    categoryLabel: 'Hackathon',
    date: 'December 05 – 06, 2026',
    time: '36-Hour Sprint (Starts 09:00 AM IST)',
    duration: '36 hours',
    venue: 'Main Innovation Center & Virtual Discord War Rooms',
    mode: 'Hybrid',
    status: 'Upcoming',
    shortDescription:
      '36-hour collaborative hackathon tackling civic challenges, smart campus efficiency, and climate sustainability using Google developer technologies.',
    fullDescription:
      'Join 40+ multidisciplinary teams from Poornima University and Rajasthan colleges to conceptualize, prototype, and pitch tangible solutions. Tracks include Smart Urban Mobility, Assistive Education Tools, Renewable Resource Optimization, and Public Health Tech. Mentors will conduct 1-on-1 code reviews and pitch clinics throughout the weekend.',
    agenda: [
      { time: 'Day 1 · 09:00 AM', activity: 'Opening Ceremony, Problem Statements Release & Team Finalization' },
      { time: 'Day 1 · 01:00 PM', activity: 'Mentor Checkpoint 1: Architecture & API Validation' },
      { time: 'Day 1 · 09:00 PM', activity: 'Midway Sprint Review & Midnight Pizza Break' },
      { time: 'Day 2 · 09:00 AM', activity: 'Mentor Checkpoint 2: UI/UX & Deployment Health Check' },
      { time: 'Day 2 · 02:00 PM', activity: 'Project Submissions & Final Live Jury Presentations' },
    ],
    prerequisites: [
      'Teams of 2 to 4 students from accredited colleges in Rajasthan',
      'Code must be written during the hackathon period and hosted on GitHub',
      'Open to all skill levels from freshman to final year',
    ],
    keyTakeaways: [
      'Intensive end-to-end product design experience in 36 hours',
      'Direct technical mentorship from campus leads and alumni',
      'Digital certificates, project showcase spotlight, and community recognition',
    ],
    speakers: [
      {
        name: 'Organizing Committee',
        role: 'Community Stewards',
        organization: 'GDG on Campus Poornima University',
        topic: 'Sprint Briefing & Evaluation Criteria',
      },
    ],
    isDemo: true,
    accentColor: '#FF2DAA',
  },
  {
    id: 'evt-03',
    title: 'Applied On-Device Machine Learning with TensorFlow & WebGPU',
    category: 'workshops',
    categoryLabel: 'Workshop',
    date: 'December 18, 2026',
    time: '03:00 PM – 05:00 PM IST',
    duration: '2 hours',
    venue: 'Virtual Interactive Livestream + Discord Lab Room',
    mode: 'Virtual',
    status: 'Upcoming',
    shortDescription:
      'Run neural models directly in the user browser with zero backend server lag using TensorFlow.js and hardware-accelerated WebGPU pipelines.',
    fullDescription:
      'Discover how next-generation web browsers execute high-throughput neural inference without shipping sensitive user data to remote servers. We will inspect lightweight vision and natural language models, compile custom shaders, and build an interactive real-time gesture recognition interface running locally at 60 FPS.',
    agenda: [
      { time: '03:00 PM', activity: 'Edge AI vs Server AI: Privacy, Latency, and Cost Trade-offs' },
      { time: '03:30 PM', activity: 'Loading and Quantizing Models in TensorFlow.js' },
      { time: '04:15 PM', activity: 'WebGPU Acceleration vs WebGL Fallback Benchmark' },
      { time: '04:45 PM', activity: 'Interactive Demo Building & Open Source Model Repositories' },
    ],
    prerequisites: [
      'Basic JavaScript / ES6 understanding',
      'Modern Chromium browser (Chrome 120+) with WebGPU support enabled',
    ],
    keyTakeaways: [
      'Understanding client-side ML trade-offs and memory boundaries',
      'Deploying quantised models into everyday web applications',
      'Benchmarking GPU compute performance in browser devtools',
    ],
    speakers: [
      {
        name: 'AI/ML Track Mentor',
        role: 'Research & Applied ML Fellow',
        organization: 'GDG on Campus Poornima',
        topic: 'Client-Side Neural Inference',
      },
    ],
    isDemo: true,
    accentColor: '#00AEEF',
  },
  {
    id: 'evt-04',
    title: 'From Campus to Production: Architecting Resilient Systems',
    category: 'tech_talks',
    categoryLabel: 'Tech Talk',
    date: 'January 10, 2027',
    time: '04:00 PM – 05:30 PM IST',
    duration: '1.5 hours',
    venue: 'Auditorium A, Poornima University Academic Block',
    mode: 'Hybrid',
    status: 'Upcoming',
    shortDescription:
      'A candid deep dive into distributed systems fundamentals, failure domains, circuit breakers, and database indexing strategies for student engineers.',
    fullDescription:
      'Many student projects work smoothly for 5 test users but crumble under 500 concurrent requests. This technical fireside session walks through real incident post-mortems, connection pooling bugs, telemetry instrumentation, and the exact architectural principles separating student side-projects from production systems.',
    agenda: [
      { time: '04:00 PM', activity: 'What Actually Breaks at Scale: The Top 5 Novice Pitfalls' },
      { time: '04:30 PM', activity: 'Database Indexes, N+1 Query Traps & Connection Pools' },
      { time: '05:00 PM', activity: 'Structured Logging, OpenTelemetry & Distributed Tracing' },
      { time: '05:20 PM', activity: 'Student Career Advice & Open Question Hour' },
    ],
    prerequisites: [
      'General software engineering interest; no specific framework required',
    ],
    keyTakeaways: [
      'Mental models for spotting scalability bottlenecks early',
      'How to read query execution plans and database logs',
      'Practical resume and portfolio advice for technical engineering roles',
    ],
    speakers: [
      {
        name: 'Alumni Engineering Speaker',
        role: 'Backend Infrastructure Engineer',
        organization: 'Industry Partner & Poornima Alumnus',
        topic: 'Reliability Engineering Patterns',
      },
    ],
    isDemo: true,
    accentColor: '#FF2DAA',
  },
  {
    id: 'evt-05',
    title: 'Community Onboarding & Solution Challenge 2026 Orientation',
    category: 'community',
    categoryLabel: 'Community',
    date: 'January 24, 2027',
    time: '03:00 PM – 05:00 PM IST',
    duration: '2 hours',
    venue: 'Student Amphitheatre, Poornima University Campus',
    mode: 'In-Person',
    status: 'Demo / Tentative',
    shortDescription:
      'Meet your peers, discover community study jams, form Solution Challenge teams, and explore our project incubator roadmap.',
    fullDescription:
      'The semester kickoff gathering for all undergraduate developers, designers, and tech enthusiasts. Learn how Google Developer Groups on Campus operates at Poornima University, discover upcoming peer study jams across Web, Cloud, AI, and Android tracks, and connect with teammates for the annual Solution Challenge.',
    agenda: [
      { time: '03:00 PM', activity: 'Welcome & Mission: Student Tech Communities at Poornima' },
      { time: '03:30 PM', activity: 'Track Showcase: Web, Cloud, Mobile, and Machine Learning' },
      { time: '04:15 PM', activity: 'Open Speed Networking & Team Formation Mixer' },
      { time: '04:45 PM', activity: 'Chapter Calendar & Study Jam Roadmap' },
    ],
    prerequisites: ['Enrolled student at Poornima University with an eagerness to learn and build'],
    keyTakeaways: [
      'Direct connection with study track mentors',
      'Early access to chapter project repositories and workshop kits',
      'Peer collaborators for hackathons and academic capstones',
    ],
    speakers: [
      {
        name: 'GDG Chapter Leadership Team',
        role: 'Core Organizers',
        organization: 'GDG on Campus Poornima University',
        topic: 'Chapter Roadmap & Collaborative Opportunities',
      },
    ],
    isDemo: true,
    accentColor: '#00AEEF',
  },
  {
    id: 'evt-06',
    title: 'Flutter Forward: Multi-Platform UI Systems Masterclass',
    category: 'workshops',
    categoryLabel: 'Workshop',
    date: 'February 07, 2027',
    time: '02:00 PM – 05:00 PM IST',
    duration: '3 hours',
    venue: 'Computer Center Lab 2, Poornima University',
    mode: 'In-Person',
    status: 'Demo / Tentative',
    shortDescription:
      'Craft fluid, adaptive interfaces compiling natively to Android, iOS, and Web from a single unified Dart codebase.',
    fullDescription:
      'Go beyond starter templates. In this code-along workshop, we examine Flutter widget rendering pipelines, state orchestration using Riverpod, responsive design for desktop and mobile form factors, and integrating native platform channels.',
    agenda: [
      { time: '02:00 PM', activity: 'Flutter Engine Architecture & Skia / Impeller Rendering' },
      { time: '02:45 PM', activity: 'Building an Adaptive Dashboard with Riverpod' },
      { time: '03:45 PM', activity: 'Handling Offline Storage & Local SQLite Caching' },
      { time: '04:30 PM', activity: 'Compiling to Web and Mobile: Performance Tuning' },
    ],
    prerequisites: [
      'Basic object-oriented programming fundamentals',
      'Laptop with Flutter SDK 3.24+ and VS Code or Android Studio',
    ],
    keyTakeaways: [
      'Predictable state management architecture in Dart',
      'Designing touch-friendly adaptive layouts',
      'Profiling memory and rendering frame rates',
    ],
    speakers: [
      {
        name: 'Mobile Track Lead',
        role: 'Android & Flutter Specialist',
        organization: 'GDG on Campus Poornima',
        topic: 'Multiplatform Architecture',
      },
    ],
    isDemo: true,
    accentColor: '#FF2DAA',
  },
];
