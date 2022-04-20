import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { OptionbottlePage } from './optionbottle.page';
describe('OptionbottlePage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OptionbottlePage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(OptionbottlePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=optionbottle.page.spec.js.map