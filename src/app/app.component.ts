import { SourceMapGenerator } from '@angular/compiler/src/output/source_map';
import { Component } from '@angular/core';

@Component(
  {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent 
{
  input:string="";
  result:string = "";
  value:number = 0;
  errorMsg:string="";
  inputs: string[] = [];
  operators = ['*','/','+','-']; 
  constructor() {

   }

   clickEvent(type:string)
   {
		if(type == 'c'){this.Clear();}
		else if(type == 'x'){this.SetInputTo(this.input.substring(0, this.input.length -1))}
		else if(type == '='){this.CalculateResult()}
		else{this.AddToInput(type)}
    }


	AddToInput(t:string)
	{
		if(t == '.' && this.input.slice(-1) == '.')
		{
			return
		}
		else if(t == '.' && this.input.substring(this.input.length - 1, 1) == '.')
		{
			return
		}
		else if(t == '0' && this.input.length == 0)
		{
			this.input += t + '.';
			return
		}
		else if(t == '.' && this.input.length == 0)
		{
			this.input += '0' + t;
			return
		}
		else if(t == '0' && this.input.length == 1 && this.input.substring(this.input.length-1) == '0')
		{
			return
		}
		else if(t == '0' && this.input.length > 1 && this.input.substring(this.input.length-1) == '/')
		{
			return
		}
		else if(t == '0' && this.input.length > 2 && this.input.substring(this.input.length-1) == '/')
		{
			return
		}
		else
		{
			this.input += t;
		}




	}

	SetInputTo(t:string)
	{
		this.input = t;
	}

	SetResultTo(t:string)
	{
		this.result = t;
		
	}

	SetErrorMsgTo(t:string)
	{
		this.errorMsg = t;
	}

	Clear()
	{
		this.input = "";
		this.result = "";
	}

	CalculateResult()
	{
		this.SetResultTo(eval(this.input))
	}
}