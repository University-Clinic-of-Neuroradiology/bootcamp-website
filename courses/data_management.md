---
layout: page
title: Data Management
subtitle: Introduction to Data Management.
---

## 📋 Content
- [📋 Content](#-content)
- [📄 Description](#-description)
- [📣 Current announcements](#-current-announcements)
- [❗ Course requirements](#-course-requirements)
- [📒 Syllabus](#-syllabus)
- [📝 Theoretical basics](#-theoretical-basics)
- [☝️ References](#️-references)


## 📄 Description
This directory contains a few basic notebooks to learn wo work with databases and how to manage and analyse these.

By the end of these notebooks, you should feel more comfortable with:
- feel more confident in dealing with Pandas
- have a basic understanding of data processing and editing
- process medical data sets and extract important information


## 📣 Current announcements
In this skill track, the notebooks build on each other. Therefore, complete them in the order given!


## ❗ Course requirements
This workshop is intended for learners who have a basic understanding of working with Python like:
- Variables, data types, functions
- Loops, comditionals

Please note:
- you should have understood the basic concepts of Python, otherwise have another look at the [Introductory](./python_basics.md) notebooks
- in this notebook we use data from open-source databases (the references are at the bottom of the page); in Google Colab the data is loaded automatically at the beginning of the notebook
- have a look at the theoretical basics before you start with the notebooks


## 📒 Syllabus
- Basic concepts of data management <a href="https://colab.research.google.com/github/University-Clinic-of-Neuroradiology/python-bootcamp/blob/main/notebooks/DataManagement/01_introduction.ipynb"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a>
- Basic concepts of loading file formats <a href="https://colab.research.google.com/github/University-Clinic-of-Neuroradiology/python-bootcamp/blob/main/notebooks/DataManagement/02_load_files.ipynb"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a>
- Data Analysis - Lung Deseases <a href="https://colab.research.google.com/github/University-Clinic-of-Neuroradiology/python-bootcamp/blob/main/notebooks/DataManagement/03_lung_deseases_dataAnalysis.ipynb"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a>
- Data Analysis - Sleep <a href="https://colab.research.google.com/github/University-Clinic-of-Neuroradiology/python-bootcamp/blob/main/notebooks/DataManagement/04_sleep_data_analysis.ipynb"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a>


## 📝 Theoretical basics
For some information on the topic, take a look at some [Basics](./theoretical_basics/data_management.md).


## ☝️ References
In this skill track, you'll work with different Open-Source datasets:

- Chest X-Ray [CXR8](https://nihcc.app.box.com/v/ChestXray-NIHCC) [1]
- Sleep EEG [Paper](https://ieeexplore.ieee.org/document/867928/references#references) [2]
- Sleep EEG [UCI](http://kdd.ics.uci.edu/databases/eeg/eeg.html)

<a id="1">[1]</a> 
Wang, Xiaosong, et al. (2017),
Chestx-ray8: Hospital-scale chest x-ray database and benchmarks on weakly-supervised classification and localization of common thorax diseases,
Proceedings of the IEEE conference on computer vision and pattern recognition.

<a id="2">[2]</a> 
Kemp, B., et al. (2000),
Analysis of a sleep-dependent neuronal feedback loop: the slow-wave microcontinuity of the EEG,
IEEE Transactions on Biomedical Engineering.