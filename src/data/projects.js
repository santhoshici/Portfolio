export const projects = [
  {
    id: 'repai',
    title: 'RepAI',
    subtitle: 'Real-Time AI Workout Form Analyzer',
    category: 'Deep Learning · Computer Vision',
    summary:
      'Full-stack AI fitness coach that classifies exercises, counts reps, and scores form quality from live webcam or uploaded workout videos — in real time.',
    problem:
      'Gym-goers lack real-time feedback on exercise form, leading to injury risk. Manual coaching is unavailable at scale and unaffordable for most.',
    solution:
      'Built an end-to-end pipeline: MediaPipe extracts 33 pose landmarks per frame, a PyTorch BiLSTM trained on 78-dimensional temporal features classifies the exercise, and biomechanical heuristics score form and flag risky movement patterns. Results stream to a Next.js dashboard via SSE.',
    highlights: [
      '98.89% accuracy on barbell squat, deadlift & push-up classification',
      'BiLSTM on 30-frame windows with 78-dimensional mixed pose features',
      'Real-time MJPEG video streaming + Server-Sent Events for live metrics',
      'Async video upload pipeline with annotated output, per-rep logs & downloadable reports',
      'Automated tests for model inference, rep counting, and form-scoring rules',
    ],
    stack: {
      'ML / CV': ['PyTorch', 'MediaPipe', 'OpenCV', 'scikit-learn'],
      Backend: ['FastAPI', 'Python', 'Uvicorn'],
      Frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    },
    image: null,
    github: null,
    demo: null,
    featured: true,
  },
  {
    id: 'voice-agent',
    title: 'AI Voice Agent for Logistics',
    subtitle: 'Deployed Outbound Call Automation',
    category: 'AI Automation · Production System',
    summary:
      'A deployed real-time voice agent that handles ~30% of outbound logistics lead calls, speaks Tamil-first multilingual conversations, and updates a live queue automatically.',
    problem:
      'Droptruck needed a scalable way to qualify logistics leads over phone. The manual process was repetitive, hard to track, and required reliable follow-up when the first caller wasn\'t the decision-maker.',
    solution:
      'Built a Python WebSocket bridge connecting Exotel telephony to Google Gemini Live with real-time PCM audio resampling (8 kHz ↔ 16/24 kHz). n8n workflows claim leads from Baserow, trigger calls, receive outcomes, and queue alternate contacts automatically.',
    highlights: [
      'Handles ~30% of live logistics outreach call volume',
      'Real-time bidirectional audio streaming with PCM resampling (8↔24 kHz)',
      'Tamil-first multilingual: Tamil, English, Hindi, Telugu, Malayalam, Kannada',
      'n8n + Baserow queue: claims rows, retries no-answers, follows up alternate contacts',
      'Robust deduplication, Exotel callback noise handling, and failed-payload recovery',
    ],
    stack: {
      'AI / Voice': ['Google Gemini Live', 'Prompt Engineering'],
      Backend: ['Python', 'FastAPI', 'WebSockets'],
      Automation: ['n8n', 'Exotel', 'Baserow'],
    },
    image: null,
    github: null,
    demo: null,
    featured: true,
  },
  {
    id: 'route-price',
    title: 'Route Price Prediction',
    subtitle: 'End-to-End ML Pricing Platform',
    category: 'Machine Learning · Data Engineering',
    summary:
      'An ML system that predicts logistics route costs using direction-sensitive coordinate features, then calculates final driver-rate quotes with transparent business cost formulas.',
    problem:
      'Internal logistics teams generated inconsistent route quotes manually. Pricing depended on route direction, vehicle type, fuel cost, toll, EMI, and route-specific behavior — too many variables for gut estimates.',
    solution:
      'Built a complete ML pipeline (ingest → validate → clean → feature engineer → train → evaluate → serve). Engineered direction-sensitive route IDs from GPS coordinates. Trained Budget/Standard/Premium models using quantile regression and Random Forests. Served results via FastAPI with a Streamlit frontend.',
    highlights: [
      'Three-tier pricing: Budget (P25), Standard (RF), Premium (P75) quote options',
      'Direction-sensitive route features from pickup/drop coordinates and city metadata',
      'FastAPI pricing service with Pydantic validation and bulk prediction support',
      'Cost breakdown: fuel, EMI, toll, wear & tear, driver margin — fully explainable',
      'SHAP explainability + Excel prediction logging for audit trails',
    ],
    stack: {
      'ML / Data': ['scikit-learn', 'pandas', 'NumPy', 'SHAP', 'Optuna'],
      Backend: ['FastAPI', 'Python', 'Pydantic'],
      Frontend: ['Streamlit'],
    },
    image: '/projects/route-price-prediction.jpg',
    github: null,
    demo: null,
    featured: true,
  },
  {
    id: 'lead-scraper',
    title: 'Lead Scraper & Import API',
    subtitle: 'Automated Lead Ingestion Backend',
    category: 'Automation · Backend',
    summary:
      'A FastAPI backend that scrapes Google Maps with Playwright, imports Excel lead lists, normalizes Indian phone numbers, deduplicates against Baserow, and feeds the AI Voice Agent queue.',
    problem:
      'The voice agent needed a steady, clean supply of leads. Manually collecting and normalizing business contacts from Google Maps and Excel files was slow and error-prone.',
    solution:
      'Automated Playwright-based Google Maps scraping (up to 300 results per query), flexible Excel import with column mapping, India-specific phone normalization for mobile and 044 landlines, and Baserow deduplication by normalized phone number.',
    highlights: [
      'Google Maps scraping without paid API — Playwright browser automation',
      'India-aware phone normalization: +91 mobiles and 044 Chennai landlines',
      'Idempotent imports: deduplication prevents duplicate Baserow rows regardless of format',
      'Optional n8n orchestration workflow via Docker',
      'FastAPI endpoints with Swagger docs for direct API usage',
    ],
    stack: {
      Backend: ['FastAPI', 'Python', 'Uvicorn'],
      Automation: ['Playwright', 'n8n', 'Baserow'],
      Data: ['openpyxl', 'BeautifulSoup'],
    },
    image: null,
    github: null,
    demo: null,
    featured: false,
  },
  {
    id: 'expense-tracker',
    title: 'Expense Tracker',
    subtitle: 'Full-Stack MERN Finance App',
    category: 'Full-Stack · Web',
    summary:
      'A full-stack personal finance app with JWT authentication, income and expense management, MongoDB aggregation-based dashboard analytics, Recharts visualizations, and Excel export.',
    problem:
      'Personal finance apps are either too complex or don\'t give developers clear patterns for implementing auth, aggregations, and data exports together.',
    solution:
      'Built a complete MERN stack: React/Vite frontend with reusable dashboard layouts, Express REST APIs with JWT middleware, Mongoose schemas with MongoDB aggregation for balance calculations, and server-side Excel generation with blob downloads.',
    highlights: [
      'JWT-protected routes with bcrypt password hashing',
      'MongoDB aggregation: total income, expenses, balance, time-windowed insights',
      'Server-side Excel report generation with xlsx + client-side blob download',
      'Recharts-based dashboard: income/expense trends, recent transactions',
      'Profile image upload with Multer disk storage',
    ],
    stack: {
      Frontend: ['React', 'Vite', 'Tailwind CSS', 'Recharts', 'Axios'],
      Backend: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT'],
    },
    image: '/projects/expense-tracker.png',
    github: null,
    demo: null,
    featured: false,
  },
];
