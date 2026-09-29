/**
 * Sabari Hospital - Centralized Data Configuration
 * Domain: sabarihospital.com
 * 
 * IMPORTANT CONTENT RULE:
 * Centralized data store. Update placeholder values here to reflect
 * official hospital records when provided. Do not hardcode across components.
 */

export const hospitalInfo = {
  name: "Sabari Hospital",
  tagline: "Your Health, Our Priority",
  subTagline: "Compassionate care. Better health. A healthier tomorrow.",
  domain: "sabarihospital.com",
  phone: "+91 XXXXX XXXXX",
  phoneRaw: "+910000000000",
  emergencyPhone: "+91 XXXXX XXXXX",
  emergencyPhoneRaw: "+910000000000",
  whatsappPhone: "+91 XXXXX XXXXX",
  whatsappRaw: "910000000000",
  email: "info@sabarihospital.com",
  appointmentEmail: "appointments@sabarihospital.com",
  address: {
    line1: "[Hospital Address Line 1]",
    line2: "[Hospital Landmark / Area]",
    city: "[City]",
    state: "[State]",
    pincode: "[Pincode]",
    full: "[Hospital Address, Area, City, State - Pincode]"
  },
  operatingHours: {
    emergency: "24 Hours / 7 Days a Week",
    opConsultation: "Monday - Saturday: 8:00 AM - 8:00 PM | Sunday: 9:00 AM - 1:00 PM",
    pharmacy: "24/7 Open",
    laboratory: "24/7 Sample Collection & Emergency Diagnostics",
    visitingHours: "Morning: 10:00 AM - 12:00 PM | Evening: 4:30 PM - 7:30 PM"
  },
  socialLinks: {
    facebook: "https://facebook.com/sabarihospital",
    instagram: "https://instagram.com/sabarihospital",
    youtube: "https://youtube.com/@sabarihospital",
    linkedin: "https://linkedin.com/company/sabarihospital",
    twitter: "https://twitter.com/sabarihospital"
  },
  accreditation: "Committed to NABH & NABL Quality Benchmarks [Accreditation Placeholder]"
};

export const hospitalStats = [
  { id: "years", value: 10, suffix: "+", label: "Years of Care", description: "Serving our community with dedication" },
  { id: "doctors", value: 50, suffix: "+", label: "Healthcare Professionals", description: "Specialists, consultants & nurses" },
  { id: "patients", value: 10000, suffix: "+", label: "Patients Served", description: "Treated with care and clinical excellence" },
  { id: "emergency", value: 24, suffix: "/7", label: "Emergency Support", description: "Round-the-clock trauma & critical care" }
];

export const quickInfoCards = [
  {
    id: "emergency",
    title: "24/7 Emergency",
    description: "Round-the-clock trauma and emergency medical response team equipped with life support.",
    icon: "ambulance",
    badge: "Always Open",
    linkText: "Call Hotline",
    linkHref: "tel:+910000000000"
  },
  {
    id: "doctors",
    title: "Expert Doctors",
    description: "Experienced multi-disciplinary specialists delivering compassionate, evidence-based care.",
    icon: "stethoscope",
    badge: "50+ Specialists",
    linkText: "Meet Doctors",
    linkHref: "doctors.html"
  },
  {
    id: "facilities",
    title: "Modern Facilities",
    description: "State-of-the-art modular operation theatres, digital imaging, and high-dependency ICUs.",
    icon: "building-2",
    badge: "Advanced Tech",
    linkText: "Explore Tech",
    linkHref: "facilities.html"
  },
  {
    id: "patient-care",
    title: "Patient-Centered Care",
    description: "Holistic treatment plans designed around your comfort, safety, dignity, and recovery.",
    icon: "heart-handshake",
    badge: "Compassion First",
    linkText: "Our Approach",
    linkHref: "about.html"
  }
];

