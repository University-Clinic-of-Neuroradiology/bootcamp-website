---
layout: page
title: Installation Guide
subtitle: This instruction contain documentation and links to get started with the Python Bootcamp.
---

## 📋 Content
- [📋 Content](#-content)
- [Start Here](#start-here)
- [Getting the Data](#getting-the-data)
- [Get started with the course](#get-started-with-the-course)
- [Appendix](#appendix)
  - [Python Basics](#python-basics)
  - [Jupyter notebook manipulations](#jupyter-notebook-manipulations)
  - [File extensions](#file-extensions)



## Start Here

We are using Python for the exercises. Python is an open-source interactive language. We provide Python scripts for the exercises, so you should be fine.
Nevertheless, it would be best to read also the Python tutorial first, see the [Appendix](#appendix).

We recommend using [Google Colab](https://colab.google/) as this is an easy way (without installation) to interact with the notebooks. Colab is a hosted Jupyter Notebook service that requires no setup to use and provides free access to computing resources, including GPUs. A Google Account is mandatory for the use of Google Colab!

As an alternative, we recommend [Jupyter notebooks](http://jupyter-notebook-beginner-guide.readthedocs.io/en/latest/what_is_jupyter.html).
If you have never used Jupyter notebooks, you should [read the official documentation](https://jupyter-notebook.readthedocs.io/en/stable/notebook.html).
A useful introduction to the notebook interface [can be found here](http://jupyter-notebook.readthedocs.io/en/stable/examples/Notebook/Notebook%20Basics.html).

**Warning:** these instructions are when using JupyterLab as opposed to the "classic" notebook interface. If you choose to use the classic interface, you will have to modify the notebooks marginally by replacing `%matplotlib widget` with `%matplotlib notebook`. See also the [iPython section](#ipython) below.


## Getting the Data

Some exercises use data that you will need.


## Get started with the course

All notebooks are located in several subdirectories, see [overview](../courses/bootcamp_overview.md). Each have a short introduction that you should read beforehand, as some notebooks have special requirements.

Start with the [Introductory](../courses/python_basics.md) skill track..

## Appendix

### Python Basics

Here is some suggested material on Python (ordered from easy to quite time-consuming).

-   The official Python tutorial. Just read Section 1, 3, a bit of 4 and a tiny bit of 6.
    <https://docs.python.org/2/tutorial/>

-   Examples for matplotlib, the python module that allows you to make plots almost like in MATLAB
    <https://github.com/patvarilly/dihub-python-for-data-scientists-2015/blob/master/notebooks/02_Matplotlib.ipynb>

-   You could read bits and pieces of Python the Hard Way
    <http://learnpythonthehardway.org/book/index.html>

-   Google has an online class on Python for those who know some programming.
    This goes quite in depth and covers 2 days.
    <https://developers.google.com/edu/python/?csw=1>


### Jupyter notebook manipulations

You will normally work by executing each *cell* bit by bit, and then editing it to do some more work. Useful shortcuts:

-   `LEFT-CTRL + <RETURN>` executes the current cell.
-   `SHIFT + <RETURN>` executes the current cell and advances the cursor to the next cell.
-   `TAB` tries to complete the word/command you have just typed.
-   `Enter` edits "edit" mode to change a cell, `Esc` exits "edit" mode to "command" mode.
-    In "command" mode, press `A` to create a new cell Above, or `B` below your current cell. You can also use `C`, `X`, `V`.
-    Other keyboard shortcuts:
     - When using Jupyter "classic" mode, pressing `H` in "command" mode gives you a useful list of shortcuts.
     - When using JupyterLab, you need to go to the Advanced Settings Editor item in the Settings menu, then select Keyboard Shortcuts in the Settings tab. You probably want to check the `notebook` category. See the [JupyterLab doc](https://jupyterlab.readthedocs.io/en/stable/user/interface.html#keyboard-shortcuts)/

Every open notebook has its own kernel. Closing a notebook tab does **not** stop its kernel.
Use the `File` menu ("classic": `Close and halt`, JupyterLab: `Close and shutdown notebook`).

***Warning:*** Clicking `Logout` will mean all sessions are closed and you will have to start again.


### File extensions

- `.dcm`: DICOM file
- `.nii` or `.nii.gz`: image files in Nifti format.
- `.py`: Python file
- `.ipynb`: jupyter notebook
- `.md`: text file with documentation (in Markdown format)