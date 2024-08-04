import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {

  name: string = "Rajeswar Guda"

  userId: number = 123;

  img_src: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDc55wdiqeWJrU_cW7qF4ikH_GrU_andtK-g&s";

  btnFlag: boolean = true;
  paragraphFlag: boolean = false;

  textAreaMsg: string = "";

  selectedState: string="Select State"


  onuserIdChanged(evt: any) {
    console.log(evt);
  }

  userIdChanged() {
    console.log(this.userId, 'second')
  }

  toggleButton() {
    this.btnFlag = !this.btnFlag;
  }

  changeDetails() {
    this.userId = 5678;
    this.name = "Aadya"
  }

  toggleParagraph() {
    this.paragraphFlag = !this.paragraphFlag;
  }

  add(a,b){
    alert(Number(a)+Number(b));
  }

}
