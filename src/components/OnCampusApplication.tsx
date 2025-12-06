import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  Upload, 
  CheckCircle2, 
  Download,
  AlertCircle
} from 'lucide-react';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { toast } from 'sonner';
import { Progress } from "./ui/progress";

export function OnCampusApplication({ user, property, onBack }: any) {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;
  
  // Form states
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');
  const [emergencyPhone, setEmergencyPhone] = useState('');
  const [isOVC, setIsOVC] = useState<boolean | null>(null);
  const [ovcDocument, setOvcDocument] = useState<File | null>(null);
  const [parentFullName, setParentFullName] = useState('');
  const [parentContact, setParentContact] = useState('');
  const [parentEmployed, setParentEmployed] = useState('');
  const [parentCanProvideAssistance, setParentCanProvideAssistance] = useState('');
  
  const [faculty, setFaculty] = useState('');
  const [program, setProgram] = useState('');
  const [year, setYear] = useState('');
  const [expectedGraduation, setExpectedGraduation] = useState('');
  
  const [building, setBuilding] = useState('');
  const [roomType, setRoomType] = useState('');
  const [moveInDate, setMoveInDate] = useState('');
  const [roommateName, setRoommateName] = useState('');
  
  const [hasDisability, setHasDisability] = useState(false);
  const [disabilityDetails, setDisabilityDetails] = useState('');
  const [hasMedicalNeeds, setHasMedicalNeeds] = useState(false);
  const [medicalDetails, setMedicalDetails] = useState('');
  const [dietaryRestrictions, setDietaryRestrictions] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  
  const [acceptsTerms, setAcceptsTerms] = useState(false);

  const buildingOptions = [
    { value: 'arc', label: 'ARC Building (WiFi included)', type: 'shared', wifi: true },
    { value: 'ub-village', label: 'UB Village', type: 'shared', wifi: false },
    { value: 'las-vegas', label: 'Las Vegas Hostel', type: 'shared', wifi: false },
    { value: 'bontleng', label: 'Bontleng Hostel', type: 'single', wifi: false },
  ];

  const getSelectedBuildingInfo = () => {
    return buildingOptions.find(b => b.value === building);
  };

  const steps = [
    { title: 'Personal Information', completed: phoneNumber && dateOfBirth && gender },
    { title: 'Academic Information', completed: faculty && program && year },
    { title: 'Housing Preferences', completed: building && roomType && moveInDate },
    { title: 'Special Requirements', completed: true },
    { title: 'Review & Submit', completed: acceptsTerms },
  ];

  const nextStep = () => {
    if (currentStep === 1) {
      if (!phoneNumber || !dateOfBirth || !gender || !emergencyContact || !emergencyPhone || isOVC === null) {
        toast.error('Please fill in all required fields');
        return;
      }
      
      if (isOVC === true && !ovcDocument) {
        toast.error('Please upload OVC supporting document');
        return;
      }
      
      if (isOVC === false && (!parentFullName || !parentContact || !parentEmployed || !parentCanProvideAssistance)) {
        toast.error('Please fill in all parent/guardian information');
        return;
      }
    }
    
    if (currentStep === 2 && (!faculty || !program || !year || !expectedGraduation)) {
      toast.error('Please fill in all academic information');
      return;
    }
    
    if (currentStep === 3 && (!building || !roomType || !moveInDate)) {
      toast.error('Please fill in all housing preferences');
      return;
    }
    
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error('File size must be less than 5MB');
        return;
      }
      setOvcDocument(file);
      toast.success('Document uploaded successfully');
    }
  };

  const downloadTerms = () => {
    const terms = `
BONNO STUDENT HOUSING - TERMS AND CONDITIONS

1. HOUSING RULES
- Adhere to all university housing policies
- Respect quiet hours (10 PM - 7 AM weekdays)
- Register all visitors at reception
- Maintain cleanliness in shared spaces

2. PROHIBITED ITEMS & ACTIVITIES
- No hot plates, electric kettles, or space heaters
- No illegal substances or alcohol
- No unauthorized commercial activities
- No pets allowed

3. PAYMENTS
- Rent due on the 1st of each month
- Late fees apply after 5-day grace period
- Damages will be deducted from deposit

4. TERMINATION
- 30-day notice required for early termination
- Subject to termination fees as per agreement
`;

    const blob = new Blob([terms], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'bonno-housing-terms.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!acceptsTerms) {
      toast.error('Please accept the terms and conditions');
      return;
    }
    
    toast.success('Application submitted successfully!');
    
    // Handle form submission here
    console.log('Application data:', {
      personal: { phoneNumber, dateOfBirth, gender, emergencyContact, emergencyPhone, isOVC, parentFullName, parentContact, parentEmployed, parentCanProvideAssistance },
      academic: { faculty, program, year, expectedGraduation },
      housing: { building, roomType, moveInDate, roommateName },
      special: { hasDisability, disabilityDetails, hasMedicalNeeds, medicalDetails, dietaryRestrictions, specialRequests },
      acceptsTerms
    });
    
    // Redirect or show success message
    setTimeout(() => {
      onBack();
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <button onClick={onBack} className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <Progress value={(currentStep / totalSteps) * 100} className="h-2" />
          <div className="flex justify-between mt-4">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index < currentStep - 1 ? 'bg-green-600 text-white' :
                  index === currentStep - 1 ? 'bg-[#800020] text-white' :
                  'bg-gray-200 text-gray-500'
                }`}>
                  {index < currentStep - 1 ? <CheckCircle2 className="w-5 h-5" /> : index + 1}
                </div>
                <span className="text-xs mt-1 text-center hidden md:block">{step.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>On-Campus Housing Application</CardTitle>
              <CardDescription>
                Step {currentStep} of {totalSteps}: {steps[currentStep - 1].title}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                  {/* Step 1: Personal Information */}
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="mb-4">Personal Information</h3>
                        
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                              id="name"
                              value={user.name}
                              disabled
                              className="bg-gray-50"
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="studentId">Student ID *</Label>
                            <Input
                              id="studentId"
                              value={user.studentId}
                              disabled
                              className="bg-gray-50"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div className="space-y-2">
                            <Label htmlFor="phoneNumber">Phone Number *</Label>
                            <Input
                              id="phoneNumber"
                              type="tel"
                              placeholder="+267 71234567"
                              value={phoneNumber}
                              onChange={(e) => setPhoneNumber(e.target.value)}
                              required
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                            <Input
                              id="dateOfBirth"
                              type="date"
                              value={dateOfBirth}
                              onChange={(e) => setDateOfBirth(e.target.value)}
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2 mb-4">
                          <Label htmlFor="gender">Gender *</Label>
                          <Select value={gender} onValueChange={setGender} required>
                            <SelectTrigger id="gender">
                              <SelectValue placeholder="Select gender" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="male">Male</SelectItem>
                              <SelectItem value="female">Female</SelectItem>
                              <SelectItem value="non-binary">Non-binary</SelectItem>
                              <SelectItem value="prefer-not-say">Prefer not to say</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                          <div className="space-y-2">
                            <Label htmlFor="emergencyContact">Emergency Contact Name *</Label>
                            <Input
                              id="emergencyContact"
                              placeholder="Parent/Guardian name"
                              value={emergencyContact}
                              onChange={(e) => setEmergencyContact(e.target.value)}
                              required
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="emergencyPhone">Emergency Contact Phone *</Label>
                            <Input
                              id="emergencyPhone"
                              type="tel"
                              placeholder="+267 71234567"
                              value={emergencyPhone}
                              onChange={(e) => setEmergencyPhone(e.target.value)}
                              required
                            />
                          </div>
                        </div>

                        {/* OVC Status */}
                        <div className="p-4 border-2 border-[#800020]/20 rounded-lg bg-[#800020]/5 mb-4">
                          <Label className="mb-3 block">Are you an Orphan or Vulnerable Child (OVC)? *</Label>
                          <RadioGroup 
                            value={isOVC === null ? '' : isOVC.toString()} 
                            onValueChange={(value) => setIsOVC(value === 'true')}
                            className="space-y-2"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="true" id="ovc-yes" />
                              <Label htmlFor="ovc-yes" className="cursor-pointer">Yes, I am OVC</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="false" id="ovc-no" />
                              <Label htmlFor="ovc-no" className="cursor-pointer">No, I am not OVC</Label>
                            </div>
                          </RadioGroup>
                          {/* OVC Document Upload */}
                          {isOVC === true && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              className="mt-4 space-y-2"
                            >
                              <Label htmlFor="ovcDocument">Upload OVC Supporting Document *</Label>
                              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#800020] transition-colors">
                                <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                                <Input
                                  id="ovcDocument"
                                  type="file"
                                  accept=".pdf,.jpg,.jpeg,.png"
                                  onChange={handleFileUpload}
                                  className="hidden"
                                />
                                <Label htmlFor="ovcDocument" className="cursor-pointer">
                                  <span className="text-[#800020]">Click to upload</span> or drag and drop
                                  <p className="text-xs text-gray-500 mt-1">PDF, JPG, PNG (max 5MB)</p>
                                </Label>
                                {ovcDocument && (
                                  <p className="text-sm text-green-600 mt-2">✓ {ovcDocument.name}</p>
                                )}
                              </div>
                            </motion.div>
                          )}

                          {/* Parent Information */}
                          {isOVC === false && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              className="mt-4 space-y-4"
                            >
                              <h4 className="text-sm">Parent/Guardian Information</h4>
                              
                              <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor="parentFullName">Parent/Guardian Full Name *</Label>
                                  <Input
                                    id="parentFullName"
                                    placeholder="Full name"
                                    value={parentFullName}
                                    onChange={(e) => setParentFullName(e.target.value)}
                                    required
                                  />
                                </div>
                                
                                <div className="space-y-2">
                                  <Label htmlFor="parentContact">Parent/Guardian Contact *</Label>
                                  <Input
                                    id="parentContact"
                                    type="tel"
                                    placeholder="+267 71234567"
                                    value={parentContact}
                                    onChange={(e) => setParentContact(e.target.value)}
                                    required
                                  />
                                </div>
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="parentEmployed">Is your parent/guardian currently employed? *</Label>
                                <Select value={parentEmployed} onValueChange={setParentEmployed} required>
                                  <SelectTrigger id="parentEmployed">
                                    <SelectValue placeholder="Select option" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="yes-fulltime">Yes - Full-time employment</SelectItem>
                                    <SelectItem value="yes-parttime">Yes - Part-time employment</SelectItem>
                                    <SelectItem value="self-employed">Self-employed</SelectItem>
                                    <SelectItem value="no">No - Not employed</SelectItem>
                                    <SelectItem value="retired">Retired</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="parentCanProvideAssistance">Can your parent/guardian provide financial assistance? *</Label>
                                <Select value={parentCanProvideAssistance} onValueChange={setParentCanProvideAssistance} required>
                                  <SelectTrigger id="parentCanProvideAssistance">
                                    <SelectValue placeholder="Select option" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="yes-full">Yes - Can provide full assistance</SelectItem>
                                    <SelectItem value="yes-partial">Yes - Can provide partial assistance</SelectItem>
                                    <SelectItem value="limited">Limited - Financial constraints</SelectItem>
                                    <SelectItem value="no">No - Unable to provide assistance</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                  {/* Step 2: Academic Information */}
                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="mb-4">Academic Information</h3>
                        
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div className="space-y-2">
                            <Label htmlFor="faculty">Faculty *</Label>
                            <Select value={faculty} onValueChange={setFaculty} required>
                              <SelectTrigger id="faculty">
                                <SelectValue placeholder="Select faculty" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="engineering">Engineering & Technology</SelectItem>
                                <SelectItem value="business">Business & Economics</SelectItem>
                                <SelectItem value="arts">Arts & Humanities</SelectItem>
                                <SelectItem value="science">Science</SelectItem>
                                <SelectItem value="medicine">Health & Medicine</SelectItem>
                                <SelectItem value="law">Law</SelectItem>
                                <SelectItem value="education">Education</SelectItem>
                                <SelectItem value="social">Social Sciences</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="program">Program of Study *</Label>
                            <Input
                              id="program"
                              placeholder="e.g., Computer Science"
                              value={program}
                              onChange={(e) => setProgram(e.target.value)}
                              required
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="year">Year of Study *</Label>
                            <Select value={year} onValueChange={setYear} required>
                              <SelectTrigger id="year">
                                <SelectValue placeholder="Select year" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1">First Year</SelectItem>
                                <SelectItem value="2">Second Year</SelectItem>
                                <SelectItem value="3">Third Year</SelectItem>
                                <SelectItem value="4">Fourth Year</SelectItem>
                                <SelectItem value="graduate">Graduate Student</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="expectedGraduation">Expected Graduation *</Label>
                            <Input
                              id="expectedGraduation"
                              type="month"
                              value={expectedGraduation}
                              onChange={(e) => setExpectedGraduation(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  {/* Step 3: Housing Preferences */}
                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="mb-4">Housing Preferences</h3>
                        
                        <div className="space-y-2 mb-4">
                          <Label htmlFor="building">Preferred Building *</Label>
                          <Select value={building} onValueChange={setBuilding} required>
                            <SelectTrigger id="building">
                              <SelectValue placeholder="Select building" />
                            </SelectTrigger>
                            <SelectContent>
                              {buildingOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        {building && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="p-4 bg-[#800020]/5 rounded-lg mb-4"
                          >
                            <h4 className="mb-3">Building Information</h4>
                            <div className="space-y-2 text-sm">
                              <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#800020]" />
                                <span>
                                  <strong>Room Type:</strong> {getSelectedBuildingInfo()?.type === 'shared' ? 'Shared (2 people)' : 'Single Room'}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#800020]" />
                                <span>
                                  <strong>WiFi:</strong> {getSelectedBuildingInfo()?.wifi ? 'Available (4mbps)' : 'Not available'}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#800020]" />
                                <span><strong>Amenities:</strong> Shared toilets & showers, Study table & chair, Bed with mattress, Closet</span>
                              </div>
                            </div>
                          </motion.div>
                        )}

                        <div className="space-y-3 mb-4">
                          <Label>Room Type Preference *</Label>
                          <RadioGroup value={roomType} onValueChange={setRoomType} required>
                            <div className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                              <RadioGroupItem value="shared" id="shared" className="mt-1" />
                              <Label htmlFor="shared" className="cursor-pointer flex-1">
                                <div className="space-y-1">
                                  <div>Shared Room (2 people)</div>
                                  <div className="text-sm text-gray-600">
                                    Room shared with one roommate, includes all standard amenities
                                  </div>
                                </div>
                              </Label>
                            </div>
                            <div className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                              <RadioGroupItem value="single" id="single" className="mt-1" />
                              <Label htmlFor="single" className="cursor-pointer flex-1">
                                <div className="space-y-1">
                                  <div>Single Room</div>
                                  <div className="text-sm text-gray-600">
                                    Private room, includes all standard amenities
                                  </div>
                                </div>
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div className="space-y-2">
                            <Label htmlFor="moveInDate">Preferred Move-in Date *</Label>
                            <Input
                              id="moveInDate"
                              type="date"
                              value={moveInDate}
                              onChange={(e) => setMoveInDate(e.target.value)}
                              required
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="roommateName">Roommate Request (Optional)</Label>
                            <Input
                              id="roommateName"
                              placeholder="Enter student ID if known"
                              value={roommateName}
                              onChange={(e) => setRoommateName(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  {/* Step 4: Special Requirements */}
                  {currentStep === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="mb-4">Special Requirements & Accommodations</h3>
                        
                        <div className="space-y-4 mb-4">
                          <div className="p-4 border rounded-lg">
                            <div className="flex items-center space-x-2 mb-3">
                              <Checkbox
                                id="disability"
                                checked={hasDisability}
                                onCheckedChange={(checked) => setHasDisability(checked as boolean)}
                              />
                              <Label htmlFor="disability" className="cursor-pointer">
                                I require accessibility accommodations
                              </Label>
                            </div>
                            
                            {hasDisability && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                className="space-y-2"
                              >
                                <Label htmlFor="disabilityDetails">Please describe your accessibility needs *</Label>
                                <Textarea
                                  id="disabilityDetails"
                                  placeholder="e.g., wheelchair accessible, ground floor, visual/hearing accommodations..."
                                  value={disabilityDetails}
                                  onChange={(e) => setDisabilityDetails(e.target.value)}
                                  rows={3}
                                />
                              </motion.div>
                            )}
                          </div>

                          <div className="p-4 border rounded-lg">
                            <div className="flex items-center space-x-2 mb-3">
                              <Checkbox
                                id="medical"
                                checked={hasMedicalNeeds}
                                onCheckedChange={(checked) => setHasMedicalNeeds(checked as boolean)}
                              />
                              <Label htmlFor="medical" className="cursor-pointer">
                                I have special medical needs
                              </Label>
                            </div>
                            
                            {hasMedicalNeeds && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                className="space-y-2"
                              >
                                <Label htmlFor="medicalDetails">Please describe your medical needs *</Label>
                                <Textarea
                                  id="medicalDetails"
                                  placeholder="e.g., refrigeration for medication, allergy considerations..."
                                  value={medicalDetails}
                                  onChange={(e) => setMedicalDetails(e.target.value)}
                                  rows={3}
                                />
                              </motion.div>
                            )}
                          </div>
                        </div>

                        <div className="space-y-2 mb-4">
                          <Label htmlFor="dietaryRestrictions">Dietary Restrictions or Preferences (Optional)</Label>
                          <Input
                            id="dietaryRestrictions"
                            placeholder="e.g., vegetarian, vegan, halal, kosher, allergies..."
                            value={dietaryRestrictions}
                            onChange={(e) => setDietaryRestrictions(e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="specialRequests">Additional Comments or Special Requests (Optional)</Label>
                          <Textarea
                            id="specialRequests"
                            placeholder="Any other information you'd like us to know..."
                            value={specialRequests}
                            onChange={(e) => setSpecialRequests(e.target.value)}
                            rows={4}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                  {/* Step 5: Review & Submit */}
                  {currentStep === 5 && (
                    <motion.div
                      key="step5"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="mb-4">Review Your Application</h3>
                        
                        <div className="space-y-4">
                          {/* Personal Information Review */}
                          <div className="p-4 bg-gray-50 rounded-lg">
                            <h4 className="mb-3 text-[#800020]">Personal Information</h4>
                            <div className="grid md:grid-cols-2 gap-3 text-sm">
                              <div><strong>Name:</strong> {user.name}</div>
                              <div><strong>Student ID:</strong> {user.studentId}</div>
                              <div><strong>Phone:</strong> {phoneNumber}</div>
                              <div><strong>Date of Birth:</strong> {dateOfBirth}</div>
                              <div><strong>Gender:</strong> {gender}</div>
                              <div className="md:col-span-2"><strong>Emergency Contact:</strong> {emergencyContact} ({emergencyPhone})</div>
                              <div className="md:col-span-2"><strong>OVC Status:</strong> {isOVC ? 'Yes' : 'No'}</div>
                              {!isOVC && (
                                <>
                                  <div className="md:col-span-2"><strong>Parent/Guardian:</strong> {parentFullName} ({parentContact})</div>
                                  <div className="md:col-span-2"><strong>Parent Employment:</strong> {parentEmployed}</div>
                                  <div className="md:col-span-2"><strong>Financial Assistance:</strong> {parentCanProvideAssistance}</div>
                                </>
                              )}
                            </div>
                          </div>

                          {/* Academic Information Review */}
                          <div className="p-4 bg-gray-50 rounded-lg">
                            <h4 className="mb-3 text-[#800020]">Academic Information</h4>
                            <div className="grid md:grid-cols-2 gap-3 text-sm">
                              <div><strong>Faculty:</strong> {faculty}</div>
                              <div><strong>Program:</strong> {program}</div>
                              <div><strong>Year:</strong> {year}</div>
                              <div><strong>Expected Graduation:</strong> {expectedGraduation}</div>
                            </div>
                          </div>

                          {/* Housing Preferences Review */}
                          <div className="p-4 bg-gray-50 rounded-lg">
                            <h4 className="mb-3 text-[#800020]">Housing Preferences</h4>
                            <div className="grid md:grid-cols-2 gap-3 text-sm">
                              <div><strong>Building:</strong> {buildingOptions.find(b => b.value === building)?.label}</div>
                              <div><strong>Room Type:</strong> {roomType === 'shared' ? 'Shared (2 people)' : 'Single Room'}</div>
                              <div><strong>Move-in Date:</strong> {moveInDate}</div>
                              {roommateName && <div className="md:col-span-2"><strong>Roommate Request:</strong> {roommateName}</div>}
                            </div>
                          </div>

                          {/* Special Requirements Review */}
                          {(hasDisability || hasMedicalNeeds || dietaryRestrictions || specialRequests) && (
                            <div className="p-4 bg-gray-50 rounded-lg">
                              <h4 className="mb-3 text-[#800020]">Special Requirements</h4>
                              <div className="space-y-2 text-sm">
                                {hasDisability && <div><strong>Accessibility Needs:</strong> {disabilityDetails}</div>}
                                {hasMedicalNeeds && <div><strong>Medical Needs:</strong> {medicalDetails}</div>}
                                {dietaryRestrictions && <div><strong>Dietary Restrictions:</strong> {dietaryRestrictions}</div>}
                                {specialRequests && <div><strong>Additional Comments:</strong> {specialRequests}</div>}
                              </div>
                            </div>
                          )}

                          {/* Terms and Conditions */}
                          <div className="p-4 border-2 border-[#800020]/30 rounded-lg bg-[#800020]/5">
                            <div className="mb-3 flex items-center justify-between">
                              <h4 className="text-[#800020]">Terms and Conditions</h4>
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={downloadTerms}
                                className="flex items-center gap-2"
                              >
                                <Download className="w-4 h-4" />
                                Download PDF
                              </Button>
                            </div>
                            <div className="text-sm text-gray-700 mb-4 p-3 bg-white rounded border max-h-40 overflow-y-auto">
                              <p className="mb-2"><strong>Bonno Housing Rules & Regulations:</strong></p>
                              <ul className="list-disc list-inside space-y-1">
                                <li>Students must adhere to all university housing policies</li>
                                <li>Allowed appliances: Mini-fridge, laptop, phone chargers, desk lamps</li>
                                <li>Prohibited appliances: Hot plates, electric kettles, space heaters</li>
                                <li>No selling of goods or services unless officially registered on Bonno platform</li>
                                <li>Absolutely no selling of drugs or alcohol on premises</li>
                                <li>Quiet hours: 10 PM - 7 AM on weekdays</li>
                                <li>Visitors must register at reception and obtain digital pass</li>
                                <li>Room inspections may be conducted for maintenance and safety</li>
                                <li>Damages to property will be charged to the resident</li>
                                <li>Respect for all residents and staff is mandatory</li>
                              </ul>
                            </div>
                            <div className="flex items-start space-x-3">
                              <Checkbox
                                id="terms"
                                checked={acceptsTerms}
                                onCheckedChange={(checked) => setAcceptsTerms(checked as boolean)}
                                required
                              />
                              <Label htmlFor="terms" className="cursor-pointer text-sm">
                                <strong>I agree to the terms and conditions</strong> of Bonno housing, including 
                                all rules and regulations, community standards, and residence hall policies. 
                                I understand that this application does not guarantee housing placement and that 
                                all information provided is accurate and complete.
                              </Label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="flex gap-4 mt-8 pt-6 border-t">
                  {currentStep > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={prevStep}
                      className="flex-1"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Previous
                    </Button>
                  )}
                  
                  {currentStep === 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={onBack}
                      className="flex-1"
                    >
                      Cancel
                    </Button>
                  )}
                  
                  {currentStep < totalSteps ? (
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="flex-1"
                    >
                      Next
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="flex-1 bg-green-600 hover:bg-green-700"
                    >
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      Submit Application
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
