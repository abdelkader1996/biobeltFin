import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RetfournmodalPage } from './retfournmodal.page';

describe('RetfournmodalPage', () => {
  let component: RetfournmodalPage;
  let fixture: ComponentFixture<RetfournmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetfournmodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RetfournmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
