import { useState } from 'react';
import './Solutions.css';

type TabType = 'rag' | 'ai-agents' | 'mobile-apps';

const Solutions = () => {
  const [activeTab, setActiveTab] = useState<TabType>('rag');

  return (
    <div className="solutions-container">
      {/* Sidebar Navigation */}
      <aside className="solutions-sidebar">
        <div className="sidebar-header">
          <h3>Solutions</h3>
          <p>Enterprise-grade solutions for modern businesses</p>
        </div>
        <nav className="sidebar-nav">
          <button
            className={`sidebar-tab ${activeTab === 'rag' ? 'active' : ''}`}
            onClick={() => setActiveTab('rag')}
          >
            <span className="tab-icon"></span>
            <div className="tab-content">
              <span className="tab-title">RAG Systems</span>
              <span className="tab-subtitle">Retrieval-Augmented Generation</span>
            </div>
          </button>
          <button
            className={`sidebar-tab ${activeTab === 'ai-agents' ? 'active' : ''}`}
            onClick={() => setActiveTab('ai-agents')}
          >
            <span className="tab-icon"></span>
            <div className="tab-content">
              <span className="tab-title">AI Agents</span>
              <span className="tab-subtitle">Workflow Automation Tools</span>
            </div>
          </button>
          <button
            className={`sidebar-tab ${activeTab === 'mobile-apps' ? 'active' : ''}`}
            onClick={() => setActiveTab('mobile-apps')}
          >
            <span className="tab-icon"></span>
            <div className="tab-content">
              <span className="tab-title">Mobile Applications</span>
              <span className="tab-subtitle">Custom App Development</span>
            </div>
          </button>
        </nav>
        <div className="sidebar-cta">
          <p>Ready to transform your business?</p>
          <button className="cta-button primary">Get Started</button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="solutions-main">
        {activeTab === 'rag' && <RAGContent />}
        {activeTab === 'ai-agents' && <AIAgentsContent />}
        {activeTab === 'mobile-apps' && <MobileAppsContent />}
      </main>
    </div>
  );
};

