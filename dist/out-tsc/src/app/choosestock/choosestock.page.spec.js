import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ChoosestockPage } from './choosestock.page';
describe('ChoosestockPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ChoosestockPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(ChoosestockPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=choosestock.page.spec.js.map