import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstalpiegesPage } from './instalpieges.page';

describe('InstalpiegesPage', () => {
  let component: InstalpiegesPage;
  let fixture: ComponentFixture<InstalpiegesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstalpiegesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstalpiegesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
