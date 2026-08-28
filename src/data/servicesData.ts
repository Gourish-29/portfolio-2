export interface ServiceItem {
  id: string;
  name: string;
  description: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "01",
    name: "Data Analysis & Visualization",
    description: "Cleaning, analyzing, and visualizing complex datasets using Python, Pandas, SQL, Microsoft Excel, and Power BI to build interactive dashboards and drive data-backed business decisions."
  },
  {
    id: "02",
    name: "AI & LLM Solutions",
    description: "Developing full-stack AI web applications, conversational BI tools, and autonomous research platforms using FastAPI, LangChain, LlamaIndex, Together AI, and Google Gemini."
  },
  {
    id: "03",
    name: "Full-Stack Development",
    description: "Building responsive, user-friendly frontend interfaces and RESTful backend APIs using React.js, Node.js, Flask, HTML5, CSS3, JavaScript, and Vercel cloud deployment."
  },
  {
    id: "04",
    name: "Database & Text-to-SQL",
    description: "Designing relational database schemas, executing optimized SQL queries, and integrating text-to-SQL models to allow natural language data exploration without manual coding."
  },
  {
    id: "05",
    name: "Business Intelligence & Insights",
    description: "Extracting actionable insights, key performance indicators (KPIs), and trend analyses from structured data to empower executive strategy and operational reporting."
  }
];