export const departments = [
  {
    id: "general-medicine",
    name: "General Medicine",
    icon: "stethoscope",
    badge: "Core Specialty",
    shortDesc: "Comprehensive diagnosis and non-surgical management of adult illnesses, lifestyle disorders, and chronic conditions.",
    fullDesc: "Our Department of General Medicine provides primary healthcare and inpatient medical management for acute and chronic conditions including hypertension, diabetes, infectious diseases, and respiratory illnesses.",
    headDoctor: "Dr. [Physician Name], MBBS, MD (General Medicine)",
    treatments: ["Diabetes & Hypertension Management", "Infectious Diseases & Fevers", "Thyroid Disorders", "Preventive Health Screenings"]
  },
  {
    id: "general-surgery",
    name: "General Surgery",
    icon: "scissors",
    badge: "Surgical Suite",
    shortDesc: "Advanced open and minimally invasive laparoscopic surgical procedures performed with modern safety protocols.",
    fullDesc: "Equipped with state-of-the-art laminar flow operation theatres, our surgical team performs high-precision laparoscopic procedures resulting in faster recovery and minimal pain.",
    headDoctor: "Dr. [Surgeon Name], MBBS, MS (General Surgery)",
    treatments: ["Laparoscopic Appendectomy & Cholecystectomy", "Hernia Repair", "Trauma Surgery", "Gastrointestinal Procedures"]
  },
  {
    id: "pediatrics",
    name: "Pediatrics & Neonatology",
    icon: "baby",
    badge: "Child Care",
    shortDesc: "Compassionate, gentle healthcare for newborns, infants, children, and adolescents.",
    fullDesc: "Dedicated pediatric outpatient clinics and a specialized neonatal care unit offering vaccination, child development assessments, and pediatric emergency response.",
    headDoctor: "Dr. [Pediatrician Name], MBBS, MD (Pediatrics), DCH",
    treatments: ["Comprehensive Immunization", "Newborn Care & NICU Support", "Pediatric Asthma & Allergies", "Growth & Developmental Monitoring"]
  },
  {
    id: "obstetrics-gynecology",
    name: "Obstetrics & Gynecology",
    icon: "heart-pulse",
    badge: "Women's Health",
    shortDesc: "Dedicated care for women across all life stages, from antenatal and maternity care to menopause management.",
    fullDesc: "Comprehensive maternity suites, high-risk pregnancy monitoring, painless delivery options, and gynecological surgical solutions in a warm, respectful environment.",
    headDoctor: "Dr. [Gynecologist Name], MBBS, MS (OBG), DGO",
    treatments: ["Antenatal & Postnatal Care", "Normal & Cesarean Deliveries", "Fertility Counseling", "Laparoscopic Gynec Surgery"]
  },
  {
    id: "orthopedics",
    name: "Orthopedics & Joint Care",
    icon: "bone",
    badge: "Joint & Spine",
    shortDesc: "Specialized care for bones, joints, ligaments, sports injuries, and complex trauma management.",
    fullDesc: "Advanced orthopedic care encompassing joint replacement surgeries, arthroscopy, fracture stabilization, and specialized physiotherapy rehabilitation.",
    headDoctor: "Dr. [Orthopedist Name], MBBS, MS (Ortho), D.Ortho",
    treatments: ["Total Knee & Hip Replacement", "Arthroscopic Ligament Reconstruction", "Fracture & Polytrauma Management", "Spine Care & Sciatica Treatment"]
  },
  {
    id: "cardiology",
    name: "Cardiology",
    icon: "activity",
    badge: "Heart Health",
    shortDesc: "Preventive and diagnostic cardiac care with ECG, 2D Echo, TMT, and cardiac emergency monitoring.",
    fullDesc: "Focused on early detection, lifestyle management, and stabilization of cardiovascular diseases with advanced telemetry and critical cardiac care support.",
    headDoctor: "Dr. [Cardiologist Name], MBBS, MD, DM (Cardiology)",
    treatments: ["2D Echocardiography & Color Doppler", "Treadmill Stress Test (TMT)", "Hypertension & Heart Failure Clinic", "Arrhythmia Monitoring"]
  },
  {
    id: "ent",
    name: "Ear, Nose & Throat (ENT)",
    icon: "headset",
    badge: "Head & Neck",
    shortDesc: "Diagnostic endoscopy and microsurgical treatments for ear, nasal, and throat disorders.",
    fullDesc: "Full ENT diagnostic services including audiometry, nasal endoscopy, allergy therapy, and microsurgical procedures for sinus, tonsils, and hearing disorders.",
    headDoctor: "Dr. [ENT Specialist Name], MBBS, MS (ENT)",
    treatments: ["Endoscopic Sinus Surgery (FESS)", "Microscopic Ear Surgeries & Tympanoplasty", "Tonsillectomy & Adenoidectomy", "Hearing Assessment & Vertigo Clinic"]
  },
  {
    id: "dermatology",
    name: "Dermatology & Cosmetology",
    icon: "sparkles",
    badge: "Skin & Hair",
    shortDesc: "Evidence-based clinical treatments for dermatological conditions, hair loss, and aesthetic skin care.",
    fullDesc: "Clinical care for chronic skin diseases such as eczema, psoriasis, acne, and vitiligo, alongside safe cosmetic procedures under medical supervision.",
    headDoctor: "Dr. [Dermatologist Name], MBBS, MD (DVL)",
    treatments: ["Chronic Skin Disorders Clinic", "Acne & Scar Therapies", "Hair Loss & PRP Solutions", "Laser Therapy & Minor Dermatological Surgeries"]
  },
  {
    id: "radiology",
    name: "Radiology & Imaging",
    icon: "scan",
    badge: "24/7 Diagnostics",
    shortDesc: "High-precision digital X-rays, 4D ultrasound, Doppler scans, and rapid diagnostic reporting.",
    fullDesc: "Our radiology wing operates 24/7 to provide doctors with fast, high-resolution diagnostic imaging crucial for accurate clinical decision-making.",
    headDoctor: "Dr. [Radiologist Name], MBBS, MD (Radiodiagnosis)",
    treatments: ["Digital X-Ray (High Resolution)", "4D Ultrasound & Fetal Anomaly Scans", "Color Doppler Studies", "Ultrasound Guided Interventions"]
  },
  {
    id: "dentistry",
    name: "Dental & Maxillofacial",
    icon: "smile",
    badge: "Oral Health",
    shortDesc: "Complete oral healthcare including restorative dentistry, root canals, orthodontics, and smile design.",
    fullDesc: "Equipped with advanced sterilization protocols and ergonomic digital dental suites for comfortable, pain-free dental procedures for children and adults.",
    headDoctor: "Dr. [Dental Surgeon Name], BDS, MDS",
    treatments: ["Root Canal Treatment (Single Sitting)", "Dental Implants & Crowns", "Orthodontic Aligners & Braces", "Teeth Whitening & Scaling"]
  }
];

