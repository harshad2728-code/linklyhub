"use client";

import React from "react";

const ComparisonTable = () => {
  const rows = [
    ["Target Users", "Micro-businesses, small sellers, creators", "Small to large businesses, online retailers", "Digital creators, artists, influencers", "Sellers wanting Amazon marketplace access"],
    ["Ease of Use", "Very simple, mobile-first, no tech skills", "Moderate complexity, scalable", "Very simple, easy setup", "Complex, extensive seller tools"],
    ["Storefront Setup", "Instant store from phone or web", "Fully customizable websites", "Simple product pages linked from social bio", "Product listing on Amazon"],
    ["Product Types", "Physical + digital, crafts, local goods", "Physical, digital, subscriptions", "Mainly digital products", "Mainly physical products"],
    ["Payments + Logistics", "Integrated UPI, Paytm, Stripe; delivery partners", "Multiple gateways + fulfillment solutions", "Integrated payments, direct to seller", "Fulfillment by Amazon or seller-managed"],
    ["Sales Channels", "Social media integration + marketplace", "Multi-channel (web, POS, social, marketplaces)", "Social media and direct links", "Amazon marketplace access"],
    ["Marketing Tools", "Referral programs, simple ads", "Full suite: SEO, ads, email marketing", "Basic analytics, email collection", "Amazon ads and promotions"],
    ["Scalability", "Micro to small business scale", "Scales to enterprise", "Limited to small scale digital selling", "Can scale large via Amazon’s infrastructure"],
    ["Pricing Model", "Freemium + transaction fees + premium plans", "Monthly + transaction fees", "Free + fees on transactions", "Fees + commission on sales"],
    ["Customer Relationship Control", "Direct seller-to-customer", "Full control with branded store", "Limited relationship, link based", "Some control, Amazon acts as marketplace"],
    ["Unique Strength", "Ease for local/small sellers, no tech required", "Feature-rich, highly extensible", "Very simple for digital creators", "Access to huge audience on Amazon"],
  ];

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-6xl font-extrabold text-center mb-3">
          Why Choose <span className="text-purple-400">LinklyHub?</span>
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Compare LinklyHub with other platforms side by side
        </p>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl shadow-2xl border border-gray-800">
          <table className="min-w-full text-left text-sm font-medium">
            <thead className="bg-gradient-to-r from-purple-600 to-pink-500">
              <tr>
                <th className="px-6 py-4 text-white font-semibold whitespace-nowrap">
                  Feature / Aspect
                </th>
                <th className="px-6 py-4 text-white font-semibold bg-black/20">
                  LinklyHub
                </th>
                <th className="px-6 py-4 text-white font-semibold">Shopify</th>
                <th className="px-6 py-4 text-white font-semibold">Gumroad</th>
                <th className="px-6 py-4 text-white font-semibold">Amazon Seller</th>
              </tr>
            </thead>

            <tbody>
              {rows.map(([feature, ...values], idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? "bg-gray-900/60" : "bg-gray-800/50"}
                >
                  <th className="px-6 py-4 border-r border-gray-700 font-semibold text-gray-200 whitespace-nowrap">
                    {feature}
                  </th>
                  {values.map((val, i) => (
                    <td
                      key={i}
                      className={`px-6 py-4 border-r border-gray-700 ${
                        i === 0 ? "text-white font-semibold bg-purple-900/40" : "text-gray-300"
                      }`}
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Matter Under the Table */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">
            LinklyHub is built for <span className="text-purple-400">you</span>
          </h3>
          <p className="text-gray-400 mb-6">
            Unlike Shopify, Gumroad, or Amazon, LinklyHub is tailored for{" "}
            <span className="text-white font-semibold">micro-businesses, solo entrepreneurs, and creators</span>.  
            We make selling online effortless — from setup to payments, logistics, and growth.
          </p>
        
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
