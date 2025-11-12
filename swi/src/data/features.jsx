import { CreditCard, Send, Wallet, Globe, BarChart3, Shield } from "lucide-react";
export const featuresPersonal = [
  {icon:<Send className="h-6 w-6"/>, title:"Send & Request Money", text:"UPI, cards, and bank transfers with instant notifications."},
  {icon:<Wallet className="h-6 w-6"/>, title:"Digital Wallet", text:"Save cards, manage balances, and track spending."},
  {icon:<Shield className="h-6 w-6"/>, title:"Purchase Protection", text:"Dispute resolution and eligible refunds."},
];
export const featuresBusiness = [
  {icon:<CreditCard className="h-6 w-6"/>, title:"Checkout", text:"Drop-in checkout with cards, UPI, wallets, netbanking."},
  {icon:<Globe className="h-6 w-6"/>, title:"Global Payments", text:"Multi-currency support and cross-border settlements."},
  {icon:<BarChart3 className="h-6 w-6"/>, title:"Analytics", text:"Real-time dashboard, payouts, and settlement reports."},
];
