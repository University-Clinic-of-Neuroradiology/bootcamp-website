---
layout: page
title: Overview
subtitle: Overview of the Bootcamp courses 
---

## 📋 Content
- [📋 Content](#-content)
- [📄 Description](#-description)
- [📣 Current announcements](#-current-announcements)
- [❗ Course requirements](#-course-requirements)
- [📋 Syllabus](#-syllabus)
- [🚩 Project](#-project)
- [❓ Feedback](#-feedback)
- [🙏 Credits](#-credits)


## 📄 Description
Introductory course into the Python programming language. The course is condensed to the minimum requirements for the use of Python in medical data analysis. This is the preliminary course to the ....


## 📣 Current announcements
We would like to introduce you to our first version of the Python Bootcamp. The content is certainly not yet perfect and will be improved and expanded by us in the future. We are always happy to receive feedback, so please get in touch if you have any ideas, requests or suggestions, or if you spot a bug.


## ❗ Course requirements
- a laptop or desktop computer (no specific requirements except an internet connection)
- during the course, please visit this website OR the GitHub repository to stay up to date.

{: .box-note}
**Note**: Before the course starts, please make sure, that Google Colab is working on your device. We can not provide installation or technical assistance during the course for each participant. Please, ensure before the beginning of the course, that you can access the online compiler of your choice (e.g., create a Google account) and that you know how to operate it (again, during the course we can not provide installation or technical assistance for each participant).


## 📋 Syllabus
We recommend the following sequence of skill tracks:
1. [Introductory](./python_basics.md)
2. [DICOM](./dicom.md)
3. [Image Analysis](./image_analysis.md)
4. [Data Management](./data_management.md)
5. [DeepLearning](./deep_learning.md)

So we offer also an optional skill track, what else you can do: [Time Analysis](./time_analysis.md)

---

{: .box-note}
**Note**: The chapters are available as Jupyter notebooks on <a href="https://github.com/University-Clinic-of-Neuroradiology/python-bootcamp/main"><img src="https://img.shields.io/badge/Go%20to-GitHub-green.svg" alt="Generic badge" /></a>, which can also be opened on <a href="https://colab.research.google.com/github/University-Clinic-of-Neuroradiology/python-bootcamp/blob/main"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a>.


## 🚩 Project

**This service is initially only available to students of the OvGU Magdeburg. We are planning to expand it at a later date. Please note the news/posts on our website.**

Once you have completed all the skill tracks, a final project is prepared. In this project, you will work on a problem set by us. To do this, you should have understood all the content you have already completed, otherwise you will repeat the corresponding notebooks.

After completing the project, you can send us your solution by e-mail. You will then receive feedback after you have checked it.

Click here for the project: [Project](./project.md).

{% include trinket-open type='python' %}
import turtle

tina = turtle.Turtle()

for c in ['red', 'green', 'yellow', 'blue']:
    tina.color(c)
    tina.forward(75)
    tina.left(90)

tina.penup()
tina.backward(100)
tina.write("Hello world!")
{% include trinket-close %}


## ❓ Feedback
Please take part in the following surveys:
- Pre-survey (What are your expectations? ...) [![Feedback](https://img.shields.io/badge/Feedback-red.svg)](https://forms.gle/yb4ALTYZNqP9iMYMA)
- Final survey (Were your expectations met? What did you learn? ...) [![Feedback](https://img.shields.io/badge/Feedback-red.svg)](https://forms.gle/1CAPNZQUXqmMaQYr6)


## 🙏 Credits
This course material is under [![License](https://img.shields.io/badge/license-Apache%202.0-green.svg)](https://opensource.org/licenses/Apache-2.0).
