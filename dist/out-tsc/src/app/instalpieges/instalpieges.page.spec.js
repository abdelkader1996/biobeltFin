import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { InstalpiegesPage } from './instalpieges.page';
describe('InstalpiegesPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [InstalpiegesPage],
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
//# sourceMappingURL=instalpieges.page.spec.js.map