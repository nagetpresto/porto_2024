const dataExperience = [
    {
        "id": 1,
        "icon": "arrow",
        "company": "PT Elistec Informatika Utama",
        "position": "Software.Engineer (Client Projects)",
        "year": "2023 - 2025",
        "description": "Client projects: Sambu Group, Jawa Power, DAIKIN, Tugu Insurance, Jasa Raharja",
        "point": [
            "Jasa Raharja (2025): OCR worker for hospital invoices across 2,000+ templates, claim calculation per hospital terms, Excel analysis sent to the claim monitoring web app",
            "Tugu Insurance (2025): React.js, Laravel, Postgres. Requirement gathering, DB schema, API planning, and premium calculation for 5 insurance products",
            "DAIKIN (2024): Nintex payment request form with a 5-layer dynamic approval workflow, plus SAP integration with Power Automate",
            "Jawa Power (2024 - 2025): Migrated legacy SharePoint 360 workflows to Nintex Automation Cloud, including 11 modules (Invoice, Timesheet, Leave, Business Travel)",
            "Sambu Group (2023): Beacukai form with Nintex Forms replicating CEISA 4.0, with calculation logic and CEISA integration"
        ]
    },
    {
        "id": 2,
        "icon": "arrow",
        "company": "PT Elistec Informatika Utama",
        "position": "Software.Engineer (Proofs of Concept)",
        "year": "2025 - 2026",
        "description": "Proofs of concept built for prospective clients",
        "point": [
            "Bank Statement Analysis, Fraud Detection (2026): Backend, scan logic, and React views. Flags suspicious patterns across 8 fraud categories",
            "BNI Life Insurance (2025): Form Builder web app and backend APIs for the dynamic forms of a React Native mobile app",
            "BPJS Ketenagakerjaan (2025): Hospital invoice claim analysis for 1,000 invoices from 2 hospitals, set up as a separate tenant"
        ]
    },
    {
        "id": 3,
        "icon": "arrow",
        "company": "PT Elistec Informatika Utama",
        "position": "Software.Engineer (Backend)",
        "year": "June 2023 - Present",
        "description": "Backend systems and workflow automation. Currently leading the backend of a multi-tenant document extraction platform (OCR + LLM)",
        "point": [
            "ProSnap Lite (Nov 2025 - Present): Lead backend developer. REST API (JWT/Google auth, RBAC, API keys), database-per-tenant, and RabbitMQ workers with retry, callbacks, quotas, and SignalR/Firebase notifications",
            "Moved long-running jobs out of the API into standalone workers, reducing API load. Led the layered API refactor and the .NET 10 upgrade",
            "Built ProSplit, ProMatch, ProDraft, and Export Automation. Integrated local OCR (RapidOCR) and a self-hosted LLM",
            "HR Portal, Filter CV (Oct 2026 - Present): Backend for CV filtering and candidate matching, with AI scoring and CV search using a local LLM and embeddings",
            "Ran flow and feature sessions with the design team and assigned tasks to frontend and mobile developers"
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