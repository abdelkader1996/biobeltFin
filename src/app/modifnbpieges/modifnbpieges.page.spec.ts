import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModifnbpiegesPage } from './modifnbpieges.page';

describe('ModifnbpiegesPage', () => {
  let component: ModifnbpiegesPage;
  let fixture: ComponentFixture<ModifnbpiegesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifnbpiegesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModifnbpiegesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
