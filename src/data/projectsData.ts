export interface ProjectItem {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  techStack: string[];
  highlights: string[];
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "01",
    number: "01",
    name: "AI Data Visualization Agent",
    category: "AI & Data Science",
    description: "An autonomous AI agent platform that transforms natural language questions into interactive, high-performance data visualizations and neural network telemetry dashboards in real-time.",
    techStack: ["Python", "Pandas", "PyTorch", "LangChain", "FastAPI", "React", "Recharts", "TailwindCSS"],
    highlights: [
      "Automated NL-to-Visualization pipeline generating custom dynamic chart specs from raw CSV/SQL data streams.",
      "Real-time Neural Network telemetry monitoring with sub-15ms model inference tracking.",
      "Interactive dashboard customization with dark mode glassmorphism UI & instant export capabilities."
    ]
  },
  {
    id: "02",
    number: "02",
    name: "AI Business Analyst Assistant",
    category: "Business Intelligence",
    description: "An enterprise-grade AI analytics system featuring automated NL-to-SQL query generation, executive KPI forecasting, and automated revenue trend reporting.",
    techStack: ["Python", "OpenAI GPT-4", "SQLAlchemy", "Snowflake", "BigQuery", "Streamlit", "Docker"],
    highlights: [
      "Natural language query interface translating complex business prompts into optimized SQL queries.",
      "Time-series predictive forecasting curves with 95% confidence intervals for revenue & churn prediction.",
      "Automated weekly executive reporting generator with instant PDF/CSV summary exports."
    ]
  },
  {
    id: "03",
    number: "03",
    name: "Multi-Agent AI Researcher",
    category: "Autonomous Systems",
    description: "A multi-agent swarm architecture designed for automated deep market research, web scraping synthesis, vector similarity search, and knowledge graph construction.",
    techStack: ["Python", "CrewAI", "LangGraph", "ChromaDB", "FastAPI", "Next.js", "GraphQL", "Vector DB"],
    highlights: [
      "Autonomous multi-agent collaboration workflow with dedicated scrapers, summarizers, and fact-checkers.",
      "Vector database integration indexing over 100k+ research papers for semantic similarity retrieval.",
      "Interactive knowledge graph explorer visualizing interconnected entities and emerging technology trends."
    ]
  }
];
