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
  - [Pandas](#pandas)
  - [Series and DataFrames](#series-and-dataframes)
  - [Medical data file formats](#medical-data-file-formats)
  - [Read CSV](#read-csv)
  - [Read JSON](#read-json)
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
- you should have understood the basic concepts of Python, otherwise have another look at the [Introductory](./python_basics.md) notebooks
- in this notebook we use data from open-source databases (the references are at the bottom of the page); in Google Colab the data is loaded automatically at the beginning of the notebook
- have a look at the theoretical basics before you start with the notebooks


## 📒 Syllabus
- Basic concepts of data management <a href="https://colab.research.google.com/github/University-Clinic-of-Neuroradiology/python-bootcamp/blob/main/notebooks/DataManagement/01_introduction.ipynb"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a>
- Basic concepts of loading file formats <a href="https://colab.research.google.com/github/University-Clinic-of-Neuroradiology/python-bootcamp/blob/main/notebooks/DataManagement/02_load_files.ipynb"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a>
- Data Analysis - Lung Deseases <a href="https://colab.research.google.com/github/University-Clinic-of-Neuroradiology/python-bootcamp/blob/main/notebooks/DataManagement/03_lung_deseases_dataAnalysis.ipynb"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a>
- Data Analysis - Sleep <a href="https://colab.research.google.com/github/University-Clinic-of-Neuroradiology/python-bootcamp/blob/main/notebooks/DataManagement/04_sleep_data_analysis.ipynb"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a>


## 📝 Theoretical basics
For some information on the topic, take a look at the [![Slides](https://img.shields.io/badge/Go%20to-slides-pink.svg)](https://raw.githack.com/University-Clinic-of-Neuroradiology/python-bootcamp/main/notebooks/DataManagement/slides/Datamanagement.slides.html#/).

### Pandas
`pandas` is a spreadsheet application for Python and offers user-friendly functions for data tables. Importing the `pandas` library gives IPython notebooks fast, flexible, and expressive data structures designed to make working with “relational” or “labeled” data both easy and intuitive.
<center>
<a title="BruceBlaus, CC BY 3.0 &lt;https://creativecommons.org/licenses/by/3.0&gt;, via Wikimedia Commons" href="https://pandas.pydata.org/docs/getting_started/intro_tutorials/02_read_write.html"><img height="512" alt="Data Types" src="https://pandas.pydata.org/docs/_images/02_io_readwrite.svg"></a>

</center>

### Series and DataFrames
The primary two components of pandas are the `Series` and `DataFrame`.

A `Series` is essentially a column, and a `DataFrame` is a multi-dimensional table made up of a collection of `Series`.

A Pandas `DataFrame` is a two-dimensional, labeled data structure within the Pandas library for Python. Resembling a table or spreadsheet, it consists of rows and columns, where each column can hold different data types (numeric, string, boolean, etc.). The `DataFrame` provides powerful tools for data manipulation, cleaning, analysis, and exploration. It allows for easy indexing, slicing, merging, reshaping, and aggregating data, making it a versatile and fundamental tool in data science and analysis workflows.

A Pandas `Series` is a one-dimensional labeled array capable of holding various data types (integers, strings, floats, etc.) in a tabular form. It resembles a column in a spreadsheet or a simple array/list with associated index labels for each element.

### Medical data file formats

| Format Name | File Extension | Origin                                         |
|-------------|----------------|------------------------------------------------|
| XML         | .xml           | Extensible Markup Language                     |
| RD          | .rd            | R Documentation                                |
| EDF         | .edf           | European Data Format                           |
| BDF         | .bdf           | BioSemi Data Format                            |
| CSV         | .csv           | Comma Separated Values                         |
| XLSX        | .xlsx          | Microsoft Excel Spreadsheet                    |

### Read CSV
The `pandas.read_csv()` function is a versatile tool in the Pandas library used to read and load data from a CSV (Comma-Separated Values) file into a Pandas `DataFrame`. It offers a simple and efficient way to import data by specifying the file path or URL. This function supports a wide range of parameters to handle various CSV file formats, handle missing or malformed data, specify delimiters, and customize data types.
```python
import pandas as pd

csv2df = pd.read_csv('/Data/data.csv')
```

### Read JSON
The `pandas.read_json()` function within the Pandas library is designed to efficiently read and load JSON (JavaScript Object Notation) data into a Pandas `DataFrame`. It provides a straightforward method to ingest JSON data from a file, string, or URL and convert it into a structured Dat`DataFrame`aFrame format. This function supports various options for handling JSON data with different structures, including nested objects and arrays.
```python
import pandas as pd

json2df = pd.read_json('/Data/data.json') 
```


## ☝️ References
In this skill track, you'll work with different Open-Source datasets:

- Chest X-Ray [CXR8](https://nihcc.app.box.com/v/ChestXray-NIHCC) [1]
- Sleep EEG [UCI](http://kdd.ics.uci.edu/databases/eeg/eeg.html)

<a id="1">[1]</a> 
Wang, Xiaosong, et al. (2017),
Chestx-ray8: Hospital-scale chest x-ray database and benchmarks on weakly-supervised classification and localization of common thorax diseases,
Proceedings of the IEEE conference on computer vision and pattern recognition.