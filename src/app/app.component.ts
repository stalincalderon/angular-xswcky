import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {  
  /*dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};*/
  selected: string;
  noResult = false;  
  states: string[] = [];
 
  typeaheadNoResults(event: boolean): void {
    this.noResult = event;
  } 

  ngOnInit(): void {
    //version ng-bootstrap
    /*this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings = IDropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };*/

    //version ngx-bootstrap
    /*this.dropdownList = [
  {"idValue":1,"nameValue":"India"},
  {"idValue":2,"nameValue":"Singapore"},
  {"idValue":3,"nameValue":"Australia"},
  {"idValue":4,"nameValue":"Canada"},
  {"idValue":5,"nameValue":"South Korea"},
  {"idValue":6,"nameValue":"Germany"},
  {"idValue":7,"nameValue":"France"},
  {"idValue":8,"nameValue":"Russia"},
  {"idValue":9,"nameValue":"Italy"},
  {"idValue":10,"nameValue":null}
    ];

    this.selectedItems = [];

    this.dropdownSettings = {
      dataIdProperty: "idValue",
      dataNameProperty: "nameValue",
      //headerText: "Test header",
      noneSelectedBtnText: "Ninguno seleccionado",
      btnWidth: "200px",
      dropdownHeight: "200px",
      showDeselectAllBtn: true,
       showSelectAllBtn: true,
      deselectAllBtnText: 'Limpiar',
      selectAllBtnText: 'Seleccionar todo',
      btnClasses: 'btn btn-primary btn-sm dropdown-toggle',
      //selectionLimit: 3,
      enableFilter: true
    };*/

    this.states = [
      'Alabama',
      'Alaska',
      'Arizona',
      'Arkansas',
      'California',
      'Colorado',
      'Connecticut',
      'Delaware',
      'Florida',
      'Georgia',
      'Hawaii',
      'Idaho',
      'Illinois',
      'Indiana',
      'Iowa',
      'Kansas',
      'Kentucky',
      'Louisiana',
      'Maine',
      'Maryland',
      'Massachusetts',
      'Michigan',
      'Minnesota',
      'Mississippi',
      'Missouri',
      'Montana',
      'Nebraska',
      'Nevada',
      'New Hampshire',
      'New Jersey',
      'New Mexico',
      'New York',
      'North Dakota',
      'North Carolina',
      'Ohio',
      'Oklahoma',
      'Oregon',
      'Pennsylvania',
      'Rhode Island',
      'South Carolina',
      'South Dakota',
      'Tennessee',
      'Texas',
      'Utah',
      'Vermont',
      'Virginia',
      'Washington',
      'West Virginia',
      'Wisconsin',
      'Wyoming'
    ];
  }
  /*onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }*/
}