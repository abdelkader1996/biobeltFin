import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Interventionceinture2Page } from './interventionceinture2.page';

describe('Interventionceinture2Page', () => {
  let component: Interventionceinture2Page;
  let fixture: ComponentFixture<Interventionceinture2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Interventionceinture2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Interventionceinture2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
