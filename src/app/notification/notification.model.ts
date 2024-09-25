export interface Notification {  
  number?: number;  
  dateOfNotice: string;
  fullName: string;  

  genders: any[] | undefined
  selectedGender: any
  filteredGenders: any[]

  birthdate: string;
  region: string;  
  locality: string;

  street: string;  
  dom: string;
  kv: string;

  temporaryAddress: string;  

  resident: string;  
  category: string;

  socialGroup: string;  
  work: string;

  diagnosis: string; 
  diagnosisDate: string  
  reminfection: boolean;

  confirmation: string;  
  causative: string;

  transmissionPath: string; 

  placeOfDetection: string;  
  additional: string;  

  circumstances: string;
  pregnancyDuration: string;
  
  doctor: string;
  comment: string; 
  } 