export const doctors = [
  {
    id: "doc-1",
    name: "Dr. [Physician Name]",
    qualification: "MBBS, MD (General Medicine)",
    specialization: "Senior Consultant Physician",
    department: "General Medicine",
    departmentId: "general-medicine",
    experience: "15+ Years",
    availableDays: "Mon - Sat",
    timing: "09:00 AM - 01:00 PM, 05:00 PM - 08:00 PM",
    image: "assets/images/hero-doctors.jpg",
    bio: "Specializing in the management of lifestyle metabolic disorders, chronic hypertension, and complex internal medical conditions."
  },
  {
    id: "doc-2",
    name: "Dr. [Surgeon Name]",
    qualification: "MBBS, MS (General Surgery), FMAS",
    specialization: "Laparoscopic & General Surgeon",
    department: "General Surgery",
    departmentId: "general-surgery",
    experience: "12+ Years",
    availableDays: "Mon, Wed, Fri",
    timing: "10:00 AM - 02:00 PM",
    image: "assets/images/hero-doctors.jpg",
    bio: "Expertise in minimal-access laparoscopic surgical procedures, gastrointestinal surgery, and emergency trauma operations."
  },
  {
    id: "doc-3",
    name: "Dr. [Pediatrician Name]",
    qualification: "MBBS, MD (Pediatrics), DCH",
    specialization: "Consultant Pediatrician & Neonatologist",
    department: "Pediatrics & Neonatology",
    departmentId: "pediatrics",
    experience: "10+ Years",
    availableDays: "Mon - Sat",
    timing: "09:30 AM - 01:30 PM, 04:30 PM - 07:30 PM",
    image: "assets/images/hero-doctors.jpg",
    bio: "Dedicated to comprehensive child wellness, pediatric critical care, newborn developmental milestones, and immunization schedules."
  },
  {
    id: "doc-4",
    name: "Dr. [Gynecologist Name]",
    qualification: "MBBS, MS (OBG), DGO",
    specialization: "Senior Obstetrician & Gynecologist",
    department: "Obstetrics & Gynecology",
    departmentId: "obstetrics-gynecology",
    experience: "14+ Years",
    availableDays: "Tue, Thu, Sat",
    timing: "10:00 AM - 03:00 PM",
    image: "assets/images/hero-doctors.jpg",
    bio: "Specialist in compassionate prenatal guidance, high-risk maternity care, and advanced endoscopic gynecological surgeries."
  },
  {
    id: "doc-5",
    name: "Dr. [Orthopedist Name]",
    qualification: "MBBS, MS (Orthopedics), M.Ch (Ortho)",
    specialization: "Joint Replacement & Spine Specialist",
    department: "Orthopedics & Joint Care",
    departmentId: "orthopedics",
    experience: "13+ Years",
    availableDays: "Mon, Wed, Sat",
    timing: "11:00 AM - 03:00 PM",
    image: "assets/images/hero-doctors.jpg",
    bio: "Expertise in primary and revision knee and hip arthroplasty, sports arthroscopy, complex fracture fixation, and musculoskeletal care."
  },
  {
    id: "doc-6",
    name: "Dr. [Cardiologist Name]",
    qualification: "MBBS, MD, DM (Cardiology), FACC",
    specialization: "Consultant Interventional Cardiologist",
    department: "Cardiology",
    departmentId: "cardiology",
    experience: "16+ Years",
    availableDays: "Mon - Fri",
    timing: "04:00 PM - 08:00 PM",
    image: "assets/images/hero-doctors.jpg",
    bio: "Focusing on preventive cardiology, early ischemic heart disease detection, echocardiography, and long-term cardiac rehabilitation."
  }
];

