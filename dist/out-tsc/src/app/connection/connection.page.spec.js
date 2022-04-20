import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ConnectionPage } from './connection.page';
describe('ConnectionPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ConnectionPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(ConnectionPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=connection.page.spec.js.map