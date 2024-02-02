---
layout: page
title: Introductory
subtitle: Introductory course into the Python programming language.
---

## 📋 Content
- [📋 Content](#-content)
- [📄 Description](#-description)
- [📣 Current announcements](#-current-announcements)
- [❗ Course requirements](#-course-requirements)
- [📒 Syllabus](#-syllabus)
- [📝 Theoretical basics](#-theoretical-basics)
  - [The print()-Function](#the-print-function)
  - [Variables](#variables)
  - [Data types](#data-types)
  - [Converting data types](#converting-data-types)
  - [Operators](#operators)
  - [Arithmetic operators](#arithmetic-operators)
  - [Assignment operators](#assignment-operators)


## 📄 Description
Introductory course into the Python programming language. The course is condensed to the minimum requirements for the use of Python in medical data analysis. This is the preliminary course to the ....

By the end of these notebooks, you should feel more comfortable with:
- Get a feel for Jupyter notebooks and the basic python variables and functions.
- You can read and write basic Python code.
- Read and use error output from exceptions.

Please give us feedback after you finished the skill track: [Feedback](https://forms.gle/oEtNoE6NVvW2CnM28).


## 📣 Current announcements
This directory contains a few basic notebooks to get you going. It is recommended to start with these before tackling any of the others.


## ❗ Course requirements
- more ...


## 📒 Syllabus
- Basic concepts of Python and Jupyter Notebooks <a href="https://colab.research.google.com/github/University-Clinic-of-Neuroradiology/python-bootcamp/blob/main/notebooks/Introductory/01.01-Getting-Started-with-Python-and-Jupyter-Notebooks.ipynb"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a>
- Basic concepts of Python Conditionals and Libraries <a href="https://colab.research.google.com/github/University-Clinic-of-Neuroradiology/python-bootcamp/blob/main/notebooks/Introductory/01.02-Python-Conditionals-and-Libraries.ipynb"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a>
- Basic concepts of Python Error Handling <a href="https://colab.research.google.com/github/University-Clinic-of-Neuroradiology/python-bootcamp/blob/main/notebooks/Introductory/01.03-Python-Error-Handling.ipynb"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a>


## 📝 Theoretical basics
For some information on the topic, take a look at the [slides](https://raw.githack.com/University-Clinic-of-Neuroradiology/python-bootcamp/main/notebooks/Introductory/slides/Introductory.slides.html#/).

Python is one of the most popular programming languages in the world. It is used for a wide variety of tasks, including data analysis. It has also become the language of choice for machine learning. 

### The print()-Function
One of the first things you will probably do is output (print). To write information, you can use the `print()` function and implement it as a core function. As it is a core function, you will automatically have access to it if Python is installed. To use `print()` in your program, use an argument:
```python
print('Hello World!')
```

### Variables
As one of the basics of programming, you need to know that you are processing data. Since your program works with data, you may need to remember a certain value while running the program. You use variables to do this.

In the following example, a variable is declared (saved) and then output:
```python
x = 5

print(x)
```

### Data types
A variable requires a data type. In the previous program, `x` assumes the type `int`. However, there are many other data types. Here are some basic examples that you are likely to come across:

| data type | descrition | example                                        |
|-------------|----------------|------------------------------------------------|
| Numerical type      | Number, with or without decimals           | `int, float, complex, no = 3`                            |
| Text type     | String     | `str = "a literal string"`                  |
| Boolean type       | Boolean          | `True, False, continue = True` |

You can use the `type()` function to determine the data type:
```python
a = 'Yeah, my name is ...'

print(type(a))
```

### Converting data types
Sometimes it makes sense to change the data type of a variable. This can be done as follows:
```python
a = '5'
b = int(a)

print(type(b))
```

### Operators
Operators allow you to perform various operations on variables and their values. In general, you have a left-hand side and a right-hand side and an operator in the middle:
```python
x = 10
y = 5

print(x + y)
```
Python uses two types of operators: arithmetic operators and assignments.

### Arithmetic operators
Arithmetic operators are used to perform calculations such as addition, subtraction, division and multiplication. Here are some of the arithmetic operators you can use:

| type | descrition | example                                        |
|-------------|----------------|------------------------------------------------|
| +      | Addition operator         | `1 + 1`                            |
| -      | Subtraction operator     | `2 - 1`                  |
| /      | Division operator         | `9 / 3` |
| *      | Multiplication operator         | `3 * 4` |

### Assignment operators
You can use assignment operators to assign values to a variable throughout its life cycle. Below you will find some assignment operators that you are likely to use when creating programs:

| type | example                     |
|-------------|----------------------|
| =       | `x = 2`                   |
| +=      | `x += 2` - x is increased by 2. If x previously contained "2", it now has the value "4".|
| -=      | `x -= 2` - x is decreased by 2. If x previously contained "2", it now has the value "0".|
| /=      | `x /= 2` - x is divided by 2. If x previously contained "2", it now has the value "1".|
| *=      | `x *= 2` - x is multiplicated by 2. If x previously contained "2", it now has the value "4".|


And here is the some code with syntax highlighting:
```python
def add(x,y):
    return x + y

print(add(2,4))
```