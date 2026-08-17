import React from 'react';
import { Landmark, Receipt, Wrench, FileCheck } from 'lucide-react';

export const productsList = [
  {
    id: 'loan',
    name: 'Argun Loan Management System',
    description: 'Manage loans, borrowers, installments and collections with complete ease.',
    icon: Landmark,
    features: [
      'Loan Tracking',
      'EMI Management',
      'Collection Reports',
      'Reminders & Alerts',
      'Detailed Analytics'
    ]
  },
  {
    id: 'billing',
    name: 'Argun Billing Software',
    description: 'Fast billing, stock management, GST invoices and business reports — all in one.',
    icon: Receipt,
    features: [
      'Fast & Easy Billing',
      'Inventory Management',
      'GST Invoices',
      'Business Reports',
      'Sales & Profit Reports'
    ]
  },
  {
    id: 'garage',
    name: 'Argun Garage Management Software',
    description: 'Complete garage & workshop management made simple and efficient.',
    icon: Wrench,
    features: [
      'Job Card Management',
      'Customer Management',
      'Parts & Inventory',
      'Service History',
      'Payment & Invoices'
    ]
  },
  {
    id: 'ca-firm',
    name: 'Argun CA Firm Management System',
    description: 'Manage clients, tasks, documents, invoices and compliance in one place.',
    icon: FileCheck,
    features: [
      'Client Management',
      'Task & Assignment',
      'Document Storage',
      'Billing & Invoicing',
      'Compliance Tracking'
    ]
  }
];

export default function Products() {
  return (
    <section id="products" className="py-20 lg:py-28 bg-white border-b border-borderGrey">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-14 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy tracking-tight">
            Our Products
          </h2>
          <p className="text-mutedGrey text-sm sm:text-base mt-2 font-normal">
            Purpose-built software applications designed to solve everyday business operations.
          </p>
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productsList.map((product) => {
            const IconComp = product.icon;

            return (
              <div
                key={product.id}
                className="bg-white rounded-lg p-6 sm:p-8 border border-borderGrey hover:border-slate-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  {/* Line Icon */}
                  <div className="mb-4 text-navy">
                    <IconComp className="w-6 h-6 stroke-[1.75]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-navy mb-2">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-charcoal text-sm leading-relaxed mb-6 font-normal">
                    {product.description}
                  </p>

                  {/* Bullet Features */}
                  <ul className="space-y-2 border-t border-slate-100 pt-4">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-mutedGrey">
                        <span className="w-1 h-1 rounded-full bg-electric shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
