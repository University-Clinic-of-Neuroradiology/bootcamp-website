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
  - [What is pandas used for?](#what-is-pandas-used-for)
  - [Where to find help?](#where-to-find-help)
  - [How to get pandas?](#how-to-get-pandas)
  - [Series and DataFrames](#series-and-dataframes)
    - [Creating a Series](#creating-a-series)
    - [Extra Information](#extra-information)
  - [Crating Dataframes](#crating-dataframes)
    - [Turn around](#turn-around)
  - [Medical data file formats](#medical-data-file-formats)
  - [Read CSV](#read-csv)
  - [Read JSON](#read-json)
  - [What is data preprocessing?](#what-is-data-preprocessing)
  - [Working with data types](#working-with-data-types)
  - [Exploring data types](#exploring-data-types)
  - [Converting a column type](#converting-a-column-type)
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
For some information on the topic, take a look at the [![Slides](https://img.shields.io/badge/Go%20to-slides-pink.svg)](https://raw.githack.com/University-Clinic-of-Neuroradiology/python-bootcamp/main/notebooks/DataManagement/slides/Datamanagement.slides.html#/).

### Pandas
`pandas` is a spreadsheet application for Python and offers user-friendly functions for data tables. Importing the `pandas` library gives IPython notebooks fast, flexible, and expressive data structures designed to make working with “relational” or “labeled” data both easy and intuitive.
<center>
<a title="BruceBlaus, CC BY 3.0 &lt;https://creativecommons.org/licenses/by/3.0&gt;, via Wikimedia Commons" href="https://pandas.pydata.org/docs/getting_started/intro_tutorials/02_read_write.html"><img height="512" alt="Data Types" src="https://pandas.pydata.org/docs/_images/02_io_readwrite.svg"></a>

</center>

`pandas` ia a framework - i.e. a collection of functionality, not a program on its own. It is based on the numerical mathmatics framework `numpy`.

While `numpy` is more directed to highly optimized numeric calculations, `pandas` offers additional convenience and utility for dealing with tabular data. In turn, it sacrifices some processing speed.

### What is pandas used for?
Its main application cases is data processing. This includes: Reading, exploring, cleaning, transforming and visualizing data.

Common areas that make use of it are:
- Data Science
- Machine Learning

### Where to find help?
Here you will find all the necessary information about `pandas` and their functionalities: [Official Documentation](https://pandas.pydata.org/docs/).

{: .box-success}
**Key Points**: - pandas is a data processing framework based on numpy
                - It offers additional utility functions but sacrifices speed

### How to get pandas?
It can be installed via `pip` (c.f. pandas on pypi.org). Make sure that the dependencies are installed as well.

### Series and DataFrames
The primary two components of pandas are the `Series` and `DataFrame`.

A `Series` is essentially a column, and a `DataFrame` is a multi-dimensional table made up of a collection of `Series`.

A Pandas `DataFrame` is a two-dimensional, labeled data structure within the Pandas library for Python. Resembling a table or spreadsheet, it consists of rows and columns, where each column can hold different data types (numeric, string, boolean, etc.). The `DataFrame` provides powerful tools for data manipulation, cleaning, analysis, and exploration. It allows for easy indexing, slicing, merging, reshaping, and aggregating data, making it a versatile and fundamental tool in data science and analysis workflows.

A Pandas `Series` is a one-dimensional labeled array capable of holding various data types (integers, strings, floats, etc.) in a tabular form. It resembles a column in a spreadsheet or a simple array/list with associated index labels for each element.

#### Creating a Series
There are different ways we can add data to a Series. We start out with a simple list:
```python
from pandas import Series  # Note the initial upper-case letter

sneeze_counts = Series(data=[32, 41, 56, 62, 30, 22, 17])
print(sneeze_counts)
```
```bash
0    32
1    41
2    56
3    62
4    30
5    22
6    17
dtype: int64
```
{: .box-note}
**Note**: Note that the Series automatically adds an index on the left side. It also automatically infers the best fitting data type for the elements (here `int64` = 64-bit integer). `pandas` introduces the series as a new data type (like `int`, `str` and all the others) and as such the value of `sneeze_counts` is actually the whole series at once.

#### Extra Information
To make the data a bit more meaningful, let’s set a custom index:
```python
days_of_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
sneeze_counts.index = days_of_week
print(sneeze_counts)
```
```bash
Monday       32
Tuesday      41
Wednesday    56
Thursday     62
Friday       30
Saturday     22
Sunday       17
dtype: int64
```
Also, we add a name to the series, so we can distinguish it later:
```python
sneeze_counts.name = "Sneezes"
```

Alternatively you can provide the index while creating the series by passing a dictionary:
```python
sneeze_counts = Series(
    data= {
        "Monday": 32,
        "Tuesday": 41,
        "Wednesday": 56,
        "Thursday": 62,
        "Friday": 30,
        "Saturday": 22,
        "Sunday": 17
    },
    name="Sneezes"
)
```

{: .box-success}
**Key Points**: - Series are a 1-dimensional data structure
                - You can use indices to label the data and a name to label the whole Series

### Crating Dataframes
A `dataframe` can be created from a list of `series`, where each `series` forms a row in the resulting table.
```python
from pandas import DataFrame  # Note the camel-case spelling

measurements = DataFrame(data=[sneeze_counts, temperatures, humidities])
print(measurements)
```
```bash
             Monday  Tuesday  Wednesday  Thursday  Friday  Saturday  Sunday
Sneezes        32.0     41.0       56.0      62.0    30.0      22.0    17.0
Temperature    10.9      8.2        7.6       7.8     9.4      11.1    12.4
Humidity       62.5     76.3       82.4      98.2    77.4      58.9    41.2
```
A dataframe can also be created from a dictionary of series where each series forms a column in the resulting table.
```python
measurements = DataFrame(
  data={
    sneeze_counts.name: sneeze_counts,
    temperatures.name: temperatures,
    humidities.name: humidities
  }
)
print(measurements)
```
```bash
           Sneezes  Temperature  Humidity
Monday          32         10.9      62.5
Tuesday         41          8.2      76.3
Wednesday       56          7.6      82.4
Thursday        62          7.8      98.2
Friday          30          9.4      77.4
Saturday        22         11.1      58.9
Sunday          17         12.4      41.2
```

#### Turn around
To flip rows and columns, `dataframes` can be transposed using the `T`-property:
```python
column_wise = DataFrame(data=temperatures)
row_wise = column_wise.T

print(column_wise)
print()  # Add a blank line as separator
print(row_wise)
```
```bash
           Temperature
Monday            10.9
Tuesday            8.2
Wednesday          7.6
Thursday           7.8
Friday             9.4
Saturday          11.1
Sunday            12.4

             Monday  Tuesday  Wednesday  Thursday  Friday  Saturday  Sunday
Temperature    10.9      8.2        7.6       7.8     9.4      11.1    12.4
```
Don’t forget to store the transposed dataframe in a new variable (or overwrite the old one), as the original will not be changed by the transposition.

{: .box-success}
**Key Points**: - Dataframes represent 2-dimensional (tabular) data
                - Each column in a dataframe is a series
                - Dataframes have row and column indices
                - Dataframes may be transposed to switch rows and columns

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

### What is data preprocessing?
Data processing refers to several steps:
- Beyond cleaning and exploratory data analysis
- Prepping data for modeling
- Modeling in python requires numerical input

### Working with data types
There are different dtypes in pandas:
- `object`: string/mixed types
- `int64`: integer
- `float64`: float
- `datetime64`: datetime

### Exploring data types
We want to know what types we'll be working with as we start to do more preprocessing:
```python
df = pd.read_csv('/dataset/brain_volumes.csv')

print(df.dtypes)
```
```bash
patient_id          object
brain_vol           object
```

### Converting a column type
If you take a look at the dataset types, you'll see that the column `brain_vol` is type `object`. But, if you actually look at the column, you'll see that it consists of integers. Let's convert that column to type `int`.
```python
# Convert the brain_vol column to type int
df['brain_vol'] = df['brain_vol'].astype(int)

# Look at the dtypes of the dataset
print(df.dtypes)
```


## ☝️ References
In this skill track, you'll work with different Open-Source datasets:

- Chest X-Ray [CXR8](https://nihcc.app.box.com/v/ChestXray-NIHCC) [1]
- Sleep EEG [UCI](http://kdd.ics.uci.edu/databases/eeg/eeg.html)

<a id="1">[1]</a> 
Wang, Xiaosong, et al. (2017),
Chestx-ray8: Hospital-scale chest x-ray database and benchmarks on weakly-supervised classification and localization of common thorax diseases,
Proceedings of the IEEE conference on computer vision and pattern recognition.