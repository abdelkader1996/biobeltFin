import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerifpiegesindividuelsPage } from './verifpiegesindividuels.page';

describe('VerifpiegesindividuelsPage', () => {
  let component: VerifpiegesindividuelsPage;
  let fixture: ComponentFixture<VerifpiegesindividuelsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifpiegesindividuelsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerifpiegesindividuelsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
