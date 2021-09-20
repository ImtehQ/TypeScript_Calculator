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
  constructor() {

   }

   clickEvent(type:string)
   {
		if(type == 'c')
		{
			this.Clear();
        }
		else if(type == 'x')
        {
			this.SetInputTo(this.input.substring(0, this.input.length -1))
        }
        else if(type == '=')
        {
			this.SetResultTo(eval(this.input))
        }
		else if (type == '.')
		{
			if(this.input.length == 0)
			{
				this.AddToInput('0' + type)
			}
			if(this.input.includes('.') == false)
			{
				this.AddToInput(type)
			}
		}
		else if (type == '0')
		{
			if(this.input.length == 1)
			{
				if(this.input[0] == '0'){}
				else{
					this.AddToInput(type)
				}
			}

			if(this.input.length == 0)
			{
				this.AddToInput(type)
			}
			if(this.input.length > 1)
			{
				this.AddToInput(type)
			}
		}
        else
        {
        	this.AddToInput(type)
        }
		if(this.input.includes('/0'))
		{
			this.SetErrorMsgTo('Cannot divide by zero')
		}
		else
		{
			this.SetErrorMsgTo('')
		}
    }

	AddToInput(t:string)
	{
		this.input += t;
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
}