import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';

export interface coin {
  ht: string,
  count:number
}
@Component({
  selector: 'app-logic-part',
  templateUrl: './logic-part.component.html',
  styleUrls: ['./logic-part.component.css']
})
export class LogicPartComponent implements OnInit {

  coinData: coin[] = [];
  count:any=1;
  loopCounter:number[]=[]

  // data:any=[
  //           ["a","a","a"],
  //           ["a","b"," "],
  //           ["a"," "," "]
  //         ]
  form!: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      ht: ['', [Validators.required]]
    });
  }

  get f() {
    return this.form.controls;
  }
  public element!: string;
  submit() {
    if (this.form.valid) {
      if( this.coinData[this.coinData.length-1]?.ht === this.form.controls.ht.value){
        let x = this.form.value;
        x['count']= this.count;
        this.coinData.push(x);
        console.log(this.coinData);
      }else{
        this.count++;
        let x = this.form.value;
        x['count']= this.count;
        this.coinData.push(x);
        console.log(this.coinData);
      }
    
      let k:number[] = this.coinData.map(e=>e.count);
       this.loopCounter = k.filter((e,i)=>k.indexOf(e) === i);
    }
  }

}
