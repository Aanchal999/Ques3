import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-qthree',
  templateUrl: './qthree.component.html',
  styleUrls: ['./qthree.component.scss']
})
export class QthreeComponent implements OnInit {
  phaseForm: FormGroup;
  selectedValue: string;
  values: any = [];

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.phaseForm = this._fb.group({
      userName: [''],
      phaseExecutions: this._fb.group({
        PRE: this._fb.array([this.addPhase()])
      })
    });
    this.selectedValue = "";
  }

  addPhase() {
    return this._fb.group({
      phaseType: [''],
      phaseValue: ['']
    });
  }


  removevalue(i: number){
    this.values.remove(i,1);
  }



  addMorePhase() {
    this.phaseArray.push(this.addPhase());
  }

  onSubmit() {
    console.log(this.phaseForm.value);
  }

  get phaseArray() {
    const control = <FormArray>(<FormGroup>this.phaseForm.get('phaseExecutions')).get('PRE');
    return control;
  }

}
