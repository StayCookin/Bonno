import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, User, GraduationCap, Home, FileText, Check, CheckCircle2, Upload, Download } from 'lucide-react';
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { Progress } from "./ui/progress";
import { toast } from 'sonner';

interface OnCampusApplicationProps {
  onBack: () => void;
  user: {
    name: string;
    email: string;
    studentId?: string;
  };
}

export function OnCampusApplication({ onBack, user }: OnCampusApplicationProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  
  // Form state - Step 1: Personal Information
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
  
  // Form state - Step 2: Academic Information
  const [faculty, setFaculty] = useState('');
  const [program, setProgram] = useState('');
  const [year, setYear] = useState('');
  const [expectedGraduation, setExpectedGraduation] = useState('');
  
  // Form state - Step 3: Housing Preferences
  const [building, setBuilding] = useState('');
  const [roomType, setRoomType] = useState('');
  const [moveInDate, setMoveInDate] = useState('');
  const [roommateName, setRoommateName] = useState('');
  
  // Form state - Step 4: Special Requirements
  const [hasDisability, setHasDisability] = useState(false);
  const [disabilityDetails, setDisabilityDetails] = useState('');
  const [hasMedicalNeeds, setHasMedicalNeeds] = useState(false);
  const [medicalDetails, setMedicalDetails] = useState('');
  const [dietaryRestrictions, setDietaryRestrictions] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  
  // Form state - Step 5: Review & Submit
  const [acceptsTerms, setAcceptsTerms] = useState(false);

  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  const steps = [
    { number: 1, title: 'Personal Info', icon: User },
    { number: 2, title: 'Academic Info', icon: GraduationCap },
    { number: 3, title: 'Housing Preferences', icon: Home },
    { number: 4, title: 'Special Requirements', icon: FileText },
    { number: 5, title: 'Review & Submit', icon: CheckCircle2 },
  ];

  const buildingOptions = [
    { value: 'block-a', label: 'Block A - Standard Shared (4 people/room)' },
    { value: 'block-b', label: 'Block B - Standard Shared (2 people/room)' },
    { value: 'block-c', label: 'Block C - Premium Shared (2 people/room)' },
    { value: 'block-d', label: 'Block D - Single Room' },
    { value: 'block-e', label: 'Block E - Studio Apartment' },
  ];

  const getSelectedBuildingInfo = () => {
    const selected = buildingOptions.find(opt => opt.value === building);
    if (!selected) return null;
    
    return {
      type: selected.value.includes('shared') ? 'shared' : 'single',
      wifi: ['block-c', 'block-d', 'block-e'].includes(selected.value)
    };
  };

  const nextStep = () => {
    // Validate current step before proceeding
    if (currentStep === 1) {
      if (!phoneNumber || !dateOfBirth || !gender || !emergencyContact || !emergencyPhone) {
        toast.error('Please fill in all required fields');
        return;
      }
      if (isOVC === null) {
        toast.error('Please indicate your OVC status');
        return;
      }
      if (isOVC && !ovcDocument) {
        toast.error('Please upload your OVC supporting document');
        return;
      }
      if (!isOVC && (!parentFullName || !parentContact || !parentEmployed || !parentCanProvideAssistance)) {
        toast.error('Please provide parent/guardian information');
        return;
      }
    }
    
    if (currentStep === 2) {
      if (!faculty || !program || !year || !expectedGraduation) {
        toast.error('Please fill in all required fields');
        return;
      }
    }
    
    if (currentStep === 3) {
      if (!building || !roomType || !moveInDate) {
        toast.error('Please fill in all required fields');
        return;
      }
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
    // Create a blob with the terms text
    const termsText = `BONNO HOUSING TERMS AND CONDITIONS

Effective Date: \${new Date().toLocaleDateString()}

RULES & REGULATIONS:

1. GENERAL CONDUCT
   - Students must adhere to all university housing policies
   - Respect for all residents and staff is mandatory
   - Quiet hours: 10 PM - 7 AM on weekdays
   
2. ALLOWED APPLIANCES
   - Mini-fridge (maximum 3.5 cubic feet)
   - Laptop and phone chargers
   - Desk lamps
   - Personal care appliances (hair dryers, electric razors)
   
3. PROHIBITED ITEMS
   - Hot plates
   - Electric kettles
   - Space heaters
   - Candles and incense
   - Weapons of any kind
   - Illegal substances
   
4. COMMERCIAL ACTIVITIES
   - No selling of goods or services unless officially registered on Bonno platform
   - Absolutely no selling of drugs or alcohol on premises
   - Violation will result in immediate eviction
   
5. VISITORS
   - Visitors must register at reception
   - Digital pass required for all visitors
   - Overnight guests limited to 2 nights per month
   
6. MAINTENANCE & DAMAGES
   - Room inspections may be conducted for maintenance and safety
   - Damages to property will be charged to the resident
   - Report maintenance issues immediately
   
7. PAYMENT
   - Rent due on the 1st of each month
   - Late fees apply after 5-day grace period
   - Security deposit refundable subject to room condition
   
8. TERMINATION
   - 30-day notice required for early termination
   - Violation of rules may result in immediate eviction
   - No refunds for early termination

By submitting this application, you acknowledge that you have read, understood, and agree to comply with all terms and conditions.`;
    
    const blob = new Blob([termsText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Bonno_Housing_Terms.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast.success('Terms and conditions downloaded');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!acceptsTerms) {
      toast.error('Please accept the terms and conditions');
      return;
    }

    try {
      // Here you would submit the application to your backend
      // For now, we'll simulate a successful submission
      toast.loading('Submitting your application...');
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.dismiss();
      toast.success('Application submitted successfully!');
      setApplicationSubmitted(true);
    } catch (error) {
      toast.error('Failed to submit application. Please try again.');
    }
  };

  // Success state
  if (applicationSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full"
        >
          <Card className="text-center">
            <CardContent className="pt-12 pb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Check className="w-10 h-10 text-green-600" />
              </motion.div>
              
              <h2 className="text-2xl font-bold mb-2">Application Submitted!</h2>
              <p className="text-gray-600 mb-6">
                Your on-campus housing application has been received. You will receive an email confirmation shortly.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
                <h3 className="font-semibold mb-2">What happens next?</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#800020] mt-1.5 mr-2 flex-shrink-0" />
                    <span>Your application will be reviewed within 3-5 business days</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#800020] mt-1.5 mr-2 flex-shrink-0" />
                    <span>You'll receive an email with the decision</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#800020] mt-1.5 mr-2 flex-shrink-0" />
                    <span>If approved, you'll get room assignment details</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#800020] mt-1.5 mr-2 flex-shrink-0" />
                    <span>Payment instructions will be sent via email</span>
                  </li>
                </ul>
              </div>
              
              <Button
                onClick={onBack}
                className="w-full bg-[#800020] hover:bg-[#600018]"
              >
                Return to Dashboard
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
}
