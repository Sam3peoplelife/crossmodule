import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FractionService } from 'src/app/services/fraction.service';
import { FractionResult } from 'src/app/models';

@Component({
  selector: 'app-fraction-input',
  templateUrl: './fraction-input.component.html',
  styleUrls: ['./fraction-input.component.scss']
})
export class FractionInputComponent {
  fractionForm: FormGroup;
  result!: FractionResult;

  constructor(private formBuilder: FormBuilder, private fractionService: FractionService) {
    this.fractionForm = this.formBuilder.group({
      numerator1: ['', Validators.required],
      denominator1: ['', Validators.required],
      numerator2: ['', Validators.required],
      denominator2: ['', Validators.required],
      operation: ['add', Validators.required] // значення "add" встановлене за замовчуванням
    });
  }

  onSubmit() {
    if (this.fractionForm.valid) {
      const { numerator1, denominator1, numerator2, denominator2, operation } = this.fractionForm.value;
      this.result = this.fractionService.calculateFractions(numerator1, denominator1, numerator2, denominator2, operation);
      console.log('Result:', this.result);
    }
  }  
}



