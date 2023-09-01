import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoeryBlogComponent } from './poery-blog.component';

describe('PoeryBlogComponent', () => {
  let component: PoeryBlogComponent;
  let fixture: ComponentFixture<PoeryBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoeryBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoeryBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
