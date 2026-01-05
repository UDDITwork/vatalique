import './Solutions.css';

const Solutions = () => {
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
        <h2><span className="emoji">🚚</span> 1. Delivery Support Chatbot (DoorDash)</h2>
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
        <h2><span className="emoji">💻</span> 2. Customer Tech Support (LinkedIn)</h2>
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
        <h2><span className="emoji">🏢</span> 3. Internal Policies Chatbot (Bell)</h2>
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
        <h2><span className="emoji">🎓</span> 4. AI Professor (Harvard Business School)</h2>
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
        <h2><span className="emoji">🍿</span> 5. Video Summaries (Vimeo)</h2>
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
        <h2><span className="emoji">🕵️‍♀️</span> 6. Analytical Fraud Reports (Grab)</h2>
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
        <h2><span className="emoji">💼</span> 7. Executive Customer Support (Thomson Reuters)</h2>
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
        <h2><span className="emoji">🔢</span> 8. RAG for Data Tables (Pinterest)</h2>
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
        <h2><span className="emoji">✅</span> 9. Improved Industry Classification (Ramp)</h2>
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
        <h2><span className="emoji">🚦</span> 10. Locating Internal Policies (Royal Bank of Canada)</h2>
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
        <h2><span className="emoji">📊</span> Evaluate RAG with Evidently</h2>
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
            <span className="related-icon">📚</span>
            <p>55 real-world LLM applications and use cases from top companies</p>
          </a>
          <a href="#" className="related-card">
            <span className="related-icon">⚠️</span>
            <p>LLM hallucinations and failures: lessons from 5 examples</p>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
