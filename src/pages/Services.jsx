import { motion } from "framer-motion";
import { Globe, Smartphone, Bot, Layers, Layout, Code2 } from "lucide-react";

const Services = () => {
    const services = [
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Web Development",
            desc: "We build high-performance, SEO-friendly websites using the latest technologies like React, Next.js, and Node.js. Our focus is on speed, accessibility, and clean code."
        },
        {
            icon: <Smartphone className="w-8 h-8" />,
            title: "App Development",
            desc: "Reach your customers on any device. We develop native iOS and Android apps as well as cross-platform solutions using React Native, ensuring a seamless user experience."
        },
        {
            icon: <Bot className="w-8 h-8" />,
            title: "AI & Automation",
            desc: "Leverage the power of Artificial Intelligence. We implement chatbots, process automation (RPA), and smart data analysis workflows to increase your operational efficiency."
        },
        {
            icon: <Layers className="w-8 h-8" />,
            title: "Cloud & DevOps",
            desc: "Secure, scalable, and cost-effective cloud infrastructure. We handle everything from AWS/Azure setup to CI/CD pipelines, ensuring your application is always available."
        },
        {
            icon: <Layout className="w-8 h-8" />,
            title: "UI/UX Engineering",
            desc: "Design that converts. Our research-driven approach creates intuitive and aesthetically pleasing interfaces that keep users engaged and guide them towards your goals."
        },
        {
            icon: <Code2 className="w-8 h-8" />,
            title: "Custom Software Solutions",
            desc: "Unique problems require unique solutions. We engineer bespoke software tailored exactly to your business processes, giving you a competitive edge."
        },
    ];

    return (
        <div className="container mx-auto px-6 py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
                <p className="text-xl text-gray-400">
                    We offer a full suite of digital services to help your business grow and innovate.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/[0.07] transition-all group"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                            {service.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                        <p className="text-gray-400 leading-relaxed">
                            {service.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Services;
