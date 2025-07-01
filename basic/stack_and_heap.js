// Stack memory(Primitive data types)

let vatsalya_marks=50;
let sailesh_marks=vatsalya_marks
console.table([vatsalya_marks, sailesh_marks]);
// IN this case, vatsalya and saliesh marks are same we give copy of data of variable vatsalya_marks to variable sailesh_marks.vatsalya_marks are separate from sailesh_marks.

// and we change the value of either sailesh or vatsalya both value will not change.

vatsalya_marks=100;// sailesh have already copy of data so it will not change.
console.table([vatsalya_marks, sailesh_marks]);

// Heap memory(Reference data types)

let vaibhab_marks={maths:50, science:60};
let sunil_marks=vaibhab_marks;
console.table([vaibhab_marks, sunil_marks]);
// In this case, vaibhab_marks and sunil_marks are pointing to the same object in memory.Means we both are referring to the same object.so changes made to one will reflect in the other.

sunil_marks.maths=100; // Now we change the value of sunil_marks.maths
console.table([vaibhab_marks, sunil_marks]);

// or if change the value of vaibhav science marks it will also change the value of sunil_marks science marks.

vaibhab_marks.science=80; // Now we change the value of vaibhab_marks.science
console.table([vaibhab_marks, sunil_marks]);

// same concept as call by reference and call by value in c++.