export const medicalServices = [
  {
    id: "op-consultation",
    title: "OP Consultation",
    icon: "stethoscope",
    description: "Multi-specialty outpatient clinics with experienced consultants across medicine, surgery, pediatrics, and allied branches.",
    features: ["Pre-booked and walk-in consultation", "Digital electronic health records", "Short waiting times"]
  },
  {
    id: "emergency-care",
    title: "24/7 Emergency Care",
    icon: "siren",
    description: "Always-ready trauma and emergency resuscitation department managed by critical care physicians and life-support paramedics.",
    features: ["Dedicated triage area", "Direct access to emergency operation theatre", "Rapid response trauma team"]
  },
  {
    id: "health-checkups",
    title: "Health Checkups",
    icon: "clipboard-check",
    description: "Curated preventive health screening packages designed for all age groups to detect health risks before symptoms appear.",
    features: ["Master health package", "Cardiac wellness screening", "Senior citizen health plans"]
  },
  {
    id: "laboratory-services",
    title: "Laboratory Services",
    icon: "flask-conical",
    description: "Fully automated clinical pathology, biochemistry, microbiology, and hematology testing with rapid turnaround time.",
    features: ["24/7 sample collection", "Barcoded sterile specimen handling", "Online report delivery"]
  },
  {
    id: "pharmacy",
    title: "24/7 In-House Pharmacy",
    icon: "pill",
    description: "Comprehensive round-the-clock pharmacy stocked with authentic pharmaceuticals, surgical consumables, and critical drugs.",
    features: ["Strict cold chain maintenance", "Computerized dispensing", "Bedside medicine delivery for inpatients"]
  },
  {
    id: "diagnostic-services",
    title: "Diagnostic Services",
    icon: "microscope",
    description: "Advanced diagnostic equipment including computerized ECG, 2D Color Doppler, digital radiography, and audiometry.",
    features: ["Low-radiation digital X-ray", "Non-invasive vascular doppler", "Real-time ultrasound imaging"]
  },
  {
    id: "ambulance-services",
    title: "Ambulance Services",
    icon: "truck",
    description: "Fully equipped Basic and Advanced Life Support (BLS/ALS) ambulances staffed with trained emergency paramedics.",
    features: ["Mobile oxygen & ventilator support", "GPS-tracked fleet for quick dispatch", "Direct emergency hotline"]
  },
  {
    id: "preventive-healthcare",
    title: "Preventive Healthcare",
    icon: "shield-check",
    description: "Holistic wellness programs, lifestyle counseling, adult vaccination, and community health education initiatives.",
    features: ["Dietary and nutritional counseling", "Comprehensive adult & pediatric vaccines", "Smoking cessation & wellness guidance"]
  }
];

