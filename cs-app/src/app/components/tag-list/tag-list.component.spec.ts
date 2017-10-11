import { TestBed, async } from '@angular/core/testing';
import { TagListComponent } from './tag-list.component';
import { FeatureFilterPipe } from '../../pipes/feature-filter.pipe';
import { Location, CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from '../../services/data.service';
import { HttpModule } from '@angular/http';

describe('TagListComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TagListComponent,
        FeatureFilterPipe
      ],
      imports: [
        CommonModule, RouterTestingModule, HttpModule
      ],
      providers: [
        DataService
      ]
    });
    TestBed.compileComponents();
  });
 
  it('should have a defined component', () => {
    let fixture = TestBed.createComponent(TagListComponent);
    let component = fixture.componentInstance;
    expect(component).toBeDefined();
  });
 
});