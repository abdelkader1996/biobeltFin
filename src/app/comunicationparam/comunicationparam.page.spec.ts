import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComunicationparamPage } from './comunicationparam.page';

describe('ComunicationparamPage', () => {
  let component: ComunicationparamPage;
  let fixture: ComponentFixture<ComunicationparamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunicationparamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComunicationparamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
