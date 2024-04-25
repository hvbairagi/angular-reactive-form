import { TestBed } from '@angular/core/testing';
import { CalcService } from './calc.service';
import { SharedService } from './shared.service';

describe('CalcService', () => {
  let shared: SharedService;
  let calc: CalcService;

  beforeEach(() => {
    // shared = new SharedService();
    // calc = new CalcService(shared);
    shared = jasmine.createSpyObj('SharedService', ['mySharedFunction']);
    TestBed.configureTestingModule({
      providers: [CalcService, { provide: SharedService, useValue: shared }],
    });
    shared = TestBed.inject(SharedService);
    calc = TestBed.inject(CalcService);
  });

  fit('should multiply two numbers', () => {
    const result = calc.multiply(3, 5);
    expect(result).toBe(15);
  });

  xit('should add two numbers', () => {
    const result = calc.add(3, 5);
    expect(result).toBe(8);
  });

  // it('should call the mySharedFunction', () => {
  //   // const shared = new SharedService();
  //   const shared = jasmine.createSpyObj('SharedService', ['mySharedFunction']);
  //   const calc = new CalcService(shared);
  //   // spyOn(shared, 'mySharedFunction');
  //   // spyOn(shared, 'mySharedFunction').and.callThrough();
  //   const result = calc.multiply(3, 5);
  //   // expect(shared.mySharedFunction).toHaveBeenCalled();
  //   expect(result).toBe(15);
  // });
});
