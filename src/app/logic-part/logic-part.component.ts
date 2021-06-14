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

  coinData: coin[] = [{ht: "Head", count: 1}];
  count:any=1;

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
      const h="Head";
      const t="Tail";
      // const formData= new FormData;
      // formData.append("ht",this.form.controls.ht.value)
      // formData.append("count",count)
      // console.log("inside", formData);
      // if(this.coinData.lastIndexOf(this.coinData[this.coinData.length-1])){
        
      // }
      // if(this.coinData && this.coinData[this.coinData.length-1].ht == h){
      //   this.coinData.push(this.form.value)
      // }
      // if(this.coinData && this.coinData[(this.coinData.length-1)].ht == "Tail"){
      //   this.coinData.push(this.form.value)
      // }
      // if(this.coinData && this.coinData[(this.coinData.length-1)]){
        
      // }
      
      
      // console.log(this.coinData[this.coinData.length-1].ht,this.form.controls.ht.value);
      
      if(this.coinData[this.coinData.length-1].ht === this.form.controls.ht.value){
        
        let x = this.form.value;
        x['count']= this.count;
        // console.log(this.coinData)
        this.coinData.push(x);
        console.log(this.coinData);
      }else{
        this.count++;
        let x = this.form.value;
        x['count']= this.count;
        // console.log(this.coinData)
        this.coinData.push(x);
        console.log(this.coinData);
        // count--;
      }
    

      // this.coinData.push();

      // console.log(this.coinData[this.coinData.length-1]);
      // console.log("save in coin array", this.coinData);
      ///
      // let row = "<tr>"
      // row = row + "<td>" + this.form.value + "</td>";
      // row = row + "</tr>"
      ////

    }
  }

}
