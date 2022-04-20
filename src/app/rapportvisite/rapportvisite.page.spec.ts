import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RapportvisitePage } from './rapportvisite.page';

describe('RapportvisitePage', () => {
  let component: RapportvisitePage;
  let fixture: ComponentFixture<RapportvisitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapportvisitePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RapportvisitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
