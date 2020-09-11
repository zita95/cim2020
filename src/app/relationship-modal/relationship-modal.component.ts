import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataObject } from '../models';
import { DataService } from '../data.service';

@Component({
  selector: 'app-relationship-modal',
  templateUrl: './relationship-modal.component.html',
  styleUrls: ['./relationship-modal.component.css']
})
export class RelationshipModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
    private dataService: DataService) { }

  indicatorId: string;
  relationships: DataObject[];
  dataSet: DataObject[];
  secondLevelObjects: DataObject[] = [];
  secondRelations: DataObject[];
  isThirdLevelVisible = false;
  thirdLevelObjects: DataObject[] = [];
  thirdLevelDetails = false;
  thirdDetailIndex: number;

  ngOnInit(): void {
    this.indicatorId = this.data.id;
    this.dataService.getApiData().subscribe(resp => {
      this.dataSet = resp.data;
      this.relationships = resp.data.filter(r => r.type === 'relationship').
        filter(r => r.source_ref === this.indicatorId);
      for (let rel of this.relationships) {
        this.secondLevelObjects.push(resp.data.find(item => item.id === rel.target_ref));
      }
    })
  }
  
  setClosed() {
    if (this.isThirdLevelVisible) {
      return this.isThirdLevelVisible = !this.isThirdLevelVisible;
    }
  }

  onShowMore(index) {
    this.thirdLevelObjects = [];
    this.getRelationships(index);
    return this.isThirdLevelVisible = !this.isThirdLevelVisible;
  }

  getRelationships(index) {
    this.secondRelations = this.dataSet.filter(item => item.type === 'relationship' &&
    item.source_ref === this.secondLevelObjects[index].id);
  for (let rel of this.secondRelations) {
    this.thirdLevelObjects.push(this.dataSet.find(item => item.id === rel.target_ref));
  }
  return this.thirdLevelObjects;
  }

  onShowThirdLevel(index) {
    if (!this.thirdLevelDetails) {
      this.thirdDetailIndex = index;
      return this.thirdLevelDetails = !this.thirdLevelDetails;
    }
    if (this.thirdLevelDetails && index === this.thirdDetailIndex) {
      return this.thirdLevelDetails = !this.thirdLevelDetails;
    }
    if (this.thirdLevelDetails && index !== this.thirdDetailIndex) {
      this.thirdDetailIndex = index;
    }
  }
}
