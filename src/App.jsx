import banner from './assets/Black-Technology-LinkedIn-Banner.png'
import remember from './assets/remember.png'
import run from './assets/Until-we-meet-again.png'
import './App.css'

function App() {
  return (
    <div className='app'>
      <img className='banner' src={banner} alt="Black Technology LinkedIn Banner" />

      <div className='hero'>
        <hr />
        <h2 className='hero-text'>🤠 Howdy !!!</h2>
        <h3 className='name'>I'm Adeen Waqqas Ahmed <br />(AIML |Backend Engineer | MERN | Azure | DevOps)</h3>

        <p className='links'>
          <a href="mailto:adeenwaqqass@gmail.com">
            📧 <strong>Email</strong>
          </a>
          {'   |   '}
          <a href="https://www.linkedin.com/in/adeen-waqqas-ahmed/" target="_blank" rel="noopener noreferrer">
            👔 <strong>LinkedIn</strong>
          </a>
          {'   |   '}
          <a href="https://github.com/adeenwaqqass" target="_blank" rel="noopener noreferrer">
            💼 <strong>GitHub</strong>
          </a>
        </p>

        <hr />

      </div>

      <div className='content'>
        <h2 className='about'>🌠 About me</h2>
        <p className='about-text'>
          I am a Backend Engineer skilled in Node.js, Java, Azure, MERN stack, Python automation, and DevOps practices. I build production-grade systems such as data pipelines, distributed scrapers, cloud deployments, and full-stack applications.
        </p>
        <ol className='about-list'>
          <li className='list-heading'>I bring strong experience in:</li>
          <li>✅ Backend development with Node.js, Express, and Java (Spring basics/REST)</li>
          <li>✅ Cloud deployment using Azure App Services, Functions, and Storage</li>
          <li>✅ Docker, CI/CD, GitHub Actions, and scalable system design</li>
          <li>✅ Data engineering workflows and large-scale web scraping automation</li>
          <li>✅ Experience building scalable projects end-to-end</li>
          <li>✅ Clean code, REST APIs, microservice mindset</li>
          <li>✅ Developing clean, maintainable code with a microservices mindset</li>
        </ol>
        <div className='hr-line-below-ol'>
          <hr />
        </div>
      </div>

      <div className='content'>
        <h2 className='skills'>🛠️ Skills</h2>
        <h3 className='skill2'>💻 Technologies & Frameworks</h3>
        <div className='all-skills'>
          <h3 className='skill1'>🧠 Programming Languages</h3>
          <ul className='skill-list-1'>
            <li>Java</li>
            <li>Python</li>
            <li>JavaScript</li>
            <li>SQL</li>
          </ul>
          <h3 className='skill-2'> 🧰 Backend & Frameworks</h3>
          <ul className='skill-list-2'>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Django</li>
            <li>FastAPI</li>
            <li>Spring Boot</li>
          </ul>
          <h3 className='skill-3'>🗄️ Databases</h3>
          <ul className='skill-list-3'>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>Firebase</li>
          </ul>
          <h3 className='skill-4'>☁️ Cloud & DevOps</h3>
          <ul className='skill-list-5'>
            <li>Microsoft Azure</li>
            <li>Apache Kafka & ZooKeeper</li>
            <li>Kubernetes (K8s)</li>
            <li>Docker</li>
          </ul>
          <h3 className='skill-5'>🛠️ Tools & Platforms</h3>
          <ul className='skill-list-6'>
            <li>Git & GitHub</li>
            <li>Postman / Postwoman</li>
            <li>Linux</li>
          </ul>
        </div>
        <div className='hr-line-below-skills'>
          <hr />
        </div>
        <div className='work-exp'>
          <h2 className='work-exp-title'>💼 Work Experience:</h2>
          <h3 className='cojag'>Intern | Cojag <code className='duration-of-work'>[Oct 2021 - Oct 2022]</code></h3>
          <p>Facilitated the development and management of SQL and PL/SQL projects for high-priority clients, optimizing database performance and ensuring robust data management,
            Collaborated directly with clients to deliver customized solutions, exceeding expectations and ensuring seamless project execution.</p>
          <p>➜ <a className='tech-stack'>Tech Stack: </a>  SQL, PL/SQL, Python, React, Java, Js</p>
        </div>
        <div className='hr-line-below-work-exp'>
          <hr />
        </div>
        <div className='education'>
          <h2 className='education-title'>🏫 Education:</h2>
          <h3 className='education-text'><a className='Btech'>Btech. Artificial Intelligence</a> | G.H. Raisoni College of Engineering & Management, Pune <code className='duration-of-edu'>[2023 - 2027]</code></h3>
          <h4>An on-campus undergraduate 4-year  Bachelor of Technology degree program in Computer Engineering persued at G.H. Raisoni College of Engineering & Management, Pune. affiliated to Savitribai Phule Pune University (formally University of Pune). </h4>
        </div>
        <div className='hr-line-below-education'>
          <hr />
        </div>
        <div className='achievements'>
          <h2 className='achievements-title'>🏆 Achievements</h2>
          <ul>
            <li>Achieved an overall band score of 6.5 in IELTS Academic on <code className='IELTS'>01 November 2022</code>, with Listening: 7.0, Reading: 6.0, Writing: 5.5, and Speaking: 7.0 (CEFR Level: B2).</li>
            <li>Lead Software Development Engineer (SDE) at the AR/VR Club, G. H. Raisoni College of Engineering & Management, Pune.</li>
          </ul>
        </div>
        <div className='hr-line-below-achievements'>
          <hr />
        </div>
        <div className='Projects'>
          <h2 className='projects-title'>🏗️ Projects</h2>
          <h3 className='pro1'>Algorithmic Trading <code className='SP'>(equal-weight S&P 500)</code> | <a className='link-to-codebase' href="https://github.com/adeenwaqqass/Algorithmic_Trading">🔗 Codebase</a></h3>
          <ul>
            <li>Algorithmic Trading is a Python-based project designed to research, implement, and back-test quantitative trading strategies using historical market data. The repository includes Jupyter notebooks and data files that demonstrate the development of trading strategies such as equal-weight S&P 500 portfolio construction and momentum-based models, allowing analysis of entry/exit signals and performance evaluation of rule-based algorithms. The project focuses on extracting financial data, applying quantitative methods to design strategies, and evaluating them through backtesting to understand their effectiveness.</li>
            <li>Implemented using Python and Jupyter Notebook, this project uses real stock data and strategy logic to explore algorithmic trading concepts. Analytics and results are documented in interactive notebooks to visualize and compare strategy outcomes.</li>
            <li>Tech Stack: Python, Jupyter Notebook, Pandas, NumPy, Excel (data analysis), financial datasets (CSV/Excel)</li>
            <li>Skills used: Data Analysis, Quantitative Strategy Development, Backtesting, Financial Data Processing</li>
          </ul>
          <h3 className='pro2'>Nebula<code className='drive'>Drive</code> | <a className='link-to-codebase' href="https://github.com/adeenwaqqass/NebulaDrive">🔗 Codebase</a></h3>
          <ul>
            <li>NebulaDrive is a backend-driven file upload and sharing system <code className='drive'>(Drive)</code> built to manage secure file storage, access control, and metadata through RESTful APIs. The project implements server-side logic for file upload, download, deletion, public/private access toggling, and secure file sharing via generated links, following production-grade backend architecture patterns.</li>
            <li>Developed using Spring Boot, the application exposes modular REST APIs for file lifecycle management and access authorization. Clerk authentication is integrated for secure user identity and role-based access control, while MongoDB stores file metadata, user data, and sharing references. The backend also includes subscription and payment APIs using Razorpay, handling order creation, payment verification, and transaction records.</li>
            <li>The system is designed for scalability and extensibility, demonstrating real-world backend practices such as API security, request validation, and clean separation of concerns.</li>
            <li>Tech Stack: Spring Boot, MongoDB, REST APIs, Clerk Authentication, Razorpay, Java, Git, Linux</li>
            <li>Skills used: Backend Development, REST API Design, Authentication & Authorization, File Handling Systems, Database Design, Secure Payment Integration, Scalable Backend Architecture</li>
          </ul>
          <h3 className='pro3'>NexBrief | <a className='link-to-codebase' href="https://github.com/adeenwaqqass/NexBrief">🔗 Codebase</a></h3>
          <ul>
            <li>NexBrief is a full-stack news aggregator and summarization app that collects articles from multiple sources and provides concise summaries for quick reading. It features category-wise organization, search functionality, and personalized recommendations.</li>
            <li>Built with React and FastAPI, the app uses MongoDB for data storage and integrates automated summarization to process news content efficiently.</li>
            <li>Tech Stack: React.js, FastAPI, MongoDB, Tailwind CSS, Python, REST APIs, Git</li>
            <li>Skills used: Full-Stack Development, API Integration, NLP Summarization, Database Management, Responsive Web Design</li>
          </ul>
        </div>
        <div className='hr-line-below-projects'>
          <hr />
        </div>
        <div className='end'>
          <p className='p1'>© 2025 Adeen Waqqas. All rights reserved. ⚡ | Designed & Developed by Adeen Waqqas 👨‍💻 | Made with ❤️ React & Tailwind CSS 🖌️</p>
          <p className='p2'>⚠️ In case you didn’t know… </p>
          <div className='end-inline'>
            <img className='remember-img' src={remember} alt="Remember..." />
            <p>when you said, ‘It works on my machine’? Miserable mortal! Chaos laughs at your hubris!</p>
            <img className='run-img' src={run} alt="UNTIL WE MEET AGAIN" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
