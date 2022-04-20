import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InterventionceinturePage } from './interventionceinture.page';

describe('InterventionceinturePage', () => {
  let component: InterventionceinturePage;
  let fixture: ComponentFixture<InterventionceinturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterventionceinturePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InterventionceinturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
