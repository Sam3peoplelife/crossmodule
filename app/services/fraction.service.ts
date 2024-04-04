import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FractionService {

  calculateFractions(numerator1: number, denominator1: number, numerator2: number, denominator2: number, operation: string): { numerator: number, denominator: number } {
    if (operation === 'add') {
      return this.addFractions(numerator1, denominator1, numerator2, denominator2);
    } else if (operation === 'subtract') {
      return this.subtractFractions(numerator1, denominator1, numerator2, denominator2);
    } else if (operation === 'multiply') {
      return this.multiplyFractions(numerator1, denominator1, numerator2, denominator2);
    } else if (operation === 'divide') {
      return this.divideFractions(numerator1, denominator1, numerator2, denominator2);
    } else {
      throw new Error('Invalid operation');
    }
  }

  private addFractions(numerator1: number, denominator1: number, numerator2: number, denominator2: number): { numerator: number, denominator: number } {
    const commonDenominator = this.leastCommonMultiple(denominator1, denominator2);
    const sumNumerator = (numerator1 * (commonDenominator / denominator1)) + (numerator2 * (commonDenominator / denominator2));
    return this.simplifyFraction(sumNumerator, commonDenominator);
  }

  private subtractFractions(numerator1: number, denominator1: number, numerator2: number, denominator2: number): { numerator: number, denominator: number } {
    const commonDenominator = this.leastCommonMultiple(denominator1, denominator2);
    const diffNumerator = (numerator1 * (commonDenominator / denominator1)) - (numerator2 * (commonDenominator / denominator2));
    return this.simplifyFraction(diffNumerator, commonDenominator);
  }

  private multiplyFractions(numerator1: number, denominator1: number, numerator2: number, denominator2: number): { numerator: number, denominator: number } {
    const productNumerator = numerator1 * numerator2;
    const productDenominator = denominator1 * denominator2;
    return this.simplifyFraction(productNumerator, productDenominator);
  }

  private divideFractions(numerator1: number, denominator1: number, numerator2: number, denominator2: number): { numerator: number, denominator: number } {
    const quotientNumerator = numerator1 * denominator2;
    const quotientDenominator = denominator1 * numerator2;
    return this.simplifyFraction(quotientNumerator, quotientDenominator);
  }

  private simplifyFraction(numerator: number, denominator: number): { numerator: number, denominator: number } {
    const gcd = this.greatestCommonDivisor(numerator, denominator);
    return {
      numerator: numerator / gcd,
      denominator: denominator / gcd
    };
  }

  private greatestCommonDivisor(a: number, b: number): number {
    return b === 0 ? a : this.greatestCommonDivisor(b, a % b);
  }

  private leastCommonMultiple(a: number, b: number): number {
    return (a * b) / this.greatestCommonDivisor(a, b);
  }
}


