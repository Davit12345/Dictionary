import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckMemoryPage } from './check-memory.page';

describe('CheckMemoryPage', () => {
  let component: CheckMemoryPage;
  let fixture: ComponentFixture<CheckMemoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckMemoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckMemoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
