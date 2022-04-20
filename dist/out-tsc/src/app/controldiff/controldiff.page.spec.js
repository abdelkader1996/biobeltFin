import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ControldiffPage } from './controldiff.page';
describe('ControldiffPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ControldiffPage],
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
//# sourceMappingURL=controldiff.page.spec.js.map