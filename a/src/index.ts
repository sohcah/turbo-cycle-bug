import { ProjectBType } from "project-b";

export type ProjectAType = "A";

// Function using Type from Project B
function bFunction(b: ProjectBType) {
  console.log(b);
}
bFunction("B");
