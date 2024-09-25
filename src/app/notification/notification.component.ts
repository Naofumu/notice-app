import { Component, OnInit } from '@angular/core';
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { NotificationService } from './notification.service';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [ AutoCompleteModule, FormsModule, CheckboxModule, InputTextModule, ButtonModule, CalendarModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent implements OnInit { 
  number?: number;  
  dateOfNotice: Date | undefined;
  fullName: string = '';  

  genders: any[] | undefined
  selectedGender: any 
  filteredGender: any[] = []

  birthdate: Date | undefined;

  regions: any[] | undefined;  
  selectedRegion: any
  filteredRegion: any[] = []

  locality: string = '';

  street: string = '';  
  dom: string = '';
  kv: string = '';

  temporaryAddress: string = '';  

  residents: any[] | undefined;  
  selectedResident: any
  filteredResident: any[] = []  


  categories: any[] | undefined;  
  selectedCategory: any
  filteredCategory: any[] = [] 

  socialGroups: any[] | undefined;  
  selectedSocialGroup: any
  filteredSocialGroup: any[] = []

  work: string = '';

  diagnosis: any[] | undefined;  
  selectedDiagnosis: any
  filteredDiagnosis: any[] = []

  diagnosisDate: Date | undefined 
  remnfection: boolean = false;

  confirmation: any[] | undefined;  
  selectedConfirmation: any
  filteredConfirmation: any[] = []
  
  causative: string ='';

  transmissionPath: any[] | undefined;  
  selectedTransmissionPath: any
  filteredTransmissionPath: any[] = [] 

  placeOfDetection: any[] | undefined;  
  selectedPlaceOfDetection: any
  filteredPlaceOfDetection: any[] = []  

  additional: any[] | undefined;  
  selectedAdditional: any = 'Не выбрано'
  filteredAdditional: any[] = []   

  obst: any[] | undefined;  
  selectedObst: any
  filteredObst: any[] = [] 

  pregnancyDuration: any[] | undefined;  
  selectedPregnancyDuration: any = 'Не выбрано'
  filteredPregnancyDuration: any[] = []
  
  doctors: any[] | undefined;  
  selectedDoctor: any
  filteredDoctor: any[] = []

  comment: string = ''; 

  constructor(private http: HttpClient, private notificationService: NotificationService) {}  

  ngOnInit() {
    this.genders = [
      { name: 'Мужской', code: 'М' },
      { name: 'Женский', code: 'Ж' },
    ];
    this.regions = [
      { name: 'Воронеж', code: 'В' },
      { name: 'Москва', code: 'М' }
    ];
    this.residents = [
      { name: 'Город', code: 'Г' },
      { name: 'Село', code: 'С' }
    ];
    this.categories = [
      { name: 'житель Воронежской области' },
    ];
    this.socialGroups = [
      { name: 'работающий' },
      { name: 'безработный' }
    ];
    this.diagnosis = [
      { name: 'бородавки' },
    ];
    this.confirmation = [
      { name: 'клинически' }
    ];
    this.transmissionPath = [
      { name: 'половой' }
    ];
    this.placeOfDetection = [
      { name: 'ВОККВД' }
    ]
    this.additional = [
      { name: 'Не выбрано' }
    ]
    this.obst = [
      { name: 'Обращение' }
    ]
    this.pregnancyDuration = [
      { name: 'Не выбрано' }
    ]
    this.doctors = [
      { name: 'Иванец' }
    ]
  }

  filterGenders(event: any) {
    this.filteredGender = this.notificationService.filterItems(event, this.genders)
  }

  filterRegions(event: any) {
    this.filteredRegion = this.notificationService.filterItems(event, this.regions)
  } 

  filterResidents(event: any) {
    this.filteredResident = this.notificationService.filterItems(event, this.residents)
  }

  filterCategories(event: any) {
    this.filteredCategory = this.notificationService.filterItems(event, this.categories)
  }

  filterSocialGroups(event: any) {
    this.filteredSocialGroup = this.notificationService.filterItems(event, this.socialGroups)
  }

  filterDiagnosis(event: any) {
    this.filteredDiagnosis = this.notificationService.filterItems(event, this.diagnosis)
  }

  filterConfirmations(event: any) {
    this.filteredConfirmation = this.notificationService.filterItems(event, this.confirmation)
  }

  filterTransmissionPaths(event: any) {
    this.filteredTransmissionPath = this.notificationService.filterItems(event, this.transmissionPath)
  }

  filterPlaceOfDetections(event: any) {
    this.filteredPlaceOfDetection = this.notificationService.filterItems(event, this.placeOfDetection)
  }

  filterAdditionals(event: any) {
    this.filteredAdditional = this.notificationService.filterItems(event, this.additional)
  }

  filterObst(event: any) {
    this.filteredObst = this.notificationService.filterItems(event, this.obst)
  }

  filterPregnancyDuration(event: any) {
    this.filteredPregnancyDuration = this.notificationService.filterItems(event, this.pregnancyDuration)
  }

  filterDoctor(event: any) {
    this.filteredDoctor = this.notificationService.filterItems(event, this.doctors)
  }
  
  

  save() {  
    const data = {  
      number: this.number,  
      dateOfNotice: this.dateOfNotice, 
      fullName: this.fullName, 
      gender: this.selectedGender,
      birthdate: this.birthdate,
      region: this.selectedRegion,
      locality: this.locality,  
      street: this.street,  
      dom: this.dom,
      kv: this.kv, 
      temporaryAddress: this.temporaryAddress, 
      resident: this.selectedResident,  
      category: this.selectedCategory,
      socialGroup: this.selectedCategory,  
      work: this.work,
      diagnosis: this.selectedDiagnosis, 
      diagnosisDate: this.diagnosisDate,
      remnfection: this.remnfection, 
      confirmation: this.selectedConfirmation,
      causative: this.causative,  
      transmissionPath: this.selectedTransmissionPath,  
      placeOfDetection: this.selectedPlaceOfDetection,  
      additional: this.selectedAdditional,
      obst: this.obst,
      pregnancyDuration: this.selectedPregnancyDuration,
      doctor: this.selectedDoctor,
      comment: this.comment,  
    };  

    this.http.post('http://localhost:5199/api/notice', data).subscribe(response => {  
      alert('Извещение сохранено')
      console.log('Данные сохранены:', response);  
    }, error => {  
      alert('Извещение не сохранено')
      console.error('Ошибка:', error);  
  });;  
  }
}
