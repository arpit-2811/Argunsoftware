import React, { useState } from 'react';
import { X, Calculator, Receipt, Wrench, FileCheck2, CheckCircle, ArrowRight, Printer, RefreshCw, Send } from 'lucide-react';

export default function ProductModal({ product, onClose, onRequestFullDemo }) {
  if (!product) return null;

  // State for Loan EMI Calculator
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(12);
  const [loanTenure, setLoanTenure] = useState(12);

  // EMI Math
  const monthlyRate = interestRate / 12 / 100;
  const emi = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTenure)) /
    (Math.pow(1 + monthlyRate, loanTenure) - 1)
  );
  const totalPayable = emi * loanTenure;
  const totalInterest = totalPayable - loanAmount;

  // State for Billing Software Invoice Generator
  const [customerName, setCustomerName] = useState('Rahul Kumar (Gopalganj)');
  const [selectedItem, setSelectedItem] = useState({ name: 'Computer Hardware & Spare Parts', price: 4500 });
  const [quantity, setQuantity] = useState(2);
  
  const subtotal = selectedItem.price * quantity;
  const gstRate = 0.18; // 18% GST
  const cgst = subtotal * 0.09;
  const sgst = subtotal * 0.09;
  const grandTotal = subtotal + cgst + sgst;

  // State for Garage Job Card
  const [vehicleNo, setVehicleNo] = useState('BR-28-B-7452');
  const [vehicleModel, setVehicleModel] = useState('Mahindra Scorpio N');
  const [servicePackage, setServicePackage] = useState('Full Periodic Service & Brake Overhaul');

  // State for CA Firm Task Board
  const [activeTab, setActiveTab] = useState('gst');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
      {/* Dark Overlay */}
      <div 
        className="fixed inset-0 bg-navy-950/80 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative bg-white rounded-3xl max-w-3xl w-full border border-neutralBorder shadow-2xl overflow-hidden z-10 my-8">
        
        {/* Modal Top Header */}
        <div className="bg-navy text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-2">
            <span className="bg-amber-gold text-navy font-bold text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Live Product Demo
            </span>
            <span className="text-xs text-sky-light">Argun Interactive Suite</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
            {product.name}
          </h3>
          <p className="text-slate-300 text-sm mt-1">
            {product.demoSummary}
          </p>
        </div>

        {/* Modal Interactive Content Area */}
        <div className="p-6 sm:p-8 bg-bgOffwhite space-y-6">

          {/* 1. LOAN MANAGEMENT INTERACTIVE PREVIEW */}
          {product.id === 'loan' && (
            <div className="bg-white rounded-2xl p-6 border border-neutralBorder shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-electric" />
                  <h4 className="font-bold text-navy text-base">Argun Loan & EMI Simulator</h4>
                </div>
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                  Instant Auto-Calculation
                </span>
              </div>

              {/* Sliders Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <div className="flex justify-between text-xs font-bold text-navy mb-2">
                    <span>Principal Amount</span>
                    <span className="text-electric">₹{loanAmount.toLocaleString('en-IN')}</span>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="1000000"
                    step="10000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full accent-electric cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>₹10,000</span>
                    <span>₹10 Lakhs</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-navy mb-2">
                    <span>Annual Interest Rate</span>
                    <span className="text-electric">{interestRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="6"
                    max="36"
                    step="0.5"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full accent-electric cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>6%</span>
                    <span>36%</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-navy mb-2">
                    <span>Tenure (Months)</span>
                    <span className="text-electric">{loanTenure} Mos</span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="60"
                    step="1"
                    value={loanTenure}
                    onChange={(e) => setLoanTenure(Number(e.target.value))}
                    className="w-full accent-electric cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>3 Mos</span>
                    <span>60 Mos</span>
                  </div>
                </div>
              </div>

              {/* Result Summary Cards */}
              <div className="bg-navy rounded-xl p-5 text-white grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center border-b sm:border-b-0 sm:border-r border-white/10 pb-3 sm:pb-0">
                  <div className="text-[11px] text-slate-300 uppercase tracking-wider font-medium">Monthly EMI</div>
                  <div className="text-xl sm:text-2xl font-black text-amber-gold font-display mt-1">
                    ₹{isNaN(emi) ? 0 : emi.toLocaleString('en-IN')}
                  </div>
                </div>
                <div className="text-center border-b sm:border-b-0 sm:border-r border-white/10 pb-3 sm:pb-0">
                  <div className="text-[11px] text-slate-300 uppercase tracking-wider font-medium">Total Interest</div>
                  <div className="text-lg font-bold text-sky-light mt-1">
                    ₹{isNaN(totalInterest) ? 0 : totalInterest.toLocaleString('en-IN')}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-[11px] text-slate-300 uppercase tracking-wider font-medium">Total Amount</div>
                  <div className="text-lg font-bold text-white mt-1">
                    ₹{isNaN(totalPayable) ? 0 : totalPayable.toLocaleString('en-IN')}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. BILLING SOFTWARE INTERACTIVE PREVIEW */}
          {product.id === 'billing' && (
            <div className="bg-white rounded-2xl p-6 border border-neutralBorder shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <Receipt className="w-5 h-5 text-amber-gold" />
                  <h4 className="font-bold text-navy text-base">Argun GST Invoice Builder</h4>
                </div>
                <span className="text-xs font-semibold text-sky bg-sky-light px-2.5 py-1 rounded-md border border-sky/20">
                  GST Compliant (18%)
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-navy mb-1">Customer / Shop Name</label>
                  <input 
                    type="text" 
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs text-navy font-semibold focus:outline-none focus:border-electric"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy mb-1">Select Inventory Item</label>
                  <select 
                    onChange={(e) => {
                      const opts = [
                        { name: 'Computer Hardware & Spare Parts', price: 4500 },
                        { name: 'Commercial Motor Oil (26L Drum)', price: 8200 },
                        { name: 'Retail Grocery Bulk Pack', price: 2100 }
                      ];
                      setSelectedItem(opts[e.target.value]);
                    }}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs text-navy font-semibold focus:outline-none focus:border-electric"
                  >
                    <option value="0">Computer Hardware & Spare Parts (₹4,500)</option>
                    <option value="1">Commercial Motor Oil (26L Drum) (₹8,200)</option>
                    <option value="2">Retail Grocery Bulk Pack (₹2,100)</option>
                  </select>
                </div>
              </div>

              {/* Sample Tax Invoice Document Box */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 font-mono text-xs space-y-2 text-navy">
                <div className="flex justify-between border-b border-slate-200 pb-2 font-bold">
                  <span>TAX INVOICE: #INV-2026-089</span>
                  <span className="text-emerald-600">PAID</span>
                </div>
                <div className="flex justify-between">
                  <span>Billed To: {customerName}</span>
                  <span>Date: 14 Aug 2026</span>
                </div>
                <div className="pt-2 flex justify-between font-bold text-slate-700">
                  <span>Item: {selectedItem.name}</span>
                  <span>Qty: {quantity} x ₹{selectedItem.price}</span>
                </div>
                <div className="border-t border-dashed border-slate-300 pt-2 flex justify-between text-slate-600">
                  <span>Subtotal:</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>CGST (9%) + SGST (9%):</span>
                  <span>₹{(cgst + sgst).toLocaleString('en-IN')}</span>
                </div>
                <div className="border-t border-slate-300 pt-2 flex justify-between font-extrabold text-sm text-navy">
                  <span>GRAND TOTAL (INCL. GST):</span>
                  <span className="text-electric">₹{grandTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
          )}

          {/* 3. GARAGE MANAGEMENT INTERACTIVE PREVIEW */}
          {product.id === 'garage' && (
            <div className="bg-white rounded-2xl p-6 border border-neutralBorder shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-sky" />
                  <h4 className="font-bold text-navy text-base">Digital Job Card Console</h4>
                </div>
                <span className="text-xs font-semibold text-amber-gold bg-amber-gold/10 px-2.5 py-1 rounded-md border border-amber-gold/20">
                  In Progress
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-navy mb-1">Vehicle Registration Number</label>
                  <input 
                    type="text" 
                    value={vehicleNo}
                    onChange={(e) => setVehicleNo(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs text-navy font-bold uppercase focus:outline-none focus:border-electric"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy mb-1">Vehicle Model & Make</label>
                  <input 
                    type="text" 
                    value={vehicleModel}
                    onChange={(e) => setVehicleModel(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs text-navy font-semibold focus:outline-none focus:border-electric"
                  />
                </div>
              </div>

              <div className="bg-navy rounded-xl p-4 text-white space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-mono text-amber-gold">JOB CARD #JC-9804</span>
                  <span className="bg-sky/20 text-sky-light px-2 py-0.5 rounded text-[10px] font-bold">Bay #2 Allocated</span>
                </div>
                <div className="text-sm font-bold">{vehicleNo} — {vehicleModel}</div>
                <div className="text-xs text-slate-300">Package: {servicePackage}</div>
                <div className="flex items-center gap-4 pt-2 border-t border-white/10 text-xs text-slate-200">
                  <span>Engine Diagnostics: <strong className="text-emerald-400">Passed</strong></span>
                  <span>Parts Stock: <strong className="text-amber-gold">Available</strong></span>
                </div>
              </div>
            </div>
          )}

          {/* 4. CA FIRM INTERACTIVE PREVIEW */}
          {product.id === 'ca-firm' && (
            <div className="bg-white rounded-2xl p-6 border border-neutralBorder shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <FileCheck2 className="w-5 h-5 text-emerald-600" />
                  <h4 className="font-bold text-navy text-base">Client Compliance & Filing Board</h4>
                </div>
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                  Auto Deadline Sync
                </span>
              </div>

              <div className="space-y-3">
                <div className="text-xs font-bold text-navy">Upcoming Tax & Statutory Filings (Sample Client Database):</div>
                
                <div className="space-y-2">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-bold text-navy">Gopalganj Trading Pvt Ltd</div>
                      <div className="text-slate-500">GSTR-3B Monthly Return Filing</div>
                    </div>
                    <span className="bg-amber-gold/20 text-amber-hover font-bold px-2.5 py-1 rounded text-[11px]">
                      Due: 20th Aug
                    </span>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-bold text-navy">Scholar Education Trust</div>
                      <div className="text-slate-500">Audit Document Verification</div>
                    </div>
                    <span className="bg-emerald-500/20 text-emerald-700 font-bold px-2.5 py-1 rounded text-[11px]">
                      Verified
                    </span>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-bold text-navy">Apex Auto Care Center</div>
                      <div className="text-slate-500">Income Tax Advance Payment</div>
                    </div>
                    <span className="bg-electric/20 text-electric font-bold px-2.5 py-1 rounded text-[11px]">
                      In Review
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Modal Action CTA */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500 text-center sm:text-left">
              Want a customized deployment for your company in Bihar?
            </div>
            <button
              onClick={() => {
                onClose();
                onRequestFullDemo(product.name);
              }}
              className="w-full sm:w-auto bg-electric hover:bg-electric-hover text-white font-bold text-sm py-3 px-6 rounded-xl shadow-glow-blue transition-all flex items-center justify-center gap-2"
            >
              <span>Get Complete Demo & Pricing</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
