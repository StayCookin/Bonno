import { useState } from 'react';
import { ArrowLeft, QrCode, Download, UserPlus, Building2, Calendar, Clock } from 'lucide-react';
import '../guest-styles.css';
import { useElectron } from '../hooks/useElectron';

interface GuestPortalProps {
    onBack: () => void;
}

export default function GuestPortal({ onBack: onBackToLanding }: GuestPortalProps) {
    const { isElectron, printPass } = useElectron();
    const [guestName, setGuestName] = useState('');
    const [guestPhone, setGuestPhone] = useState('');
    const [guestIdNumber, setGuestIdNumber] = useState('');
    const [residentName, setResidentName] = useState('');
    const [residentRoom, setResidentRoom] = useState('');
    const [building, setBuilding] = useState('');
    const [visitDate, setVisitDate] = useState('');
    const [visitTime, setVisitTime] = useState('');
    const [visitPurpose, setVisitPurpose] = useState('');
    const [passGenerated, setPassGenerated] = useState(false);
    const [passCode, setPassCode] = useState('');

    const buildingOptions = ['Vegas', '478', '479', '477', '474', '475', '476', 'Barracks', 'Single Rooms'];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const code = `BNO${Date.now().toString().slice(-8)}`;
        setPassCode(code);
        setPassGenerated(true);
    };

    const downloadPass = () => {
        alert('Digital pass downloaded. Present this at security.');
    };

    const resetForm = () => {
        setPassGenerated(false);
        setGuestName('');
        setGuestPhone('');
        setGuestIdNumber('');
        setResidentName('');
        setResidentRoom('');
        setBuilding('');
        setVisitDate('');
        setVisitTime('');
        setVisitPurpose('');
        setPassCode('');
    };

    if (passGenerated) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
                <div className="container mx-auto px-4 py-8">
                    <div className="max-w-2xl mx-auto">
                        <button 
                            onClick={resetForm}
                            className="mb-6 flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4"/>
                            Back
                        </button>

                        <div className="bg-white rounded-lg shadow-lg border border-gray-200">
                            <div className="p-6 text-center border-b border-gray-200">
                                <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                                    <QrCode className="w-10 h-10 text-green-600"/>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">Digital Pass Generated!</h2>
                                <p className="text-gray-600 mt-2">
                                    Present this pass at the security checkpoint.
                                </p>
                            </div>
                            <div className="p-6 space-y-6">
                                <div className="bg-white border-4 border-[#800020] rounded-lg p-8">
                                    <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                                        <div className="text-center">
                                            <QrCode className="w-32 h-32 mx-auto text-[#800020]" />
                                            <p className="text-sm text-gray-500 mt-2">QR Code</p>
                                        </div>
                                    </div>
                                    <div className="text-center space-y-2">
                                        <p className="text-xs text-gray-500 uppercase tracking-wider">Pass Code</p>
                                        <p className="text-2xl font-bold tracking-wider text-[#800020]">{passCode}</p>
                                    </div>
                                </div>

                                <div className="p-4 bg-gray-50 rounded-lg space-y-3">
                                    <h4 className="font-semibold text-[#800020]">Visit Details</h4>
                                    <div className="grid grid-cols-2 gap-3 text-sm">
                                        <div>
                                            <p className="text-gray-500 font-medium">Guest Name</p>
                                            <p className="text-gray-900">{guestName}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 font-medium">ID Number</p>
                                            <p className="text-gray-900">{guestIdNumber}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 font-medium">Visiting</p>
                                            <p className="text-gray-900">{residentName}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 font-medium">Building</p>
                                            <p className="text-gray-900">{building}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 font-medium">Room</p>
                                            <p className="text-gray-900">{residentRoom}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 font-medium">Date & Time</p>
                                            <p className="text-gray-900">{visitDate} at {visitTime}</p>
                                        </div>
                                        <div className="col-span-2">
                                            <p className="text-gray-500 font-medium">Purpose</p>
                                            <p className="text-gray-900">{visitPurpose}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-[#800020]/5 border border-[#800020]/20 rounded-lg">
                                    <h4 className="text-sm font-semibold mb-2 text-gray-900">Important Notice:</h4>
                                    <ul className="text-xs text-gray-600 space-y-1">
                                        <li>• This pass is valid for the specified date and time only.</li>
                                        <li>• Visitors must present valid ID at security checkpoint.</li>
                                        <li>• The resident will be notified of your arrival.</li>
                                        <li>• Visitors must sign in and out at reception.</li>
                                        <li>• Visitor hours: 07:00 AM - MIDNIGHT</li>
                                    </ul>
                                </div>

                                <div className="flex gap-3">
                                    <button 
                                        onClick={downloadPass}
                                        className="flex-1 bg-[#800020] text-white px-4 py-3 rounded-lg font-medium hover:bg-[#600018] transition-colors flex items-center justify-center gap-2"
                                    >
                                        <Download className="w-4 h-4"/>
                                        Download Pass
                                    </button>
                                    <button 
                                        onClick={resetForm}
                                        className="flex-1 border border-gray-300 text-gray-700 px-4 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                                    >
                                        Done
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto">
                    <button 
                        onClick={() => {
                            onBackToLanding();
                        }}
                        className="mb-6 flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4"/>
                        Back to Home
                    </button>
          
                    <div className="bg-white rounded-lg shadow-lg border border-gray-200">
                        <div className="p-6 border-b border-gray-200">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-[#800020]/10 rounded-lg">
                                    <UserPlus className="w-6 h-6 text-[#800020]" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">Guest Portal - Digital Pass</h2>
                                    <p className="text-gray-600 mt-1">
                                        Request a visitor pass to access Bonno housing facilities
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="space-y-6">
                                {/* Guest Info */}
                                <div>
                                    <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-gray-900">
                                        <UserPlus className="w-5 h-5 text-[#800020]" />
                                        Guest Information
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <label htmlFor="guestName" className="block text-sm font-medium text-gray-700">
                                                Full Name *
                                            </label>
                                            <input
                                                id="guestName"
                                                type="text"
                                                placeholder="Enter your full name"
                                                value={guestName}
                                                onChange={(e) => setGuestName(e.target.value)}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800020] focus:border-transparent outline-none transition-all"
                                            />
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label htmlFor="guestPhone" className="block text-sm font-medium text-gray-700">
                                                    Phone Number *
                                                </label>
                                               <input
                                                   id="guestPhone"
                                                   type="tel"
                                                    placeholder="Enter phone number"
                                                   value={guestPhone}
                                                   onChange={(e) => setGuestPhone(e.target.value)}
                                                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800020] focus:border-transparent outline-none transition-all"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="guestIdNumber" className="block text-sm font-medium text-gray-700">
                                                    ID Number *
                                                </label>
                                                <input
                                                    id="guestIdNumber"
                                                    type="text"
                                                    placeholder="ID or Passport Number"
                                                    value={guestIdNumber}
                                                    onChange={(e) => setGuestIdNumber(e.target.value)}
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800020] focus:border-transparent outline-none transition-all"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Resident Info */}
                                <div className="pt-4 border-t border-gray-200">
                                    <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-gray-900">
                                        <Building2 className="w-5 h-5 text-[#800020]" />
                                        Resident Information
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <label htmlFor="residentName" className="block text-sm font-medium text-gray-700">
                                                Resident's Full Name *
                                            </label>
                                            <input
                                                id="residentName"
                                                type="text"
                                                placeholder="Name of person you're visiting"
                                                value={residentName}
                                                onChange={(e) => setResidentName(e.target.value)}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800020] focus:border-transparent outline-none transition-all"
                                            />
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label htmlFor="building" className="block text-sm font-medium text-gray-700">
                                                    Building *
                                                </label>
                                                <select
                                                    id="building"
                                                    value={building}
                                                    onChange={(e) => setBuilding(e.target.value)}
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800020] focus:border-transparent outline-none transition-all bg-white"
                                                >
                                                    <option value="">Select building</option>
                                                    {buildingOptions.map((option) => (
                                                        <option key={option} value={option}>
                                                            {option}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="residentRoom" className="block text-sm font-medium text-gray-700">
                                                    Room Number *
                                                </label>
                                               <input
                                                   id="residentRoom"
                                                   type="text"
                                                    placeholder="Enter room number"
                                                   value={residentRoom}
                                                   onChange={(e) => setResidentRoom(e.target.value)}
                                                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800020] focus:border-transparent outline-none transition-all"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Visit Details */}
                                <div className="pt-4 border-t border-gray-200">
                                    <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-gray-900">
                                        <Calendar className="w-5 h-5 text-[#800020]" />
                                        Visit Details
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label htmlFor="visitDate" className="block text-sm font-medium text-gray-700">
                                                    Visit Date *
                                                </label>
                                                <input
                                                    id="visitDate"
                                                    type="date"
                                                    value={visitDate}
                                                    onChange={(e) => setVisitDate(e.target.value)}
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800020] focus:border-transparent outline-none transition-all"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="visitTime" className="block text-sm font-medium text-gray-700">
                                                    Visit Time *
                                                </label>
                                                <input
                                                    id="visitTime"
                                                    type="time"
                                                    value={visitTime}
                                                    onChange={(e) => setVisitTime(e.target.value)}
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800020] focus:border-transparent outline-none transition-all"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="visitPurpose" className="block text-sm font-medium text-gray-700">
                                                Purpose of Visit *
                                            </label>
                                            <select
                                                id="visitPurpose"
                                                value={visitPurpose}
                                                onChange={(e) => setVisitPurpose(e.target.value)}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800020] focus:border-transparent outline-none transition-all bg-white"
                                            >
                                                <option value="">Select purpose</option>
                                                <option value="social">Social Visit</option>
                                                <option value="family">Family Visit</option>
                                                <option value="study">Study/Academic</option>
                                                <option value="delivery">Delivery</option>
                                                <option value="maintenance">Maintenance/Repair</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Guidelines */}
                                <div className="p-4 bg-[#800020]/5 border border-[#800020]/20 rounded-lg">
                                    <h4 className="text-sm font-semibold mb-2 flex items-center gap-2 text-gray-900">
                                        <Clock className="w-4 h-4 text-[#800020]" />
                                        Visitor Guidelines:
                                    </h4>
                                    <ul className="text-xs text-gray-600 space-y-1">
                                        <li>• All visitors must present valid ID at security checkpoint</li>
                                        <li>• Visiting hours: 8:00 AM - 8:00 PM daily</li>
                                        <li>• The resident will be notified of your arrival</li>
                                        <li>• Overnight visitors require special permission from housing office</li>
                                        <li>• Failure to comply with visitor policies may result in denied access</li>
                                    </ul>
                                </div>

                                <button 
                                    onClick={handleSubmit}
                                    type="button"
                                    className="w-full bg-[#800020] text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-[#600018] transition-colors flex items-center justify-center gap-2 shadow-lg mt-6"
                                >
                                    <QrCode className="w-5 h-5" />
                                    Generate Digital Pass
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
