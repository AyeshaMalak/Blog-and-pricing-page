// PricingPage.jsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  { name: "Starter", price: "$19", features: ["5 Projects", "Basic Analytics", "Email Support"] },
  { name: "Professional", price: "$49", features: ["25 Projects", "Advanced Analytics", "Priority Support"] },
  { name: "Enterprise", price: "$99", features: ["Unlimited Projects", "Full Analytics", "Dedicated Support"] }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-20 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Simple Pricing</h2>
        <p className="text-gray-600">Flexible plans for teams of all sizes</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <motion.div key={i} whileHover={{ scale: 1.03 }}>
            <Card className="rounded-2xl border shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-6">
                  {plan.price}<span className="text-lg text-gray-500"> /mo</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2"><Check className="w-4 h-4" /> {f}</li>
                  ))}
                </ul>
                <Button className="w-full">Get Started</Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Grow Your Business?</h2>
        <Button className="px-10 py-6 text-lg">Start Your Free Trial</Button>
      </section>
    </div>
  );
}