/* RAG Content - Original Blog Content */
const RAGContent = () => {
  return (
    <div className="solutions-page">
      {/* Header */}
      <header className="blog-header">
        <div className="blog-meta">
          <span className="tag">#llm</span>
          <span className="tag">#text-data</span>
          <span className="date">February 13, 2025 · Updated July 23, 2025</span>
        </div>
        <h1 className="blog-title">10 RAG examples and use cases from real companies</h1>
        <p className="blog-author">By UDIT from <a href="https://uddit.site" target="_blank" rel="noopener noreferrer">Uddit.site</a></p>
        <img
          src="/images/rag-main.jpg"
          alt="RAG Examples and Use Cases"
          className="hero-image"
        />
      </header>

      {/* Introduction */}
      <section className="blog-section">
        <p className="intro-text">
          LLMs sometimes provide outdated or inaccurate information because they rely on training datasets
          rather than retrieving current facts. For business applications, relying on default model behavior isn't enough.
        </p>
        <div className="key-benefits">
          <h3>Key RAG Benefits:</h3>
          <ul>
            <li>Grounds LLM outputs in trusted data sources, reducing hallucinations</li>
            <li>Provides source citations for verifiable claims</li>
            <li>Enables user-specific, personalized responses</li>
          </ul>
        </div>
      </section>

      {/* Section 1: DoorDash */}
      <section className="blog-section">
        <h2>1. Delivery Support Chatbot (DoorDash)</h2>
        <p>
          DoorDash implemented a RAG system combined with LLM guardrail and LLM judge for their customer support.
          The system condenses customer conversations to identify core issues and searches their knowledge base
          for relevant articles and past cases.
        </p>
        <div className="highlight-box">
          <h4>Quality Monitoring Metrics:</h4>
          <p>The system evaluates responses across five metrics: retrieval correctness, response accuracy,
          grammar and language accuracy, coherence to context, and relevance to user requests.</p>
        </div>
        <figure className="blog-image">
          <img src="/images/doordash-rag.png" alt="DoorDash RAG-based support system" />
          <figcaption>DoorDash RAG-based support system. Source: Path to high-quality LLM-based Dasher support automation</figcaption>
        </figure>
      </section>

      {/* Section 2: LinkedIn */}
      <section className="blog-section">
        <h2>2. Customer Tech Support (LinkedIn)</h2>
        <p>
          LinkedIn innovated by combining RAG with knowledge graphs instead of plain text retrieval.
          Their system constructs a knowledge graph from historical issue tickets, parses consumer queries,
          and retrieves related sub-graphs to mitigate text segmentation effects.
        </p>
        <div className="highlight-box success">
          <h4>Result:</h4>
          <p>Reduced median per-issue resolution time by <strong>28.6%</strong></p>
        </div>
        <figure className="blog-image">
          <img src="/images/linkedin-rag.png" alt="RAG with knowledge graph framework at LinkedIn" />
          <figcaption>RAG with knowledge graph framework at LinkedIn. Source: Retrieval-Augmented Generation with Knowledge Graphs for Customer Service Question Answering</figcaption>
        </figure>
      </section>

      {/* Section 3: Bell */}
      <section className="blog-section">
        <h2>3. Internal Policies Chatbot (Bell)</h2>
        <p>
          Bell focused on knowledge management at scale for company policy access, implementing modular
          document embedding pipelines that support both batch and incremental knowledge base updates.
        </p>
        <div className="feature-list">
          <h4>Key Features:</h4>
          <ul>
            <li>Modular document embedding pipelines</li>
            <li>Supports batch and incremental knowledge base updates</li>
            <li>Automatically updates indexes when documents change</li>
            <li>Applies DevOps principles to system maintenance</li>
          </ul>
        </div>
        <figure className="blog-image">
          <img src="/images/bell-rag.png" alt="Knowledge management solution for RAG system at Bell" />
          <figcaption>Knowledge management solution for RAG system at Bell. Source: Modular Solutions for Knowledge Management at scale in RAG Systems</figcaption>
        </figure>
      </section>

      {/* Section 4: Harvard */}
      <section className="blog-section">
        <h2>4. AI Professor (Harvard Business School)</h2>
        <p>
          Harvard Business School developed ChatLTV - a RAG-based faculty chatbot for their entrepreneurship course.
          The system was trained on a course corpus including case studies, teaching notes, books, blog posts,
          and Slack Q&A history.
        </p>
        <div className="highlight-box">
          <h4>Integration:</h4>
          <p>Deployed via Slack channel with private and public interaction modes. Quality assurance uses
          mixed manual and automated testing with LLM judges comparing outputs against ground-truth data.</p>
        </div>
        <figure className="blog-image">
          <img src="/images/harvard-rag.png" alt="ChatLTV tech stack" />
          <figcaption>ChatLTV tech stack. Source: An AI Professor at Harvard: ChatLTV</figcaption>
        </figure>
      </section>

      {/* Section 5: Vimeo */}
      <section className="blog-section">
        <h2>5. Video Summaries (Vimeo)</h2>
        <p>
          Vimeo enables users to converse with video content by transforming video content into text transcripts,
          saving transcript chunks in a vector database. They use a bottom-up approach with multiple context
          window sizes to summarize long contexts and create video descriptions.
        </p>
        <div className="feature-list">
          <h4>Features:</h4>
          <ul>
            <li>Returns responses with playable video moments</li>
            <li>Suggests pre-generated question/answer pairs</li>
            <li>Covers important video moments automatically</li>
          </ul>
        </div>
        <figure className="blog-image">
          <img src="/images/vimeo-rag.webp" alt="Vimeo RAG-based Q&A system" />
          <figcaption>Vimeo RAG-based Q&A system. Source: Unlocking knowledge sharing for videos with RAG</figcaption>
        </figure>
      </section>

      {/* Section 6: Grab */}
      <section className="blog-section">
        <h2>6. Analytical Fraud Reports (Grab)</h2>
        <p>
          Grab developed two main RAG-powered tools for their fraud detection and analytics teams.
        </p>

        <div className="sub-section">
          <h3>Report Summarizer</h3>
          <p>
            Automatically generates and summarizes regular reports by integrating Data-Arks (Python-based API platform)
            and Spellvault (prompt storage/refinement platform). Results are delivered via Slack.
          </p>
          <div className="highlight-box success">
            <p><strong>Saves 3-4 hours per report</strong></p>
          </div>
          <figure className="blog-image">
            <img src="/images/grab-rag1.png" alt="Grab's RAG-based report summarizer" />
            <figcaption>Grab's RAG-based report summarizer</figcaption>
          </figure>
        </div>

        <div className="sub-section">
          <h3>A* Bot</h3>
          <p>
            An AI assistant for streamlining fraud investigations. It selects relevant queries using RAG,
            executes queries, and summarizes results concisely, enabling self-serve analytics across teams.
          </p>
          <figure className="blog-image">
            <img src="/images/grab-rag2.png" alt="Grab's A* Bot" />
            <figcaption>Grab's A* Bot. Source: Leveraging RAG-powered LLMs for Analytical Tasks</figcaption>
          </figure>
        </div>
      </section>

      {/* Section 7: Thomson Reuters */}
      <section className="blog-section">
        <h2>7. Executive Customer Support (Thomson Reuters)</h2>
        <p>
          Thomson Reuters built a chatty interface for rapid information access from curated databases.
        </p>
        <div className="process-list">
          <h4>Process:</h4>
          <ol>
            <li>Splits text into small chunks</li>
            <li>Embeds each chunk and stores in vector database</li>
            <li>Converts user questions to vector embeddings</li>
            <li>Queries database for best matches</li>
            <li>Uses seq-to-seq model to refine and generate structured responses</li>
          </ol>
        </div>
        <figure className="blog-image">
          <img src="/images/thomson-rag.webp" alt="Processing and indexing Flow, Retrieval Flow" />
          <figcaption>Processing and indexing Flow, Retrieval Flow. Source: Better Customer Support Using RAG at Thomson Reuters</figcaption>
        </figure>
      </section>

      {/* Section 8: Pinterest */}
      <section className="blog-section">
        <h2>8. RAG for Data Tables (Pinterest)</h2>
        <p>
          Pinterest addressed the problem of users struggling to identify correct data tables for analytical queries
          by integrating RAG for intelligent table selection.
        </p>
        <div className="process-list">
          <h4>Process:</h4>
          <ol>
            <li>Generates vector index of table summaries</li>
            <li>Transforms user questions into embeddings</li>
            <li>Conducts similarity search for top N tables</li>
            <li>LLM selects top K most suitable tables</li>
            <li>Generates text-to-SQL prompt for final response</li>
          </ol>
        </div>
        <figure className="blog-image">
          <img src="/images/pinterest-rag.webp" alt="Incorporating RAG for table selection at Pinterest" />
          <figcaption>Incorporating RAG for table selection at Pinterest. Source: How we built Text-to-SQL at Pinterest</figcaption>
        </figure>
      </section>

      {/* Section 9: Ramp */}
      <section className="blog-section">
        <h2>9. Improved Industry Classification (Ramp)</h2>
        <p>
          Ramp faced challenges with their homegrown classification system being inconsistent and difficult to audit.
          They built a RAG-based migration to standardized NAICS classification.
        </p>
        <div className="feature-list">
          <h4>Technical Components:</h4>
          <ul>
            <li>Transforms customer business information into vector representations</li>
            <li>Compares vectors against NAICS code database</li>
            <li>LLM generates final predictions from recommended codes</li>
            <li>Uses Clickhouse for similarity calculations</li>
            <li>Kafka logs intermediate results</li>
            <li>Guardrails ensure valid NAICS outputs</li>
          </ul>
        </div>
        <figure className="blog-image">
          <img src="/images/ramp-rag.png" alt="Ramp's RAG system design" />
          <figcaption>Ramp's RAG system design. Source: From RAG to Richness: How Ramp Revamped Industry Classification</figcaption>
        </figure>
      </section>

      {/* Section 10: Royal Bank of Canada */}
      <section className="blog-section">
        <h2>10. Locating Internal Policies (Royal Bank of Canada)</h2>
        <p>
          The Royal Bank of Canada developed <strong>Arcane</strong>, a system that points banking specialists
          to relevant policies across internal web platforms.
        </p>
        <div className="highlight-box">
          <h4>Workflow:</h4>
          <p>
            Specialists ask questions in a chatbot interface; the system navigates databases, extracts information,
            and presents results concisely with sources. The main challenge addressed was data parsing and chunking
            from dispersed sources—web platforms, proprietary databases, PDFs, and Excel tables.
          </p>
        </div>
      </section>

      {/* Conclusion */}
      <section className="blog-section conclusion">
        <h2>Evaluate RAG with Evidently</h2>
        <p>
          RAG plays a crucial role in grounding LLM outputs and reducing hallucinations.
          Proper evaluation is essential for production-ready RAG systems.
        </p>

        <div className="tools-grid">
          <div className="tool-card">
            <h3>Open-Source Library</h3>
            <ul>
              <li>25+ million downloads</li>
              <li>100+ built-in evaluation checks</li>
              <li>Custom LLM judge configuration</li>
            </ul>
          </div>
          <div className="tool-card">
            <h3>Evidently Cloud</h3>
            <ul>
              <li>No-code evaluation workspace</li>
              <li>Team collaboration features</li>
              <li>Complex evaluation workflow execution</li>
            </ul>
          </div>
        </div>

        <figure className="blog-image">
          <img src="/images/evidently-dashboard.gif" alt="Evaluate RAG with Evidently Cloud" />
          <figcaption>Evaluate RAG with Evidently Cloud</figcaption>
        </figure>

        <div className="cta-section">
          <button className="cta-button primary">Sign Up Free</button>
          <button className="cta-button secondary">Schedule Demo</button>
        </div>
      </section>

      {/* Related Content */}
      <section className="related-content">
        <h3>Related Articles</h3>
        <div className="related-grid">
          <a href="#" className="related-card">
            <span className="related-icon"></span>
            <p>55 real-world LLM applications and use cases from top companies</p>
          </a>
          <a href="#" className="related-card">
            <span className="related-icon"></span>
            <p>LLM hallucinations and failures: lessons from 5 examples</p>
          </a>
        </div>
      </section>
    </div>
  );
};