export const facilitiesList = [
  {
    id: "fac-patient-rooms",
    title: "Modern Patient Rooms",
    category: "Inpatient Care",
    description: "Spacious private suites and semi-private rooms engineered with ergonomic electric patient beds, serene natural lighting, nurse call systems, and guest comfort amenities.",
    image: "assets/images/patient-room.jpg",
    highlights: ["Motorized patient beds", "Centralized medical oxygen & suction", "Private en-suite washrooms", "In-room attendant daybed"]
  },
  {
    id: "fac-ot",
    title: "Modular Operation Theatres",
    category: "Surgical",
    description: "Ultra-clean surgical suites equipped with laminar airflow, HEPA filtration, modern LED surgical illumination, and high-definition laparoscopy towers.",
    image: "assets/images/operation-theatre.jpg",
    highlights: ["Laminar air flow with positive pressure", "Integrated anesthesia workstation", "Real-time endoscopy visualization", "Zero infection protocol"]
  },
  {
    id: "fac-reception",
    title: "Spacious Waiting Lounge & Reception",
    category: "Hospital Hospitality",
    description: "A calming, aesthetic lobby designed to reduce patient anxiety. Features streamlined registration counters, comfortable seating, and clear wayfinding signage.",
    image: "assets/images/hospital-reception.jpg",
    highlights: ["Token management system", "Wheelchair accessible desks", "Filtered drinking water", "Dedicated patient guidance helpdesk"]
  },
  {
    id: "fac-lab",
    title: "Diagnostic Clinical Laboratory",
    category: "Diagnostics",
    description: "Modern clinical laboratory functioning 24/7 with automated hematology and biochemistry analyzers, providing precision results for immediate clinical decisions.",
    image: "assets/images/medical-lab.jpg",
    highlights: ["Automated biochemistry analyzers", "Internal and external quality controls", "Sterile specimen collection zone", "Emergency stat testing"]
  },
  {
    id: "fac-icu",
    title: "Intensive Care Unit (ICU)",
    category: "Critical Care",
    description: "Advanced Multi-Disciplinary ICU with dedicated bedside multiparameter monitors, invasive ventilators, defibrillators, and 1:1 dedicated nursing care.",
    image: "assets/images/operation-theatre.jpg",
    highlights: ["Dedicated critical care specialists", "Continuous hemodynamic monitoring", "Central monitoring console", "Isolation rooms with barrier nursing"]
  },
  {
    id: "fac-emergency",
    title: "Emergency & Trauma Bay",
    category: "Emergency",
    description: "Strategically located at the ground floor with a dedicated ambulance bay, crash carts, rapid triage zone, and direct corridor to the surgical suites.",
    image: "assets/images/hospital-exterior.jpg",
    highlights: ["Zero-wait triage desk", "Mobile resuscitation units", "Direct ambulance ramp access", "24/7 dedicated trauma surgeons"]
  },
  {
    id: "fac-pharmacy",
    title: "24/7 In-House Pharmacy",
    category: "Support Services",
    description: "Reliable round-the-clock pharmacy dispensing genuine medicines, surgical supplies, and temperature-sensitive biologicals with computerized tracking.",
    image: "assets/images/hospital-reception.jpg",
    highlights: ["100% verified authentic medicines", "Cold-chain insulin & vaccine storage", "Open all nights and holidays", "Prescription record tracking"]
  },
  {
    id: "fac-parking",
    title: "Parking & Campus Accessibility",
    category: "Campus Infrastructure",
    description: "Generous on-site parking for patients and visitors with seamless ramp access, stretcher lifts, and dedicated wheelchair assistance upon arrival.",
    image: "assets/images/hospital-exterior.jpg",
    highlights: ["Designated patient drop-off porch", "Wheelchair ramps & accessible elevators", "Dedicated emergency vehicle lanes", "24/7 security & CCTV surveillance"]
  }
];

