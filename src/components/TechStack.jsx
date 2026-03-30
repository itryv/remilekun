import { motion } from 'framer-motion';
import {
  SiDocker,
  SiKubernetes,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiTerraform,
  SiGithubactions,
  SiLinux,
  SiNginx,
  SiRedis,
  SiFlutter,
  SiSwift,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const techs = [
  { name: 'AWS', icon: <FaAws /> },
  { name: 'Docker', icon: <SiDocker /> },
  { name: 'Kubernetes', icon: <SiKubernetes /> },
  { name: 'React', icon: <SiReact /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Node.js', icon: <SiNodedotjs /> },
  { name: 'Python', icon: <SiPython /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'Terraform', icon: <SiTerraform /> },
  { name: 'GitHub Actions', icon: <SiGithubactions /> },
  { name: 'Linux', icon: <SiLinux /> },
  { name: 'Nginx', icon: <SiNginx /> },
  { name: 'Redis', icon: <SiRedis /> },
  { name: 'Flutter', icon: <SiFlutter /> },
  { name: 'Swift', icon: <SiSwift /> },
];

export default function TechStack() {
  // Double the array for seamless infinite scroll
  const doubled = [...techs, ...techs];

  return (
    <section className="tech-stack" id="tech-stack">
      <div className="container">
        <motion.span
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          Tech Stack
        </motion.span>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Tools I use to build and ship.
        </motion.h2>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {doubled.map((tech, i) => (
            <div className="tech-item" key={`${tech.name}-${i}`}>
              <span className="tech-item__icon">{tech.icon}</span>
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
