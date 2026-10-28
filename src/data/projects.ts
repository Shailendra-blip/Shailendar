import { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'proj-01',
    title: 'Smart IoT Monitoring',
    category: 'mobile_iot',
    categoryLabel: 'Mobile & IoT',
    shortDescription:
      'A real-time telemetry dashboard and sensor gateway monitoring campus energy usage, lab temperature, and ambient air quality.',
    fullDescription:
      'Engineered as a campus sustainability experiment, Smart IoT Monitoring ingests data streams from distributed ESP32 microcontrollers deployed across engineering laboratories. The system normalizes telemetry packets via MQTT, calculates moving averages for energy spikes, and pushes instant alerts to facility managers when anomaly thresholds are exceeded.',
    problemSolved:
      'Unmonitored laboratory heating and equipment left running overnight caused avoidable electrical wastage across academic buildings.',
    keyFeatures: [
      'MQTT packet broker with low-latency WebSocket live updates to web dashboard',
      'Configurable safety thresholds for laboratory environmental temperatures',
      'Automated nightly power anomaly detection and email alerts',
      'Exportable weekly energy consumption CSV and Grafana analytics hooks',
    ],
    techStack: ['Node.js', 'MQTT', 'TypeScript', 'Tailwind CSS', 'ESP32 / C++', 'Chart.js'],
    githubUrl: 'https://github.com/gdg-poornima-university/smart-iot-monitoring-demo',
    demoUrl: 'https://smart-iot-demo.poornima-gdg.dev',
    contributors: [
      { name: 'Hardware Track Lead', role: 'Firmware & MQTT Gateway' },
      { name: 'Frontend Lead', role: 'Telemetry Dashboard UI' },
    ],
    isDemo: true,
    accentColor: '#00AEEF',
    metrics: [
      { label: 'Sensor Nodes Tested', value: '14' },
      { label: 'Sampling Interval', value: '500ms' },
      { label: 'Simulated Energy Cut', value: '18%' },
    ],
  },
  {
    id: 'proj-02',
    title: 'AI-Powered Learning Assistant',
    category: 'ai_ml',
    categoryLabel: 'AI & Machine Learning',
    shortDescription:
      'Context-aware study companion synthesizing syllabus materials, creating targeted flashcards, and generating practice quizzes.',
    fullDescription:
      'Developed to assist undergraduate students through dense engineering syllabi, this study companion utilizes retrieval-augmented generation (RAG) over open courseware and lecture PDFs. It decomposes complex technical topics into step-by-step mental models, generates personalized active-recall quizzes, and provides citation markers linking directly back to lecture notes.',
    problemSolved:
      'Students struggled to navigate 400-page academic textbooks before mid-semester exams and lacked quick, self-paced active recall testing.',
    keyFeatures: [
      'Vector semantic search indexing textbook chapters and lecture summaries',
      'Automated spaced-repetition flashcard generator with export to Anki',
      'Concept simplifier with multi-level depth (Explain Like I am 10 vs Technical Rigor)',
      'Client-side state persistence for study progress tracking and bookmarking',
    ],
    techStack: ['Python', 'FastAPI', 'LangChain', 'React 19', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/gdg-poornima-university/learning-assistant-demo',
    demoUrl: 'https://ai-learning-assistant.poornima-gdg.dev',
    contributors: [
      { name: 'AI/ML Track Fellow', role: 'RAG Pipeline & Embeddings' },
      { name: 'Web Track Contributor', role: 'Chat & Flashcard Interface' },
    ],
    isDemo: true,
    accentColor: '#FF2DAA',
    metrics: [
      { label: 'Indexed Chapters', value: '85+' },
      { label: 'Mean Query Latency', value: '820ms' },
      { label: 'Study Sessions Run', value: '1,200+' },
    ],
  },
  {
    id: 'proj-03',
    title: 'Campus Event Discovery',
    category: 'web_cloud',
    categoryLabel: 'Web & Cloud',
    shortDescription:
      'High-performance aggregator synchronizing student club calendars, workshop registrations, and interactive campus venue navigation.',
    fullDescription:
      'Campus Event Discovery centralizes the dispersed announcements across collegiate societies, departments, and sports clubs into a single high-performance Progressive Web App. Built with serverless Edge workers, it provides calendar iCal sync, live seat availability counters, and venue navigation for visiting students.',
    problemSolved:
      'Clashing schedule announcements across WhatsApp groups and paper noticeboards caused missed workshop opportunities and disorganized attendance.',
    keyFeatures: [
      'Universal iCal and Google Calendar sync with 1-click subscription',
      'Interactive vector map of Poornima University campus buildings and auditoriums',
      'Real-time RSVP availability indicator with waitlist fallback',
      'Filter by technical domain, academic year eligibility, and food/refreshment tags',
    ],
    techStack: ['React', 'TypeScript', 'Vite', 'Cloudflare Workers', 'Tailwind CSS', 'Leaflet'],
    githubUrl: 'https://github.com/gdg-poornima-university/campus-event-discovery-demo',
    demoUrl: 'https://events-discovery.poornima-gdg.dev',
    contributors: [
      { name: 'Full Stack Contributor', role: 'iCal Sync Engine' },
      { name: 'UI/UX Designer', role: 'Campus Vector Map' },
    ],
    isDemo: true,
    accentColor: '#00AEEF',
    metrics: [
      { label: 'Lighthouse Score', value: '98/100' },
      { label: 'Participating Clubs', value: '12' },
      { label: 'First Contentful Paint', value: '0.4s' },
    ],
  },
  {
    id: 'proj-04',
    title: 'Sustainable Technology Tracker',
    category: 'sustainability',
    categoryLabel: 'Sustainability',
    shortDescription:
      'Open-source dashboard calculating the environmental footprint of digital servers, code repositories, and university laboratory clusters.',
    fullDescription:
      'Inspired by the Google Solution Challenge sustainability track, this dashboard measures the estimated embodied carbon and operational electrical load of cloud compute instances and collegiate computer clusters. It recommends optimal batch computing windows when regional renewable solar energy is at peak grid contribution in Rajasthan.',
    problemSolved:
      'Developers rarely have visibility into the carbon footprint of continuous testing servers and heavy neural model training runs.',
    keyFeatures: [
      'Grid intensity coefficient calculations based on regional solar peak data',
      'Automated suggestions to reschedule nightly heavy CI/CD builds to green hours',
      'Visual breakdown of CPU vs GPU vs storage carbon equivalence in trees planted',
      'Open-source SDK for inserting green badges into GitHub READMEs',
    ],
    techStack: ['TypeScript', 'React', 'Tailwind CSS', 'Open Data APIs', 'D3.js / SVG'],
    githubUrl: 'https://github.com/gdg-poornima-university/sustainability-tracker-demo',
    demoUrl: 'https://green-tech-tracker.poornima-gdg.dev',
    contributors: [
      { name: 'Sustainability Fellow', role: 'Grid Metric Calculations' },
      { name: 'Frontend Engineer', role: 'Interactive Visualizations' },
    ],
    isDemo: true,
    accentColor: '#FF2DAA',
    metrics: [
      { label: 'Solar Window Offset', value: '26%' },
      { label: 'Data Sources Used', value: '4 Public APIs' },
      { label: 'Audited Repositories', value: '28' },
    ],
  },
  {
    id: 'proj-05',
    title: 'Open Source Lab Resource Allocator',
    category: 'web_cloud',
    categoryLabel: 'Web & Cloud',
    shortDescription:
      'Frictionless booking and conflict resolution engine for high-performance hardware testing benches and development boards.',
    fullDescription:
      'A lightweight web tool created to prevent physical hardware equipment hoarding during hackathons and capstone evaluation weeks. Students can reserve Raspberry Pi clusters, VR test headsets, and oscilloscope stations with automated check-in QR codes and grace-period expiration timers.',
    problemSolved:
      'Manual sign-in sheets in hardware laboratories frequently resulted in double bookings and unreturned test equipment.',
    keyFeatures: [
      'Visual slot matrix with real-time collision detection',
      'Quick QR code scan verification at the physical laboratory desk',
      'Automated reminder notifications before scheduled session starts',
      'Fair-use time banking algorithm to prevent single-group monopolization',
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'Tailwind CSS'],
    githubUrl: 'https://github.com/gdg-poornima-university/lab-allocator-demo',
    contributors: [
      { name: 'Systems Track Contributor', role: 'Reservation Engine' },
    ],
    isDemo: true,
    accentColor: '#00AEEF',
    metrics: [
      { label: 'Hardware Units Managed', value: '42' },
      { label: 'Schedule Conflicts', value: '0' },
      { label: 'Check-in Speed', value: '< 5 sec' },
    ],
  },
];
