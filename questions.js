const questionBank = {
  html: [
    {
      num: 1,
      ques: "Which HTML tag is used to create a hyperlink?",
      options: ["&lt;link&gt;", "&lt;a&gt;", "&lt;href&gt;", "&lt;url&gt;"],
      ans: 1
    },
    {
      num: 2,
      ques: "Which attribute is used to provide an alternate text for an image?",
      options: ["title", "alt", "src", "longdesc"],
      ans: 1
    },
    {
      num: 3,
      ques: "Which tag is used to define an unordered list?",
      options: ["&lt;ol&gt;", "&lt;ul&gt;", "&lt;li&gt;", "&lt;list&gt;"],
      ans: 1
    },
    {
      num: 4,
      ques: "What does &lt;br&gt; tag represent?",
      options: ["Break line", "Bold", "Border", "Background"],
      ans: 0
    },
    {
      num: 5,
      ques: "Which tag is used to define the largest heading?",
      options: ["&lt;h6&gt;", "&lt;head&gt;", "&lt;h1&gt;", "&lt;heading&gt;"],
      ans: 2
    }
  ],
  css: [
    {
      num: 1,
      ques: "Which property is used to change the text color in CSS?",
      options: ["font-color", "text-color", "color", "background-color"],
      ans: 2
    },
    {
      num: 2,
      ques: "Which CSS property controls the text size?",
      options: ["font-size", "text-style", "text-size", "font-weight"],
      ans: 0
    },
    {
      num: 3,
      ques: "Which is the correct CSS syntax?",
      options: ["{body;color:black;}", "body:color=black;", "body {color: black;}", "{body:color=black;}"],
      ans: 2
    },
    {
      num: 4,
      ques: "Which property is used to set background color?",
      options: ["background", "bgcolor", "color", "background-color"],
      ans: 3
    },
    {
      num: 5,
      ques: "Which CSS position value makes an element fixed on the screen?",
      options: ["absolute", "sticky", "fixed", "relative"],
      ans: 2
    }
  ],
  js: [
    {
      num: 1,
      ques: "Which symbol is used for single-line comments in JavaScript?",
      options: ["//", "/*", "#", "&lt;!-- --&gt;"],
      ans: 0
    },
    {
      num: 2,
      ques: "Which function is used to print in the console?",
      options: ["console.write()", "print()", "log.console()", "console.log()"],
      ans: 3
    },
    {
      num: 3,
      ques: "How do you declare a variable in JavaScript?",
      options: ["var", "let", "const", "All of the above"],
      ans: 3
    },
    {
      num: 4,
      ques: "Which operator is used to compare both value and type?",
      options: ["==", "===", "=", "!="],
      ans: 1
    },
    {
      num: 5,
      ques: "Which keyword is used to define a function in JavaScript?",
      options: ["method", "func", "function", "def"],
      ans: 2
    }
  ],
  frontend: [
    {
      num: 1,
      ques: "Which HTML attribute is used to provide an alternative text for images?",
      options: ["title", "alt", "src", "description"],
      ans: 1
    },
    {
      num: 2,
      ques: "Which CSS property is used to control the stacking order of elements?",
      options: ["display", "visibility", "z-index", "position"],
      ans: 2
    },
    {
      num: 3,
      ques: "In JavaScript, which method is used to select an element with a specific ID?",
      options: ["document.querySelector()", "document.getElementsByClassName()", "document.getElementById()", "document.getElementsByTagName()"],
      ans: 2
    },
    {
      num: 4,
      ques: "Which HTTP status code indicates a successful request?",
      options: ["200", "301", "404", "500"],
      ans: 0
    },
    {
      num: 5,
      ques: "Which frontend framework uses JSX syntax?",
      options: ["Angular", "Vue.js", "React", "Svelte"],
      ans: 2
    }
  ],
  java: [
    {
      num: 1,
      ques: "Which keyword is used to define a class in Java?",
      options: ["class", "Class", "define", "struct"],
      ans: 0
    },
    {
      num: 2,
      ques: "Which method is the entry point of a Java program?",
      options: ["main()", "start()", "run()", "execute()"],
      ans: 0
    },
    {
      num: 3,
      ques: "Which data type is used to store decimal numbers in Java?",
      options: ["int", "float", "char", "boolean"],
      ans: 1
    },
    {
      num: 4,
      ques: "Which keyword is used to inherit a class?",
      options: ["super", "inherits", "extends", "this"],
      ans: 2
    },
    {
      num: 5,
      ques: "Which package is imported by default in every Java program?",
      options: ["java.io", "java.lang", "java.util", "None"],
      ans: 1
    }
  ],
  python: [
    {
      num: 1,
      ques: "Which function is used to output data in Python?",
      options: ["echo()", "console.log()", "print()", "write()"],
      ans: 2
    },
    {
      num: 2,
      ques: "Which symbol is used for comments in Python?",
      options: ["//", "#", "/*", "&lt;!-- --&gt;"],
      ans: 1
    },
    {
      num: 3,
      ques: "Which data type is used to store True/False values?",
      options: ["int", "bool", "str", "float"],
      ans: 1
    },
    {
      num: 4,
      ques: "Which keyword is used to define a function in Python?",
      options: ["function", "func", "def", "lambda"],
      ans: 2
    },
    {
      num: 5,
      ques: "Which operator is used for exponentiation in Python?",
      options: ["^", "**", "exp()", "pow()"],
      ans: 1
    }
  ],
  C: [
     {
    num: 1,
    ques: "Which of the following is a valid C data type?",
    options: ["string", "char", "boolean", "var"],
    ans: 1
  },
  {
    num: 2,
    ques: "What is the default return type of the 'main' function in C?",
    options: ["int", "void", "char", "float"],
    ans: 0
  },
  {
    num: 3,
    ques: "Which symbol is used to denote a single-line comment in C?",
    options: ["//", "#", "/* */", "--"],
    ans: 0
  },
  {
    num: 4,
    ques: "Which operator is used to access the value at the address stored in a pointer?",
    options: ["&", "*", "->", "%"],
    ans: 1
  },
  {
    num: 5,
    ques: "Which of the following functions is used to print output in C?",
    options: ["printf()", "cout", "print()", "System.out.print()"],
    ans: 0
  }
  ],
  DSA: [
    {
    num: 1,
    ques: "In Java, which keyword is used to inherit a class?",
    options: ["this", "super", "extends", "implements"],
    ans: 2
  },
  {
    num: 2,
    ques: "In Python, what will be the output of: print(2 ** 3)?",
    options: ["6", "8", "9", "Error"],
    ans: 1
  },
  {
    num: 3,
    ques: "In C, what is the size of an int on most 32-bit systems?",
    options: ["2 bytes", "4 bytes", "8 bytes", "Depends on compiler"],
    ans: 1
  },
  {
    num: 4,
    ques: "Which data structure is best for implementing recursion?",
    options: ["Queue", "Array", "Stack", "Linked List"],
    ans: 2
  },
  {
    num: 5,
    ques: "In Java, which collection class does not allow duplicate elements?",
    options: ["List", "Set", "Map", "ArrayList"],
    ans: 1
  }
  ], 
  coding: [
    {
    num: 1,
    ques: `Java Code:
int x = 5;
System.out.println(x++ + ++x);
What will be the output?`,
    options: ["10", "11", "12", "13"],
    ans: 2
  },
  {
    num: 2,
    ques: `Python Code:
list1 = [1, 2, 3]
list2 = list1
list2.append(4)
print(list1)
What will be printed?`,
    options: ["[1, 2, 3]", "[1, 2, 3, 4]", "[4]", "Error"],
    ans: 1
  },
  {
    num: 3,
    ques: `C Code:
#include <stdio.h>
int main() {
    int a = 10, b = 20;
    printf("%d", a > b ? a : b);
    return 0;
}
What will be the output?`,
    options: ["10", "20", "0", "Error"],
    ans: 1
  },
  {
    num: 4,
    ques: `Python Code:
def fact(n):
    return 1 if n==0 else n*fact(n-1)

print(fact(4))
What will be the output?`,
    options: ["4", "12", "24", "Error"],
    ans: 2
  },
  {
    num: 5,
    ques: `Java Code:
String s1 = "hello";
String s2 = "hello";
System.out.println(s1 == s2);
What will be the output?`,
    options: ["true", "false", "Error", "null"],
    ans: 0
  }
  ]
};
