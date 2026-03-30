import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const socials = [
  {
    icon: <FiGithub />,
    href: 'https://github.com/remilekun',
    label: 'GitHub',
  },
  {
    icon: <FiLinkedin />,
    href: 'https://linkedin.com/in/remilekun',
    label: 'LinkedIn',
  },
  {
    icon: <FiTwitter />,
    href: 'https://twitter.com/remilekun',
    label: 'Twitter / X',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <motion.div
          className="contact__content"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.span className="section-label" variants={item}>
            Let&apos;s Work Together
          </motion.span>

          <motion.h2 className="contact__heading" variants={item}>
            Got a project in mind?
          </motion.h2>

          <motion.p className="contact__subtitle" variants={item}>
            Whether you&apos;re a startup building your first MVP, an enterprise
            scaling your infrastructure, or a business owner who needs a
            trusted tech partner — I&apos;d love to hear from you.
          </motion.p>

          <motion.a
            href="mailto:hello@remilekun.dev"
            className="contact__email"
            variants={item}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <FiMail size={18} />
            hello@remilekun.dev
          </motion.a>

          <motion.div className="contact__socials" variants={item}>
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
