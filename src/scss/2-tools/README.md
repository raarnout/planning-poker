# Tools
This layer contains all the SASS functions and mixins

## get-z-index
A Sass functionn which returns the z-index of an element.

* When get-z-index is called with a param, we will try to find the element in the '$z-index-order' map and return the index.
* When called without a param, the function will try to get the '&'-element, which is a reference to the element where the function is used in.
