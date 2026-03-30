import { motion } from 'framer-motion';
import { FiExternalLink, FiCalendar, FiBriefcase } from 'react-icons/fi';

const projects = [
  {
    role: 'Senior Cloud Engineer',
    company: 'Fintech Startup',
    period: '2024 — Present',
    type: 'Contract',
    description:
      'Architected and deployed a multi-region AWS infrastructure supporting 500K+ daily transactions. Built CI/CD pipelines, Kubernetes clusters, and real-time monitoring dashboards.',
    tags: ['AWS', 'Kubernetes', 'Terraform', 'Node.js'],
    link: null,
  },
  {
    role: 'Full-Stack Developer',
    company: 'HealthTech Platform',
    period: '2023 — 2024',
    type: 'Project',
    description:
      'Designed and built a HIPAA-compliant telehealth platform with real-time video, patient scheduling, and integrated EHR. Served 10K+ active patients.',
    tags: ['React', 'Python', 'PostgreSQL', 'Docker'],
    link: null,
  },
  {
    role: 'Mobile App Developer',
    company: 'E-Commerce Brand',
    period: '2023',
    type: 'Contract',
    description:
      'Developed a cross-platform mobile application with push notifications, payment processing, and inventory management. 50K+ downloads in the first quarter.',
    tags: ['Flutter', 'Swift', 'Firebase', 'Stripe'],
    link: null,
  },
  {
    role: 'Technical Consultant',
    company: 'Enterprise SaaS Company',
    period: '2022 — 2023',
    type: 'Consulting',
    description:
      'Led an architecture review and cloud migration strategy for a legacy monolith. Reduced infrastructure costs by 40% and improved deployment frequency from monthly to daily.',
    tags: ['AWS', 'Docker', 'Microservices', 'CI/CD'],
    link: null,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <motion.span
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </motion.span>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Selected work &amp; engagements.
        </motion.h2>

        <div className="portfolio__list">
          {projects.map((project, i) => (
            <motion.div
              className="portfolio-card"
              key={`${project.company}-${i}`}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <div className="portfolio-card__header">
                <div className="portfolio-card__meta">
                  <span className="portfolio-card__type">{project.type}</span>
                  <span className="portfolio-card__period">
                    <FiCalendar size={13} />
                    {project.period}
                  </span>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    className="portfolio-card__link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.company}`}
                  >
                    <FiExternalLink size={16} />
                  </a>
                )}
              </div>

              <h3 className="portfolio-card__role">{project.role}</h3>
              <p className="portfolio-card__company">
                <FiBriefcase size={14} />
                {project.company}
              </p>
              <p className="portfolio-card__description">
                {project.description}
              </p>

              <div className="portfolio-card__tags">
                {project.tags.map((tag) => (
                  <span className="portfolio-card__tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
