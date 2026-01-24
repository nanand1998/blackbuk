import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="container mx-auto px-6 py-24 max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold">Our Mission</h1>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        To bridge the gap between complex engineering and elegant user experiences. We believe that robust software is the foundation of modern business.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 pt-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Values</h2>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <span className="text-blue-500 font-bold">•</span>
                                <span>Engineering Excellence: Code that stands the test of time.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-500 font-bold">•</span>
                                <span>Ownership: We take full responsibility for our deliverables.</span>
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
                            Founded by engineers, for engineers. BlackBuck Technologies started as a small collective of freelance developers tired of "spaghetti code" and sub-par agency work. We banded together to create a standard of quality that we could be proud of.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
