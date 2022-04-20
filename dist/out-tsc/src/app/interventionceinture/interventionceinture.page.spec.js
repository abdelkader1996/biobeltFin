import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { InterventionceinturePage } from './interventionceinture.page';
describe('InterventionceinturePage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [InterventionceinturePage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(InterventionceinturePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=interventionceinture.page.spec.js.map