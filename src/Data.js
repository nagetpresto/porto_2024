const dataExperience = [
    {
        "id": 1,
        "icon": "arrow",
        "company": "Elistec · Developer",
        "position": "Sambu Group.Beacukai Form",
        "year": "2023",
        "description": "Custom web form built with Nintex Forms that replicates CEISA 4.0, the Indonesian customs system, so users can submit customs data straight from the company's ERP.",
        "point": [
            "Developed the calculation logic to match CEISA 4.0",
            "Implemented the integration that submits data to CEISA",
            "Supported UAT with end users"
        ]
    },
    {
        "id": 2,
        "icon": "arrow",
        "company": "Elistec · Workflow Developer",
        "position": "DAIKIN.Payment Approval",
        "year": "2024",
        "description": "Payment request approval on Nintex Automation Cloud, integrated with SAP.",
        "point": [
            "Built the forms and a 5-layer approval workflow",
            "Layers are dynamic by transaction category and amount, and include external users",
            "Automated SAP-to-DB and DB-to-SAP data transfer with Power Automate"
        ]
    },
    {
        "id": 3,
        "icon": "arrow",
        "company": "Elistec · Workflow Developer",
        "position": "Jawa Power.Workflow Migration",
        "year": "2024 - 2025",
        "description": "Migration of legacy SharePoint 360 workflows to Nintex Automation Cloud.",
        "point": [
            "2024: refactored workflows and automated scheduled emails with Power Automate",
            "2025: built the forms and readjusted the workflow logic for 11 modules, including Invoice, Timesheet, Leave, and Business Travel"
        ]
    },
    {
        "id": 4,
        "icon": "arrow",
        "company": "Elistec · Backend Developer",
        "position": "Jasa Raharja.Invoice Claim Analysis",
        "year": "2025",
        "description": "Intelligent Document Processing (IDP) that reads hospital invoices to analyze insurance claims.",
        "point": [
            "Implemented the worker that scans invoices with OCR across 2,000+ hospital invoice templates",
            "Fixed the claim calculation logic for every transaction to follow the hospital's terms, producing the claimable amount",
            "Generated the analysis as an Excel file and sent it to the web app users use to monitor claim status"
        ]
    },
    {
        "id": 5,
        "icon": "arrow",
        "company": "Elistec · Backend Developer",
        "position": "Tugu Insurance.Insurance Platform",
        "year": "2025",
        "description": "Web-based insurance system built with React.js, Laravel, and Postgres.",
        "point": [
            "Took part in requirement gathering, database schema design, and API planning",
            "Divided tasks among the development team",
            "Set up the Laravel backend starter project",
            "Implemented the premium calculation for 5 products: TCar, TRide, Travella, THome, and TStore"
        ]
    },
    {
        "id": 6,
        "icon": "arrow",
        "company": "Elistec · Backend Developer",
        "position": "BNI Life.Insurance Mobile App (PoC)",
        "year": "2025",
        "description": "Proof of concept for an insurance mobile app built with React Native, Laravel, and Postgres.",
        "point": [
            "Built a low-code-style Form Builder web app with various field types",
            "The forms it creates are shown dynamically in the mobile app",
            "Built the backend APIs the mobile app uses"
        ]
    },
    {
        "id": 7,
        "icon": "arrow",
        "company": "Elistec · Backend Developer",
        "position": "BPJS Ketenagakerjaan.Invoice Claim Analysis (PoC)",
        "year": "2025",
        "description": "Proof of concept of the Jasa Raharja claim analysis solution, set up as a separate tenant.",
        "point": [
            "Implemented the OCR worker and claim calculation per hospital terms for 1,000 invoices from 2 hospitals",
            "Sent the Excel analysis to the external monitoring web app"
        ]
    },
    {
        "id": 8,
        "icon": "arrow",
        "company": "Elistec · Lead Backend Developer",
        "position": "ProSnap Lite.Document Extraction Platform",
        "year": "Nov 2025 - Present",
        "description": "Multi-tenant platform that turns documents into structured data using OCR and LLM, with a web portal and a mobile app.",
        "point": [
            "Built the REST API: JWT/Google auth, role-based access, API keys, and a database-per-tenant architecture",
            "Moved long-running jobs (scan, export, ProDraft, ProMatch) into standalone RabbitMQ workers with callbacks, retry, quotas, and real-time notifications (SignalR, Firebase). This reduced the API load, and the API has not gone down since",
            "Built ProSplit (splits a bundled PDF by document type), ProMatch (cross-document matching), ProDraft (auto-fills Word templates), and Export Automation",
            "Integrated local OCR (RapidOCR) and a self-hosted LLM as alternatives to cloud providers",
            "Led the API refactor into enforced layers and the .NET 10 upgrade, and wrote the architecture documentation",
            "Ran flow and feature sessions with the design team and assigned tasks to frontend and mobile developers"
        ]
    },
    {
        "id": 9,
        "icon": "arrow",
        "company": "Elistec · Backend & Frontend",
        "position": "Bank Statement.Fraud Detection (PoC)",
        "year": "2026",
        "description": "Proof of concept that detects suspicious activity from bank statements.",
        "point": [
            "Developed the backend and scan logic, reusing the ProSnap engine to extract transactions and group credit and debit",
            "Flags suspicious patterns across 8 fraud categories, such as weekend or holiday transactions, rapid in-out transactions, duplicate invoices, and balance mismatches",
            "Built the React frontend views for fraud categories and transaction details"
        ]
    },
    {
        "id": 10,
        "icon": "arrow",
        "company": "Elistec · Backend Developer",
        "position": "HR Portal.Filter CV",
        "year": "Oct 2026 - Present",
        "description": "Internal recruitment platform (in development) for filtering CVs and matching candidates to job postings.",
        "point": [
            "Building the backend: architecture, database schema, and API, with CV data extracted through ProSnap",
            "Implementing AI-based candidate scoring and CV search using a local LLM and embeddings"
        ]
    }
]

