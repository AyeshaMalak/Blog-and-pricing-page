export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$19",
      desc: "Perfect for individuals and small projects.",
      features: [
        "5 Projects",
        "Basic Analytics",
        "Email Support",
        "Community Access"
      ]
    },
    {
      name: "Professional",
      price: "$49",
      popular: true,
      desc: "Ideal for growing startups and teams.",
      features: [
        "20 Projects",
        "Advanced Analytics",
        "Priority Support",
        "Team Collaboration"
      ]
    },
    {
      name: "Enterprise",
      price: "$99",
      desc: "Best solution for large organizations.",
      features: [
        "Unlimited Projects",
        "Full Analytics",
        "24/7 Support",
        "Dedicated Manager"
      ]
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-blue-700 text-white py-24 text-center">
        <h1 className="text-5xl font-bold mb-4">Flexible Pricing</h1>
        <p className="text-blue-100 text-lg">
          Choose a plan that fits your business needs
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-10">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`rounded-xl p-8 shadow-lg border ${
              plan.popular
                ? "border-blue-600 scale-105"
                : "border-gray-200"
            }`}
          >
            {plan.popular && (
              <span className="bg-blue-600 text-white px-3 py-1 text-sm rounded-full">
                Most Popular
              </span>
            )}

            <h3 className="text-2xl font-bold mt-4 mb-2">{plan.name}</h3>

            <p className="text-gray-500 mb-6">{plan.desc}</p>

            <p className="text-4xl font-bold text-blue-600 mb-6">
              {plan.price}
              <span className="text-lg text-gray-500"> /mo</span>
            </p>

            <ul className="space-y-3 mb-8 text-gray-600">
              {plan.features.map((f, index) => (
                <li key={index}>✔ {f}</li>
              ))}
            </ul>

            <button
              className={`w-full py-3 rounded-lg font-semibold ${
                plan.popular
                  ? "bg-blue-600 text-white"
                  : "bg-gray-900 text-white"
              }`}
            >
              Get Started
            </button>
          </div>
        ))}
      </section>
    </div>
  );
              }
