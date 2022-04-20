import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddbottleceintPage } from './addbottleceint.page';

describe('AddbottleceintPage', () => {
  let component: AddbottleceintPage;
  let fixture: ComponentFixture<AddbottleceintPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbottleceintPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddbottleceintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
