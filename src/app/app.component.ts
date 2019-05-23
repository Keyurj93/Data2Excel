import { Component } from '@angular/core';
import { ExcelService } from './data2excel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DataToExcel';
  data: any = [{
    eid: 'e101',
    ename: 'ravi',
    esal: 1000
  }, {
    eid: 'e102',
    ename: 'ram',
    esal: 2000
  }, {
    eid: 'e103',
    ename: 'rajesh',
    esal: 3000
  }];
  constructor(private excelService: ExcelService) {
  }

  ngOnInit(){
    this.exportAsXLSX();
  }
  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.data, 'sample');
  }
}
