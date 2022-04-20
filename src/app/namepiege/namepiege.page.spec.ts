import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NamepiegePage } from './namepiege.page';

describe('NamepiegePage', () => {
  let component: NamepiegePage;
  let fixture: ComponentFixture<NamepiegePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamepiegePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NamepiegePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