const dataAboutMe = [
    {
        "id": 1,
        "icon": "award",
        "title": "Experience",
        "subtitle": "3+ Years Experience"
    },
    {
        "id": 2,
        "icon": "briefcase-alt",
        "title": "Completed",
        "subtitle": "10+ Projects"
    },
    {
        "id": 3,
        "icon": "map-pin",
        "title": "Base",
        "subtitle": "Jakarta Selatan"
    }
]

const dataEducation = [
    {
        "id": 1,
        "icon": "arrow",
        "company": "Sampoerna University",
        "position": "Bachelor.Mechanical Engineering",
        "year": "2019 - 2023",
        "description": "Scholarship program fully funded by Putera Sampoerna Foundation",
        "point": [
            "Dual-degree program partnership with the University of Arizona",
            "Honorable Mention FALL 2020",
            "GPA: 3.42"
        ]
    }
]

const dataTraining = [
    {
        "id": 1,
        "icon": "arrow",
        "company": "Dumbways Indonesia",
        "position": "Fullstack.Developer Bootcamp",
        "year": "Jan 2023 - Mar 2023",
        "description": "Fullstack developer bootcamp using Go and React.js",
        "point": [
            "Built Waysbeans, an online shopping platform for coffee beans",
            "Built Waysfood, an online food delivery service",
            "RESTful APIs with Go and frontend with React.js"
        ]
    }
]

const dataSkill = [
    {
        "id": 1,
        "title": "Backend",
        "name": ["C# & .NET (ASP.NET Core)", "Go", "PHP (Laravel)", "Python (FastAPI)"],
        "level": ["", "", "", ""]
    },
    {
        "id": 2,
        "title": "Frontend",
        "name": ["React.js", "React Native", "Blazor", "JavaScript", "HTML & CSS", "Bootstrap"],
        "level": ["", "", "", "", "", ""]
    },
    {
        "id": 3,
        "title": "Database",
        "name": ["PostgreSQL (pgvector)", "SQL Server", "MySQL", "Qdrant"],
        "level": ["", "", "", ""]
    },
    {
        "id": 4,
        "title": "Messaging & DevOps",
        "name": ["RabbitMQ", "SignalR", "Docker", "Git (GitHub, Bitbucket)"],
        "level": ["", "", "", ""]
    },
    {
        "id": 5,
        "title": "Low-code & Automation",
        "name": ["Nintex Automation Cloud", "Power Automate", "SharePoint"],
        "level": ["", "", ""]
    },
    {
        "id": 6,
        "title": "AI",
        "name": ["OCR (RapidOCR, Azure, Google Vision, Tesseract)", "LLM (OpenAI & local)", "Embeddings & RAG"],
        "level": ["", "", ""]
    },
    {
        "id": 7,
        "title": "Practices",
        "name": ["RESTful API design", "Backend architecture", "Multi-tenancy"],
        "level": ["", "", ""]
    }
]
export { dataExperience, dataAboutMe, dataEducation, dataTraining, dataSkill };