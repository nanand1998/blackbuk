import { motion } from "framer-motion";
import { ArrowRight, Code2, Cpu, Globe, Layout, Layers, ShieldCheck, Zap, Users, Smartphone, Bot } from "lucide-react";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

const Home = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const services = [
        { icon: <Globe className="w-6 h-6" />, title: "Web Development", desc: "High-performance websites built with modern frameworks like React and Next.js." },
        { icon: <Smartphone className="w-6 h-6" />, title: "App Development", desc: "Native and cross-platform mobile applications for iOS and Android using React Native." },
        { icon: <Bot className="w-6 h-6" />, title: "AI & Automation", desc: "Intelligent solutions, chatbots, and workflow automation to streamline your business." },
        { icon: <Layers className="w-6 h-6" />, title: "Cloud & DevOps", desc: "Scalable server-side architectures, automated pipelines, and secure cloud infrastructure." },
        { icon: <Layout className="w-6 h-6" />, title: "UI/UX Engineering", desc: "Pixel-perfect interfaces that prioritize user experience and conversion optimization." },
        { icon: <Code2 className="w-6 h-6" />, title: "Custom Software Solutions", desc: "Tailored digital products designed to solve your specific complex business challenges." },
    ];

    const reasons = [
        { icon: <ShieldCheck className="w-6 h-6" />, title: "Reliability", desc: "Code that works, deadlines that are met." },
        { icon: <Zap className="w-6 h-6" />, title: "Performance", desc: "We obsess over milliseconds." },
        { icon: <Users className="w-6 h-6" />, title: "Transparency", desc: "No hidden costs, constant communication." },
    ];

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-12 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none z-[1]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-black to-black z-0" />

                {/* Animated Orbs */}
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] animate-pulse delay-1000" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={staggerContainer}
                        className="max-w-4xl mx-auto space-y-8"
                    >
                        <motion.div variants={fadeIn} className="flex justify-center">
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-medium backdrop-blur-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                </span>
                                Future-Ready Digital Agency
                            </span>
                        </motion.div>

                        <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] bg-gradient-to-b from-white via-white to-gray-500 text-transparent bg-clip-text drop-shadow-sm">
                            Architects of <br /> the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500 text-glow">Digital Future</span>
                        </motion.h1>

                        <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
                            BlackBuck Technologies fuses engineering precision with futuristic design to build scalable, high-performance digital ecosystems.
                        </motion.p>

                        <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                            <Link to="/contact">
                                <Button className="w-full sm:w-auto h-12 px-8 text-base rounded-full shadow-[0_0_30px_-10px_rgba(59,130,246,0.6)] hover:shadow-[0_0_50px_-10px_rgba(59,130,246,0.8)] border border-blue-500/20">
                                    Start Your Project <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                            <Link to="/work">
                                <Button variant="secondary" className="w-full sm:w-auto h-12 px-8 text-base rounded-full border border-white/10 hover:bg-white/10">
                                    Explore Portfolio
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* About / Intro */}
            <section className="py-24 bg-white/5 border-y border-white/5">
                <div className="container mx-auto px-6 max-w-5xl text-center md:text-left md:flex md:items-center md:gap-16">
                    <div className="flex-1 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold">More Than Just Code.</h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            At BlackBuck Technologies, we don't just write functions; we solve problems. We are a team of engineers, designers, and strategists dedicated to building robust digital infrastructure. Our focus is on technical excellence, utilizing the modern web stack to deliver speed, security, and scalability.
                        </p>
                        <Link to="/about">
                            <Button variant="outline" className="mt-4">Read Our Story</Button>
                        </Link>
                    </div>
                    <div className="flex-1 mt-12 md:mt-0 relative">
                        <div className="relative z-10 grid grid-cols-2 gap-4">
                            <div className="bg-black/40 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                                <h3 className="text-4xl font-bold text-blue-500 mb-2">50+</h3>
                                <p className="text-sm text-gray-400">Projects Delivered</p>
                            </div>
                            <div className="bg-black/40 p-6 rounded-2xl border border-white/10 backdrop-blur-sm mt-8">
                                <h3 className="text-4xl font-bold text-violet-500 mb-2">98%</h3>
                                <p className="text-sm text-gray-400">Client Retention</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-24 relative" id="services">
                <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">Our Expertise</h2>
                        <p className="text-gray-400 text-lg">Comprehensive technical solutions designed for modern businesses.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className="glass-card glass-card-hover p-8 rounded-3xl group relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center text-blue-400 mb-8 group-hover:scale-110 group-hover:text-blue-300 transition-all shadow-[0_0_15px_-5px_rgba(59,130,246,0.5)]">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-200 transition-colors">{service.title}</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">{service.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-white/5 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why BlackBuck?</h2>
                            <p className="text-gray-400">We don't cut corners. Here's what sets us apart.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {reasons.map((reason, idx) => (
                                <div key={idx} className="text-center space-y-4">
                                    <div className="mx-auto w-16 h-16 rounded-full bg-violet-500/10 flex items-center justify-center text-violet-400">
                                        {reason.icon}
                                    </div>
                                    <h3 className="text-xl font-bold">{reason.title}</h3>
                                    <p className="text-gray-400 text-sm">{reason.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="max-w-3xl mx-auto space-y-8 p-12 rounded-3xl bg-gradient-to-b from-blue-900/20 to-black border border-white/10">
                        <h2 className="text-3xl md:text-4xl font-bold">Ready to Elevate Your Digital Presence?</h2>
                        <p className="text-gray-400 text-lg">
                            Let's discuss your project and how we can add value to your business.
                        </p>
                        <Link to="/contact">
                            <Button className="mx-auto h-14 px-10 text-lg">
                                Start Your Project
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
