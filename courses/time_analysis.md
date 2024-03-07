---
layout: page
title: Time Analysis
subtitle: Introduction to Time Analysis.
---

## 📋 Content
- [📋 Content](#-content)
- [📄 Description](#-description)
- [📣 Current announcements](#-current-announcements)
- [❗ Course requirements](#-course-requirements)
- [📒 Syllabus](#-syllabus)
- [📝 Theoretical basics](#-theoretical-basics)
  - [Medical signals file formats](#medical-signals-file-formats)
- [☝️ References](#️-references)


## 📄 Description
This directory contains a few basic notebooks to learn more about time analysis, like EEG or EMG.

By the end of these notebooks, you should feel more comfortable with:

- load and analyze medical time series, such as EEG, ECG and EMG
- ...


## 📣 Current announcements
This skill track is optional for the time being and is not part of the bootcamp. We still need to make some changes. But if you want to try out the skill track, feel free to do so!


## ❗ Course requirements
- you should have completed all previous skill tracks
- in this notebook we use data from open-source databases (the references are at the bottom of the page); in Google Colab the data is loaded automatically at the beginning of the notebook
- have a look at the theoretical basics before you start with the notebooks


## 📒 Syllabus
- Basic concepts of Time Analysis <a href="https://colab.research.google.com/github/University-Clinic-of-Neuroradiology/python-bootcamp/blob/main/notebooks/TimeAnalysis/01_introduction.ipynb"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a>
- Basic concepts of EEG Analysis <a href="https://colab.research.google.com/github/University-Clinic-of-Neuroradiology/python-bootcamp/blob/main/notebooks/TimeAnalysis/02_EEG.ipynb.ipynb"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a>
- Basic concepts of ECG Analysis <a href="https://colab.research.google.com/github/University-Clinic-of-Neuroradiology/python-bootcamp/blob/main/notebooks/TimeAnalysis/03_ECG.ipynb"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a>
- Basic concepts of EMG Analysis <a href="https://colab.research.google.com/github/University-Clinic-of-Neuroradiology/python-bootcamp/blob/main/notebooks/TimeAnalysis/04_EMG.ipynb"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a>


## 📝 Theoretical basics
For some information on the topic, take a look at the [slides](https://raw.githack.com/University-Clinic-of-Neuroradiology/python-bootcamp/main/notebooks/TimeAnalysis/slides/TimeAnalysis.slides.html#/).

### Medical signals file formats
| Signal Type | File Extension       | Origin                                         |
|-------------|----------------------|------------------------------------------------|
| EEG         | .fif                 | Fractal Image Format                           |  
|             | .edf                 | European data Format                           |
|             | .eeg                 | BrainVision                                    |
|             | .vhdr                | BrainVision                                    |
|             | .vmrk                | BrainVision                                    |      
|             | .bdf                 | BioSemi data Format                            |
|             | .gdf                 | General data Format                            |
|             | .cnt                 | Neuroscan CNT                                  |
|             | .egi                 | EGI simple binary                              |
|             | .mff                 | EGI MFF                                        |
|             | .set,.fdt            | EEGLAB files                                   |
|             | .data                | Nicolet                                        |
|             | .nxe                 | eXimia EEG data                                |
|             | .lay .dat            | Persyst EEG data                               |
|             | .eeg,.21e,.pnt,.log  | Nihon Kohden EEG data                          |
|             | .xdf,.xdfz           | XDF data                                       |
| ECG         | .qrs                 | Fractal Image Format                           |  
|             | .xws                 | European data Format                           |
|             | .dat,.hea            | Header (Analyze Software, Mayo Clinic)         |
| EMG         | .txt                 | Text                                           |  
|             | .mat,.hea            | Header (Analyze Software, Mayo Clinic)         |


## ☝️ References
In this skill track, you'll work with different Open-Source datasets:
- [Waveform Database Software Package (WFDB) for Python](https://physionet.org/content/wfdb-python/4.1.0/) [1]
- 

<a id="1">[1]</a>
Xie, C. et al. (2023),
Waveform Database Software Package (WFDB) for Python (version 4.1.0),
PhysioNet. https://doi.org/10.13026/9njx-6322