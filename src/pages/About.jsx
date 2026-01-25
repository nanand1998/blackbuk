import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="container mx-auto px-6 py-24 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-12"
      >
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Our Mission</h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            To bridge the gap between complex engineering and elegant user
            experiences. We believe that robust software is the foundation of
            modern business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 pt-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Values</h2>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">•</span>
                <span>
                  Engineering Excellence: Code that stands the test of time.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">•</span>
                <span>
                  Ownership: We take full responsibility for our deliverables.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">•</span>
                <span>Honesty: Transparent communication at every step.</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-400 leading-relaxed">
              Founded by engineers, for engineers. BlackBuck Technologies
              started as a small collective of freelance developers tired of
              "spaghetti code" and sub-par agency work. We banded together to
              create a standard of quality that we could be proud of.
            </p>
          </div>
        </div>

        <div className="pt-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Team</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-3">Nirlep Anand</h3>
              <p className="text-gray-400 leading-relaxed">
                Founder of Blackbuck Technologies with 7+ years of experience in
                business operations, strategic planning, and team leadership.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Expertise in driving organizational growth and aligning
                technology with business goals.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Focused on innovation and delivering long-term value.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Rashmi Chaudhary</h3>
              <p className="text-gray-400 leading-relaxed">
                Director at Blackbuk Technologies, providing strategic guidance,
                ensuring alignment with the company’s vision, and supporting
                governance at the executive level.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Nirbhay Anand</h3>
              <p className="text-gray-400 leading-relaxed">
                Chief Technology Officer (CTO) and Lead Software Engineer with
                5+ years of experience in building scalable web applications and
                enterprise systems.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Skilled in frontend/backend development, system architecture,
                RESTful APIs, and cloud platforms.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Known for mentoring teams and driving technical excellence.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
