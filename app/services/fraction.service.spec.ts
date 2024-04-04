import { TestBed } from '@angular/core/testing';
import { FractionService } from './fraction.service';

describe('FractionService', () => {
  let service: FractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FractionService]
    });
    service = TestBed.inject(FractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add fractions correctly', () => {
    const result = service.calculateFractions(1, 2, 1, 3, 'add');
    expect(result.numerator).toBe(5);
    expect(result.denominator).toBe(6);
  });

  it('should subtract fractions correctly', () => {
    const result = service.calculateFractions(3, 4, 1, 4, 'subtract');
    expect(result.numerator).toBe(1);
    expect(result.denominator).toBe(2);
  });

  it('should multiply fractions correctly', () => {
    const result = service.calculateFractions(2, 3, 3, 5, 'multiply');
    expect(result.numerator).toBe(2);
    expect(result.denominator).toBe(5);
  });

  it('should divide fractions correctly', () => {
    const result = service.calculateFractions(2, 3, 3, 4, 'divide');
    expect(result.numerator).toBe(8);
    expect(result.denominator).toBe(9);
  });
});


