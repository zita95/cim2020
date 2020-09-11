import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { MatDialog } from '@angular/material/dialog';
import { RelationshipModalComponent } from './relationship-modal/relationship-modal.component';
import { DataObject } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private dataService: DataService,
    private dialog: MatDialog) { }

  dataList: DataObject[] = [];
  currentlyOpenedItemIndex: number;

  ngOnInit(): void {
    this.dataService.getApiData().subscribe(resp => {
      this.dataList = resp.data.filter(d => d.type === 'indicator');
    })
  }

  setOpened(itemIndex) {
    this.currentlyOpenedItemIndex = itemIndex;
  }

  setClosed(itemIndex) {
    if (this.currentlyOpenedItemIndex === itemIndex) {
      this.currentlyOpenedItemIndex = -1;
    }
  }

  onOpenDialog(itemIndex) {
    const dialogRef = this.dialog.open(RelationshipModalComponent, {
      data: { id: this.dataList[itemIndex].id }
    });
    dialogRef.afterClosed().subscribe();
  }
}