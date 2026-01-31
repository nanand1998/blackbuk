import { useState } from "react";
import Button from "../components/ui/Button";
import { Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [status, setStatus] = useState("idle"); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <div className="container mx-auto px-6 py-24 flex flex-col items-center">
      <div className="max-w-2xl w-full text-center space-y-4 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">Get In Touch</h1>
        <p className="text-gray-400">
          Have a project in mind? We'd love to hear from you.
        </p>
      </div>

      <div className="w-full max-w-xl bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-sm">
        {status === "success" ? (
          <div className="flex flex-col items-center justify-center py-12 space-y-4 text-center">
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center text-green-500">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold">Message Sent!</h3>
            <p className="text-gray-400">
              We'll get back to you within 24 hours.
            </p>
            <Button
              variant="outline"
              onClick={() => setStatus("idle")}
              className="mt-4"
            >
              Send Another
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">
                  Name
                </label>
                <input
                  required
                  type="text"
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">
                  Email
                </label>
                <input
                  required
                  type="email"
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">
                  Location
                </label>
                <input
                  type="text"
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="City, Country"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">
                Message
              </label>
              <textarea
                required
                rows={4}
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Tell us about your project..."
              />
            </div>
            <Button
              type="submit"
              className="w-full rounded-full"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
              {!status && <Send className="w-4 h-4 ml-2" />}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
