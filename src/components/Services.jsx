import { motion } from 'framer-motion';
import { FiCloud, FiGlobe, FiSmartphone, FiCode, FiDatabase, FiCpu } from 'react-icons/fi';

const services = [
  {
    icon: <FiCloud />,
    title: 'Cloud Infrastructure',
    description:
      'Design and deploy resilient, scalable cloud architectures on AWS, GCP, and Azure — from VPCs to Kubernetes clusters.',
  },
  {
    icon: <FiGlobe />,
    title: 'Web Applications',
    description:
      'Full-stack web development with modern frameworks. Fast, accessible, and built to convert visitors into customers.',
  },
  {
    icon: <FiSmartphone />,
    title: 'Mobile Applications',
    description:
      'Cross-platform and native mobile apps that deliver seamless experiences on iOS and Android.',
  },
  {
    icon: <FiCode />,
    title: 'Custom Software',
    description:
      'Purpose-built software solutions — from internal tools and automation engines to SaaS platforms.',
  },
  {
    icon: <FiDatabase />,
    title: 'Cloud Computing',
    description:
      'Serverless architectures, microservices, CI/CD pipelines, and infrastructure-as-code to keep your systems lean and fast.',
  },
  {
    icon: <FiCpu />,
    title: 'Technical Consulting',
    description:
      'Strategic technology guidance for startups and enterprises. Architecture reviews, scalability planning, and team mentoring.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <motion.span
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          What I Do
        </motion.span>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Building the infrastructure that powers modern businesses.
        </motion.h2>

        <div className="services__grid">
          {services.map((service, i) => (
            <motion.div
              className="service-card"
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              <div className="service-card__icon">{service.icon}</div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__description">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