export const testimonials = [
  {
    id: "test-1",
    name: "S. [Patient Name]",
    treatment: "General Medicine Care",
    rating: 5,
    date: "Recent Patient",
    comment: "The doctors and nursing staff at Sabari Hospital provided outstanding care during my treatment. The hospital is exceptionally clean, well-organized, and the staff treated us with immense warmth and patience.",
    verified: true
  },
  {
    id: "test-2",
    name: "R. [Patient Name]",
    treatment: "Orthopedic Surgery",
    rating: 5,
    date: "Recent Patient",
    comment: "From the first consultation to my discharge and physiotherapy follow-up, the medical team explained every step clearly. The facilities are modern and comforting. Highly recommended for quality healthcare.",
    verified: true
  },
  {
    id: "test-3",
    name: "M. [Patient Name]",
    treatment: "Pediatric Consultation",
    rating: 5,
    date: "Recent Patient",
    comment: "We brought our child for an emergency high fever consultation. The emergency triage was swift, the pediatrician was gentle and thorough, and the nursing staff made our little one feel completely safe.",
    verified: true
  },
  {
    id: "test-4",
    name: "K. [Patient Name]",
    treatment: "Preventive Health Checkup",
    rating: 5,
    date: "Recent Patient",
    comment: "Smooth and efficient health package process. All diagnostic tests were completed within the scheduled morning hours, and the doctor consultation was detailed and insightful.",
    verified: true
  }
];

export const healthArticles = [
  {
    id: "article-1",
    title: "Tips for Maintaining a Healthy Lifestyle",
    category: "Wellness & Nutrition",
    date: "Updated Weekly",
    readTime: "4 min read",
    excerpt: "Practical daily habits—balanced nutrition, hydration, restorative sleep, and moderate physical activity—that fortify long-term wellness.",
    image: "assets/images/hero-doctors.jpg"
  },
  {
    id: "article-2",
    title: "When Should You Get a Routine Health Checkup?",
    category: "Preventive Health",
    date: "Updated Weekly",
    readTime: "5 min read",
    excerpt: "Understanding the timeline and key diagnostic parameters for periodic health screenings based on age, genetics, and lifestyle.",
    image: "assets/images/medical-lab.jpg"
  },
  {
    id: "article-3",
    title: "Understanding Cardiovascular Risk Factors",
    category: "Cardiology",
    date: "Updated Weekly",
    readTime: "6 min read",
    excerpt: "Recognizing early warning signals of heart strain, managing blood pressure, and adopting heart-friendly nutritional guidelines.",
    image: "assets/images/operation-theatre.jpg"
  },
  {
    id: "article-4",
    title: "Childhood Immunization: A Protective Shield",
    category: "Pediatric Health",
    date: "Updated Weekly",
    readTime: "4 min read",
    excerpt: "Why adhering to the recommended pediatric vaccination timeline is the safest shield against preventable childhood infections.",
    image: "assets/images/patient-room.jpg"
  }
];

export const faqs = [
  {
    question: "How do I schedule an appointment at Sabari Hospital?",
    answer: "You can easily request an appointment through our online booking form on this website, call our appointment desk at +91 XXXXX XXXXX, or visit our outpatient registration counter in person."
  },
  {
    question: "Are emergency and ambulance services available 24/7?",
    answer: "Yes. Our Emergency and Trauma Care unit, round-the-clock ambulance fleet, in-house pharmacy, and diagnostic laboratories are fully operational 24 hours a day, 365 days a year."
  },
  {
    question: "What documents should I bring for my first consultation?",
    answer: "Please bring a valid photo ID, any previous medical records, diagnostic reports, recent prescriptions, and your health insurance card if you are seeking cashless claims."
  },
  {
    question: "Do you have cashless health insurance / TPA facilities?",
    answer: "Sabari Hospital coordinates with major insurance providers and Third-Party Administrators (TPAs) to facilitate hassle-free cashless hospitalization subject to policy terms."
  },
  {
    question: "What are the visiting hours for inpatients?",
    answer: "Visiting hours are structured to ensure optimal rest and recovery for patients: Morning 10:00 AM – 12:00 PM, and Evening 04:30 PM – 07:30 PM. In ICUs, entry is restricted to one attendant at designated slots."
  }
];
