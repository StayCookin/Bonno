import { useState } from 'react';
import { ArrowLeft, QrCode, Download, UserPlus, Building2, Calendar, Clock } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export function GuestPortal({ onBack }) {
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

    const buildingOptions = [ 'Vegas', '478', '479', '477', '474', '475', '476', 'Barracks', 'Single Rooms'];

    const handleSubmit = (e) => {
        e.preventDefault();
        const code = `BNO${Date.now().toString().slice(-8)}`;
        setPassCode(code);
        setPassGenerated(true);
        toast.success('Digital pass generated successfully!');
    };

    const downloadPass = () => {
        toast.info('Digital pass downloaded. Present this at security.');
    };

    if (passGenerated) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
                <div className="container mx-auto px-4 py-8">
                    <div className="max-w-2xl mx-auto">
                        <Button variant="ghost" onClick={onBack} className="mb-6">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back
                        </Button>

                        <Card>
                            <CardHeader className="text-center">
                                <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                                    <QrCode className="w-10 h-10 text-green-600" />
                                </div>
                                <CardTitle>Digital Pass Generated!</CardTitle>
                                <CardDescription>
                                    Present this pass at the security checkpoint.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="bg-white border-4 border-[#800020] rounded-lg p-8">
                                    <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                                        <div className="text-center">
                                            <QrCode className="w-32 h-32 mx-auto text-[#800020]" />
                                            <p className="text-sm text-gray-500 mt-2">QR Code</p>
                                        </div>
                                    </div>
                                    <div className="text-center space-y-2">
                                        <p className="text-xs text-gray-500">Pass Code</p>
                                        <p className="text-2xl tracking-wider text-[#800020]">{passCode}</p>
                                    </div>
                                </div>

                                <div className="p-4 bg-gray-50 rounded-lg space-y-3">
                                    <h4 className="text-[#800020]">Visit Details</h4>
                                    <div className="grid grid-cols-2 gap-3 text-sm">
                                        <div>
                                            <p className="text-gray-500">Guest Name</p>
                                            <p>{guestName}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500">ID Number</p>
                                            <p>{guestIdNumber}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500">Visiting</p>
                                            <p>{residentName}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500">Building</p>
                                            <p>{building}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500">Room</p>
                                            <p>{residentRoom}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500">Date & Time</p>
                                            <p>{visitDate} at {visitTime}</p>
                                        </div>
                                        <div className="col-span-2">
                                            <p className="text-gray-500">Purpose</p>
                                            <p>{visitPurpose}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bf-[#800020]/5 border border-[#800020]/20 rounded-lg">
                                <h4 className="text-sm mb-2">Important Notice:</h4>
                                <ul className="text-xs text-gray-600 space-y-1">
                                    <li>This pass os valid for the specified date and time only.</li>
                                    <li>Visitors must present valid ID at security checkpoint.</li>
                                    <li>The resident will be notified of your arrivals.</li>
                                    <li>visitors must sign in and out at reception.</li>
                                    <li>Visitors hours: 07:00 AM  - MIDNIGHT</li>
                                </ul>
                                </div>

                                <div className="flex gap-3">
                                    <Button onClick={downloadPass} className="flex-1">
                                        <Download className="w-4 h-4 mr-2" />
                                        Download Pass
                                    </Button>
                                    <Button onClick={onBack} variant="outline" className="flex-1">
                                        Done
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto">
                    <Button variant="ghost" onClick={onBack} className="mb-6">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Dashboard
                    </Button>

                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-[#800020]/10 rounded-lg">
                                    <UserPlus className="w-6 h-6 text-[#800020]" />
                                </div>
                                <div>
                                    <CardTitle>Guest Portal - Digital Pass</CardTitle>
                                    <CardDescription>
                                        Request a visitor pass to access Bonno housing facilities
                                    </CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Guest Info */}
                <div>
                  <h3 className="mb-4 flex items-center gap-2">
                    <UserPlus className="w-5 h-5 text-[#800020]" />
                    Guest Information
                  </h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="guestName">Full Name *</Label>
                      <Input
                        id="guestName"
                        placeholder="Enter your full name"
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="guestPhone">Phone Number *</Label>
                        <Input
                          id="guestPhone"
                          type="tel"
                          placeholder="+267 71234567"
                          value={guestPhone}
                          onChange={(e) => setGuestPhone(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="guestIdNumber">ID Number *</Label>
                        <Input
                          id="guestIdNumber"
                          placeholder="ID or Passport Number"
                          value={guestIdNumber}
                          onChange={(e) => setGuestIdNumber(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Resident Info */}
                <div className="pt-4 border-t">
                  <h3 className="mb-4 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-[#800020]" />
                    Resident Information
                  </h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="residentName">Resident's Full Name *</Label>
                      <Input
                        id="residentName"
                        placeholder="Name of person you're visiting"
                        value={residentName}
                        onChange={(e) => setResidentName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="building">Building *</Label>
                        <Select value={building} onValueChange={setBuilding} required>
                          <SelectTrigger id="building">
                            <SelectValue placeholder="Select building" />
                          </SelectTrigger>
                          <SelectContent>
                            {buildingOptions.map((option) => (
                              <SelectItem key={option} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="residentRoom">Room Number *</Label>
                        <Input
                          id="residentRoom"
                          placeholder="e.g., 204"
                          value={residentRoom}
                          onChange={(e) => setResidentRoom(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visit Details */}
                <div className="pt-4 border-t">
                  <h3 className="mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[#800020]" />
                    Visit Details
                  </h3>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="visitDate">Visit Date *</Label>
                        <Input
                          id="visitDate"
                          type="date"
                          value={visitDate}
                          onChange={(e) => setVisitDate(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="visitTime">Visit Time *</Label>
                        <Input
                          id="visitTime"
                          type="time"
                          value={visitTime}
                          onChange={(e) => setVisitTime(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="visitPurpose">Purpose of Visit *</Label>
                      <Select value={visitPurpose} onValueChange={setVisitPurpose} required>
                        <SelectTrigger id="visitPurpose">
                          <SelectValue placeholder="Select purpose" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="social">Social Visit</SelectItem>
                          <SelectItem value="family">Family Visit</SelectItem>
                          <SelectItem value="study">Study/Academic</SelectItem>
                          <SelectItem value="delivery">Delivery</SelectItem>
                          <SelectItem value="maintenance">Maintenance/Repair</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Guidelines */}
                <div className="p-4 bg-[#800020]/5 border border-[#800020]/20 rounded-lg">
                  <h4 className="text-sm mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
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

                <Button type="submit" className="w-full" size="lg">
                  <QrCode className="w-4 h-4 mr-2" />
                  Generate Digital Pass
                </Button>
              </form>
            </CardContent>
          </Card>
                </div>
            </div>
        </div>
    )
}
export default GuestPortal;