/* AI Agents Content - New Tab */
const AIAgentsContent = () => {
  return (
    <div className="solutions-page">
      {/* Header */}
      <header className="blog-header">
        <div className="blog-meta">
          <span className="tag">#ai-agents</span>
          <span className="tag">#workflow-automation</span>
          <span className="tag">#enterprise</span>
          <span className="date">January 2025 · Updated</span>
        </div>
        <h1 className="blog-title">AI Agents & Workflow Automation: The Complete Enterprise Guide</h1>
        <p className="blog-author">By UDIT from <a href="https://uddit.site" target="_blank" rel="noopener noreferrer">Uddit.site</a></p>
        <img
          src="/images/ai-automation-hero.jpg"
          alt="AI Agents and Workflow Automation"
          className="hero-image"
        />
      </header>

      {/* Introduction */}
      <section className="blog-section">
        <p className="intro-text">
          The AI automation market is projected to grow from $23 billion to $32 billion by 2033, with enterprises
          reporting 40% productivity gains through intelligent workflow automation. Discover how leading companies
          are leveraging n8n, Zapier, Make, and custom AI agents to transform their operations.
        </p>
        <div className="key-benefits">
          <h3>Why AI Workflow Automation?</h3>
          <ul>
            <li>Reduce manual tasks by up to 80% with intelligent automation</li>
            <li>Save 200+ hours monthly with single workflow optimizations (Delivery Hero)</li>
            <li>Achieve 40-60 minutes daily time savings per employee</li>
            <li>Enable 24/7 operations without increasing headcount</li>
          </ul>
        </div>
      </section>

      {/* Market Overview */}
      <section className="blog-section">
        <h2>The AI Automation Market in 2025</h2>
        <p>
          The workflow automation market has exploded, with n8n dominating 90% of automation mentions
          in enterprise discussions. Companies are shifting from simple "if-then" automations to
          intelligent AI agents that can reason, learn, and adapt to complex business scenarios.
        </p>
        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-number">$32B</span>
            <span className="stat-label">Market Size by 2033</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">40%</span>
            <span className="stat-label">Productivity Gains</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">200hrs</span>
            <span className="stat-label">Monthly Savings</span>
          </div>
        </div>
      </section>

      {/* Top Platforms Comparison */}
      <section className="blog-section">
        <h2>Top AI Workflow Automation Platforms</h2>

        <div className="sub-section">
          <h3>n8n - The Developer's Choice</h3>
          <p>
            n8n is an open-source, self-hostable workflow platform that bridges the gap between no-code
            simplicity and developer power. With 400+ integrations, native AI capabilities via LangChain,
            and the ability to write custom code when needed, it's becoming the Swiss Army knife of automation.
          </p>
          <div className="feature-list">
            <h4>Key Strengths:</h4>
            <ul>
              <li>Self-hostable for complete data sovereignty and security</li>
              <li>Native LangChain integration for advanced AI workflows</li>
              <li>Custom vector database integrations for RAG systems</li>
              <li>Advanced prompt orchestration capabilities</li>
              <li>400+ pre-built integrations</li>
            </ul>
          </div>
          <div className="highlight-box success">
            <h4>Real Results:</h4>
            <p>Delivery Hero saves <strong>200 hours monthly</strong> with a single n8n workflow.</p>
          </div>
        </div>

        <div className="sub-section">
          <h3>Zapier - The Enterprise Standard</h3>
          <p>
            Zapier leads the no-code automation space with 6,000+ native integrations, making it the
            go-to choice for non-technical teams. Their new AI Orchestration features, MCP integration,
            and Agents add-on bring intelligent automation to mainstream businesses.
          </p>
          <div className="feature-list">
            <h4>Key Strengths:</h4>
            <ul>
              <li>6,000+ native app integrations</li>
              <li>Easiest learning curve for non-technical users</li>
              <li>AI Orchestration with Zaps, Tables, and Interfaces</li>
              <li>Enterprise-grade security and compliance</li>
              <li>Dedicated support and SLAs</li>
            </ul>
          </div>
        </div>

        <div className="sub-section">
          <h3>Make (Integromat) - Visual Powerhouse</h3>
          <p>
            Make excels at visual scenario building with powerful branching, iterators, and data transformations.
            The new "Grid" feature provides enterprise-level observability for AI orchestration, making it
            ideal for ops teams needing multi-step logic and cost-effective high-volume automations.
          </p>
          <div className="feature-list">
            <h4>Key Strengths:</h4>
            <ul>
              <li>Advanced visual workflow builder</li>
              <li>AI orchestration "Grid" for agent management</li>
              <li>Cost-effective for high-volume operations</li>
              <li>Complex branching and iteration logic</li>
              <li>Excellent debugging and monitoring tools</li>
            </ul>
          </div>
        </div>

        <figure className="blog-image">
          <img src="/images/ai-workflow.jpg" alt="AI Workflow Automation Comparison" />
          <figcaption>Choosing the right automation platform depends on your technical capabilities and use case requirements</figcaption>
        </figure>
      </section>

      {/* Enterprise Success Stories */}
      <section className="blog-section">
        <h2>Enterprise AI Success Stories</h2>

        <div className="case-study">
          <h3>Klarna - Customer Service AI Revolution</h3>
          <p>
            The Swedish fintech giant deployed AI agents across their customer service operations,
            achieving results equivalent to 700 full-time employees. This transformation led to
            $40 million in annual savings while maintaining customer satisfaction scores.
          </p>
          <div className="highlight-box success">
            <h4>Impact:</h4>
            <p><strong>700 FTE equivalent</strong> handled by AI · <strong>$40M annual savings</strong></p>
          </div>
        </div>

        <div className="case-study">
          <h3>BBVA - Banking Process Automation</h3>
          <p>
            Spain's second-largest bank implemented AI-powered workflow automation across their
            operations, achieving a 26% reduction in operational costs through intelligent document
            processing and automated customer interactions.
          </p>
          <div className="highlight-box success">
            <h4>Impact:</h4>
            <p><strong>26% cost reduction</strong> in operational expenses</p>
          </div>
        </div>

        <div className="case-study">
          <h3>Toyota - Manufacturing Intelligence</h3>
          <p>
            Toyota leveraged AI agents for quality control and supply chain optimization,
            saving over 10,000 man-hours annually through automated inspection processes
            and predictive maintenance scheduling.
          </p>
          <div className="highlight-box success">
            <h4>Impact:</h4>
            <p><strong>10,000+ man-hours saved</strong> annually through AI automation</p>
          </div>
        </div>

        <figure className="blog-image">
          <img src="/images/enterprise-automation.jpg" alt="Enterprise AI Automation" />
          <figcaption>Enterprise companies are achieving massive ROI through strategic AI agent deployment</figcaption>
        </figure>
      </section>

      {/* Use Cases */}
      <section className="blog-section">
        <h2>Top AI Agent Use Cases for 2025</h2>

        <div className="tools-grid">
          <div className="tool-card">
            <h3>Customer Support Automation</h3>
            <ul>
              <li>24/7 intelligent chatbots</li>
              <li>Ticket routing and prioritization</li>
              <li>Sentiment analysis</li>
              <li>Multi-language support</li>
            </ul>
          </div>
          <div className="tool-card">
            <h3>Sales & Marketing</h3>
            <ul>
              <li>Lead scoring and qualification</li>
              <li>Personalized email sequences</li>
              <li>CRM data enrichment</li>
              <li>Campaign optimization</li>
            </ul>
          </div>
          <div className="tool-card">
            <h3>Operations & HR</h3>
            <ul>
              <li>Document processing (OCR/IDP)</li>
              <li>Employee onboarding automation</li>
              <li>Invoice processing</li>
              <li>Compliance monitoring</li>
            </ul>
          </div>
          <div className="tool-card">
            <h3>Data & Analytics</h3>
            <ul>
              <li>Automated report generation</li>
              <li>Data pipeline orchestration</li>
              <li>Anomaly detection</li>
              <li>Predictive analytics</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Enterprise Alternatives */}
      <section className="blog-section">
        <h2>Enterprise-Grade Alternatives</h2>

        <div className="feature-list">
          <h4>Workato</h4>
          <ul>
            <li>iPaaS agentic enterprise platform</li>
            <li>Pre-built AI agents for support, marketing, finance, and operations</li>
            <li>Enterprise security and compliance (SOC 2, HIPAA, GDPR)</li>
          </ul>
        </div>

        <div className="feature-list">
          <h4>Microsoft Power Automate</h4>
          <ul>
            <li>AI authoring visual builder with Copilot</li>
            <li>Natural language workflow creation</li>
            <li>Deep Microsoft 365 integration</li>
            <li>RPA capabilities for legacy systems</li>
          </ul>
        </div>

        <div className="feature-list">
          <h4>Tray.ai</h4>
          <ul>
            <li>High-volume data processing</li>
            <li>Complex multi-step integrations</li>
            <li>Visual workflow builder for technical teams</li>
            <li>AI-powered automation suggestions</li>
          </ul>
        </div>
      </section>

      {/* Security Considerations */}
      <section className="blog-section">
        <h2>Security & Compliance Considerations</h2>
        <p>
          For teams handling PII, financial records, healthcare data, or sensitive IP, data sovereignty
          is critical. Self-hosted solutions like n8n offer complete control over your data infrastructure.
        </p>
        <div className="key-benefits">
          <h3>Enterprise Security Checklist:</h3>
          <ul>
            <li>SOC 2 Type II compliance certification</li>
            <li>HIPAA compliance for healthcare data</li>
            <li>GDPR compliance for EU operations</li>
            <li>Self-hosting options for data sovereignty</li>
            <li>End-to-end encryption for data in transit and at rest</li>
            <li>Role-based access control (RBAC)</li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="blog-section conclusion">
        <h2>Ready to Automate Your Enterprise?</h2>
        <p>
          Whether you're looking to implement n8n, Zapier, Make, or a custom AI agent solution,
          Vatalique specializes in enterprise workflow automation that delivers measurable ROI.
        </p>
        <div className="cta-section">
          <button className="cta-button primary">Schedule Consultation</button>
          <button className="cta-button secondary">View Case Studies</button>
        </div>
      </section>

      {/* Related Content */}
      <section className="related-content">
        <h3>Related Solutions</h3>
        <div className="related-grid">
          <a href="#" className="related-card">
            <span className="related-icon"></span>
            <p>RAG Systems: Real-world examples from top companies</p>
          </a>
          <a href="#" className="related-card">
            <span className="related-icon"></span>
            <p>Mobile App Development: Trends and best practices for 2025</p>
          </a>
        </div>
      </section>
    </div>
  );
};

