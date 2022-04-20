import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RackcontentPage } from './rackcontent.page';
describe('RackcontentPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RackcontentPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(RackcontentPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=rackcontent.page.spec.js.map