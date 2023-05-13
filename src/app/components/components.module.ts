import { NgModule } from "@angular/core";
import { components } from "./components";

@NgModule(
    {
        declarations: [...components],
        imports: [],
        exports: [...components],
    }
)
export class ComponentsModule { }