/* Mobile Applications Content - New Tab */
const MobileAppsContent = () => {
  return (
    <div className="solutions-page">
      {/* Header */}
      <header className="blog-header">
        <div className="blog-meta">
          <span className="tag">#mobile-development</span>
          <span className="tag">#ios-android</span>
          <span className="tag">#enterprise</span>
          <span className="date">January 2025 · Updated</span>
        </div>
        <h1 className="blog-title">Mobile App Development in 2025: What US Enterprises Need to Know</h1>
        <p className="blog-author">By UDIT from <a href="https://uddit.site" target="_blank" rel="noopener noreferrer">Uddit.site</a></p>
        <img
          src="/images/mobile-app-hero.jpg"
          alt="Mobile App Development 2025"
          className="hero-image"
        />
      </header>

      {/* Introduction */}
      <section className="blog-section">
        <p className="intro-text">
          Mobile apps are expected to generate over $522 billion in revenue in 2025, with the enterprise
          mobility market alone reaching $193.9 billion. From AI-powered experiences to super apps,
          discover what types of mobile applications US clients are demanding and how to deliver them.
        </p>
        <div className="key-benefits">
          <h3>Why Mobile Apps in 2025?</h3>
          <ul>
            <li>$522 billion global mobile app revenue projection</li>
            <li>$193.9 billion enterprise mobility market</li>
            <li>83% increase in mobile app attacks driving security investment</li>
            <li>72% of consumers now use voice assistants</li>
          </ul>
        </div>
      </section>

      {/* Market Overview */}
      <section className="blog-section">
        <h2>Mobile App Market in 2025</h2>
        <p>
          As of January 2025, there are 2.096 million apps on Google Play and 1.906 million on the App Store.
          The competition is fierce, but the opportunity for well-designed, purpose-built enterprise and
          consumer apps has never been greater.
        </p>
        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-number">$522B</span>
            <span className="stat-label">App Revenue 2025</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">4M+</span>
            <span className="stat-label">Apps Available</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">$193.9B</span>
            <span className="stat-label">Enterprise Mobility</span>
          </div>
        </div>
        <figure className="blog-image">
          <img src="/images/mobile-development.jpg" alt="Mobile App Development Market" />
          <figcaption>The mobile app market continues explosive growth heading into 2025</figcaption>
        </figure>
      </section>

      {/* Trending App Types */}
      <section className="blog-section">
        <h2>Trending App Types US Clients Want</h2>

        <div className="sub-section">
          <h3>1. On-Demand Service Apps</h3>
          <p>
            Users spend $57.6 billion per year on on-demand services. While food delivery (DoorDash, Grubhub)
            and ride-sharing (Uber, Lyft) dominate, the model is expanding rapidly into new sectors.
          </p>
          <div className="feature-list">
            <h4>Emerging On-Demand Categories:</h4>
            <ul>
              <li>On-demand tutoring and education</li>
              <li>Logistics and last-mile delivery</li>
              <li>Professional services (legal, financial consultations)</li>
              <li>EV charging station locators</li>
              <li>Tourism and local experiences</li>
              <li>Healthcare and telemedicine</li>
            </ul>
          </div>
          <div className="highlight-box success">
            <h4>Market Size:</h4>
            <p>Food delivery alone represents a <strong>$1.4 trillion market</strong></p>
          </div>
        </div>

        <div className="sub-section">
          <h3>2. AI-Powered Applications</h3>
          <p>
            In 2025, most apps integrate AI features - even if they don't brand themselves as "AI apps."
            Modern applications recognize user emotions, generate personalized content, provide real-time
            analytics, and ensure online payment security through intelligent systems.
          </p>
          <div className="feature-list">
            <h4>AI Features Clients Request:</h4>
            <ul>
              <li>Personalized content recommendations</li>
              <li>Natural language interfaces and chatbots</li>
              <li>Predictive analytics and insights</li>
              <li>Image and voice recognition</li>
              <li>Automated customer support</li>
              <li>Fraud detection and security</li>
            </ul>
          </div>
        </div>

        <div className="sub-section">
          <h3>3. AR/VR Applications</h3>
          <p>
            The mobile augmented reality market reached $11.9 billion in 2024 and is projected to hit
            $21 billion by 2028. AR is being used across entertainment, retail, real estate, and travel.
          </p>
          <div className="feature-list">
            <h4>AR/VR Use Cases:</h4>
            <ul>
              <li>Virtual product try-on (furniture, clothing, makeup)</li>
              <li>Real estate virtual tours</li>
              <li>Interactive gaming and entertainment</li>
              <li>Training and simulation</li>
              <li>Navigation and wayfinding</li>
            </ul>
          </div>
          <div className="highlight-box">
            <h4>Example:</h4>
            <p>IKEA uses AR to let customers visualize furniture in their homes before purchasing.</p>
          </div>
        </div>

        <div className="sub-section">
          <h3>4. Super Apps</h3>
          <p>
            Super apps combine multiple services (messaging, payments, shopping) in one platform.
            They create convenience, increase engagement, and offer businesses greater customer
            retention through integrated services.
          </p>
          <div className="feature-list">
            <h4>Super App Features:</h4>
            <ul>
              <li>In-app payments and wallets</li>
              <li>Social and messaging features</li>
              <li>Marketplace and shopping</li>
              <li>Booking and reservations</li>
              <li>Loyalty and rewards programs</li>
            </ul>
          </div>
        </div>

        <div className="sub-section">
          <h3>5. Enterprise Mobility Apps</h3>
          <p>
            With BYOD policies and increased mobile device usage, enterprise mobility is essential
            for modern business strategy. Organizations are investing heavily in custom apps to boost
            productivity, streamline operations, and deepen customer engagement.
          </p>
          <div className="feature-list">
            <h4>Enterprise App Types:</h4>
            <ul>
              <li>Employee productivity and collaboration tools</li>
              <li>Field service management</li>
              <li>Inventory and supply chain management</li>
              <li>Customer relationship management (CRM)</li>
              <li>Business intelligence dashboards</li>
              <li>Internal communication platforms</li>
            </ul>
          </div>
        </div>

        <figure className="blog-image">
          <img src="/images/app-design.jpg" alt="Mobile App Design Trends" />
          <figcaption>Modern app design focuses on seamless user experience across all device types</figcaption>
        </figure>
      </section>

      {/* Technology Stack */}
      <section className="blog-section">
        <h2>Modern Development Approaches</h2>

        <div className="tools-grid">
          <div className="tool-card">
            <h3>Cross-Platform (React Native)</h3>
            <ul>
              <li>Single codebase for iOS & Android</li>
              <li>Faster development cycles</li>
              <li>Cost-effective for startups</li>
              <li>Hot reloading for rapid iteration</li>
            </ul>
          </div>
          <div className="tool-card">
            <h3>Cross-Platform (Flutter)</h3>
            <ul>
              <li>Beautiful native interfaces</li>
              <li>Google's growing ecosystem</li>
              <li>Excellent performance</li>
              <li>Growing enterprise adoption</li>
            </ul>
          </div>
          <div className="tool-card">
            <h3>Native iOS (Swift)</h3>
            <ul>
              <li>Best iOS performance</li>
              <li>Full Apple ecosystem access</li>
              <li>Latest iOS features first</li>
              <li>Premium user experience</li>
            </ul>
          </div>
          <div className="tool-card">
            <h3>Native Android (Kotlin)</h3>
            <ul>
              <li>Official Android language</li>
              <li>Modern, concise syntax</li>
              <li>Full Google Play services</li>
              <li>Jetpack Compose UI</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="blog-section">
        <h2>Mobile Security: A Critical Priority</h2>
        <p>
          Mobile app attacks increased to 83% in 2024, up from 65% the year before. Global cyberattacks
          rose 44% year-over-year. Security is now a top priority for every mobile app project.
        </p>
        <div className="key-benefits">
          <h3>Security Best Practices:</h3>
          <ul>
            <li>End-to-end encryption for all data transmission</li>
            <li>Biometric authentication (Face ID, fingerprint)</li>
            <li>Zero-trust access controls</li>
            <li>Continuous security monitoring</li>
            <li>Regular penetration testing</li>
            <li>Secure API design and implementation</li>
            <li>OWASP Mobile Top 10 compliance</li>
          </ul>
        </div>
      </section>

      {/* Wearables & Voice */}
      <section className="blog-section">
        <h2>Emerging Interfaces</h2>

        <div className="sub-section">
          <h3>Wearable Device Integration</h3>
          <p>
            Apps for smartwatches and fitness trackers are widely adopted, but the trend is expanding
            to smart glasses, healthcare gadgets, and other wearable devices. Clients increasingly
            want companion apps that extend their mobile experience.
          </p>
        </div>

        <div className="sub-section">
          <h3>Voice User Interfaces (VUI)</h3>
          <p>
            With 72% of consumers using voice assistants, voice interfaces are becoming essential.
            Combined with AI tools and wearable tech, VUIs offer hands-free convenience and
            accessibility benefits.
          </p>
        </div>
      </section>

      {/* mCommerce */}
      <section className="blog-section">
        <h2>mCommerce Excellence</h2>
        <p>
          Mobile commerce remains a dominant trend in 2025. Apps make shopping seamless with features
          like mobile wallets, one-tap checkout, and personalized recommendations. Giants like
          Amazon and Alibaba have proven the power of integrated payment experiences.
        </p>
        <div className="process-list">
          <h4>mCommerce Success Factors:</h4>
          <ol>
            <li>Frictionless checkout (Apple Pay, Google Pay integration)</li>
            <li>Personalized product recommendations</li>
            <li>Real-time inventory and order tracking</li>
            <li>Push notification marketing</li>
            <li>Loyalty program integration</li>
            <li>AR product visualization</li>
          </ol>
        </div>
      </section>

      {/* CTA Section */}
      <section className="blog-section conclusion">
        <h2>Build Your Mobile App with Vatalique</h2>
        <p>
          From concept to App Store launch, Vatalique delivers enterprise-grade mobile applications
          using the latest technologies and best practices. Whether you need iOS, Android, or
          cross-platform development, our team brings your vision to life.
        </p>
        <div className="cta-section">
          <button className="cta-button primary">Start Your Project</button>
          <button className="cta-button secondary">View Portfolio</button>
        </div>
      </section>

      {/* Related Content */}
      <section className="related-content">
        <h3>Related Solutions</h3>
        <div className="related-grid">
          <a href="#" className="related-card">
            <span className="related-icon"></span>
            <p>AI Agents: Workflow automation for modern enterprises</p>
          </a>
          <a href="#" className="related-card">
            <span className="related-icon"></span>
            <p>RAG Systems: Intelligent retrieval for your applications</p>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
