import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor() {
    this.testMe();
  }

  public testMe(): void {
    this.execute(true).then(answer => {
      console.log(`Execution result: ${answer}`);
      return answer;
    });
  }

  private async execute(ready: boolean): Promise<String> {
    var result: String;

    result = new String('Not assigned');

    if (ready) {
      var v1 = await this.future('start');

      var v2 = await this.future('end');

      if (v1 && v2) result = `v1 = ${v1} and v2 = ${v2}`;
    }

    return result;
  }

  private async future(input: String): Promise<String> {
    return `Future is ${input}.`;
  }
}
