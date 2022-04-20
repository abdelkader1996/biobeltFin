import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ControldiffPage } from './controldiff.page';

describe('ControldiffPage', () => {
  let component: ControldiffPage;
  let fixture: ComponentFixture<ControldiffPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControldiffPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ControldiffPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
