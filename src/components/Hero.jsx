import { motion } from 'framer-motion';
import { FiArrowRight, FiMail } from 'react-icons/fi';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__grain" aria-hidden="true" />
      <div className="container">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div className="hero__status" variants={item}>
            <span className="hero__status-dot" />
            Available for new projects
          </motion.div>

          <motion.h1 className="hero__name" variants={item}>
            Remilekun
          </motion.h1>

          <motion.p className="hero__description" variants={item}>
            I architect and build{' '}
            <strong>cloud infrastructure</strong>,{' '}
            <strong>web &amp; mobile applications</strong>, and{' '}
            <strong>enterprise software</strong> that scales.
            As a consultant, I help startups and businesses turn
            ambitious ideas into production-ready systems.
          </motion.p>

          <motion.div className="hero__cta-group" variants={item}>
            <a href="#contact" className="hero__cta">
              <FiMail size={16} />
              Get in touch
            </a>
            <a href="#services" className="hero__cta hero__cta--outline">
              View services
              <FiArrowRight size={16} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="hero__scroll-indicator">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
