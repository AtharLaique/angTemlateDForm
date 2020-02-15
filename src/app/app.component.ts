import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //pet is a one option of select dropdown
  defaultPet="pet"
  //Array of options for Radio buttons
  gender=['Male ' , 'Female']
  //Using this we can access the form before submit 
  @ViewChild('f', {static: true}) LoginForm:NgForm;
  suggestUserName() {
    const suggestedName = 'Superuser';
    /*
    # setValue() set the value of whole form.
    # Its take javascript object exactly representing
    # our form.
    */ 
  //  this.LoginForm.setValue({
  //    userData:{
  //      username:suggestedName,
  //      email:''
  //    },
  //    secret:'pet',
  //    gender:'Male'
  //  })
   /*
    # patchValue() set the value of attribute of the form.
    # Its take javascript object to over write the form value
    */
     this.LoginForm.form.patchValue({
       userData:{
         username:suggestedName
       }
     })
  }
  onSubmit()
  {
    console.log(this.LoginForm)
    //Rest the form values and their states
    this.LoginForm.reset()
    
  }
  // onSubmit (form:NgForm){
  //   //Difrente form state using ng Form
  //   //Form controles in our form
  //   console.log(form.controls)
  //   //Form Values 
  //   console.log(form.value)
  //   //dirty 
  //   console.log(form.dirty) //some thing changed about the form or not
  //   //Disabled
  //   console.log(form.enabled)  //if Form disabled then its true
  //   //invalid
  //   console.log(form.invalid) // if we putt some validator on the form then its true
  //   //valid
  //   console.log(form.valid) //if form valid
  //   //touched
  //   console.log(form.touched)// click on form or not
  // }
}
