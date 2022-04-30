import { ProjectAType } from "project-a";

export type ProjectBType = "B";

// Function using Type from Project A
function aFunction(b: ProjectAType) {
    console.log(b);
}
aFunction("A");
