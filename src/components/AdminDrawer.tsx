import React, { useState, useEffect } from 'react';
import { X, Search, Filter, MessageSquare, Download, CheckCircle, Clock, Archive, Settings, RefreshCw, KeyRound } from 'lucide-react';
import { Inquiry, AstrologerConfig } from '../types';

interface AdminDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  config: AstrologerConfig;
  onUpdateConfig: (newConfig: Partial<AstrologerConfig>) => void;
}

export const AdminDrawer: React.FC<AdminDrawerProps> = ({
  isOpen,
  onClose,
  config,
  onUpdateConfig
}) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [passError, setPassError] = useState(false);

  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'inquiries' | 'settings'>('inquiries');

  // Config editing state
  const [waNumberInput, setWaNumberInput] = useState(config.whatsappNumber);
  const [displayPhoneInput, setDisplayPhoneInput] = useState(config.displayPhone);
  const [emailInput, setEmailInput] = useState(config.email);
  const [hoursInput, setHoursInput] = useState(config.consultationHours);
  const [configSaved, setConfigSaved] = useState(false);

  useEffect(() => {
    if (isOpen && authenticated) {
      loadInquiries();
    }
  }, [isOpen, authenticated]);

  const loadInquiries = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/inquiries');
      if (res.ok) {
        const data = await res.json();
        setInquiries(data.inquiries || []);
      } else {
        const local = JSON.parse(localStorage.getItem('acharya_inquiries') || '[]');
        setInquiries(local);
      }
    } catch {
      const local = JSON.parse(localStorage.getItem('acharya_inquiries') || '[]');
      setInquiries(local);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === 'shastri2026' || passcode === 'admin') {
      setAuthenticated(true);
      setPassError(false);
    } else {
      setPassError(true);
    }
  };

  const handleUpdateStatus = async (id: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/inquiries/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      if (res.ok) {
        setInquiries(prev =>
          prev.map(item => (item.id === id ? { ...item, status: newStatus as any } : item))
        );
      }
    } catch (e) {
      console.error('Error updating inquiry:', e);
    }
  };

  const handleSaveConfig = async (e: React.FormEvent) => {
    e.preventDefault();
    const updated = {
      whatsappNumber: waNumberInput,
      displayPhone: displayPhoneInput,
      email: emailInput,
      consultationHours: hoursInput
    };
    onUpdateConfig(updated);
    try {
      await fetch('/api/config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updated)
      });
      setConfigSaved(true);
      setTimeout(() => setConfigSaved(false), 3000);
    } catch (e) {
      console.error('Error saving config:', e);
    }
  };

  const handleExportCSV = () => {
    const headers = ['ID', 'Date', 'Name', 'Contact Method', 'Contact Info', 'Category', 'Concern', 'Preferred Time', 'Language', 'Status', 'Notes'];
    const rows = inquiries.map(i => [
      i.id,
      i.createdAt,
      `"${i.name.replace(/"/g, '""')}"`,
      i.contactMethod,
      `"${i.contactValue}"`,
      i.category,
      `"${i.concern.replace(/"/g, '""')}"`,
      `"${i.preferredTime}"`,
      i.preferredLanguage,
      i.status,
      `"${(i.notes || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `astrology_inquiries_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredInquiries = inquiries.filter(item => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.contactValue.toLowerCase().includes(search.toLowerCase()) ||
      item.concern.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/80 backdrop-blur-md flex justify-end">
      <div className="w-full max-w-4xl h-full bg-[#0b112c] border-l border-amber-500/30 flex flex-col shadow-2xl">
        {/* Header */}
        <div className="p-5 border-b border-amber-500/20 bg-slate-950 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 font-bold">
              ॐ
            </div>
            <div>
              <h2 className="font-serif text-lg font-bold text-amber-100">
                Astrologer Sanctum Management Portal
              </h2>
              <p className="text-xs text-slate-400">
                Authorized Consultation Inquiry Review & Business Contact Settings
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {!authenticated ? (
          <div className="flex-1 flex items-center justify-center p-6">
            <form onSubmit={handleLogin} className="max-w-md w-full p-8 rounded-2xl bg-slate-900 border border-amber-500/30 space-y-5 text-center">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto">
                <KeyRound className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-xl font-bold text-amber-100">
                  Authorized Team Access
                </h3>
                <p className="text-xs text-slate-400">
                  Enter astrologer administrative passcode to review confidential inquiries.
                </p>
              </div>

              {passError && (
                <div className="p-2 rounded bg-red-950/40 border border-red-500/30 text-xs text-red-300">
                  Incorrect passcode. (Default demo pass: <code className="text-amber-300">shastri2026</code>)
                </div>
              )}

              <input
                type="password"
                autoFocus
                placeholder="Enter passcode..."
                value={passcode}
                onChange={e => setPasscode(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-amber-500/20 text-slate-100 text-sm focus:outline-none focus:border-amber-400 text-center tracking-widest"
              />

              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs transition-colors cursor-pointer"
              >
                Unlock Inquiries Drawer
              </button>
            </form>
          </div>
        ) : (
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Top Sub-Nav */}
            <div className="px-6 py-3 border-b border-amber-500/10 bg-slate-900/60 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveTab('inquiries')}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer transition-colors ${
                    activeTab === 'inquiries' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Inbound Inquiries ({inquiries.length})
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer transition-colors ${
                    activeTab === 'settings' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Business Contact Settings
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={loadInquiries}
                  className="p-1.5 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Refresh inquiries"
                >
                  <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                </button>
                <button
                  onClick={handleExportCSV}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export CSV</span>
                </button>
              </div>
            </div>

            {/* Tab: Inquiries List */}
            {activeTab === 'inquiries' && (
              <div className="flex-1 flex flex-col overflow-hidden p-6 space-y-4">
                {/* Search & Filter Toolbar */}
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <div className="relative flex-1 w-full">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      placeholder="Search inquiries by client name, number, or topic..."
                      value={search}
                      onChange={e => setSearch(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 rounded-lg bg-slate-900 border border-amber-500/20 text-slate-200 text-xs focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <Filter className="w-4 h-4 text-slate-400" />
                    <select
                      value={statusFilter}
                      onChange={e => setStatusFilter(e.target.value)}
                      className="px-3 py-2 rounded-lg bg-slate-900 border border-amber-500/20 text-slate-200 text-xs focus:outline-none"
                    >
                      <option value="all">All Statuses</option>
                      <option value="new">New (Uncontacted)</option>
                      <option value="contacted">Contacted</option>
                      <option value="completed">Completed</option>
                      <option value="archived">Archived</option>
                    </select>
                  </div>
                </div>

                {/* Table or Cards */}
                <div className="flex-1 overflow-y-auto space-y-3 pr-1">
                  {filteredInquiries.length === 0 ? (
                    <div className="p-8 text-center text-slate-500 text-xs">
                      No consultation inquiries matching current filter.
                    </div>
                  ) : (
                    filteredInquiries.map(item => {
                      const cleanContact = item.contactValue.replace(/[^0-9]/g, '');
                      const clientWaUrl = `https://wa.me/${cleanContact}?text=${encodeURIComponent(
                        `Namaste ${item.name}, this is Acharya Shastri’s consultation team following up on your ${item.category.replace(/_/g, ' ')} inquiry.`
                      )}`;

                      return (
                        <div
                          key={item.id}
                          className="p-5 rounded-xl bg-slate-900/80 border border-amber-500/15 space-y-3 hover:border-amber-400/30 transition-all"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                            <div className="space-y-0.5">
                              <div className="flex items-center gap-2">
                                <span className="font-serif font-bold text-amber-100 text-sm">
                                  {item.name}
                                </span>
                                <span className="text-[10px] px-2 py-0.5 rounded-full uppercase font-medium bg-amber-500/15 text-amber-300">
                                  {item.preferredLanguage}
                                </span>
                              </div>
                              <div className="text-xs text-slate-400">
                                Contact: <strong className="text-slate-200">{item.contactValue}</strong> via {item.contactMethod}
                              </div>
                            </div>

                            <div className="flex items-center gap-2">
                              {/* Status badge & selector */}
                              <select
                                value={item.status}
                                onChange={e => handleUpdateStatus(item.id, e.target.value)}
                                className={`text-[11px] px-2.5 py-1 rounded-md border font-medium cursor-pointer ${
                                  item.status === 'new'
                                    ? 'bg-amber-950/50 border-amber-500/40 text-amber-300'
                                    : item.status === 'contacted'
                                    ? 'bg-sky-950/50 border-sky-500/40 text-sky-300'
                                    : item.status === 'completed'
                                    ? 'bg-emerald-950/50 border-emerald-500/40 text-emerald-300'
                                    : 'bg-slate-800 border-slate-700 text-slate-400'
                                }`}
                              >
                                <option value="new">New</option>
                                <option value="contacted">Contacted</option>
                                <option value="completed">Completed</option>
                                <option value="archived">Archived</option>
                              </select>

                              {/* Direct WhatsApp Response Button */}
                              {cleanContact && (
                                <a
                                  href={clientWaUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-1.5 rounded-md bg-emerald-600 hover:bg-emerald-500 text-slate-950 text-xs transition-colors flex items-center gap-1"
                                  title="Open WhatsApp chat with client"
                                >
                                  <MessageSquare className="w-3.5 h-3.5 fill-slate-950" />
                                  <span className="hidden sm:inline font-semibold">Message Client</span>
                                </a>
                              )}
                            </div>
                          </div>

                          <div className="text-xs text-slate-300 space-y-1">
                            <div className="text-amber-400 font-medium">
                              Topic: {item.category.replace(/_/g, ' ')}
                            </div>
                            <p className="text-slate-300/90 leading-relaxed italic">
                              "{item.concern}"
                            </p>
                          </div>

                          <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                            <div>Preferred Slot: {item.preferredTime}</div>
                            <div>Received: {new Date(item.createdAt).toLocaleString()}</div>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            )}

            {/* Tab: Business Contact Settings */}
            {activeTab === 'settings' && (
              <div className="p-6 overflow-y-auto max-w-xl space-y-6">
                <div className="space-y-1">
                  <h3 className="font-serif text-lg font-bold text-amber-100">
                    Astrologer Contact & Operating Hours
                  </h3>
                  <p className="text-xs text-slate-400">
                    Update the official WhatsApp number and phone contact shown on the site.
                  </p>
                </div>

                {configSaved && (
                  <div className="p-3 rounded-lg bg-emerald-950/50 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Configuration successfully updated in the sanctum database!</span>
                  </div>
                )}

                <form onSubmit={handleSaveConfig} className="space-y-4 text-xs">
                  <div className="space-y-1.5">
                    <label className="text-slate-300 font-medium">
                      WhatsApp Business Number (with country code):
                    </label>
                    <input
                      type="text"
                      value={waNumberInput}
                      onChange={e => setWaNumberInput(e.target.value)}
                      placeholder="+919876543210"
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-amber-500/20 text-slate-100 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-300 font-medium">
                      Display Phone Number:
                    </label>
                    <input
                      type="text"
                      value={displayPhoneInput}
                      onChange={e => setDisplayPhoneInput(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-amber-500/20 text-slate-100 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-300 font-medium">
                      Contact Email:
                    </label>
                    <input
                      type="email"
                      value={emailInput}
                      onChange={e => setEmailInput(e.target.value)}
                      placeholder="acharya.shastri.jyotish@gmail.com"
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-amber-500/20 text-slate-100 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-300 font-medium">
                      Consultation Hours:
                    </label>
                    <input
                      type="text"
                      value={hoursInput}
                      onChange={e => setHoursInput(e.target.value)}
                      placeholder="Monday – Saturday: 08:30 AM – 07:30 PM IST"
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-amber-500/20 text-slate-100 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs cursor-pointer"
                    >
                      Save Configuration
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
