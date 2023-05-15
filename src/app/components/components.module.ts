import { NgModule } from "@angular/core";
import { components } from "./components";
import { CommonModule } from "@angular/common";

@NgModule(
    {
        declarations: [...components],
        imports: [CommonModule],
        exports: [...components],
    }
)
export class ComponentsModule { }
